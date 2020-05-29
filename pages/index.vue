<template>
  <div class="blue">
    首页
    <comprehensive />
    <recommend-information />
  </div>
</template>

<script>
import comprehensive from '@/components/IndexModel/comprehensive'
import recommendInformation from '@/components/IndexModel/recommendInformation'
export default {
    components: { comprehensive, recommendInformation },
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    }
}
</script>

<style lang="scss" scoped>
</style>
