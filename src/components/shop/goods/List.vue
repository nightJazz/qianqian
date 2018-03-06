<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/">首页</a> &gt;
        <a href="/goods.html">购物商城</a>
      </div>
    </div>

    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <!--类别菜单-->
          <div class="left-220" style="margin:0;">
            <div class="banner-nav">
              <ul>
                <!--此处声明下面可重复循环-->
                <li v-for="item in getList.catelist" :key="item.id">
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>{{item.title}}</span>
                    <p>
                      <span v-for="value in item.subcates" :key="value.id">
                        {{value.title}}
                      </span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <!--如有三级分类，此处可循环-->
                    <dl>
                      <dt>
                        <a href="/goods/42.html">{{item.title}}</a>
                      </dt>
                      <dd>
                        <a href="/goods/49.html" v-for="value in item.subcates" :key="value.id">
                          {{value.title}}
                        </a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <el-carousel style="height: 100%">
                <el-carousel-item v-for="item in getList.sliderlist" :key="item.id">
                  + <img :src="item.img_url" :alt="item.title"> + </el-carousel-item>
                + </el-carousel>
            </div>
          </div>
          <!--推荐商品-->
            <app-asid :getdata='getList.toplist'></app-asid>

          <!-- 中间下推荐部分 -->
            <app-main></app-main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  appAsid from './subcom/CommonAsid.vue'
  import appMain from './subcom/ListMain.vue'
export default {
  components: {
    appAsid,
    appMain
  },
  data() {
    return {
      getList: {
        catelist: [],
        sliderlist: [],
        toplist: []
      },

    };
  },
  methods: {
    goodsList() {
      this.$http.get(this.$api.goodsTop).then(res => {
        this.getList = res.data.message;
      });
    },

  },

  //钩子函数，在实例完成后马上执行
  created() {
    this.goodsList();
  }
};
</script>

<style scoped>

</style>
