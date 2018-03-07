<template>
  <div>
    <!-- 导航栏 -->
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
                        <li>
                          <div class="small-img">
                            <img src="images/1.png" />
                          </div>
                        </li>
                        <li>
                          <div class="small-img">
                            <img src="images/2.png" />
                          </div>
                        </li>
                        <li>
                          <div class="small-img">
                            <img src="images/3.png" />
                          </div>
                        </li>
                        <li>
                          <div class="small-img">
                            <img src="images/4.png" />
                          </div>
                        </li>
                        <li>
                          <div class="small-img">
                            <img src="images/1.png" />
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
              <div class="goods-spec" >
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
                        <el-input-number size="medium" v-model="num5" ></el-input-number>
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
                        <button class="buy" >立即购买</button>
                        <button class="add" >加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>

              </div>
              <!--/商品信息-->
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <!--选项卡-->
              <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                <ul>
                  <li>
                    <a class="selected" href="javascript:;">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" class="">商品评论</a>
                  </li>
                </ul>
              </div>
              <!--/选项卡-->

              <!--选项内容-->
              <div class="tab-content entry" style="display:block;">
                内容
              </div>

              <div class="tab-content" style="display: block;">
                <!--网友评论-->
                <div class="comment-box">
                  <!--取得评论总数-->
                  <form id="commentForm" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </form>
                  <ul id="commentList" class="list-box">
                    <p style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                    <li>
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>匿名用户</span>
                          <span>2017/10/23 14:58:59</span>
                        </div>
                        <p>testtesttest</p>
                      </div>
                    </li>
                    <li>
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>匿名用户</span>
                          <span>2017/10/23 14:59:36</span>
                        </div>
                        <p>很清晰调动单很清晰调动单</p>
                      </div>
                    </li>
                  </ul>
                  <!--放置页码-->
                  <div class="page-box" style="margin:5px 0 0 62px">
                    <div id="pagination" class="digg">
                      <span class="disabled">« 上一页</span>
                      <span class="current">1</span>
                      <span class="disabled">下一页 »</span>
                    </div>
                  </div>
                  <!--/放置页码-->
                </div>

                <!--/网友评论-->
              </div>

            </div>

          </div>
          <!--/页面左边-->

          <!--页面右边-->
          <app-asid :getdata="top.hotgoodslist"></app-asid>
          <!--/页面右边-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import magcss from "@lib/imgzoom/css/magnifier.css";
// import magjs from "@lib/imgzoom/js/magnifier.js";

import appAsid from "./subcom/CommonAsid.vue";
export default {
  data(){
    return{
      id:this.$route.params.id,
      num5: 1,
      top:{
        goodsinfo:{},
        imglist:[],
        hotgoodslist:[]
      }
    }
  },
  methods:{
    getData(){
      this.$http.get(this.$api.goodsDetail+this.id).then(res=>{
        if(res.data.status==0){
          this.top=res.data.message;
          // console.log(this.top);
        }
      })
    }
  },
  created(){
    this.getData();
  },
  components: {
    appAsid
  },
};
</script>

<style scoped>

</style>
