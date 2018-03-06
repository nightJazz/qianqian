<template>
  <div class="ListMain">
    <div class="section" v-for="item in dates" :key="item.level1cateid" >
    <!--子类-->
    <div class="main-tit" >
      <h2>{{item.catetitle}}</h2>
      <p>
        <a href="#"  v-for="value in item.level2catelist" :key="value.subcateid">
          {{value.subcatetitle}}
        </a>
      </p>
    </div>
    <!--/子类-->
    <div class="wrapper clearfix">
      <div class="wrap-box">
        <ul class="img-list">

          <li v-for="index in item.datas" :key="index.artID">
           <router-link :to="{name:'detail',params:{id:index.artID}}">
              <div class="img-box">
                <img :src="index.img_url">
              </div>
              <div class="info">
                <h3>{{index.artTitle}}</h3>
                <p class="price">
                  <b>¥{{index.market_price}}</b>元</p>
                <p>
                  <strong>库存 {{index.stock_quantity}}</strong>
                  <span>市场价：
                    <s>{{index.sell_price}}</s>
                  </span>
                </p>
              </div>

            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: [

      ]


    };
  },
  methods: {
    getMain() {
      this.$http.get(this.$api.goodsContent).then(res => {
        // console.log(res);
        if (res.data.status == 0) {
          this.dates = res.data.message;
        }
      });
    }
  },
  created() {
    this.getMain();
  }
};
</script>

<style scoped>

</style>
