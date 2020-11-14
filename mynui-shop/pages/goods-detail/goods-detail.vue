<template>
	<view class="goods_detail">
		<swiper indicator-dots="true">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="info-top">
			<view class="price">
				<text>{{info.sell_price}}</text>
				<text>{{info.market_price}}</text>
			</view>
			<view class="goods-name">{{info.title}}</view>
		</view>
		<view class="info-center">
			<view>货号 ：{{info.goods_no}}</view>
			<view>序列 ：{{info.stock_quantity}}</view>
		</view>
		<view class="info-bottom">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<view class="cart_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id:0,
				swipers:[],
				info:{},
				content:'',
				options: [
					{
				        icon: 'headphones',
				        text: '客服'
				    }, 
					{
				        icon: 'shop',
				        text: '店铺',
				        info: 2,
				        infoBackgroundColor:'#007aff',
				        infoColor:"red"
				    }, 
					{
				        icon: 'cart',
				        text: '购物车',
				        info: 2
				    },
				],
				buttonGroup: [
					{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad:function(options){
			this.id = options.id;
			this.getSwipers();
			this.getDetailInfo();
			this.getContent();
		},
		methods: {
			async getSwipers(){
				const res = await this.$myRuquest({
					url:'/api/getthumimages/'+this.id
				})
				this.swipers = res.data.message;
			},
			async getDetailInfo(){
				const res = await this.$myRuquest({
					url:'/api/goods/getinfo/'+this.id
				})
				this.info = res.data.message[0];
			},
			async getContent(){
				const res = await this.$myRuquest({
					url:'/api/goods/getdesc/'+this.id
				})
				this.content = res.data.message[0].content;
				console.log(this.content);
			},
			onClick (e) {
			    uni.showToast({
			      title: `点击${e.content.text}`,
			      icon: 'none'
			    })
			},
			buttonClick (e) {
			    console.log(e)
			    this.options[2].info++
			}
		},
		components: {uniGoodsNav}
	}
</script>

<style lang="scss">
.goods_detail{
	swiper{
		height: 700rpx;width: 100%;
		image{width: 100%;height: 100%;}
	}
	.info-top{
		padding: 10px;
		.price{
			font-size: 35rpx;color: #DD524D;
			line-height: 80rpx;
			text:nth-child(2){
				color: #eee;font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.goods-name{
			font-size: 32rpx;line-height: 60rpx;
		}
	}
	.info-center{
		border-top: 4rpx solid #eee;
		border-bottom: 4rpx solid #eee;
		view{
			padding: 0 10rpx;
			font-size: 32rpx;
			line-height: 70rpx;
		}
	}
	.info-bottom{
		padding-bottom: 50rpx;
		.tit{
			font-size: 32rpx;padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.content{
			padding: 10px;
			font-size: 32rpx;
			color: #333333;
			line-height: 50rpx;
		}
	}
	.cart_nav{
		position: fixed;width: 100%;
		bottom: 0;
	}
}
</style>
