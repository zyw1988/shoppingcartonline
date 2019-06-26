<template>
    <div >
        <!-- <div class="box">
            <div class="boxleft"></div>
            <div class="boxright">
                <div class="top">测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字</div>
                <div class="bottom">
                    <span>浏览数：1K+</span>
                    <span>评论数：1W</span>
                </div>
            </div>
        </div> -->
        <!-- MUI 的media-list组建 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsInfo/1">
                    <img class="mui-media-object mui-pull-left" src="../../lib/img/1.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间：16点07分</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsInfo/2">
                    <img class="mui-media-object mui-pull-left" src="../../lib/img/1.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>
                              <span>发表时间：16点07分</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsInfo/3">
                    <img class="mui-media-object mui-pull-left" src="../../lib/img/1.jpg">
                    <div class="mui-media-body">
                        CBD测试文字CBD测试文字CBD测试文字CBD测试文字CBD测试文字
                        <p class='mui-ellipsis'>
                              <span>发表时间：16点07分</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>

export default {
    
}
</script>

<style scoped>
  .mui-ellipsis{
      color: skyblue;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
  }
</style>

