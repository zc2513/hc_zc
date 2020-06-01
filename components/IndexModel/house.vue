<template>
  <div class="pr15 pl15 pt10 pb12" style="background:#fff;">
    <title-nav :title-obj="{con: '办公出租/求租'}">
      <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
    </title-nav>
    <ul class="ul">
      <li class="fl border-e5 pl5 pb5 pt5 pr5">
        <div class="left f-y-sa mr15 f14">
          <img src="../../assets/imgs/banner.jpg" alt="" class="mb5">
          <span>找出租</span>
        </div>
        <div class="right f14 fl1">
          <div class="one">
            <p>华春工程建设项目管理有限公司</p>
          </div>
          <p class="cont f808080">工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，</p>
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
        .left{
            width:60px;
            img{
                width:60px;
                height: 40px;
            }
            span{
                border: 1px solid #f29607;
                color: #f29607;
            }
        }
        .cont{
            // text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            // text-overflow: ellipsis;
            // display: -webkit-box;
            // -webkit-line-clamp: 2;
            // -webkit-box-orient: vertical;
            width: 100%;
            height: 38px;
        }

    }
}
</style>
