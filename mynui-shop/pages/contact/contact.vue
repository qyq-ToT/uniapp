<template>
	<view class="contact">
		<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2893015915,2166997909&fm=26&gp=0.jpg"></image>
		<view class="info">
			<view @click="callPhone">联系电话 ：110-120-119 (点击拨打)</view>
			<view>来这找我 ：北京市人民大会堂</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//定义地图的经纬度
				longitude:112.907822,
				latitude:28.205461,
				markers:[
					{
						longitude:112.907822,
						latitude:28.205461,
						iconPath:"https://s1.ax1x.com/2020/07/17/UyB8d1.png",
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			callPhone(){
				console.log("被点击了")
				uni.makePhoneCall({
					phoneNumber:"18944975996",
					success: () => {
						console.log("拨打成功")
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		image{
			width: 100%;height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;border-bottom: 1px solid #eee;
				color: #F0AD4E;
			}
		}
		.map{
			width: 100%;height: 750rpx;
		}
	}

</style>
