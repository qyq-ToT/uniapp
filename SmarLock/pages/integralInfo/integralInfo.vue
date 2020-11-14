<template>
	<view class="integralRow">
		<view class="head">
			<image src="https://s1.ax1x.com/2020/07/22/UHto34.png"></image>
			<view>264</view>
		</view>
		<view class="explain">
			<view class="title">积分说明</view>
			<view class="info">积分目前通过使用APP开锁获得，一天获取一次积分</view>
		</view>
		<view class="content">
			<view class="title">积分明细</view>
			<view v-for="(item,index) in times" class="content-item">
				<view class="top">
					<view>开门</view>
					<view>+3</view>
				</view>
				<view class="bottom">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				times:["2020.07.21 19:05","2020.07.20 06:17","2020.07.29 12:26"]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.integralRow{
	.head{
		background: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1054289740,936086398&fm=26&gp=0.jpg") no-repeat;
		background-position: center 0;
		background-size: cover;
		display: flex;justify-content: center;
		align-items: center;
		height: 340rpx;width: 100%;
		position: relative;
		image{
			width: 200rpx;height: 180rpx;
		}
		view{
			position: absolute;
			top: 115rpx;
			text-indent: 0.5em;
			color: #FFFFFF;font-size: 36rpx;font-weight: 500;
			width: 100rpx;height: 20rpx;
		}
	}
	.explain{
		.title{
			text-indent: 1em;
			font-size: 48rpx;font-weight: 700;
			color: #272727;
			padding: 30rpx 0;
		}
		.info{
			text-indent: 1em;
			color: #8E8E8E;font-size: 36rpx;
			font-weight: 500;
		}
	}
	.content{
		margin-top: 40rpx;
		.title{
			text-indent: 1em;
			font-size: 48rpx;font-weight: 700;
			color: #272727;
			padding: 30rpx 0;
		}
		.content-item{
			margin-top: 24rpx;
			color: #8E8E8E;
			border-bottom: 1rpx solid #8E8E8E;
			.top{
				display: flex;
				justify-content: space-between;
				font-size: 40rpx;
				view{
					margin: 0 40rpx;
				}
				view:nth-child(2){color: #000000;}
			}
			.bottom{
				margin: 10rpx 40rpx;
				font-size: 32rpx;
			}
		}
	}
}
</style>
