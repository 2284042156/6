import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VideoPlayer from 'vue-video-player'
import  'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import '@/assets/styles/common.less'
// import '@/assets/fonts/font.css';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VideoPlayer)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
