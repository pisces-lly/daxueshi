<template>
  <div class="home">
    <transition name="fade" @touchmove.stop.prevent>
    <!-- 这部分功能主要是关闭侧栏菜单，类似一层遮罩的效果 -->
      <div class="menu-mask" v-show="isRellyShow" @click="hideSide"></div>
    </transition>
    <transition name="slide-fade">
     <!-- 这里才是侧栏代码部分 -->
      <div class="side-content" v-show="isRellyShow">
     <!-- css transition动画 加深理解 -->
       <div class="name">大学仕</div>
       <group gutter="1rem">
         <cell title="我的消息" is-link>
           <div class="badge-value">
             <badge></badge>
           </div>
         </cell>
         <cell title="个人中心" is-link></cell>
         <cell title="设置" is-link></cell>
         <cell title="意见反馈" is-link></cell>
         <cell title="关于" is-link></cell>
         <divider></divider>
         <br><br>
         <x-button @click="showSignup" type="primary" link="/Signin" style="width:4.0rem;">登陆/注册</x-button>
         <br>
       </group>
      </div>
    </transition>
  </div>
</template>

<script>
import { Cell, Group, Badge, XButton, Divider } from 'vux'
export default {
  components: {
    Cell,
    Group,
    Badge,
    XButton,
    Divider
  },
  data () {
    return {
    }
  },
  methods: {
    hideSide: function () {
      this.$store.dispatch('hideSideBar')
    },
    showSignup: function () {
      this.$store.dispatch('showSignup')
    }
  },
  computed: {
    isRellyShow () {
      return this.$store.getters.isShowMethod
    }
  },
  mounted: function () {

  }
}
</script>

<style scoped>
  .menu-mask{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    opacity: 1;
    z-index:10;
    background:rgba(0,0,0,0.5);
  }
  .side-content{
    z-index: 11;
    position:fixed;
    width: 286px;
    height: 100%;
    background: #35495e;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-overflow-scrolling:touch;
  }
  .fade-enter-to, .fade-leave-to{
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
  .slide-fade-enter-to, .slide-fade-leave-to{
    transition: transform 0.3s;
    transform:translate(0px,0px);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
    -webkit-transform: translate(-286px,0px);
    transform: translate(-286px,0px);
    -webkit-transition:opacity 0.3s ease-in-out 0.3s,-webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s,transform 0.3s ease-in-out;
  }
  .badge-value {
    display: inline-block !important;
  }
  .name{
    float:left;
    font-size: 20px;
    color: #fff;
    margin-left: .2rem;
    margin-top: .3rem
  }
</style>
