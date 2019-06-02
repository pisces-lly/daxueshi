<template>
  <div>
    <x-header title="阿里巴巴"></x-header>
    <group>
      <cell></cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, Cell } from 'vux'
import axios from 'axios'
export default {
  name: 'item.key',
  components: {
    XHeader,
    Group,
    Cell
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      var creator_ = to.params.id
      axios.get('https://api.bzqll.com/music/netease/search?key=579621905&s=' + creator_ + '&type=song&limit=20&offset=0').then((res) => {
        vm.songlikelist = res.data.data
      })
    })
  }
}
</script>

<style>

</style>
