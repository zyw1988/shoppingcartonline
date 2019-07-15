<template>
    <div>
    
        <!-- 轮播图区域 -->
        <swiper-box :lunboLists="args"></swiper-box>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="../../lib/img/九宫格图标/新闻资讯.png" alt="" >
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>

            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/imageShow">
                    <img src="../../lib/img/九宫格图标/导出.png" alt="" >
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodList">
                     <img src="../../lib/img/九宫格图标/商品购买.png" alt="" >
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../lib/img/九宫格图标/留言.png" alt="" >
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                     <img src="../../lib/img/九宫格图标/视频.png" alt="" >
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../lib/img/九宫格图标/联系 (1).png" alt="" >
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul> 
    </div>
</template>

<script>
import { Swipe } from 'Mint-ui'
import swiper from '../../src/sub/swipe.vue'


var args = [
    { id:0,args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562293159&di=189ec677d919c599342018d207e765c2&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F76%2F15%2F16761592-21b0b1806b2b14116672ec6d5af82546-0.jpg"},
    { id:1,args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1561688360&di=0347257b60bdc53779c216f7384f8f60&src=http://bpic.ooopic.com/16/76/10/16761098-66588c053120cc0bf300329d53f37ee6-0.jpg"},
    { id:2,args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1561688360&di=3dd0a9e065cab121eef2fcb1209b12b0&src=http://bpic.ooopic.com/16/76/11/16761126-a0e8e329796f71510f205e901a4b71c8-0.jpg"},
];
export default {
    data(){
        return{
            args
        }
    },
    components:{
        'swiper-box':swiper
    }
}
</script>

<style scoped>
  
    .mui-table-view-cell img{
        width:60px;
        height:60px;
    }
</style>

