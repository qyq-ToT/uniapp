<template>
	<view class="goods">
		<goods-list :goods="goodsList"></goods-list>
		<view class="isOver" v-if="flag">------莫得了哟------</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				pageindex:1,
				goodsList:[],
				flag:false
			}
		},
		components:{
			"goods-list":goodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			console.log("触底了哟");	
			this.pageindex++;
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageindex = 1;
			this.goodsList = [];
			this.flag = false;
			this.getGoodsList();
			uni.stopPullDownRefresh()
		},
		methods: {
			async getGoodsList(){
				const res = await this.$myRuquest({
					url:"/api/getgoods?pageindex=" + this.pageindex
				})
				this.goodsList = [...this.goodsList,...res.data.message];
				if(res.data.message.length==0){
					this.flag = true
					console.log("没有了")
				}
			}
		}
	}
</script>

<style lang="scss">
	.goods{
		background: #eee;
	}
	.isOver{
		width: 100%;height: 50px;
		line-height: 50px;text-align: center;
		background: #8A2BE2;
		font-size: 28px;color: #EE1289;
	}
</style>
