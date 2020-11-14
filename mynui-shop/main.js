import Vue from 'vue'
import App from './App'
import { myRequset } from './util/api.js'

Vue.prototype.$myRuquest = myRequset

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
