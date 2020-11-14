<template>
	<view>
		<view @click="navto(item.id)" v-for="(item,index) in newslist" class="news_item" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">{{item.title}}</view>
				<view class="info">
					<text>发表时间 ：{{item.add_time | time}}</text>
					<text>浏览 ：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['newslist'],
		filters:{
			time(date){
				return date.substring(0,10)
			}
		},
		// filters:{
		// 	formatDate(date){
		// 		const nDate = new Data(data);
		// 		let time = nDate.getFullYear()+nDate.getMonth()+nDate.getDay();
		// 		return time
		// 		console.log(time)
		// 	}
		// },
		
		data() {
			return {
				
			};
		},
		methods:{
			navto(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
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
		.tit{font-size: 30rpx;overflow: hidden;color: #F0AD4E;}
		.info{
			font-size: 24rpx;
			text:nth-child(2){margin-left: 30rpx;}
		}
	}
}
</style>
