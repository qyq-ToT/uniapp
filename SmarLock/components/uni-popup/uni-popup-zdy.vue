<template>
	<view class="uni-popup-zdy">
		<view class="title">选择问题</view>
		<text v-for="item in message">{{item}}</text>
		<view @click="back" class="back">取消</view>
	</view>
</template>

<script>
	export default{
		name: 'UniPopupZdy',
		inject: ['popup','selects'],
		data(){
			return {
				message:this.selects.selects
			}
		},
		onShow() {
			console.log(123)
		},
		methods:{
			back(){
				this.popup.close()
			}
		}
	}
</script>

<style lang="scss">
	.uni-popup-zdy{
		width: 100%;height: 700rpx;
		background: #FFFFFF;
		display: flex;flex-direction: column;
		align-items: center;
		.title{
			width: 90%;
			height: 100rpx;line-height: 100rpx;
			text-align: center;
			border-bottom: 1rpx solid #DDDDDD;
		}
		text{
			height: 100rpx;text-align: center;
			line-height: 100rpx;
		}
	}
</style>
