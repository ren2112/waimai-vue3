import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'
import router from './router/index.js'; // 引入您的路由模块
import './assets/font/iconfont.js'

// 创建Vue应用实例并挂载路由
const app = createApp(App);
app.use(router);

app.mount('#app');