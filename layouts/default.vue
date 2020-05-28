<template>
  <div>
    <hder />
    <div class="zc-container">

      <div class="nav-header-container" :style="{ backgroundColor: variables.hBgc }">
        <el-menu
          class="nav-header zc-container"
          style="margin:0 auto;"
          mode="horizontal"
          :background-color="variables.hBgc"
          :default-active="activeMenu"
          :collapse="false"
          :text-color="variables.hText"
          :unique-opened="true"
          :active-text-color="variables.hActiveText"
          :collapse-transition="false"
        >
          <nav-item
            v-for="route in routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
          />
        </el-menu>
      </div>
      <!-- 视图层 -->
      <nuxt class="zc-container mt16" />

    </div>
    <!-- 底部 -->
    <div style="background-color:#FFF;">
      <floor />
    </div>
  </div>
</template>
<script>
import floor from '@/components/floor'
import navItem from '@/components/header/nav'
import hder from '@/components/header/header'
import variables from '~/style/variables.scss'

export default {
    name: 'Layou',
    components: {
        hder,
        navItem,
        floor
    },
    computed: {
        variables() {
            return variables
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/default.scss';
</style>
