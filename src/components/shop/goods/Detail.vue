<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a>
        <a href="/goods/42/1.html">商品详情</a>

      </div>
    </div>

    <!-- 商品详情 -->
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <!--页面左边-->
          <div class="left-925">
            <div class="goods-box clearfix">
              <!--商品图片-->
              <div class="pic-box">
                <div class="magnifier" id="magnifier1">
                  <div class="magnifier-container">
                    <div class="images-cover"></div>
                    <!--当前图片显示容器-->
                    <div class="move-view"></div>
                    <!--跟随鼠标移动的盒子-->
                  </div>
                  <div class="magnifier-assembly">
                    <div class="magnifier-btn">
                      <span class="magnifier-btn-left">&lt;</span>
                      <span class="magnifier-btn-right">&gt;</span>
                    </div>
                    <!--按钮组-->
                    <div class="magnifier-line">
                      <ul class="clearfix animation03">
                        <li v-for="item in top.imglist" :key="item.id">
                          <div class="small-img">
                            <img :src="item.original_path" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!--缩略图-->
                  </div>
                  <div class="magnifier-view"></div>
                  <!--经过放大的图片显示容器-->
                </div>
              </div>
              <!--/商品图片-->

              <!--商品信息-->
              <div class="goods-spec">
                <h1>{{top.goodsinfo.title}}</h1>
                <p class="subtitle">{{top.goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{top.goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{top.goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em class="price" id="commoditySellPrice">¥{{top.goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number size="medium" v-model="num5" :min='0'></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{top.goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div class="btn-buy" id="buyButton">
                        <button class="buy">立即购买</button>
                        <button class="add" @click='addcart'>加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <!--/商品信息-->
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <!--选项卡-->

                <el-tabs type="border-card">
                  <el-tab-pane label="商品介绍">
                    <div v-html='top.goodsinfo.content'></div>
                  </el-tab-pane>
                  <el-tab-pane label="商品评论">
                        <!--网友评论-->
                     <app-comment :id='id'></app-comment>
                  </el-tab-pane>

                </el-tabs>




            </div>

          </div>
          <!--/页面左边-->

          <!--页面右边-->
          <app-asid :getdata='top.hotgoodslist'></app-asid>
          <!--/页面右边-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// jq的轮播图
import "@/lib/imgzoom/css/magnifier.css";
import "@/lib/imgzoom/js/magnifier.js";
import $ from "jquery";

//左侧栏的组件
import appAsid from "./subcom/CommonAsid.vue";
import appComment from "./subcom/ConmmonComment.vue";
export default {
  data() {
    return {
      //url上的参数id
      id: this.$route.params.id,
      //数量按钮的步长
      num5: 0,
      //从后台获取回来的数据
      top: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      }
    };
  },
  components: {
    appAsid,
    appComment
  },
  methods: {
    //发送请求到后台获取商品的详情
    getData() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        if (res.data.status == 0) {
          this.top = res.data.message;
          // console.log(this.top);
        }
      });
    },
    addcart(){
      this.$store.commit('modify',{id:this.id,num:this.num5})
      this.num5=0;

    }
  },
  //在实例完成后，执行的函数
  created() {
    this.getData();

  },

  mounted() {

  },
  watch: {
  $route() {
    this.id=this.$route.params.id;
    this.getData();
  },
  top(){
    var magnifierConfig = {
      magnifier: "#magnifier1", //最外层的大容器
      width: 350, //承载容器宽
      height: 350, //承载容器高
      moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
      zoom: 5 //缩放比例
    };
    setTimeout(function() {
      var _magnifier = $().imgzoon(magnifierConfig);
    }, 500);
  }
}
};

</script>

<style scoped>

</style>
