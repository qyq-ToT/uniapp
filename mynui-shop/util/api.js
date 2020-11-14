const BASE_URL = 'http://www.huashengshu.top:3000/song/detail?ids=31654479,5137277'
export const myRequset = (options)=>{
	return new Promise((resovle,reject)=>{
		uni.request({
			url:BASE_URL,
			method:options.method || 'GET',
			data:options.data || {},
			// success: options.success,
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(res)
			}
		})
	})
}