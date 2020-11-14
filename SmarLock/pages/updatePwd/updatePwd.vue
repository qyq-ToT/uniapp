<template>
	<view class="upN">
		<input type="password" @blur="pw1" placeholder="原密码" />
		<input type="password" @blur="pw2" placeholder="新密码" />
		<input type="password" @blur="pw3" placeholder="确认密码" />
		<view class="tips">
			密码必须是8-20位，至少包含数字/字母/符号中的两种.
		</view>
		<button @click="setPwd" :disabled="flag" :class="!flag?'active':''">保存</button>
		<view class="findPwd">忘记密码?</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:true,
				oldPassword:994342144,
				newPassword:"",
				oldFlag:false
			}
		},
		methods: {
			setPwd(){
				console.log(456)
			},
			pw1(e){
				if(e.detail.value == this.oldPassword){
					console.log("密码正确")
					this.oldFlag = true;
				}else{
					console.log("密码错误")
					this.oldFlag = false;
				}
				
			},
			pw2(e){
				this.newPassword = e.detail.value
			},
			pw3(e){
				if(this.newPassword == e.detail.value){
					console.log("新密码莫得问题")
				}else{
					console.log("前后不一致！")
				}
			},
		}
	}
</script>

<style lang="scss">
.upN{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	input{
		width: 85%;
		height: 120rpx;
		border-bottom: 1rpx solid #AAAAAA;
	}
	.tips{
		color: #AAAAAA;
		font-size: 24rpx;
		margin: 40rpx 0;
	}
	button{
		width: 85%;
		color: #C0C0C0;
		background: #444444;
	}
	.active{
		background-color: #000088;
	}
	.findPwd{
		margin-top: 40rpx;
		font-size: 26rpx;
		color: #007AFF;
	}
	
}
</style>
