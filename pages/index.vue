<template>
  <div class="">
    <company class="mb12" />
    <fteam class="mb12" />
    <fachieve class="mb12" />
    <join class="mb12" />
  </div>
</template>

<script>
import company from '@/components/IndexModel/fcompany'
import fteam from '@/components/IndexModel/fteam'
import fachieve from '@/components/IndexModel/fachieve'
import join from '@/components/IndexModel/join'
export default {
    components: { company, fteam, fachieve, join },
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    }
}
</script>

<style lang="scss" scoped>

</style>
