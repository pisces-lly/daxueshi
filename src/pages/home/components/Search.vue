<!--具体搜索功能未实现
  详情见https://doc.vux.li/zh-CN/components/search.html
-->
<template>
  <div>
    <search
      placeholder="搜索公司/学校/专业"
      top="46px"
      >
    </search>
  </div>
</template>

<script>
import { Search } from 'vux'
export default {
  name: 'HomeSearch',
  components: {
    Search
  }
}
</script>

<style lang="stylus" scoped>

</style>
