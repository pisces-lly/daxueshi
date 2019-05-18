<template>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-image" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>>   .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
    bottom: 20px
  .wrapper >>>  .swiper-pagination-bullet
    background: #ffffff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 37.25%
    background: #eee
    .swiper-image
      width: 100%
</style>
