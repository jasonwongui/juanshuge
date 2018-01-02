<template>
  <div id="app">
    <router-view/>

    <div class="bottomBar">
      <router-link to="/home" class="bar home">
        <div class="icon"></div>
        <span>首页</span>
      </router-link>
      <router-link to="/me" class="bar me">
        <div class="icon"></div>
        <span>我</span>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bottomBar
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 49px
    background: white
    display: flex
    font-size: 0
    .bar
      flex: 1
      text-align: center
      .icon
        width: 24px
        height: 24px
        background: #F6C667
        margin: 6px auto 3px auto
      span
        font-size: 10px
        font-weight: 100
        line-height: 14px
        color: #F6C667
</style>
