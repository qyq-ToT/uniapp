<template>
	<view class="musicPlayRow">
		<view class="navHead">
			<view class="left">
				<image @click="navBack()" src="https://s1.ax1x.com/2020/07/31/aQT4ER.png"></image>
				<view class="titi">
					<view class="top">
						<div>VIP</div>
						<div>{{songName}}</div>
					</view>
					<view class="bottom">
						<div>{{singer}}</div>
						<image src="https://t1.picb.cc/uploads/2020/09/16/tPxWO8.png"></image>
					</view>
				</view>
			</view>
			<view class="right">
				<image src="https://t1.picb.cc/uploads/2020/09/16/tPxO6R.png"></image>
			</view>
		</view>
		<view class="content">
			<image :src="pic_url"></image>
		</view>
		<view class="footer">
			<view class="top">

				<image src="https://t1.picb.cc/uploads/2020/09/15/tPBE4F.png"></image>
				<image src="https://t1.picb.cc/uploads/2020/09/15/tPBsFM.png"></image>
				<image src="https://t1.picb.cc/uploads/2020/09/15/tPBxhs.png"></image>
				<image src="https://t1.picb.cc/uploads/2020/09/15/tPBFKN.png"></image>
				<image src="https://t1.picb.cc/uploads/2020/09/15/tPBSJj.png"></image>
			</view>

			<!-- 
			//暂停
			https://t1.picb.cc/uploads/2020/09/15/tPBRle.png
			//列表循环
			https://t1.picb.cc/uploads/2020/09/15/tPBSJj.png
			//单曲循环
			https://t1.picb.cc/uploads/2020/09/15/tPBFKN.png
			//随机播放
			https://t1.picb.cc/uploads/2020/09/15/tPBTL7.png -->
			<view class="centenr"></view>
			<view class="bottom">

				<image src="https://t1.picb.cc/uploads/2020/09/15/tPBUAT.png"></image>
				<image @click="lastSong()" src="https://t1.picb.cc/uploads/2020/09/15/tPBLf6.png"></image>
				<image @click="pauseSong()" src="https://t1.picb.cc/uploads/2020/09/15/tPBBbK.png"></image>
				<image @click="nextSong()" src="https://t1.picb.cc/uploads/2020/09/15/tPBTL7.png "></image>
				<image src="https://t1.picb.cc/uploads/2020/09/15/tPBDVt.png"></image>

			</view>
		</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		
		data() {
			return {
				songsDetail: [],
				// 歌曲地址
				song_url: "",
				songName: "",
				pic_url: "",
				singer: "",
				//当前歌曲于数组的索引
				songIndex:0,
				//当前音乐播放状态
				playFlag:false
			}
		},
		onLoad(option) {
			console.log(option.index);
			this.songIndex = option.index;
			this.getAllList()
			let thisSongID = this.songsDetail[this.songIndex].id;
			this.getSongUrl(thisSongID);
			this.getSongInfo(thisSongID);
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta: 1
				})
				innerAudioContext.destroy();
			},
			getAllList() {
				let songsDetail = uni.getStorageSync("songsDetail");
				this.songsDetail = songsDetail;
			},
			async getSongUrl(id) {
				//通过获取歌曲id调用获取歌曲url的接口
				console.log(id)
				// let url_id = this.thisSong.id
				const res = await this.$myRuquest({
					url: "/song/url?id=" + id
				});
				console.log(res.data.data[0].url)
				let song_url = res.data.data[0].url
				this.song_url = song_url
				this.playerMusic(song_url);
			},
			async getSongInfo(id) {
				//通过获取歌曲id调用获取歌曲url的接口
				console.log(id)
				// http://www.huashengshu.top:3000/song/detail?ids=347230
				const res = await this.$myRuquest({
					url: "/song/detail?ids=" + id
				});
				// console.log(res.data.songs[0])
				let songName = res.data.songs[0].name
				let pic_url = res.data.songs[0].al.picUrl
				let singer = res.data.songs[0].ar[0].name
				this.songName = songName;
				this.pic_url = pic_url;
				this.singer = singer;
			},
			playerMusic(song_url) {
				
				innerAudioContext.autoplay = true;
				innerAudioContext.src = song_url;
				innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
				innerAudioContext.onEnded(()=>{
					this.nextSong();
				})
				innerAudioContext.onError((res) => {
					console.log(res.errMsg);
					console.log(res.errCode);
				});
				innerAudioContext.play()
				
			},
			//音乐暂停方法
			pauseSong(){
				if(this.playFlag){
					innerAudioContext.play();
					console.log("继续播放")
				}else{
					innerAudioContext.pause();
				}
				this.playFlag = !this.playFlag;
				console.log("his.playFlag")
			},
			// 播放上一首音乐
			lastSong(){
				console.log("上一首");
				
				if(this.songIndex == 0){
					this.songIndex = this.songsDetail.length-1;
				}else{
					this.songIndex = this.songIndex - 1;
				}
				console.log(this.songIndex);
				let thisSongID = this.songsDetail[this.songIndex].id;
				this.getSongUrl(thisSongID);
				this.getSongInfo(thisSongID);
			},
			// 播放下一首音乐
			nextSong(){
				console.log("下一首");
				if(this.songIndex == this.songsDetail.length-1){
					this.songIndex = 0;
				}else{
					this.songIndex = this.songIndex + 1;
				}
				console.log(this.songIndex);
				let thisSongID = this.songsDetail[this.songIndex].id;
				this.getSongUrl(thisSongID);
				this.getSongInfo(thisSongID);
			}
		}
	}
