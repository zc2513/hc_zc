<template>
  <div class="hfull zc-container headNav">
    <el-row style="height:83px;">
      <el-col :span="8" class="hfull top-logo  f-y-e">
        <div class="ml15 mb10 flsb" style="width:220px;height:44px;">
          <div style="width:136px;">
            <img src="../../assets/imgs/defaultlogo.jpg">
          </div>
          <div style="width:66px;">
            <img src="../../assets/imgs/gjrz.jpg">
          </div>
        </div>
      </el-col>
      <el-col :span="16" class="f-y-sb hfull">
        <div class="t-r top-btn">
          <el-button size="mini" type="warning" class="f14 mr10" @click="postDemand">免费发布需求</el-button>
          <el-button size="mini" class="f14" @click="postDemand">免费官方推荐</el-button>
        </div>
        <div id="app" style="height:36px;">
          <div class="nav-header-container wfull">
            <el-menu
              class="nav-header sin-container"
              mode="horizontal"
              :background-color="variables.hBgc"
              :text-color="variables.hText"
              :active-text-color="variables.hActiveText"
              :default-active="activeMenu"
              :collapse="false"
              :unique-opened="true"
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
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navItem from '@/components/header/nav'
import variables from '~/style/variables.scss'
import metas from '@/assets/json/routeMeta'
export default {
    name: 'HeadNav',
    components: {
        navItem
    },
    computed: {
        variables() {
            return variables
        },
        routes() {
            const routeList = this.$router.options.routes
            const newRoutes = this.addRule(routeList)
            this.addfakeRoute(this.fakeRoute, newRoutes)
            this.addSort(newRoutes)
            newRoutes.sort(({ sole: a }, { sole: b }) => a - b)
            return newRoutes
        },
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            if (meta.activeMenu) { // 子项的默认选中项路由
                return meta.activeMenu
            }
            return path
        }
    },
    methods: {
        addRule(routes) {
            return routes.map((item) => {
                const { name, children, path } = item
                if (path.startsWith(':')) {
                    item.hidden = true
                }
                if (name) {
                    const itemMeta = metas[name]
                    if (!itemMeta) {
                        console.warn(`警告：未在metas中找到key为 ${name} 的定义`)
                    }
                    // if (itemMeta.addTo) {
                    //     const names = name.includes('-') ? (name.split('-').slice(0, -1)).join('-') : ''
                    //     this.fakeRoute[names] = itemMeta.addTo
                    // }
                    if (children && children.length) {
                        return { ...item, ...itemMeta, children: this.addRule(children) }
                    } else {
                        return { ...item, ...itemMeta }
                    }
                } else if (children && children.length) {
                    return { ...item, children: this.addRule(children) }
                }
            })
        },
        addfakeRoute(fakeRoute, newRoutes) {
            for (const name in fakeRoute) { // 追加路由处理--只追加到三级路由
                const names = name.split('-')
                newRoutes.forEach((e) => {
                    if ((e.path === `/${names[0]}` || e.path === name) && e.children) {
                        if (names.length === 1) { // 二级路由
                            e.children = [...e.children, ...fakeRoute[names.join('-')]]
                        }
                        if (names.length === 2) { // 三级路由
                            e.children.forEach((item) => {
                                if (item.path === name[2] && item.children) {
                                    item.children = [...item.children, ...fakeRoute[names.join('-')]]
                                }
                            })
                        }
                    }
                })
            }
        },
        addSort(newRoutes) {
            for (const item of newRoutes) {
                const { sole, children } = item
                if (!sole && children && children.length) {
                    const { sole, meta } = children[0]
                    item.sole = sole
                    if (!item.meta) item.meta = meta || {}
                    children.sort(({ sole: a }, { sole: b }) => a - b)
                    this.addSort(children)
                } else if (children && children.length) {
                    this.addSort(children)
                }
            }
        },
        postDemand() {
            this.$message('功能正在开发中...')
        }
    }
}
</script>

<style lang="scss" scoped>
.headNav {
    background: #ffffff;
    .top-logo img{
        width: 100%;
        height: 100%;
    }
    .top-btn{
        /deep/ .el-button--warning {
            color: #FFF;
            background-color: #f69900;
            border-color: #f69900;
        }
        /deep/ .el-button--warning:hover {
            background-color: #fab23e;
            border-color: #fab23e;
        }
        /deep/ .el-button--default {
            color: #FFF;
            background-color: #bb8730;
            border-color: #bb8730;
        }
        /deep/ .el-button--default:hover {
            background-color: #d1a252;
            border-color: #d1a252;
        }
    }
}

.active {
  background: #f66a12;
  color: #fff !important;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

</style>
