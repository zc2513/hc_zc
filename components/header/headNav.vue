<template>
  <div class="hfull zc-container headNav">
    <el-row class="hfull">
      <el-col :span="8" class="hfull flc-y top-logo pl15">
        <img src="../../assets/imgs/defaultlogo.jpg" alt="" srcset="">
        <img src="../../assets/imgs/gjrz.jpg" alt="" srcset="">
      </el-col>
      <el-col :span="16" class="hfull">
        <el-col :span="24" class="top-btn">
          <el-button type="warning" size="small" class="f14 mr10" @click="postDemand">免费发布需求</el-button>
          <el-button size="small" class="f14" @click="postDemand">免费官方推荐</el-button>
        </el-col>
        <el-col :span="24" class="top-nav-box">
          <div class="row-menu">
            <!-- <el-menu
              class="nav-header"
              mode="horizontal"
              :background-color="variables.fixHbac"
              :default-active="activeMenu"
              :collapse="false"
              :text-color="variables.fixHeaderTextColor"
              :unique-opened="true"
              :active-text-color="variables.fixHActiveText"
              :collapse-transition="false"
            >
              <nav-item
                v-for="route in routes"
                :key="route.path"
                :item="route"
                :base-path="route.path"
              />
            </el-menu> -->
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import navItem from '@/components/header/nav'
import variables from '~/style/variables.scss'

export default {
    name: 'HeadNav',
    components: {
        // navItem
    },
    data() {
        return {
            metaList: require('@/assets/json/routeMeta')
        }
    },
    computed: {
        variables() {
            return variables
        }
    },
    mounted() {
        console.log(this.metaList, 777)
    },
    methods: {
        postDemand() {
            this.$message('功能正在开发中...')
        }
    }
}
</script>

<style lang="scss" scoped>
.headNav {
    .top-logo {
        img {
            width: 100px;
            height: 65px;
        }
    }
    .top-btn{
        height: 50%;
        text-align: right;
        padding-top: 5px;
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
    .top-nav-box{
        height: 50%;
    }
}

.active {
  background: #f66a12;
  color: #fff !important;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

</style>
