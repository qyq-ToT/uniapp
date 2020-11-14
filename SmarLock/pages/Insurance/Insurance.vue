<template>
	<view class="BX">
		<img src="https://p1.ssl.qhimgs1.com/sdr/400__/t0160d9f5b82c0f61bb.gif"></img>
		<view>我们 ！！！</view>
		<view>不卖保险！！！</view>
		<img src="http://img.mp.sohu.com/upload/20170726/4d99c4b38e1745a7bc48fc8d391a8105.png"></img>
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
	.BX{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;height: 100vh;
		img{
			margin-top: 40rpx;
			width: 450rpx;
			height: 450rpx;
		}
		view{
			font-size: 80rpx;
			font-weight: 700;
			margin: 20rpx 0 ;
			color: #FF0000 ;
		}
		view:nth-child(3){
			font-size: 50rpx;
			color: #7A0099;
		}
	}
</style>
