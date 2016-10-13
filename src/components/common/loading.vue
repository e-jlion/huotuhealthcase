<template>
  <div v-if="loading" style="width: 100%;background: #ffffff; height: 60px; line-height: 60px; text-align: center;">
    <img v-if="isShowImage" src="/static/images/loadding.gif">
    <span style="font-size: 12px;">{{message}}</span>
  </div>
</template>
<script>
  export default {
    props:["loading","isShowImage","message"],
  }
</script>
