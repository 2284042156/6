import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 样式初始化
import 'normalize.css'
//element ui样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//视频播放器
import VideoPlayer from 'vue-video-player'
import  'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import '@/assets/styles/common.less'
// 富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//引入rem与px的适配文件
import 'lib-flexible/flexible.js'
Vue.use(VideoPlayer)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
