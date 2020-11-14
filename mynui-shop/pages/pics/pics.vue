<template>
	<view class="pics">
		<scroll-view class="left">
			<view :class="activeIndex == index?'active':''" 
			v-for="(item,index) in cates"
			@click="activeChange(index,item.id)"
			>{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right">
			<view v-for="(item,index) in rightList" class="showRow">
				<image @click="showImg(item.img_url)" :src="item.img_url"></image>
				<view class="text">{{item.title}}</view>
			</view>
			<view v-if="rightList.length==0">
				<h2>很抱歉，没有数据</h2>
				<image src="http://wx2.sinaimg.cn/large/994b6f2egy1fytkre3iylg204p04ptm3.gif"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				activeIndex:0,
				rightList:[]
			}
		},
		mounted:function(){
			this.getPicsCate();
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRuquest({
					url:'/api/getimgcategory'
				})
				console.log(res);
				this.cates = res.data.message;
			},
			async activeChange(index,id){
				this.activeIndex = index;
				//获取右侧的数据
				const res = await this.$myRuquest({
					url:'/api/getimages/'+id
				})
				console.log(res);
				this.rightList = res.data.message;
			},
			showImg(current){
				const urls = this.rightList.map(item=>item.img_url)
				uni.previewImage({
					urls,
					current
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;line-height: 60px;
				color: #F0AD4E;text-align: center;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: #DD524D;color: #FFFFFF;
			}
		}
		.right{
			height: 100%;width: 520rpx;
			margin: 10rpx auto;
			.showRow{
				image{
					width: 520rpx;height: 520rpx;
					border-radius: 5px;
				}
				.text{
					font-size: 30rpx;line-height: 30rpx;
					color: #007AFF;
				}
			}
		}
	}
</style>
