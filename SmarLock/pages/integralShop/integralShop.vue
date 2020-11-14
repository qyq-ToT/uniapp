<template>
	<view class="shopRow">
		<view class="img">
			<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2020383777,3894695847&fm=15&gp=0.jpg"></image>
		</view>
		<view class="TipsRow">
			<view>亲爱的用户</view>
			<view>目前积分商城正在升级</view>
			<view>如果有疑问请联系APP官方客服</view>
			<view>感谢您的配合</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.shopRow{
	.img{
		padding: 100rpx 0;
		display: flex;
		align-items: center;justify-content: center;
		width: 100%;height: 600rpx;
		image{
			width: 500rpx;height: 500rpx;
			border-radius: 50%;	
		}
	}
	.TipsRow{
		display: flex;
		flex-direction: column;
		align-items: center;
		view{
			padding: 10rpx 0;
			font-weight: 500;
			color: #3C3C3C;
			font-size: 34rpx;
		}
		view:nth-child(1){
			font-size: 50rpx;
			font-weight: 600;
			padding: 30rpx 0;
		}
	}
}
</style>
