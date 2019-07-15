<template>
    <div>
        <!-- 购物车列表区域 -->
         <div class="mui-card">
            <div class="mui-card-content">
                <!-- v-for="item in goodsList" :key="item.id"-{{ item.id}}{{ item.price }}{{ $store.getters.getGoodsCount }} -->
                <div class="mui-card-content-inner" v-for="(item,i) in goodsList" :key="item.id" >
                   <mt-switch 
                    v-model="$store.getters.getSelectedCount[item.id]"
                    @change="selectedChange(item.id,$store.getters.getSelectedCount[item.id])"></mt-switch>
                   <img src="../../lib/img/1.jpg" alt="">
                   <div class="goodsInfo">
                       <h4>商品序列号：00101011-{{ item.id}}</h4>
                       <p>
                           <span class="price">￥{{ item.price }}</span>
                           <shopcartnum :initCount="item.count" :initId="item.id"></shopcartnum>
                           <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                       </p>
                   </div>
                </div>


            </div>
        </div>

        <!-- 结算 显示总金额区域 -->
         <div class="mui-card">
                <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <div class="left">
                       <p>总计（不含运费）</p>
                       <p>已勾选商品 
                           <span class="all_count">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，共计
                           <span class="all_price">￥{{$store.getters.getGoodsCountAndAmount.amount }}</span> 元</p>
                   </div>

                   <div class="right">
                       <mt-button type="danger">去结算</mt-button>
                   </div>
                </div>
            </div>
        </div>
        <p>{{ $store.getters.getSelectedCount}}</p>
        <p>{{ $store.getters.getGoodsCountAndAmount}}</p>
    </div>
</template>

<script>
import shopcartnum from '../shoppcart/shopcartnum.vue'

export default {
    data(){
        return{
            idArr:[],
            goodsList:[]
        }
    },
    created(){
        this.getAllGoods();
    },
    components:{
        shopcartnum
    },
    methods:{
        // 获取加入购物车的商品列表
        getAllGoods(){
            console.log(this.$store.state.cart)
            this.$store.state.cart.forEach(item => {
               var t_id = item.id;
               var t_price=item.price;
               var t_count = item.count;
               var tempObj = {
                   id:t_id,
                   price:t_price,
                   count:t_count
               }
              this.goodsList.push(tempObj);
              console.log(this.goodsList)
            });
            

            // this.idArr.forEach(item=>{
            //     var temp = {
            //         id:item,
            //         price:"￥2999",
            //         // count需要从
            //         count:1
            //     }
            //     this.goodsList.push(temp);
            //     console.log(this.goodsList)

                // 如何获取商品的数量？
                // 创建空对象，循环cart数组，把当前循环商品的id作为对象属性名，
                // count 作为对象的属性值，这样当把所有商品循环一遍就会得到一个对象
                // {1:3,2:4,3:10,4:9s}
            // });
        },
        remove(id,index){
            // 1.其中，id是用来删除store中的数据，
            // index是用来删除当前组件循环的数组goodsList中对应的数据
            this.goodsList.splice(index,1);
            // 2.删除 store中的数据
            this.$store.commit("removeFormCart",id);
        },
        selectedChange(id,value){
           console.log(id,"--",value)
           this.$store.commit("updateGoodsSelected",{
               id:id,
               selected:value
            });
        }
    }
}
</script>

<style scoped>
    .mui-card-content-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mui-card-content-inner img{
        width: 50px;
        height: 50px;
    }
    .price,
    .all_count,
    .all_price{
        font-weight: bold;
        color: red;
    }

</style>

