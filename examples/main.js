// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.scss'
import Row from '../packages/row'
import demoBlock from './components/demo-block'

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)
Vue.use(Row)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
