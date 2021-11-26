import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueThreejs from 'vue-threejs' // >= 0.2.0

createApp(App).use(store).use(router).use(VueThreejs).mount('#app')
