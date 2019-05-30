<template>
  <div>
    <x-header title="个人信息" ></x-header>
    <group gutter="0">
      <selector v-model="myuniversity" title="我的大学" :options="universityList" direction="rtl"></selector>
      <selector v-model="mymajor" title="我的专业" :options="majorList" direction="rtl"></selector>
      <selector v-model="mygrade" title="我的年级" :options="gradeList" direction="rtl"></selector>
      <selector v-model="mycompany" title="我的公司" :options="companyList" direction="rtl"></selector>
      <x-input title='我的积分' text-align="right" disabled placeholder="100"></x-input>
      <x-input title='我的薪资' text-align="right" placeholder=""></x-input>
      <x-input title='我的职位' text-align="right" placeholder=""></x-input>
    </group>
    <br><br><br>
    <x-button type="primary" style="width:4.0rem;">提交修改</x-button>
  </div>
</template>

<script>
import { XHeader, Group, XInput, Selector, XButton } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    XInput,
    Selector,
    XButton
  },
  data () {
    return {
      myuniversity: '华东师范大学',
      mymajor: '软件工程',
      mygrade: '2017级',
      mycompany: '华为',
      universityList: [
        '华东师范大学', '复旦大学', '上海交通大学', '同济大学'
      ],
      majorList: [
        '软件工程', '计算机科学'
      ],
      gradeList: [
        '2014级', '2015级', '2016级', '2017级', '2018级'
      ],
      companyList: [
        '华为', '百度', '腾讯', '其他'
      ]
    }
  }
}
</script>

<style>

</style>
