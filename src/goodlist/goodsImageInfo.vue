<template>
    <div>
        <h2> 这是第 {{ id}}个商品详情页面</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    }
}
</script>

<style scoped>
    div{
        color: red;
    }
</style>

