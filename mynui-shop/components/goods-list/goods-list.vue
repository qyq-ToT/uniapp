<template>
	<view class="gods_list">
		<view class="gods_item" @click="navto(item.id)" v-for="(item,index) in goods" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>{{item.sell_price}}</text>
				<text>{{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goods'],
		data() {
			return {
				
			};
		},
		methods:{
			navto(id){
				this.$emit('gotoDetail',id)
			}
		}
	}
</script>

<style lang="scss">
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
</style>
