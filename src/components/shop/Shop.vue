<template>
    <div>
      <!-- <app-header></app-header> -->
      <app-header></app-header>
      <router-view> </router-view>
      <app-footer></app-footer>

    </div>
</template>

<script>
import appHeader from './subcom/Header'
import appFooter from './subcom/Footer'
  export default {
      components:{
        appHeader,
        appFooter
      }
  }
</script>

<style scoped>

</style>
