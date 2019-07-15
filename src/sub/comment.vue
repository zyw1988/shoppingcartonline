<template>
    <div class="comment-box">
        <h3>评论列表</h3>
        <hr>
        <textarea placeholder="限制输入100字" v-model="newcmt"></textarea>
        
        <mt-button type="primary" size="large" v-on:click="addNewCom">发表评论</mt-button>
        
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in args" :key=item.id>
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp; 发表时间&nbsp;{{ item.user_time }}
                </div>
                <div class="cmt-body">
                    {{ item.con }}
                </div>
            </div>
        
     </div>
    </div>
</template>

<script>
var args = [
    { id:0,user_name:'匿名用户1',user_time:'2019-01-01',con:'测试文字1'},
    { id:1,user_name:'匿名用户2',user_time:'2019-01-01',con:'测试文字2'},
    { id:2,user_name:'匿名用户3',user_time:'2019-01-01',con:'测试文字3'},
    { id:3,user_name:'匿名用户4',user_time:'2019-01-01',con:'测试文字4'},
    { id:4,user_name:'匿名用户5',user_time:'2019-01-01',con:'测试文字5'},
];
export default {
    data(){
        return{
            args,
            newcmt:''
        }
    },
    methods:{
        /* showCmt(){
            console.log(this.newcmt);
            console.log(this.args)
        }, */
        addNewCom(){
            var newComItem = {
                id:this.args.length+1,
                user_name:'匿名用户Anglea',
                user_time:'2018-1-1',
                con:this.newcmt
            }
            this.args.unshift(newComItem);
            this.newcmt = "";
        }
    }
}
</script>

<style scoped>
.comment-box{
    width: 100%;
    height: 100%;
    padding: 5px;
}
    .cmt-list{
        font-size: 14px;
        margin-top: 10px;
    }
    .cmt-item{
          margin-bottom: 10px;
    }
    .cmt-body{
        line-height: 30px;
        text-indent: 2em;
        font-size: 16px;
    }
    .cmt-title{

        background-color: #ccc;
    }
</style>
