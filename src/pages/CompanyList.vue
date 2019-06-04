<template>
  <div>
    <x-header title="公司列表"></x-header>
    <group v-for="item of list" :key="item.keyword" gutter="0">
      <cell :title="item.name" :link="`CompanyList/${item.keyword}`"></cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, Cell } from 'vux'
import axios from 'axios'
export default {
  components: {
    XHeader,
    Group,
    Cell
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/dxs/user/company.json').then(res => {
        this.list = res.data.CompanyList
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
