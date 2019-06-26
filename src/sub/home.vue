<template>
    <div>
    
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>咿呀咿呀</mt-swipe-item>
            <mt-swipe-item>儿豁</mt-swipe-item>
            <mt-swipe-item>叁道口</mt-swipe-item>
        </mt-swipe>
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
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../lib/img/九宫格图标/商品购买.png" alt="" >
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../lib/img/九宫格图标/留言.png" alt="" >
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../lib/img/九宫格图标/视频.png" alt="" >
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../lib/img/九宫格图标/联系 (1).png" alt="" >
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
import { Swipe } from 'Mint-ui'

export default {
    
}
</script>

<style scoped>
    .mint-swipe{
        width: 100%;
        height: 200px;
    }
    .mint-swipe-item{
        text-align: center;
        line-height: 200px;
        font-size: 40px;
        color: #fff;
    }
     .mint-swipe-item:nth-child(1){
          background-color:pink;
      }
      .mint-swipe-item:nth-child(2){
          background-color:blanchedalmond;
      }
       .mint-swipe-item:nth-child(3){
          background-color:yellow;
      }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
    .mui-table-view-cell img{
        width:60px;
        height:60px;
    }
</style>

