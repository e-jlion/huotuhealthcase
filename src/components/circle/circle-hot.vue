<template>
  <div>
  <div class="weui_cells weui_cells_access" style="margin-top:0px; font-size:14px">
    <a class="weui_cell" href="geren-index10.html">
      <div class="weui_cell_bd weui_cell_primary">
        <p>热门推荐</p>
      </div>
      <div class="weui_cell_ft" style="font-size:12px">18个</div>
    </a>
  </div>
  <div class="custom-switch" style="padding:0px 0px; background-color:#fff; overflow:hidden">
    <div class="switch_slider" id="loopImgDiv" style="padding-bottom: 0px; padding-left: 2%; padding-top: 2%; padding-bottom: 2%; padding-right: 0px; background: #fff;">
      <div class="inner">
        <div class="switch-container">
          <div id="wrapperPanel" class="swiper-wrapper" style="height: auto;">
            <div class="swiper-slide" style="width: auto;">
              <a href="geren-index3.html">
                <div class="xjcma">
                  <span class="bn">养生</span>
                  <span class="bna">3232人已关注</span>
                  <div class="masksd"></div>
                  <img  src="/static/images/a1.jpg" style="width:100%; "/>
                </div>
              </a>
            </div>
            <div class="swiper-slide" style="width: auto;">
              <a href="geren-index3.html">
                <div class="xjcma">
                  <span class="bn">激情</span>
                  <span class="bna">3232人已关注</span>
                  <div class="masksd"></div>
                  <img  src="/static/images/a2.jpg" style="width:100%; "/>
                </div>
              </a>
            </div>
            <div class="swiper-slide" style="width: auto;">
              <a href="geren-index3.html">
                <div class="xjcma">
                  <span class="bn">运动</span>
                  <span class="bna">3232人已关注</span>
                  <div class="masksd"></div>
                  <img  src="/static/images/a3.jpg" style="width:100%; "/>
                </div>
              </a>
            </div>
            <div class="swiper-slide" style="width: auto;">
              <a href="geren-index10.html">
                <div class="xjcma">
                  <span class="bn">全部圈子</span>
                  <span class="bna" style="">查看</span>
                  <div class="masksd"></div>
                  <img  src="/static/images/a2.jpg" style="width:100%; "/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import swiper from 'swiper'
  export default {
    data () {
      return {}
    },
    created () {
      this.$nextTick(() => {
        var mySwiper = new Swiper('.switch-container', {
          pagination: '.swiper-pagination',
          slidesPerView:2.5,
          paginationClickable: true,
          spaceBetween: 10,
          freeMode: true,
          onInit: function (mySwiper) {

          }
        });
      })
    },
  }
</script>
