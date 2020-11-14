<template>
	<view class="news_detail">
		<view class="title">{{detailList.title}}</view>
		<view class="info">
			<text>发表时间 ：{{detailList.add_time | time}}</text>
			<text>浏览次数 ：{{detailList.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detailList.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detailList:{}
			}
		},
		filters:{
			time(date){
				return date.substring(0,10)
			}
		},
		onLoad:function(options){
			this.id = options.id;
			this.getNewsDetail();
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRuquest({
					url:'/api/getnew/'+this.id
				})
				console.log(res)
				this.detailList = res.data.message[0]
			}
		}
	}
</script>

<style lang="scss">
.news_detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.title{
		text-align: center;width: 710rpx;display: block;
		margin:20rpx 0;
	}
	.info{
		display: flex;justify-content: space-between;
	}
}
</style>
