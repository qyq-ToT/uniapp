<template>
	<view class="news">
		<newsList @itemClick="goDetail" :newslist="news"></newsList>
	</view>
</template>

<script>
	import newsList from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				news:[]
			}
		},
		mounted:function(){
			this.getNews();
		},
		methods: {
			async getNews(){
				const res = await this.$myRuquest({
					url:'/api/getnewslist'
				})
				console.log(res)
				this.news = res.data.message
			},
			goDetail(id){
				alert(id)
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		},
		components:{
			newsList
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 0;border-bottom: 1px solid #DD524D;
			image{
				// min-width: 150rpx;
				// max-width: 200px;
				min-width: 250rpx;
				max-width: 250rpx;
				height: 150rpx;
			}
			.right{
				display: flex;
				justify-content: space-between;flex-direction: column;
				margin-left: 15rpx;
				flex-wrap: wrap;
				.tit{font-size: 38rpx;overflow: hidden;color: #F0AD4E;}
				.info{
					font-size: 24rpx;
					text:nth-child(2){margin-left: 30rpx;}
				}
			}
		}
	}
</style>
