<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='maxNumber'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input 
            id="test" 
            class="mui-input-numbox" 
            type="number" value="1"
            @change="countChanged" 
            ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
// 因为要将 number组件中的 选择的数字传给 goodsInfo页面，属于父子组件之间传值
// 1.不管点击 “+” 还是“-” 只要数值改变就要将数值传给 父组件，所以简单来说，就是 inuput框的值change就要触发传值事件
<script>
import mui from '../../lib/mui-master/dist/js/mui.min.js'

export default {
    props:["maxNumber"],
    data(){
        return{
            
        }
    },
    methods:{
        countChanged(){
            // change 就传值
            // console.log(this.$refs.numbox.value)
            this.$emit('getcount',parseInt(this.$refs.numbox.value))
        }
    },
    mounted(){
        mui('.mui-numbox').numbox();
    }
}
</script>
