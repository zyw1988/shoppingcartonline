<template>
    <div class="goodsInfo_con">

        <div class="mui-card">
        
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper-box :lunboLists="args" ></swiper-box>
                </div>
            </div>
        
        </div>

        <div class="mui-card">
            <div class="mui-card-header"><h3>xiaomi/小米 红米Note 爱买不买哼</h3></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        活动价<span class="sell_price">￥2099</span>
                        销售价<span class="market_price">￥2799</span>
                    </p>
                    <p>购买数量 
                        <!-- 数字选择框  -->
                        <number-box @getcount="getSelectedCount" :maxNumber="maxNumber"></number-box>
                    </p>
                    

                    <p>
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button 
                            type="danger" 
                            @click="addToShopCart">加入购物车</mt-button>
                            <!-- 父子组建间传值 -->
                    </p>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="detail">
                        <p>商品货号</p>
                        <p>库存情况 {{maxNumber}}</p>
                        <p>上架时间</p>
                    </div>
                    <div class="buttons">
                    <mt-button 
                        type="primary" 
                        size="large" plain
                        @click="showImageInfoClick(id)">图文详情</mt-button>
                    <mt-button 
                        type="danger" 
                        size="large" plain
                        @click="showCommentsClick(id)">商品评论</mt-button>
                    </div>
                </div>
            </div>
        
        </div>

        <!-- 购物车 红色小球 -->
       <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <!-- 因为是半场 动画 使用钩子函数 -->
            <div class="ball" v-show="flage" ref="ball"></div>
       </transition>
    </div>
</template>

<script>
// 导入 轮播图组件  （在首页和商品详情中都用到了轮播图，考虑做成 子组件
import swiper from '../../src/sub/swipe.vue'
import numberBox from '../../src/sub/goodsShopcartNum.vue'

// 这里的参数名字 要和 轮播图中image引用的src属性变量名 要一致。
// 因为这里的数据是 自己手动敲的，所以不存在不一致的问题。如果是接口拿到的数据需要对数据进行处理
var args = [
    { id:0,args_title:"xiaomi/小米 红米Note 爱买不买哼",args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",args_title:"小米（Mi）小米Note 16G双网通版",args_price_now:1999,args_price_old:2699,args_remaining:1099},
    { id:1,args_title:"xiaomi/小米 红米Note 爱买不买哼",args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612765401&di=5f422dbfa2922b8a451d98fa5d0d9e85&imgtype=0&src=http%3A%2F%2Fcdn.178hui.com%2Fupload%2F2018%2F0725%2F11401434764.png",args_title:"Xiaomi/小米 小米8屏幕指纹版米9全面屏拍照游戏手机K20红米Note7P版",args_price_now:2000,args_price_old:2399,args_remaining:200},
    { id:2,args_title:"xiaomi/小米 红米Note 爱买不买哼",args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",args_title:"Xiaomi/小米小米9骁龙855全面屏索尼4800万拍照游戏手机官方旗舰redmiK20",args_price_now:2299,args_price_old:2699,args_remaining:3},
    { id:3,args_title:"xiaomi/小米 红米Note 爱买不买哼",args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",args_title:"Xiaomi/小米小米MIX 3滑盖全面屏旗舰骁龙845拍照游戏官方正品米9mix3",args_price_now:2069,args_price_old:2549,args_remaining:8},
    { id:4,args_title:"xiaomi/小米 红米Note 爱买不买哼",args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",args_title:"Xiaomi/小米 6X智能AI双摄拍照拍照手机小米8官方旗舰店正品双卡双待红米note7",args_price_now:1799,args_price_old:2099,args_remaining:112},
    { id:5,args_title:"xiaomi/小米 红米Note 爱买不买哼",args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",args_title:"Xiaomi/小米 小米Max3全面屏大屏大电量游戏智能拍照官方旗舰店正品米9note7",args_price_now:1899,args_price_old:2099,args_remaining:100},
    { id:6,args_title:"xiaomi/小米 红米Note 爱买不买哼",args_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561612605835&di=467abce4dda4e95551f9a01c08a43429&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190309%2F20190309132231_ec8deb1f98a1e4fdfe7e5bf14bda609a_2.jpeg",args_title:"Xiaomi/小米 MIX 2S全面屏骁龙845智能游戏商务AI双摄mix3米9官方旗舰",args_price_now:2000,args_price_old:2219,args_remaining:99}

];
export default {
    data(){
        return{
            id:this.$route.params.id,
            args,
            flage:false,
            selectedCount:1,
            maxNumber:60
        }
    },
    methods:{
        showImageInfoClick(id){
            this.$router.push({"name":"goodsImageInfo",params:{id}});

        },
        showCommentsClick(id){
             this.$router.push({"name":"goodsComments",params:{id}});
        },
        addToShopCart:function(){
            this.flage=!this.flage

            // 将数据交给 vuex
            var goodsList = { 
                id : this.id,
                count : this.selectedCount,
                price :2799,
                selected : true
                }
            this.$store.commit("addToCart",goodsList)
        },
        beforeEnter:function (el) {
            el.style.transform="translate(0,0)";
        },
        
        enter:function (el,done) {
            el.offsetWidth

            // 获取小球 的距离.因为各种设备的大小不同，固定数值会出现差错。所以从位移差入手。
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById('mui-badge').getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left ;
            const yDist =  badgePosition.top - ballPosition.top;
            
            // 将 距离差 字符串拼接进 
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            el.style.transition="all 1s linear"
            // 跟老师不一样的地方。
            el.addEventListener('transitionend',done)
        },
        afterEnter:function (el) {
            this.flage=!this.flage;
        },
        getSelectedCount(count){
            this.selectedCount = count;
            console.log(this.selectedCount)
        }
    },
    components:{
        'swiper-box':swiper,
        'number-box':numberBox
    }
}
</script>

<style lang="" scoped>
img{
    height: 100%;
}
.goodsInfo_con{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5px;
    background-color: #ccc;
}
.mui-card-content-inner{
    padding: 5px;
}
.market_price{
    text-decoration: line-through;
}
.mint-button{
    font-size: 18px;
}
.sell_price{
    font-weight: bold;
    font-size: 16px;
    color: red;
}
.mui-numbox{
    margin-bottom: 10px;
}
.detail{
    padding: 10px;
}
.buttons button{
    margin-top: 10px;
}
.buttons button babel{
    font-weight: 100;
}
.ball{
    background-color: red;
    position: absolute;
    top: 391px;
    left: 76px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    z-index: 99;
}
</style>