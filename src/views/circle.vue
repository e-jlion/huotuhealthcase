<template>
  <div>
  <cheader></cheader>
  <circleBanner></circleBanner>
  <circleGroup></circleGroup>
  </div>
</template>
<script>
  import circleBanner from '../components/circle/circle-banner'
  import circleGroup from '../components/circle/circle-group'
  import cheader from '../components/header'
  import circle from '../api/circle'

  export default {
    components: {
      cheader,
      circleBanner,
      circleGroup
    },
  }
</script>
