<template>
	<view class="home">
		<!-- 轮播图区域 -->
		<swiper indicator-dots="true" circular="true">
			<swiper-item v-for="(item,index) in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navList" 
			:key="item.id" @click="navto(index)">
				<view class="img"><image :src="item.img_src"></image></view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 推荐视频区 -->
		<view class="gods">
			<view class="tit">推荐商品</view>
			<goods-list @gotoDetail="goGoodsDetail" :goods="goods"></goods-list>
		</view>
		
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers:[],
				navList:[
					{
						id:1,
						img_src:"https://s1.ax1x.com/2020/07/17/UyB8d1.png",
						text:"黑心超市",
						path:"/pages/goods/goods"
					},
					{
						id:2,
						img_src:"https://s1.ax1x.com/2020/07/17/Uyszwj.png",
						text:"别找我们",
						path:"/pages/contact/contact"
					},
					{
						id:3,
						img_src:"https://s1.ax1x.com/2020/07/17/UyB3ZR.png",
						text:"社区图片",
						path:"/pages/pics/pics"
					},
					{
						id:4,
						img_src:"https://s1.ax1x.com/2020/07/17/UyBlL9.png",
						text:"学习视频",
						path:"/pages/videos/videos"
					}
				],
				goods:[]
			}
		},
		onLoad() {
			this.getSwiper();
			this.getHotGoods();
		},
		components:{
			"goods-list":goodsList
		},
		methods: {
			// 获取轮播图的数据
			async getSwiper(){
				console.log(this.$myRuquest)
				const res = await this.$myRuquest({
					url:"/api/getlunbo"
				})
				this.swipers = res.data.message;
				// console.log(res)
			},
			// 获取商品列表数据
			async getHotGoods(){
				const res = await this.$myRuquest({
					url:"/api/getgoods?pageindex=1"
				})
				// console.log(res)
				//这张图片失效了，随便处理一下
				res.data.message[8].img_url = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4179352207,1563616110&fm=26&gp=0.jpg"
				this.goods = res.data.message
			},
			//导航点击处理函数
			navto(index){
				let path = this.navList[index].path
				console.log(path);
				uni.navigateTo({
					url:path
				})
			},
			//导航到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;width: 100%;
			}
		}
		.nav{
			display: flex;justify-content: center;
			width: 100%;height: 180rpx;
			.nav_item{
				flex: 1;
				display: flex;
				flex-direction: column;justify-content: space-around;
				align-items: center;
				.img{
					margin-top: 10px;
					width: 93rpx;height: 93rpx;
					padding: 5px;
					background-color: #33cccc;
					border-radius: 60rpx;
					border: 1px solid red;
					image{width: 100%;height: 100%;}
				}
				text{
					font-size: 30rpx;
					color: #FF7F24;
				}
			}
		}
		.gods{
			background: #eee;overflow: hidden;margin-top: 10px;
			.tit{
				height: 50px;line-height: 50px;
				color: #4CD964;background: #FFFFFF;
				text-align: center;
				letter-spacing: 20px;
				margin: 7rpx 0;
			}
			.gods_list{
				padding: 0 12px;display: flex;
				flex-wrap: wrap;justify-content: space-between;
				.gods_item{
					background: #FFFFFF;
					width: 170px;
					margin: 10rpx 0;padding: 15rpx;box-sizing: border-box;
					image{
						width: 80%;height: 150px;
						display: block;margin: auto 0;
					}
					.price{
						color: #ff3366;font-size: 36rpx;
						text:nth-child(2){
							margin-left: 17rpx;text-decoration: line-through;
						}
					}
					.name{
						font-size: 28rpx;line-height: 50rpx;
					}
				}
			}
			
		}
	}
</style>
