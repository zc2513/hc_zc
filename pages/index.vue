<template>
  <div style="background:#FBF5F5">
    <navSwiper :height="380" :is-radius="false" :lists="slideshow" />
    <comprehensive class="mt20" />
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
import navSwiper from '@/components/swiper/index'
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
    components: { navSwiper, company, fteam, fachieve, join, todo, cooperate, house, tender, talent, comprehensive, recommendInformation },
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    },
    data() {
        return {
            slideshow: [
                {
                    AttachPath: 'https://zy.hczhongchuang.com/WebFile/Pip/StaticResource/2019/5/5/a7982555-df49-4176-99d5-93e3ed3c9a6b01%E8%B5%B6%E9%9B%86%E7%BD%91.jpg'
                },
                {
                    AttachPath: 'https://zy.hczhongchuang.com/WebFile/Pip/StaticResource/2019/4/8/9c3b78bc-8f54-45d6-ac05-a176f6fea55e02%E6%8B%9B%E6%A0%87%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2.jpg'
                },
                {
                    AttachPath: 'https://zy.hczhongchuang.com/WebFile/Pip/StaticResource/2019/7/24/d7666185-3a69-43a5-97b6-888696394cae%E5%B9%BF%E5%91%8A%E5%9B%BE%E7%89%87.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
