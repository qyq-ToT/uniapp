<template>
	<view>
		 <button @click="get"> 发送get请求</button>
		 <button @click="getStorge">获取缓存中的数据</button>
		 <button @click="chooseImg">上传图片</button>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
		        uniCalendar
		    },
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			get(){
				alert(123);
				uni.request({
					url:"http://localhost:8082/api/getlunbo",
					success(res) {
						console.log(res)
						uni.setStorage({
							key:"Swiper",
							data:res
						})
					}
				})
			},
			getStorge(){
				alert(321)
				uni.getStorage({
					key:"Swiper",
					success(res){
						console.log(res)
					}
				})
			},
			chooseImg(){
				uni.chooseImage({
					count:3,
					success(res) {
						console.log(res.tempFiles)
					}
				})
			}
		}
	}
</script>

<style>
</style>
