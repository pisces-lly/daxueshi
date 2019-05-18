<template>
  <div class="icons">
    <swiper :options="SwiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-image">
          <img class="icon-imagecontent" :src='item.imgUrl'/>
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      SwiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 20%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 22%
      .icon-image
        position: absolute
        top: .1rem
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .05rem
        .icon-imagecontent
          display: block
          margin: 0 auto
          height: 75%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .64rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
</style>
