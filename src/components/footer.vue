<template>
  <div class="weui_navbar daohangs">
    <router-link to="/circleHot" active-class="weui_bar_item_on" class="weui_navbar_item">
      <p class="kimg dhshouyeicon"></p>
      <p>首页</p>
    </router-link>
    <a href="javascript:void(0);" class="weui_navbar_item ">
      <p class="kimg dhfenleiicon"></p>
      <p>分类</p>
    </a>
    <router-link to="/index" active-class="weui_bar_item_on" class="weui_navbar_item">
      <p class="kimg faxxx"></p>
      <p style="z-index:99999; position:absolute;left:0px;right:0px;">发现</p>
      <div style="position:absolute;bottom:0px;left:0px;right:0px;">
        <p class="faxxxicon"></p>
        <div style="position:absolute;bottom:0px;left:0px;right:0px; z-index:-1">
          <p style=" height:5.5em; text-align:center; margin:0 auto;background-color:#fff; border-radius:100%; border:1px solid #eee">
          </p> </div>
      </div>
    </router-link>
    <router-link to="/science" active-class="weui_bar_item_on" class="weui_navbar_item">
      <p class="kimg dhgouwucheicon"></p>
      <p>购物车</p>
    </router-link>
    <router-link to="/admin/index" active-class="weui_bar_item_on" class="weui_navbar_item">
        <p class="kimg dhzhongxinicon"></p>
        <p>我的</p>
    </router-link>
 </div>
</template>
