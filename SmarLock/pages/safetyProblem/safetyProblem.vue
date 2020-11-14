<template>
	<view class="safePl">
		<view class="title">
			登录新设备时，可通过回答问题进行安全验证
		</view>
		<view v-for="(item,index) in questionList" class="problemRow">
			<view @click="showSelect(index)" class="top">
				<view>{{item.tit}}</view>
				<uni-icons class="icon" type="arrowright" color="#636363" size="30"></uni-icons>
			</view>
			<input type="text" :placeholder="item.placeholder" />
		</view>
		<button disabled="false">确定</button>
		<uni-popup ref="popup" type="bottom">
			 <uni-popup-zdy title="分享到" @select="select"></uni-popup-zdy>
		</uni-popup>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import uniPopupZdy from '@/components/uni-popup/uni-popup-zdy.vue'
	export default {
		components: {
			uniDrawer,
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
			uniPopupZdy
		},
		provide(){
			return {
				selects:this.$data
			}
		},
		data() {
			return {
				questionList:[
					{
						id:1,
						tit:"问题一",
						placeholder:"请输入你的答案"
					},
					{
						id:2,
						tit:"问题二",
						placeholder:"请输入你的答案"
					},
					{
						id:3,
						tit:"问题三",
						placeholder:"请输入你的答案"
					}
				],
				selectList:[
					[
						"第一次乘坐飞机是哪个城市",
						"你最想去什么地方"
					],
					[
						"想从事什么工作",
						"最爱的食物是什么"
					],
					[
						"你的小名叫什么",
						"为什么你这么帅"
					]
				],
				selects:[]
			}
		},
		methods: {
			showSelect(index){
				this.selects = this.selectList[index];
				console.log(this.selects.length)
				 this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss">
.safePl{
	background: #DDDDDD;
	height: 100vh;width: 100%;
	.title{
		height: 80rpx;
		line-height: 100rpx;
		font-size: 33rpx;text-indent: 1em;
		color: #666666;
	}
	.problemRow{
		background: #FAFAFA;
		margin-top: 20rpx;
		height: 160rpx;
		display: flex;flex-direction: column;align-items: center;
		.top{
			flex: 1;width: 90%;
			font-size: 36rpx;
			display: flex;justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid #DDDDDD;
		}
		input{
			flex: 1;width: 90%;
			font-size: 28rpx;
		}
	}
	button{
		width: 90%;
		margin-top: 60rpx;
		color: #FAFAFA;
		background-color: #444444;
	}
	uni-popup{
		.bbTop{
			width: 100%;
			height: 400rpx;
			background: #007AFF;
		}
	}
}
</style>
