<template>
  <div>
    <x-header>
      <span>大学仕</span>
      <x-icon @click="showSide" slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <side-bar></side-bar>
    <home-search></home-search>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-company></home-company>
    <home-school></home-school>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import SideBar from './components/Sidebar'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeCompany from './components/Company'
import HomeSchool from './components/School'
export default {
  name: 'Home',
  components: {
    XHeader,
    SideBar,
    HomeSearch,
    HomeSwiper,
    HomeIcons,
    HomeCompany,
    HomeSchool
  },
  data () {
    return {

    }
  },
  methods: {
    showSide: function () {
      this.$store.dispatch('showSideBar')
    }
  }
}
</script>

<style>

</style>
