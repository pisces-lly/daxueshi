<template>
  <div>
    <div class="title">
      <div class="line"></div>
      热门公司
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of companyList" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-salary-desc">平均月薪:</p>
          <p class="item-salary">{{item.salary}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeCompany',
  data () {
    return {
      companyList: [{
        id: '0001',
        imgUrl: require('../../../img/jingdong.png'),
        title: '京东',
        desc: '京东是中国最大的自营式电商企业，在线销售家电、手机、电脑、\n' +
          '服装、居家、母婴、美妆、个护、食品、旅游等13大类3,150万种SKU优质商品。',
        salary: '15000'
      }, {
        id: '0002',
        imgUrl: require('../../../img/tengxun.png'),
        title: '腾讯',
        desc: '深圳市腾讯计算机系统有限公司（腾讯）是一家民营IT企业，成立于' +
          '1998年11月29日，总部位于中国广东深圳，是中国最大的互联网综合服务提供商之一，' +
          '也是中国服务用户最多，最广的互联网企业之一',
        salary: '15000'
      }, {
        id: '0003',
        imgUrl: require('../../../img/huawei.png'),
        title: '华为',
        desc: '京华为技术有限公司是一家生产销售通信设备的民营通信科技公司，总部' +
          '位于中国广东省深圳市龙岗区坂田华为基地。华为的产品主要涉及通信网络中的交换网络、' +
          '传输网络、无线及有线固定接入网络和数据通信网络及无线终端产品，为世界各地通信运营商' +
          '及专业网络拥有者提供硬件设备、软件、服务和解决方案',
        salary: '15000'
      }]
    }
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
    height:1.6rem
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
      .item-salary-desc
        margin-top: .15rem
        font-size: .2rem
        color: #000
        float: left
      .item-salary
        font-size: .5rem
        color: chocolate
        float:left
        margin-left: .1rem
        margin-top: .05rem
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
