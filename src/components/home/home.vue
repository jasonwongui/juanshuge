<template>
  <div class="home">
    <top-bar :pageBack="false" class="topBar"></top-bar>
    <search></search>
    
    <div class="listScroll-wrap">
    <div ref="listWrapper" class="listScroll">
      <div>
      <div class="bookList">
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
        <div class="bookListItem">
          <div class="item">
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
            <div class="bookItem"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import topBar from 'base/top-bar/top-bar'
  import Search from 'base/sreach/sreach'
  import BScroll from 'better-scroll'

  export default {
    created () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll () {
        this.listScroll = new BScroll(this.$refs.listWrapper, {
          click: true,
          scrollY: true
        })
      }
    },
    components: {
      topBar,
      Search
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

.listScroll-wrap
  position: fixed
  top: 92px
  bottom: 49px
  width: 100%
  .listScroll
    height: 100%
    overflow: hidden
    .bookList
      width: 100%
      display: flex
      flex-wrap: wrap
      background: white
      .bookListItem
        flex: 0 0 33.33%
        width: 10px
        padding: 12px 0
        .item
          width: 89px
          height: 117px
          padding: 1px 0 0 1px
          margin: 0 auto
          background: white
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1)
          .bookItem
            width: 42px
            height: 56px
            float: left
            margin: 1px
            background: #f5f5f5
</style>
