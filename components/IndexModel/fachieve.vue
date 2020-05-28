<template>
  <div class="pr15 pl15 pt10 pb12" style="background:#fff;">
    <title-nav :title-obj="{con: '找业绩'}">
      <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
    </title-nav>
    <ul class="ul">
      <li class="flsb border-e5 pl20 pb20 pt20 pr20">
        <img src="../../assets/imgs/banner.jpg" alt="" class="border-e5 mr10">
        <div class="right">
          <div class="one flsb">
            <p>华春工程建设项目管理有限公司</p>
          </div>
          <p class="cont f808080">工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，</p>
          <div class="typeul fl">
            <span class="mr20">工程施工业绩</span>
            <span>项目金额：<em>100万</em></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.ul{
    li{
        align-items: center;
        img{
            width:80px;
            height: 80px;
        }
        .one{
            p{
                color: #fa9c00;
            }
        }
        .cont{
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .typeul{
            span{
                em{
                    color:#fc3242;
                }
            }
        }

    }
}
</style>
