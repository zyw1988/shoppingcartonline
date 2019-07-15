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

import vuex from 'vuex'
Vue.use(vuex)
var store = new vuex.Store({
    state:{
        // 处理 增加至购物车的数据
        // { id:商品的id,count:商品的数量,price:商品的单价,selected：在购物车中是否被选中}
        cart:[]
    },
    mutations:{
        // 点击加入购物车，将商品信息保存到 store上
        addToCart(state,goodsList){
            var flag = false;

            state.cart.some(item=>{
                if(item.id === goodsList.id){
                    item.count+=parseInt(goodsList.count);
                    flag = true;
                    return true
                }
            })

            if(!flag){
                state.cart.push(goodsList)
            }
            // console.log(state.cart)
            // 加入本地存储 LocalStorage
            localStorage.setItem('cart',JSON.stringify(state.cart));
        },
        // 更新购物车中商品的数量
        updateCount(state,obj){
            // console.log(obj)
            state.cart.some(item=>{
                item.count = parseInt(obj.count);
            });
            localStorage.setItem('cart',JSON.stringify(state.cart));
        },
        // 删除数据
        removeFormCart(state,id){
            state.cart.some((item,i)=>{
                if(item.id == id){
                    state.cart.splice(i,1);
                    return true
                }
            });
            localStorage.setItem('cart',JSON.stringify(state.cart));
        },
        updateGoodsSelected(state,info){
            console.log(info)
            state.cart.some(item=>{
                if(item.id == info.id){
                    console.log('1'+info.selected)
                    item.selected = info.selected;
                }
            });
            localStorage.setItem('cart',JSON.stringify(state.cart));
        }

    },
    getters:{
        getAllCount(state){
        // 计算选中的总数
            var sum = 0;
            state.cart.forEach(item=>{
                sum+=item.count
            });
           return sum
        },
        getGoodsCount(){
            var obj = {};
            state.cart.forEach(item=>{
                obj[item.id] = item.count;
            });
            return obj;
        },
        getSelectedCount(state){
            var obj = {};
            state.cart.forEach(item=>{
                obj[item.id] = item.selected
            });
            return obj;
            //获取到 id-selected对应的一组对象。
            // 以id为名，以selected值为 值 ，形成新的键值对
        },
        getGoodsCountAndAmount(state){
            // 获取 勾选数量 和总价
            var obj = {
                count:0,
                amount:0
            };
            state.cart.forEach(item=>{
                if(item.selected){
                    obj.count +=item.count;
                    obj.amount +=item.price * item.count;
                }
            });
            console.log(obj,obj.count,obj.amount)
            return obj
        }
    }
})

new Vue({
    el:"#app",
    data:{
       
    },
    render:c=>c(App),
    router,
    store
})
