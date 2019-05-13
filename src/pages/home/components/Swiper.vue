<template>
    <div class="wrapper">
      <swiper :options="swiperOption">
      <!-- slides -->
        <swiper-slide>
          <img  class="swiper-image" src="../../../img/swiper0.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-image" src="../../../img/swiper1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-image" src="../../../img/swiper2.jpg" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
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
