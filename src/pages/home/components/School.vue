<template>
  <div>
    <div class="title">
      <div class="line"></div>
      热门学校
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-major-desc">热门专业:</p>
          <p class="item-major" v-for="items of item.major" :key="items">{{items}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height: .6rem
    background: #ccc
    text-indent: .2rem
    .line
      width: 4px
      height: 16px
      background: #2c3e50
      font-size: 0
      display: inline-block
      margin-right: 5px
      position: relative
      top: 2px
  .item
    overflow: hidden
    display: flex
    height: 2.05rem
    .item-img
      width: 1.4rem
      height: 1.4rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .4rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .26rem
        font-size: .2rem
        color: #ccc
        ellipsis()
      .item-major-desc
        margin-top: .15rem
        margin-right: .1rem
        font-size: .2rem
        color: #000
        float: left
      .item-major
        margin-top: .1rem
        margin-right: .2rem
        background: #d811115c
        padding: .04rem .06rem
        border-radius: .06rem
        color: #fff
        float: left
      .item-button
        margin-top: .1rem
        margin-bottom: .2rem
        margin-right: .2rem
        background: #cacaca
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
        float: right
</style>
