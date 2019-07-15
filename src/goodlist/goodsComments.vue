<template>
    <div>
       <h2> 这是第 {{ id}}个商品详情页面</h2>
       <hr>
       <comment-box></comment-box>
    </div>
</template>

<script>
import commentBox from '../sub/comment.vue'

export default {
  
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        "comment-box":commentBox
    }
}
</script>


<style scoped>
    div h2{
        color: purple;
    }
</style>