<template>
  <div class="zc-header-box">
    <div class="zc-container lh40 flsb f12">
      <div class="flc-y">
        <svg-icon icon-class="hadress" class="f18 ml10 mr5" />&nbsp;
        <span class="">{{ currentCityName }}
          <el-popover
            v-model="visible"
            placement="top-start"
            width="270"
            trigger="hover"
            :visible-arrow="false"
            popper-class="popper-header-cls"
          >
            <i class="line" style="left:0;" />
            <div class="hideBlock f12" style="margin: 0;color:#999;">
              <a
                v-for="item in SubstationList"
                :key="item.ReionCode"
                :class="['cursor','ml5','mr5',{'active':item.active}]"
                :href="[item.Authority+'?Switch=1']"
                :ReionCode="item.ReionCode"
              >
                {{ item.RegionName }}
              </a>
            </div>
            <el-button slot="reference" :class="['cursor','switchPopover',{'white':visible}]">[切换分站]</el-button>
          </el-popover>
        </span>
      </div>
      <div class="t-r navPop flc-y f666">
        <template v-if="!userNum">
          <span>请&nbsp;</span><a :href="loginUrl" class="cursor fbd74f9">登录</a>
          <a :href="Register" class="cursor fbd74f9 ml15">免费注册</a>
        </template>
        <template v-else>
          <span> &nbsp;&nbsp; {{ userName }} &nbsp;&nbsp;&nbsp;</span>
          <a class="fbd74f9" href="/Member/MessageList.aspx?ids=11&subs=110306">
            <svg-icon icon-class="horn" class="f18" style="color:#f66a12;position:relative;top:2px;" />
            消息<span class="newsto f12">{{ msgCount }}</span>&nbsp;&nbsp;
          </a>
          <a class="fbd74f9 ml10" href="javascript:void(0)" @click="logout()">退出登录</a>
        </template>
        <nuxt-link class="fbd74f9 ml15" to="">商家入驻</nuxt-link>
        <span class="cursor">
          <el-popover
            v-model="viss"
            placement="bottom-end"
            width="275"
            trigger="hover"
            :visible-arrow="false"
            popper-class="popper-header-cls"
          >
            <i class="line" style="right:0;" />
            <div class="webNavg f12" style="margin: 0;right:0;color:#999;">
              <span v-for="item in webnav" :key="item.path" class="cursor  ml5 mr5">{{ item.name }}</span>
            </div>
            <el-button slot="reference" :class="['cursor','switchPopover',{'white':viss}]">网站导航</el-button>
          </el-popover>
        </span>
        <el-dropdown placement="bottom" popper-class="bbq">
          <span class="el-dropdown-link f666">
            客服中心
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in customerCList" :key="index">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-popover
          v-model="vissFocus"
          placement="bottom-end"
          width="275"
          trigger="hover"
          :visible-arrow="false"
          popper-class="popper-header-cls"
        >
          <i class="line" style="right:0;" />
          <div class="webNavg f12" style="margin: 0;right:0;color:#999;">
            哈哈哈哈哈哈哈
          </div>
          <el-button slot="reference" :class="['cursor','switchPopover',{'white':vissFocus}]">关注我们</el-button>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Hder',
    // eslint-disable-next-line vue/require-prop-types
    props: ['userName', 'userNum', 'cityName'],
    data() {
        return {
            visible: false, // 切换分站
            viss: false, // 网站导航
            vissFocus: false, // 关注我们
            SubstationList: [
                {
                    Authority: 'https://www.hczhongchuang.com',
                    ReionCode: '100000',
                    RegionName: '全国',
                    active: true
                },
                {
                    Authority: 'https://nmg.hczhongchuang.com',
                    ReionCode: '150000',
                    RegionName: '内蒙古'
                }
            ], // 所有站点数据
            webnav: require('./webnav.json')[0].webnav,
            msgCount: 0, // 消息总数
            currentCityName: '全国',
            loginUrl: '',
            Register: '',
            customerCList: require('./webnav.json')[0].customerCList
        }
    }
}
</script>

<style lang="scss" scoped>
.zc-header-box {
  background-color: #f2f2f2;
    //切换站点按钮样式
    .switchPopover{
        background:none;
        border:none;
        width: 75px;
        padding-left:0;
        padding-right:0;
        border-radius: 0;
        &:hover{
            @extend .white;
            border-top: 0;
            border-bottom:0;
        }
    }
    .white{//按钮hover样式（网站导航/地址）
        background:#fff;
        border:solid 1px #ccc;
        border-top:none;
        border-bottom:none;
    }
}
</style>
<style lang="scss">

.popper-header-cls {
  //  弹出层样式
    top: 20px !important;
    border-color: #ccc;
    border-radius: 0;
    position: relative;
    .line {
        position: absolute;
        width: 73px;
        height: 4px;
        background-color: #fff;
        top: -2px;
    }
    .hideBlock {//分站的弹出
        a{
            padding:3px 5px;
            color:#666;
            &:hover{
                @extend .active;
            }
        }
        .active{
            color: #fff;
            background: #f65f10;
        }
    }
    .webNavg{//导航弹出
        span{
            display: block;
            float: left;
            padding: 5px 10px;
            margin:0;
            &:hover{
                color: #f65f10;
            }
        }
    }

}
</style>
