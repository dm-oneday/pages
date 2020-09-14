import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as common from '../utils/commo.js'
Vue.prototype.$common = common
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 全局首守衛
router.beforeEach((to, from, next) => {
  // 判斷是否要進行權限驗證
  if (to.meta.istrun) {
    var storage = window.localStorage
    var id = JSON.parse(storage.getItem("user"))
    console.log(id);
    if (id == null) {
      console.log('沒有數據了');
      next({ path: 'login' })
    } else {
      console.log('登入成功');
      next()
    }
  } else { next() }
  if (to.fullPath == '/login') {
    console.log('我不想回來');
    // 判斷是否為登錄狀態
    if (JSON.parse(localStorage.getItem('user'))) {
      next({
        path: from.fullPath
      });
    } else {
      next()
    }
  }
})
