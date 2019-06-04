<template>
  <div>
    <x-header :title="list.name"></x-header>
    <group gutter="0" label-width="5em">
      <cell :value="list.desc">
        <img slot="icon" width="50" :src="list.src"/>
      </cell>
    </group>
    <group gutter="0">
      <v-chart
        :data="data"
        :padding="[20, 'auto']">
        <v-tooltip disabled />
        <v-scale y :options="yOptions" />
        <v-pie :radius="0.85" :inner-radius="0.63" series-field="name" :colors="['#FE5D4D','#FEAB3D','#F1FE56','#2DFE97','#3BA4FF','#737DDE','#EB74FE',]" />
        <v-legend :options="legendOptions" />
        <v-guide type="html" :options="htmlOptions" />
      </v-chart>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, Cell, Panel, VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale } from 'vux'
import axios from 'axios'
const data = [
  { name: '0-5k', percent: 20, a: '1' },
  { name: '5~8k', percent: 18, a: '1' },
  { name: '8~10k', percent: 9, a: '1' },
  { name: '10~12k', percent: 11, a: '1' },
  { name: '12~15k', percent: 12, a: '1' },
  { name: '15~20k', percent: 12, a: '1' },
  { name: '>20k', percent: 17, a: '1' }
]
const map = {}
data.map(obj => {
  map[obj.name] = obj.percent + '%'
})
export default {
  components: {
    XHeader,
    Group,
    Cell,
    Panel,
    VChart,
    VLine,
    VScale,
    VTooltip,
    VArea,
    VLegend,
    VBar,
    VPie,
    VGuide
  },
  data () {
    return {
      type: '1',
      list: [],
      lists: [],
      map,
      htmlOptions: {
        position: ['50%', '45%'],
        html: `
          <div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">平均月薪</div>
            <div style="font-size: 24px">¥11488</div>
          </div>`
      },
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      data
    }
  },
  props: {
    keyword: String
  },
  mounted () {
    axios.get('/dxs/user/company.json').then(res => {
      let datas = res.data.CompanyList
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].keyword === this.keyword) {
          this.list = datas[i]
        }
      }
    })
  }
}
</script>

<style>

</style>
