import VueRouter from 'vue-router'
import Home from './sub/home.vue'
import Member from './sub/member.vue'
import Search from './sub/search.vue'
import Shopcart from './sub/shopcart.vue'
import NewsList from '../src/news/newsList.vue'
import NewsInfo from '../src/news/newsInfo.vue'
import imageShow from '../src/images/imageShow.vue'

var router = new VueRouter({
    routes:[
        { path:'/',redirect:'/home'},
        { path:'/home',component:Home},
        { path:'/member',component:Member},
        { path:'/search',component:Search},
        { path:'/shopcart',component:Shopcart},
        { path:'/home/newsList',component:NewsList},
        { path:'/home/newsInfo/:id',component:NewsInfo},
        { path:'/home/imageShow',component:imageShow}
    ],
    linkActiveClass:'mui-active'
});

export default router