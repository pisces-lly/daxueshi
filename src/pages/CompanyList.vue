<template>
  <div>
    <x-header title="公司列表"></x-header>
    <group v-for="item of CompanyList" :key="item.key">
      <cell :title="item.name" :link="`Company/${item.key}`"></cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, Cell } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell
  },
  data () {
    return {
      CompanyList: [{
        name: '阿里巴巴',
        key: 'alibaba'
      }]
    }
  }
}
</script>

<style>

</style>
