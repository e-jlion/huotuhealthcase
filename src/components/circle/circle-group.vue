<!--suppress ALL -->
<template>
  <div>
  <div class="weui_cells weui_cells_access xia" style="margin-top:0px; font-size:14px">
    <a class="weui_cell" href="javascript:void(0);">
      <div class="weui_cell_bd weui_cell_primary">
        <p>我的小组</p>
      </div>
      <div class="weui_cell_ft" style="font-size:12px"></div>
    </a>
  </div>
    <subLoading :loading="loading" :isShowImage="isShowImage" :message="message"></subLoading>
  <div class="cont-zhbox" v-for="item in testData">
    <div class="cont-zhbox-t" style="padding:5px 0px">
      <div class="cont-zhbox-t" style="border:0px; padding:5px 10px 10px 10px">
        <div class="zhbox">
          <div class="zh-tx">
            <img src="/static/images/j2.jpg">
          </div>
          <div class="zh-wz">
            <div class="zh-wz-x">
              <p class="zh-wz-name" style="color:#333">{{item.name}}</p>
            </div>
            <div class="njk fkfk">
              <a href="javascript:;" class="guanzudian" >
                <div class="weui_btn weui_btn_mini weui_btn_default" style="padding:0px 4px">
                  <img src="/static/images/ddicon/iconfont-gengduo-b.png" style="width:30px; margin-top:-6px"></div>
              </a>
            </div>
            <div class="zh-wz-time">
              <span style="float:left">3小时前</span>
              <span style="float:right"></span>
              <span style="float:right; margin-right:10px"></span>
              <p style="clear:both"></p>
            </div>
          </div>
        </div></div>
      <div class="weui_cells wala" style="margin-top:0px">
        <div class="weui_cell" v-for="list in item.list">
          <div class="weui_cell_bd weui_cell_primary">
            <p class="cont-zhbox-a sm">{{list.name}}</p>
            <div class="zhbox mtt">
              <div  class="zh-wz-time">
                <span style="float:left">{{list.userName}}</span>
                <span style="float:right">回复{{list.commentsAmount}}</span>
                <span style="float:right; margin-right:10px">浏览{{list.viewAmount}}</span>
                <p style="clear:both"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import circle from '../../api/circle'
  import subLoading from '../../components/common/loading'
  export default {
    data () {
      return {
        testData:[],
        loading:true,
        isShowImage:true,
        message:""
      }
    },
    components: {
      subLoading
    },
    methods: {
      getGroup:function () {
        return circle.getGroup();
      }
    },
    created () {
      this.getGroup().then((json) => {
        this.testData=json.resultData.circlelist;
        this.loading=false;
        this.isShowImage=false;
        this.message=""
      }).catch((error) => {
        this.loading=true;
        this.isShowImage=false;
        this.message="网络异常";
      });
    },
  }
</script>
