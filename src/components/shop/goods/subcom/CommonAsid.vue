<template>

 <div class="left-220">
  <div class="bg-wrap nobg">
    <div class="sidebar-box">
      <h4>推荐商品</h4>
     <ul class="side-img-list">
      <li v-for="(item,i) in getdata" :key="item.id">
        <div class="img-box">
          <label>{{i+1}}</label>
          <img :src="item.img_url">
        </div>
        <div class="txt-box">
          <!-- 修改的路径，因为商品需要随修改而修改页面 -->
          <router-link :to="{name:'detail',params:{id:item.id}}">{{item.title}}</router-link>
          <span>{{item.add_time | date}}</span>
        </div>
      </li>
    </ul>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  props: ["getdata"],

  filters: {
    date(getdate) {
      let date = new Date(getdate);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
  }
};
</script>

<style scoped>

</style>
