<template>
  <div class="layouts-default">

    <hder />

    <headNav class="mt10" />
    <!-- 视图层 -->
    <nuxt class="zc-container" />
    <!-- 底部 -->
    <div style="background-color:#FFF;">
      <floor />
    </div>
  </div>
</template>
<script>
import floor from '@/components/floor/index'
// import navItem from '@/components/header/nav'
import hder from '@/components/header/header'
import headNav from '@/components/header/headNav'

export default {
    name: 'Layou',
    components: {
        hder,
        headNav,
        // navItem
        floor
    }
}
</script>
<style lang="scss" scoped>
    .layouts-default{
        background-color: #fbf6f5;
    }
</style>
