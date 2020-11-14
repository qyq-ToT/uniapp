<template>
	<view class="index">
		<view class="none"></view>
		<view class="header">
			<image @click="handleClick" src="https://s1.ax1x.com/2020/07/21/UI28E9.png"></image>
			<view class="title">科技侠智能锁</view>
			<image @click="searchShow" src="https://s1.ax1x.com/2020/07/21/UI21HJ.png"></image>
		</view>
		<!-- 搜索框 -->
		<view v-if="searchFlag">
			<uni-search-bar
			 cancelButton="none" :radius="100" @confirm="search"
			 bgColor="#FFFFFF"
			 ></uni-search-bar>
		</view>
		<!-- 以添加的锁的信息 -->
		<view class="content">
			<view class="content-item">
				<view>振业城2栋1201</view>
				<view>2020.04.18 13:00 - 2021.04.17 12:00</view>
				<image src="https://s1.ax1x.com/2020/07/21/UIqVLn.png"></image>
				<text>100%</text>  
			</view>
		</view>
		<!-- 以下为左侧菜单 -->
		<uni-drawer :width="width" ref="drawer">
		    <view class="leftSidebar">
				<view class="top_row">
					<view class="headIcon">
						<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2021421053,481069477&fm=26&gp=0.jpg"></image>
						<image @click="setUserInfo" src="https://s1.ax1x.com/2020/07/21/UoGRsK.png"></image>
					</view>
					<view class="phoNum">18944975996</view>
					<view @click="navtoJf" class="jifenInfo">
						<image src="https://s1.ax1x.com/2020/07/21/UoYLVS.png"></image>
						<view>积分: 261</view>
					</view>
					<view class="top-footer">
						<view @click="navtoBx" class="tf-rows">
							<image src="https://s1.ax1x.com/2020/07/21/Uodtk8.png"></image>
							<view>家庭保险</view>
						</view>
						<view class="line"></view>
						<view @click="navtoShop" class="tf-rows">
							<image src="https://s1.ax1x.com/2020/07/21/UodJTf.png"></image>
							<view>积分商城</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottomRow">
				<view class="bottomItem" 
				v-for="(item,index) in bottomList":key="item.id">
					<image :src="item.icon_url"></image>
					<view>{{item.title}}</view>
				</view>
			</view>
		</uni-drawer> 
	</view>
</template>

<script> 
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniSearchBar,
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
			uniDrawer
		},
		data() {
			return {
				searchFlag:false,
				width:280,
				bottomList:[
					{
						id:1,
						title:"添加锁",
						icon_url:"https://s1.ax1x.com/2020/07/22/UTqDOJ.png"
					},
					{
						id:2,
						title:"网关",
						icon_url:"https://s1.ax1x.com/2020/07/22/UTqBy4.png"
					},
					{
						id:3,
						title:"消息",
						icon_url:"https://s1.ax1x.com/2020/07/22/UTqwSU.png"
					},
					{
						id:4,
						title:"客服",
						icon_url:"https://s1.ax1x.com/2020/07/22/UTqaWT.png"
					},
					{
						id:5,
						title:"设置",
						icon_url:"https://s1.ax1x.com/2020/07/22/UTq0lF.png"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			searchShow(){
				this.searchFlag = !this.searchFlag;
			},
			open(){
			    this.$refs.popup.open()
			}, 
			handleClick(){
			    this.$refs.drawer.open();
			},
			setUserInfo(){
				uni.navigateTo({
					url:"/pages/userinfo/userinfo" 
				})
			},
			navtoJf(){
				uni.navigateTo({
					url:"../integralInfo/integralInfo"
				})
			},
			navtoBx(){
				uni.navigateTo({
					url:"../Insurance/Insurance"
				})
			},
			navtoShop(){
				uni.navigateTo({
					url:"../integralShop/integralShop"
				})
			}
		}
	}
</script>

<style lang="scss">
	.index{
		background: #eee;
		height: 100vh;
		.none{
			width: 100%;
			height: 80rpx;
			background-color: #00BFFE;
		}
		.header{
			width: 100%;
			height: 120rpx;
			background-color: #00BFFE;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				font-size: 45rpx;font-weight: 500;
				color: #FFFFFF;
				height: 80rpx;line-height: 80rpx;
				text-align: center;
			}
			image{
				padding: 0 30rpx;
				width: 50rpx;height: 50rpx;
			}
		}
		.content{
			display: flex;
			flex-direction: column; 
			align-items: center;
			.content-item{
				margin: 20rpx 0;
				border-radius: 40rpx;
				background: #FFFFFF;
				width: 660rpx;
				height: 220rpx;
				position: relative;
				display: flex;flex-direction: column;
				justify-content: space-between;
				view{
					font-weight: 700;font-size: 45rpx;
					padding: 30rpx 30rpx; 
				}
				view:nth-child(2){
					font-size: 24rpx;
					color: #6E6E6E;
				}
				image{
					position: absolute;
					top: 30rpx;right: 90rpx;
					width: 50rpx;height: 50rpx;
					border-radius: 50%;
				}
				text{
					position: absolute;
					top: 43rpx; right: 24rpx; 
					line-height: 24rpx;
					font-size: 24rpx;
				}
			}
		}
		.searchInput{
			margin: 20rpx 0;
			display: flex;justify-content: center;
			align-items: center;
			input{
				width: 660rpx;
				height: 80rpx;
				background: #FFFFFF;
				border-radius: 60rpx;
			}
		}
		.uni-searchbar{
			margin-top: 10rpx;
			background: #eee;
			padding: 10rpx 40rpx;
		}
		.leftSidebar{
			.top_row{
				position: relative;
				height: 600rpx;
				background: url("https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3094085881,2041333177&fm=15&gp=0.jpg") no-repeat;
				background-position: center 0;
				background-size: cover;
				display: flex;flex-direction: column;
				align-items: center;
				.headIcon{
					margin-top: 80rpx;
					border: 4px solid #FFFFFF;
					border-radius: 50%;
					width: 160rpx;
					height: 160rpx;
					position: relative;
					image{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
					image:nth-child(2){
						width: 60rpx;height: 60rpx;
						position: absolute;
						bottom: -8rpx;right: 5rpx;
						opacity: 70%;
					}
				}
				.phoNum{color: #FFFFFF;font-size: 30rpx;padding: 30rpx 0;}
				.jifenInfo{
					display: flex;justify-content: space-between;
					width: 105px;
					image{
						width: 45rpx;height: 45rpx;
					}
					view{
						color: #FFFFFF;font-size: 30rpx;
					}
				}
				.top-footer{
					position: absolute;bottom: 0;
					height: 100rpx;width: 100%;
					display: flex;justify-content: center;align-items: center;
					background-color: #636363;opacity: 60%;
					.tf-rows{
						flex: 1;
						height: 100%;
						font-size: 30rpx;color: #FFFFFF;
						display: flex;align-items: center;justify-content: center;
						image{
							width: 40rpx;height: 40rpx;
						}
						view{
							margin-left: 30rpx;
						}
					}
					.line{
						width: 0;height: 70rpx;
						border: 1rpx solid #FFFFFF;
					}
				}
			}
		}
		.bottomRow{
			margin-top: 40rpx;
			display: flex;flex-direction: column;
			align-items: center;
			.bottomItem{
				display: flex; justify-content: flex-start;
				align-items: center;
				margin: 20rpx 0;
				width: 240rpx;height: 60rpx;
				image{
					width: 45rpx;height: 45rpx;
				}
				view{
					text-indent:2em;
					color: #404040;
					font-size: 28rpx; 
				}
			}
		}
	}
</style>
