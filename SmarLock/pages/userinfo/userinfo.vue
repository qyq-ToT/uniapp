<template>
	<view class="userinfo">
		<view class="top">
			<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2021421053,481069477&fm=26&gp=0.jpg"></image>
			<view class="infos">
				<view>{{username}}</view>
				<view>账号: 18944975996</view>
			</view>
		</view>
		<view class="center">
			<view class="center-item">
				<view class="icon-nav">
					<image @click="integralInfo" src="https://s1.ax1x.com/2020/07/21/UoYLVS.png"></image>
					<view class="desc">积分:264</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="center-item">
				<view class="icon-nav">
					<image @click="navtoShop" src="https://s1.ax1x.com/2020/07/22/U71SKK.png"></image>
					<view class="desc">积分商城</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view @click="navtoList(item.path)" class="bottom-item" v-for="(item,index) in btItems" :key="item.id">
				<view>{{item.info}}</view>
				<view v-if="index == 0">{{username}}</view>
				<uni-icons class="icon" type="arrowright" color="#636363" size="30"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {uniIcons},
		data() {
			return {
				username:'18944975996',
				btItems:[
					{
						id:1,
						info:"昵称",
						path:"../updateName/updateName"
					},
					{
						id:2,
						info:"邮箱",
						path:"../emailInfo/emailInfo"
					},
					{
						id:3,
						info:"修改密码",
						path:"../updatePwd/updatePwd"
					},
					{
						id:4,
						info:"安全问题",
						path:"../safetyProblem/safetyProblem"
					}
				]
			}
		},
		onShow() {
			let newName = uni.getStorageSync('username')
			console.log(newName)
			console.log(this.username)
			this.username = newName;
			console.log(this.username)
		},
		methods: {
			integralInfo(){
				uni.navigateTo({
					url:"../integralInfo/integralInfo"
				})
			},
			navtoShop(){
				uni.navigateTo({
					url:"../integralShop/integralShop"
				})
			},
			navtoList(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style lang="scss">
.userinfo{
	background: #FAFAFA;
	.top{
		width: 100%;height: 340rpx;
		display: flex;align-items: center;
		background: url("http://pic.qqoi.cn/img_bizhi/223813354.jpeg") no-repeat;
		background-position: center 0;
		background-size: cover;
		image{
			margin: 0 50rpx;
			width: 140rpx;height: 140rpx;
			border-radius: 50%;
		}
		.infos{
			width: 320rpx;height: 120rpx;
			display: flex;flex-direction: column;
			justify-content: space-between;
			view{
				width: 100%;height: 35rpx;
				text-indent: 1em;
				color: #00FFFF;font-size: 38rpx;
				font-weight: 700;
			}
			view:nth-child(2){
				font-size: 32rpx;font-weight: 400;
				color: #80FFFF;
				text-indent: 0.5em;
			}
		}
	}
	.center{
		height: 220rpx;width: 100%;
		display: flex;align-items: center;
		.line{
			height: 60%;width: 0;
			border-left: 1rpx solid #5B5B5B;
		}
		.center-item{
			width: 49%;
			.icon-nav{
				display: flex;flex-direction: column;
				justify-content: center;align-items: center;
				image{
					width: 65rpx;height: 65rpx;
				}
				.desc{
					margin-top: 10rpx;
					color: #4F4F4F;font-size: 34rpx;
					font-weight: 500;
				}
			}
			
		}
	}
	.bottom{
		margin-top: 20rpx;
		width: 100%;height: 450rpx;
		.bottom-item{
			height: 110rpx;
			border-bottom: 1px solid #7B7B7B;
			display: flex;align-items: center;
			justify-content: space-between;
			view{
				text-indent: 2em;
			}
			.icon{
				margin-right: 30rpx;
				
			}
		}
	}
}
</style>
