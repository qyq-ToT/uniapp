// const BASE_URL = "http://www.huashengshu.top:3000";
const BASE_URL = "http://localhost:3000";

export const myRequset = (options)=>{
	return new Promise((resovle,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success: (res)=>{
				if(res.statusCode == 200){
					resovle(res);
				}
				
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(res)
			}
		})
	})
}