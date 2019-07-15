<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboLists" :key="item.id">
                <img :src="item.args_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    // 轮播图的数据 由 引用该组件的传入数据，
    // swipe组件通过 props接收
    props:["lunboLists"]
}
</script>

<style scoped>
    .mint-swipe{
        width: 100%;
        height: 200px;
    }
    .mint-swipe img{
        width: 100%;
        height: 100%;
    }
    .mint-swipe-item{
        overflow:hidden;
        text-align: center;
        line-height: 200px;
        font-size: 40px;
        color: #fff;
    }
</style>


