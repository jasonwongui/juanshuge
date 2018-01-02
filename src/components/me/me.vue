<template>
  <div class="home">
    <top-bar :pageBack="false" :headTitle="'我'"></top-bar>
  </div>

</template>

<script type="text/ecmascript-6">
  import topBar from 'base/top-bar/top-bar'

  export default {
    components: {
      topBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
