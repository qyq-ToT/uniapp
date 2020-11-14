<template>
	<view class="content">
		<view class="nav">
			<image src="https://s1.ax1x.com/2020/08/03/aU7PiT.png"></image>
			<view>评价</view>
		</view>
		<view class="pj">
			<view class="item">
				<view>Commodity quality</view>
				<view class="starRow">
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU79oV.png"></image>
				</view>
			</view>
			<view class="item">
				<view>Service attitude</view>
				<view class="starRow">
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU79oV.png"></image>
				</view>
			</view>
			<view class="item">
				<view>Distribution service</view>
				<view class="starRow">
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU7iJU.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU79oV.png"></image>
					<image src="https://s1.ax1x.com/2020/08/03/aU79oV.png"></image>
				</view>
			</view>
		</view>
		<view class="titIcon">
			<view>辣椒炒肉</view>
			<view>辣椒炒肉</view>
			<view>辣椒炒肉</view>
			<view>辣椒炒肉</view>
		</view>
		<view class="comment">
			<view class="tit">Please enter your evaluation of the dish</view>
			<view class="item">
				<view class="item_content">#辣椒炒肉</view>
				<view class="item_content">味道还不错，就是没有肉是发生过做饭饭</view>
			</view>
			<view class="item">
				<view class="item_content">#辣椒炒肉</view>
				<view class="item_content">味道还不错，就是没有肉</view>
			</view>
		</view>
		<view class="imgRow">
			<view v-for="count in 9" class="item">
				<view class="img">
					<image src="https://ps.ssl.qhimg.com/dm/196_123_/t015d4bd97b01c111e3.jpg"></image>
				</view>
				<view class="icon">
					<image src="https://s1.ax1x.com/2020/08/03/aaVTjH.png"></image>
				</view>
			</view>
			<view class="item">
				<view class="img">
					<image src="https://s1.ax1x.com/2020/08/03/aaK5Ct.png"></image>
				</view>
				
			</view>
			<view class="item">
				<view class="img">
					<image src="https://s1.ax1x.com/2020/08/03/aaKh4I.png"></image>
				</view>
				
			</view>
			
		</view>
		<button>Confirm</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: "https://s1.ax1x.com/2020/08/03/aU7iJU.png",
				b: "https://s1.ax1x.com/2020/08/03/aU79oV.png",
				pjItem: ["Commodity quality", "Service attitude", "Distribution service"]
			}


		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		font-family: "思源黑体";
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

		.nav {
			width: 100%;
			height: 122rpx;
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			font-size: 48rpx;
			border-bottom: 10px solid #e5e5e5;

			image {
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto;
				left: 20rpx;
				width: 60rpx;
				height: 60rpx;
			}
		}

		.pj {
			border-bottom: 1px solid #e5e5e5;
			font-size: 38rpx;
			width: 95%;

			.item {
				margin-left: 20rpx;

				display: flex;
				justify-content: space-between;
				height: 70rpx;
				align-items: center;

				view {
					width: 240rpx;
					height: 100%;
					overflow: hidden;
					word-break: keep-all;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.starRow {
					width: 320rpx;
					height: 100%;
					display: flex;
					align-items: center;
					margin-right: 60rpx;

					image {
						width: 50rpx;
						height: 50rpx;
						margin: 0 15rpx;
					}
				}
			}

		}

		.titIcon {
			width: 95%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 83px;

			view {
				border: 1px solid red;
				border-radius: 25rpx;
				width: 22%;
				height: 24%;
				font-size: 34rpx;
				color: red;
				margin-top: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.comment {
			background-color: #F5F5F5;
			width: 95%;
			height: 450rpx;

			.tit {
				color: #cccccc;
				font-size: 46rpx;
				width: 85%;
				padding: 10rpx 0;
				overflow: hidden;
				word-break: keep-all;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.item {
				display: flex;
				padding: 10rpx 0;
				height: 120rpx;

				.item_content {
					width: 28%;
					height: 100%;
					color: red;
				}

				.item_content:nth-child(2) {
					width: 70%;
					height: 100%;
					color: #000000;
					margin: 0 20rpx;
				}
			}
		}

		.imgRow {
			margin-top: 70rpx;
			width: 95%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;

			.item {
				position: relative;
				width: 23%;
				height: 158rpx;
				margin: 5rpx 5rpx;
				border-radius: 10rpx;
				.img {
					width: 100%;
					height: 100%;
					image {
						
						width: 100%;
						height: 100%;
						
					}
				}

				.icon {
					position: absolute;
					top: 5rpx;
					left: 5rpx;
					opacity: 50%;
					image {
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
			.item:nth-child(10){
				border: 1rpx dashed #cccccc;
				.img{
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 90rpx;
						height: 90rpx;
					}
				}
			}
			.item:nth-child(11){
				border: 1rpx dashed #cccccc;
				.img{
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 80rpx;
						height: 70rpx;
					}
				}
			}
			// image {
			// 	margin: 5rpx 5rpx;
			// 	width: 23%;
			// 	height: 188rpx;
			// 	border-radius: 10rpx;
			// }

			// image:nth-child(4) {
			// 	margin-right: 0rpx;
			// }

			// image:nth-child(8) {
			// 	margin-right: 0rpx;
			// }
		}

		button {
			background: linear-gradient(to bottom right, #FF0088, #FFCC22);
			width: 75%;
			border-radius: 45rpx;
			margin: 70rpx 0;
		}

	}
</style>
