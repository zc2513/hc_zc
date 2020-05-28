<template>
  <div class="blue h400">
    首页
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    }
}
</script>

<style lang="scss" scoped>

</style>
