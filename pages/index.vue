<template>
  <div style="background:#FBF5F5">
    <comprehensive />
    <el-row :gutter="20">
      <el-col :span="12">
        <company class="mb12" />
      </el-col>
      <el-col :span="12">
        <fteam class="mb12" />
      </el-col>
      <el-col :span="12">
        <fachieve class="mb12" />
      </el-col>
      <el-col :span="12">
        <join class="mb12" />
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="8">
        <todo class="mb15" />
        <cooperate />
      </el-col>
      <el-col :span="8">
        <house class="mb15" />
        <tender />
      </el-col>
      <el-col :span="8">
        <talent />
      </el-col>
    </el-row>
    <recommendInformation />
  </div>
</template>

<script>
import comprehensive from '@/components/IndexModel/comprehensive'
import recommendInformation from '@/components/IndexModel/recommendInformation'
import company from '@/components/IndexModel/fcompany'
import fteam from '@/components/IndexModel/fteam'
import fachieve from '@/components/IndexModel/fachieve'
import join from '@/components/IndexModel/join'
import todo from '@/components/IndexModel/todo'
import cooperate from '@/components/IndexModel/cooperate'
import house from '@/components/IndexModel/house'
import tender from '@/components/IndexModel/tender'
import talent from '@/components/IndexModel/talent'
export default {
    components: { company, fteam, fachieve, join, todo, cooperate, house, tender, talent, comprehensive, recommendInformation },
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    }
}
</script>

<style lang="scss" scoped>
</style>
