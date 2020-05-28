<template>
  <!-- 关于部分 -->
  <div class="about-box">
    <div class="left">
      <!-- 关于 -->
      <div v-for="(ele,k) in listData" :key="k">
        <list :list="ele" />
      </div>
    </div>
    <div class="right">
      <!-- 联系人 -->
      <link-man />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import list from './list'
import linkMan from './linkman'
export default {
    components: {
        list, linkMan
    },
    data() {
        return {
            listData: [
                {
                    id: '1',
                    title: '关于我们',
                    data: []
                },
                {
                    id: '2',
                    title: '安全隐私',
                    data: []
                },
                {
                    id: '3',
                    title: '平台地图',
                    data: [
                        [{
                            NewsTitle: '首页',
                            link: '/'
                        }],
                        [{
                            NewsTitle: '企业',
                            link: '/SitePage/CompanyfindList.aspx'
                        }, {
                            NewsTitle: '团队',
                            link: '/gotomarket/jump'
                        }],
                        [{
                            NewsTitle: '项目',
                            link: '/SitePage/ProjectfindList.aspx'
                        }, {
                            NewsTitle: '需求',
                            link: '/SitePage/WorkList.aspx'
                        }],
                        [{
                            NewsTitle: '业绩',
                            link: '/SitePage/AchievefindList.aspx'
                        }, {
                            NewsTitle: '招标',
                            link: '/SitePage/TenderList.aspx'
                        }],
                        [{
                            NewsTitle: '资讯中心',
                            link: '/SitePage/NewsList.aspx'
                        }],
                        [{
                            NewsTitle: '网站地图',
                            link: '/WebSiteMap/Index'
                        }]
                    ]
                }
            ]
        }
    },
    computed: {
        ...mapState('Public', ['messageNum', 'AdList'])
    },
    watch: {
        messageNum: {
            handler(v) {
                if (!v) { return }
                const dataL = v.NewsQcListData.Rows || []
                dataL.forEach((item) => {
                    if (item.TypeId === 'ClassNews-04') {
                        this.listData[0].data.push(item)
                    } else if (item.TypeId === 'ClassNews-05') {
                        this.listData[1].data.push(item)
                    }
                })
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
.about-box{
    padding: 30px 0;
    border-top: 1px solid #dcdcdc;
    display: flex;
    >div{
        width: 50%;
    }
    .left{
        border-right: 1px solid #dcdcdc;
        display: flex;
        >div{
            width: 33%;
            display: flex;
            justify-content: center;
        }
    }
    .right{
        display: flex;
        justify-content: center;
    }
}
</style>
