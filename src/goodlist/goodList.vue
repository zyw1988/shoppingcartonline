<template>
    <div class="goodsList">
      <!-- 我的方法（默认的router-link跳转到vue组建的方法 -->
      <!-- <router-link class="goodItem" v-for="item in goodsArr" :key="item.id" to="/home/goodsInfo" tag="div">
          <img :src="item.goods_url" alt="" title="看毛看">
          <h1>{{ item.goods_title }}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥{{ item.goods_price_now}}</span>
                  <span class="old">￥{{ item.goods_price_old}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余{{ item.goods_remaining}}件</span>
              </p>
          </div>
      </router-link> -->
    
    <!-- 老师给的新方法。利用router实例 和 原生JS BOMAPI 进行编程式导航
        window.location.href
     -->
    <div class="goodItem" v-for="item in goodsArr" :key="item.id" @click="getDetail(item.id)">
          <img :src="item.goods_url" alt="" title="看毛看">
          <h1>{{ item.goods_title }}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥{{ item.goods_price_now}}</span>
                  <span class="old">￥{{ item.goods_price_old}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余{{ item.goods_remaining}}件</span>
              </p>
          </div>
      </div>
    
    </div>
</template>

<script>
var goodsArr = [
    { id:0,goods_title:"xiaomi/小米 红米Note 爱买不买哼",goods_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",goods_title:"小米（Mi）小米Note 16G双网通版",goods_price_now:1999,goods_price_old:2699,goods_remaining:1099},
    { id:1,goods_title:"xiaomi/小米 红米Note 爱买不买哼",goods_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612765401&di=5f422dbfa2922b8a451d98fa5d0d9e85&imgtype=0&src=http%3A%2F%2Fcdn.178hui.com%2Fupload%2F2018%2F0725%2F11401434764.png",goods_title:"Xiaomi/小米 小米8屏幕指纹版米9全面屏拍照游戏手机K20红米Note7P版",goods_price_now:2000,goods_price_old:2399,goods_remaining:200},
    { id:2,goods_title:"xiaomi/小米 红米Note 爱买不买哼",goods_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",goods_title:"Xiaomi/小米小米9骁龙855全面屏索尼4800万拍照游戏手机官方旗舰redmiK20",goods_price_now:2299,goods_price_old:2699,goods_remaining:3},
    { id:3,goods_title:"xiaomi/小米 红米Note 爱买不买哼",goods_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",goods_title:"Xiaomi/小米小米MIX 3滑盖全面屏旗舰骁龙845拍照游戏官方正品米9mix3",goods_price_now:2069,goods_price_old:2549,goods_remaining:8},
    { id:4,goods_title:"xiaomi/小米 红米Note 爱买不买哼",goods_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",goods_title:"Xiaomi/小米 6X智能AI双摄拍照拍照手机小米8官方旗舰店正品双卡双待红米note7",goods_price_now:1799,goods_price_old:2099,goods_remaining:112},
    { id:5,goods_title:"xiaomi/小米 红米Note 爱买不买哼",goods_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",goods_title:"Xiaomi/小米 小米Max3全面屏大屏大电量游戏智能拍照官方旗舰店正品米9note7",goods_price_now:1899,goods_price_old:2099,goods_remaining:100},
    { id:6,goods_title:"xiaomi/小米 红米Note 爱买不买哼",goods_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",goods_title:"Xiaomi/小米 MIX 2S全面屏骁龙845智能游戏商务AI双摄mix3米9官方旗舰",goods_price_now:2000,goods_price_old:2219,goods_remaining:99}

];
export default {
    data(){
        return{
            goodsArr
        }
    },
    methods:{
        getDetail(id){
            // this对象上有 $route参数对象  $router 导航对象
            this.$router.push("/home/goodsInfo/"+id);
        }
    }
}
</script>

<style lang="" scoped>
    .goodsList{
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }
    .goodItem{
        border: 1px solid #ccc;
        margin-bottom: 5px;
        padding: 2px;
        width: 49%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
    }
    .goodItem img{
        width:100%;
    }
    .goodItem h1{
        font-size: 20px;
    }
    .goodItem .now{
        font-weight: bold;
        font-size: 16px;
        color: red;
    }
    .goodItem .old{
        margin-left: 10px;
        font-size: 12px;
        text-decoration:line-through;
    }
    .goodItem .info{
         background-color: #ddd;
    }
    .goodItem .info p{
        margin: 0;
        padding: 5px;
    }
     .goodItem .info .sell{
         display: flex;
         justify-content: space-between;
     }
</style>
