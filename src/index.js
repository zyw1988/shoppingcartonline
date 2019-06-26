import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import router from './router.js'

import 'bootstrap/dist/css/bootstrap.css'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui-master/dist/css/mui.min.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'
Vue.use(MintUI)


new Vue({
    el:"#app",
    data:{
       
    },
    render:c=>c(App),
    router
})
