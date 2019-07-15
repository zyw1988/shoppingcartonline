<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        科技
                    </a>
                    
                </div>
            </div>
        </div>

        <ul>
            <li v-for="item in imgSrc" :key="item.id">
                <img v-bind:src=" item.img_url">
            </li>
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui-master/dist/js/mui.min.js'

var imgSrc = [
    {id:0,title:"测试文字1",img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561538785920&di=3566ec58913b9e32365bbd739b0e65ad&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F24%2F20180824203843_ekfna.jpg",img_absract:"测试文字1测试文字1测试文字1"},
    {id:1,title:"测试文字2",img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561539040981&di=afef985bf7c9b18ac0af00e2a72b79fb&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170814%2Fb771e6f1d5bc44a9baef11cb033596f1.jpeg",img_absract:"测试文字2测试文字2测试文字2"},
    {id:2,title:"测试文字3",img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561539040981&di=af9c9833dda78b35e9e9f796a160d2f3&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F17db7fdabe9f3ea133314bd403ecbc5d.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2Bahg%2BWtkOmfrOmfrA%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_25%2Cx_16%2Cy_16",img_absract:"测试文字3测试文字3测试文字3"},
    {id:3,title:"测试文字4",img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561539040979&di=810fd7cdeea225da413997c371997a3e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F18%2F20180718223240_wfecl.jpg",img_absract:"测试文字4测试文字4测试文字4"},
    {id:4,title:"测试文字5",img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561539289412&di=290d8833fc94dd659c234d9bf8f5a3e7&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2F28570%2F28570992.jpg",img_absract:"测试文字5测试文字5测试文字5"}
];
export default {
    data(){
        return{
            imgSrc
        }
    },
    mounted(){
        // 当组建中的 DOM结构被渲染好之后并放到页面上之后，再执行
        mui('.mui-scroll-wrapper').scroll({
            deceleration:0.0005
        }); 
    }
}
</script>

<style scoped>
* { touch-action: pan-y; }
img[lazy="loading"]{
    width: 40px;
    height: 300px;
    margin: auto;
}
ul{
    padding:0 5px 5px;
    width: 100%;
}
li{
    margin-top: 5px;
width: 100%;
list-style: none;
}
img{
    font-size: 0;
    width: 100%;
}
</style>

