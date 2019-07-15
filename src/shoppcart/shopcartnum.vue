<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input 
            id="test" 
            class="mui-input-numbox" 
            type="number" :value="initCount"
            ref="numbox"
            @change="countChange"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../lib/mui-master/dist/js/mui.min.js'

export default {
    props:["initCount","initId"],
    data(){
        return{
            
        }
    },
    methods:{
        countChange(){
            // console.log(this.$refs.numbox.value)
            // 每次数量值改变，都将对应的id 和对应的数量 提交到 store中，
            // 使用 commit 方法
            // 因为 在购物车页面更改数量是 直接赋值， 而在之前的家务购物车中是重复添加
            // 使用的是 += 所以需要另外的方法。
            this.$store.commit("updateCount",{
                id:this.initId,
                count:this.$refs.numbox.value
            });
        }
    },
    mounted(){
        mui('.mui-numbox').numbox();
    }
}
</script>

<style lang="">
    
</style>
