<template>
    <div class="wrapper">
      <swiper :options="swiperOption">
      <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-image" :src="item.imgUrl">
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
        loop: true,
        autoplay: 2000
      },
      swiperList: [{
        id: '0001',
        imgUrl: require('../../../img/swiper0.jpg')
      }, {
        id: '0002',
        imgUrl: require('../../../img/swiper1.jpg')
      }, {
        id: '0003',
        imgUrl: require('../../../img/swiper2.jpg')
      }]
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
