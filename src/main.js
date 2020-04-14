import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import JwPagination from 'jw-vue-pagination';

Vue.component(Button.name, Button);
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