</script>

<style lang="scss">
	*{
		font-family: "思源黑体";
	}
	.musicPlayRow {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #4CD964;

		.navHead {
			display: flex;
			border: 1px solid #007AFF;
			width: 100%;
			height: 7%;
			align-items: center;
			justify-content: space-between;

			.left {
				width: 40%;
				height: 100%;
				display: flex;
				align-items: center;
				margin: 15px;
				border: 1px solid #3F536E;

				image {
					width: 26px;
					height: 26px;
				}

				.titi {
					width: 60%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;

					.top {
						display: flex;
						width: calc(100vh*0.5);
						align-items: center;
						color: #FFFFFF;
						font-size: 19px;
						font-weight: 500;
						overflow: hidden;
						word-break: keep-all;
						white-space: nowrap;

						text-overflow: ellipsis ;
						image {
							width: 20px;
							height: 20px;
						}

						div:nth-child(1) {
							font-size: 12px;
							border: 1px solid #FFFFFF;
							border-radius: 2px;
							padding: 0 5px;
							margin: 0 10px;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}

					.bottom {
						display: flex;
						color: #EBEBEB;
						font-size: 12px;
						display: flex;
						align-items: center;
						margin-left: 10px;

						image {
							width: 12px;
							height: 12px;
							margin: 0 5px;
						}

					}
				}
			}

			.right {
				width: 26px;
				height: 26px;
				margin: 0 10px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.content {
			margin-bottom: 120px;
			border: 1px solid gold;
			width: 260px;
			height: 260px;
			border-radius: 50%;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.footer {
			border: 1px solid #999999;
			width: 100%;
			height: 24%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.top {
				border: 1px solid #DD524D;
				width: 95%;
				height: 35%;
				display: flex;
				align-items: center;
				justify-content: space-around;

				image {
					width: 22px;
					height: 22px;
				}

				image:nth-child(2) {
					width: 27px;
					height: 27px;
				}

				image:nth-child(3) {
					width: 28px;
					height: 28px;
				}
			}

			.center {
				border: 1px solid #DD524D;
				width: 95%;
				height: 15%;
			}

			.bottom {
				border: 1px solid #DD524D;
				width: 95%;
				height: 30%;
				display: flex;
				align-items: center;
				justify-content: space-around;

				image {
					width: 22px;
					height: 22px;
				}

				image:nth-child(1) {
					width: 26px;
					height: 26px;
				}

				image:nth-child(3) {
					width: 50px;
					height: 50px;
				}
			}
		}

		image {
			width: 15px;
			height: 15px;
		}
	}
</style>
