import Vue from 'vue'
import App from './App'
import router from './router'

//引入基础样式
import './common/css/base.css'
import './common/font/iconfont.css'
//引入rem.js
import './utils/rem.js'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
