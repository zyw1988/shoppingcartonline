import VueRouter from 'vue-router'
import Home from './sub/home.vue'
import Member from './sub/member.vue'
import Search from './sub/search.vue'
import Shopcart from './sub/shopcart.vue'
import NewsList from '../src/news/newsList.vue'
import NewsInfo from '../src/news/newsInfo.vue'
import imageShow from '../src/images/imageShow.vue'
import goodList from '../src/goodlist/goodList.vue'
import goodsInfo from '../src/goodlist/goodsInfo.vue'
import goodsImageInfo from '../src/goodlist/goodsImageInfo.vue'
import goodsComments from '../src/goodlist/goodsComments.vue'

var router = new VueRouter({
    routes:[
        { path:'/',redirect:'/home'},
        { path:'/home',component:Home},
        { path:'/member',component:Member},
        { path:'/search',component:Search},
        { path:'/shopcart',component:Shopcart},
        { path:'/home/newsList',component:NewsList},
        { path:'/home/newsInfo/:id',component:NewsInfo},
        { path:'/home/imageShow',component:imageShow},
        { path:'/home/goodList',component:goodList},
        { path:'/home/goodsInfo/:id',component:goodsInfo},
        { path:'/home/goodsImageInfo/:id',component:goodsImageInfo,name:'goodsImageInfo'},
        { path:'/home/goodsComments/:id',component:goodsComments,name:"goodsComments"}
    ],
    linkActiveClass:'mui-active'
});

export default router