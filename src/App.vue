<template>
    <div class="container">
        <!-- 顶部 -->
            <mt-header fixed title="黑马程序员-Vue项目">
				<!-- 返回按钮 -->
				<span  slot="left" @click="goBack" v-show="flag">
					<mt-button icon="back" @click="show">返回</mt-button>
				</span>
				
			</mt-header>
        <!-- 中间路由展示区域 -->
       <transition mode="">
		    <router-view></router-view>
	   </transition>
        <!-- 底部  -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-itemzyw" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-itemzyw" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-itemzyw" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="mui-badge">{{ this.$store.getters.getAllCount}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-itemzyw" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>

export default {
    data(){
		return{
			flag:false
		}
	},
	created(){
		// 保证 在  非主页的地址刷新页面的时候 后退按钮显示正确
		this.flag = this.$route.path == '/home'?false:true;
	},
	methods:{
		show(){
			console.log(this)
		},
		goBack(){
			// 返回上一级地址，点击后退
			this.$router.go(-1);
		}
	},
	watch:{
		'$route.path':function(newVal){
			if(newVal == '/home'){
				// 当 url地址为 home的时候 隐藏
				this.flag = false;
			}else{
				this.flag = true;
			}
		}
	}
}
</script>

<style lang="">
    .container{
		padding: 0;
        padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
    }
  
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
		
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease;
	}
	.mui-bar-tab .mui-tab-itemzyw.mui-active{
		color: #007aff;
	}
	.mui-bar-tab .mui-tab-itemzyw{
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-itemzyw .mui-icon{
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-itemzyw .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>