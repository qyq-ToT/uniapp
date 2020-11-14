<template>
	<view class="emailInfo">
		<view class="title">
			找回密码和登录新设备时，可通过绑定的邮箱验证
		</view>
		<view class="form">
			<input @input="emailInput" type="text" placeholder="请输入Email" v-model="email"/>
			<icon @click="clearVal" :class="isNull?'show':''" type="clear" size="26"/>
			<input @input="codeInput" class="code" type="text" placeholder="请输入验证码" v-model="code"/>
			<button :disabled="isLeg" :class="isLeg?'col':''" @click="submitInput" class="submit">{{legVal}}</button>
			<button :disabled="isSub" :class="isSub?'col':''" @click="navbind" class="submitTwo">绑定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:"",
				code:"",
				isNull:true,
				isLeg:true,
				legVal:"获取验证码",
				isSub:true
			}
		},
		onReady() {
			
		},
		methods: {
			emailInput(e){
				let val = e.detail.value
				var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(val==''){
					this.isNull = !this.isNull
				}else{
					this.isNull = false
					if(reg.test(this.email)){
						console.log("验证通过")
						this.isLeg = false
					}else{
						this.isLeg = true
					}
					
				}
			},
			clearVal(){
				this.email='',
				this.isNull = true,
				this.isLeg = true
			},
			submitInput(e){
				let that = this;
				console.log("发送验证码")
				 var randomNum = ('000000' + Math.floor(Math.random() * 999999)).slice(-6);
				console.log(randomNum);
				// this.code = randomNum;
				uni.setStorageSync("code",randomNum)
				uni.showToast({
					title:"发送成功"
				})
				this.isLeg = true;
				let num = 5;
				let timer = setInterval(function(){
					num--;
					console.log(num)
					that.legVal = "重新发送"+"("+ num +")"
					if(num == 0){
						clearInterval(timer)
					}
				},1000)
				
				setTimeout(function(){
					console.log("定时器结束了")
					console.log(that)
					that.isLeg = false
					that.legVal = "获取验证码"
				},num*1000)
			},
			navbind(){
				uni.showToast({
					title:"绑定成功",
					success() {
						uni.navigateBack({
							delta:1
						})
					}
				})
				
			},
			codeInput(){
				let newCode = uni.getStorageSync('code')
				console.log(newCode+"-----缓存的验证码")
				if(this.code == newCode){
					console.log("验证码正确")
					this.isSub = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.emailInfo{
		width: 100%;
		display: flex;flex-wrap: wrap;justify-content: center;
		font-size: 26rpx;
		.title{
			width: 85%;
			margin: 40rpx 0;
			font-size: 28rpx;
		}
		.form{
			width: 85%;height: 400rpx;
			border: 1rpx solid #007AFF;
			display: flex;flex-wrap: wrap;justify-content: space-between;
			position: relative;
			.show{
				display: none;
			}
			icon{
				position: absolute;top: 10rpx;right: 10rpx;
			}
			input{
				height: 80rpx;
				width: 100%;
				border-bottom: 1rpx solid #eee;
			}
			.code{
				width: 300rpx;
			}
			.submit{
				width: 260rpx;height: 70rpx;line-height: 70rpx;
				background: #007AFF;
				text-align: center;
				color: #FFFFFF;
			}
			.submitTwo{
				width: 100%;height: 70rpx;line-height: 70rpx;
				background: #007AFF;
				text-align: center;
				color: #FFFFFF;
			}
			.col{
				background: #888888;
			}
		}
	}
</style>
