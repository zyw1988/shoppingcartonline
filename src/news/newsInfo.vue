<template>
    <div>
        <h1>新闻标题---{{ id }}</h1>
        <p>
            <span>发表时间：2019年6月25日16:47:23</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <div class="content">
            测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
             测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
              测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
               测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
        </div>

       <!-- 引入 评论 子组件 -->
        <comment-box></comment-box>
    </div>
</template>


<script>
// 1.导入
import comment from '../../src/sub/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        // 注册子组件
        'comment-box':comment
    }
}
</script>

<style lang="" scoped>
    h1{
        text-align: center;
        color: red;
        margin-bottom: 15px;
    }
    p{
        display: flex;
        justify-content: space-between;
    }
    .content{
        padding: 0 5px 0 5px;
    }
</style>
