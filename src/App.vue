<!--suppress ALL -->
<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
      <div style="height: 60px"></div>
    </div>
    <cfooter></cfooter>
    <cloading v-show='getLoading'></cloading>
  </div>
</template>
<script>
//  import cfooter from './components/footer'
//  import cloading from './components/loading'
  //建议使用下面这种方式来加载组件,这样可以实现路由懒加载,分js打包,按需加载
  const cfooter = resolve => require(['./components/footer'], resolve)
  const cloading = resolve => require(['./components/loading'], resolve)
  import store from './vuex/store';
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      cfooter,
      cloading
    },
    computed: mapGetters([
      'getLoading'
    ]),
    methods: mapActions([
      'updateLoading'
    ]),
    created () {
      this.updateLoading(false)
    },
    store
  }
</script>
<style>
  @import "../static/css/weui.min-gggeren-diy.css";
</style>
