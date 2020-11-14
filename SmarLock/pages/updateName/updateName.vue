<template>
	<view>
		<input class="nameLine" v-model="username"></input>
		<view @click="setDate" class="cs">保存</view>
		<view class="line"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'189'
			}
		},
		onReady() {
			let newName = uni.getStorageSync('username')
			this.username = newName;
		},
		methods: {
			setDate(){
				console.log(123)
				uni.navigateBack({
					delta:1,
					animationType:"slide-out-left",
					animationDuration:2000
				})
				uni.setStorageSync("username",this.username)
			}
		}
		// onNavigationBarButtonTap:function(e){
		// 	console.log(123)
		// 	uni.navigateBack({
		// 		delta:1
		// 	})
		// 	uni.showToast({
		// 		title:"修改成功"
		// 	})
		// }
	}
</script>

<style>
	view{
		display: flex;justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		/* border-bottom: 1px solid #007AFF; */
	}
	.nameLine{
		width: 60%;height: 90rpx;line-height: 60rpx;
		font-size: 40rpx;color: #3C3C3C;
		text-align: start;	
	}
	.cs{
		width: 180rpx;height: 60rpx;
		background: #007AFF;
	}
	.line{
		width: 85%;height: 0rpx;
		border-bottom: 1rpx solid #007AFF;
	}
</style>
