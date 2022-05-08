import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import * as VueRouter from 'vue-router'
// console.log(VueRouter)


const app = createApp(App)
app.use(router)
// app.component('NiceComponent', {})
// app.use(SomePlugin)
app.mount('#app')
