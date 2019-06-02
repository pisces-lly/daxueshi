<template>
  <div class="icons">
    <swiper :options="SwiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-image">
          <img class="icon-imagecontent" :src='item.imgUrl' @click="ChangePage(item.name)"/>
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
  data () {
    return {
      iConList: [{
        id: '0001',
        imgUrl: require('../../../img/company.png'),
        desc: '公司',
        name: 'CompanyList'
      }, /* {
        id: '0002',
        imgUrl: require('../../../img/school.png'),
        desc: '学校'
      }, */{
        id: '0003',
        imgUrl: require('../../../img/major.png'),
        desc: '专业',
        name: 'Major'
      }, {
        id: '0004',
        imgUrl: require('../../../img/forum.png'),
        desc: '论坛',
        name: 'Forum'
      }, {
        id: '0005',
        imgUrl: require('../../../img/help.png'),
        desc: '帮助',
        name: 'Help'
      }, {
        id: '0006',
        imgUrl: require('../../../img/myinfo.png'),
        desc: '我的',
        name: 'My'
      }],
      SwiperOption: {
        autoplay: false
      }
    }
  },
  methods: {
    ChangePage: function (name) {
      this.$router.push({path: `${name}`})
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iConList.forEach((item, index) => {
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
