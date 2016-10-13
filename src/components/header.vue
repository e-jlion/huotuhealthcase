<template>
  <div class="wihtab">
    <div class="weui_tab">
      <div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
        <router-link to="circleHot" active-class="weui_bar_item_on" class="weui_navbar_item">热门</router-link>
        <router-link to="index" active-class="weui_bar_item_on"  class="weui_navbar_item">圈子</router-link>
        <router-link to="attention" active-class="weui_bar_item_on"  class="weui_navbar_item">关注</router-link>
        <router-link to="science" active-class="weui_bar_item_on"  class="weui_navbar_item">科普</router-link>
        <!--<a href="geren-index7.html" class="weui_navbar_item"> 热门 </a>-->
        <!--<a v-link="{name: '/index', activeClass: 'weui_bar_item_on'}" class="weui_navbar_item weui_bar_item_on"> 圈子 </a>-->
        <!--<a v-link="{name: '/attention', activeClass: 'weui_bar_item_on'}" class="weui_navbar_item"> 关注 </a>-->
        <!--<a v-link="{name: '/science', activeClass: 'weui_bar_item_on'}"  class="weui_navbar_item"> 科普 </a>-->
      </div>
      <p style="height:42px"></p>
    </div>
  </div>
</template>
