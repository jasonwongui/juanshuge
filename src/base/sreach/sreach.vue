<template>
  <div class="sreach">
    <input type="text" v-model="sreachText" class="sreach-btn" @blur="modalshow()" @focus="modahide()">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        sreachText: '输入ISBN、书名搜索'
      }
    },
    methods: {
      modalshow () {
        if (this.sreachText === '') {
          this.sreachText = '输入ISBN、书名搜索'
        }
      },
      modahide () {
        this.sreachText = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sreach
    background: white
    padding: 10px 8px
  .sreach-btn
    background: #f7f7f7
    width: 100%
    text-align: center
    font-size: 14px
    color: #bbbbbb
    line-height: 28px
    border-radius: 5px
    font-weight: 300
    outline: none
</style>
