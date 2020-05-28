<template>
  <div class="box">
    <hder />
    <div class="zc-container">
      <div class="top-nav">
        <headNav />
      </div>
      <!-- 视图层 -->
      <nuxt class="zc-container" />
    </div>
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
    @import '@/assets/scss/default.scss';
    .box{
        background: #fbf5f5;
    .top-nav {
        height: 85px;
    }
</style>
