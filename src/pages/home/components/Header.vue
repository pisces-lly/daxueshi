<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入公司/学校/专业</div>
    <div class="header-right">
      搜索
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    text-align: center
    .header-left
      width: 1.05rem
      float: left
      .arrow-icon
        font-size: .3rem
        margin-left: -.08rem
    .header-input
      flex: 1
      color: #ccc
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-top: .12rem
      background: #ffffff
      border-radius: .1rem
    .header-right
      width: 0.9rem
      float: right
      text-align: center
</style>
