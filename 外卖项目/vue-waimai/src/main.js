import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import 'amfe-flexible';
import router from './router';
import store from './store';
// 1引入需要的vant组件
import { Button } from 'vant'; 
// 2引入组件样式(全部引入)
// import 'vant/lib/index.css'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
// 引用mock实现虚拟后端
import './api/mock'
const app=createApp(App)
app.use(router).use(Button).use(store)
app.mount('#app')
