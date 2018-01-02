<template>
  <div class="topBar">
    <div class="title">
      
      <div v-show="pageBack" class="back">
        <div class="icon"></div>
        <span class="text">返回</span>
      </div>

      <div class="titleText">{{headTitle}}</div>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      pageBack: {
        type: Boolean,
        default: true
      },
      headTitle: {
        type: String,
        default: '卷书阁'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  
  .title
    height: 44px
    background: white
    .back
      float: left
      line-height: 44px
      width: 60px
      font-size: 0px
      height: 44px
      .icon
        vertical-align: top
        display: inline-block
        width: 10px
        height: 17.5px
        background-size:10px 17.5px;
        background-repeat:no-repeat;
        bg-image('back')
        margin-top: 13px
        margin-left: 10px
      .text
        font-size: 16px
        margin-left: 5px 
    .titleText
      width: 40%
      margin: 0 auto
      text-align: center
      line-height: 44px
      font-size: 16px
      font-weight: 500
      color: #333

</style>
