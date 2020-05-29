<template>
  <div class="pr15 pl15 pt10 pb12" style="background:#fff;">
    <title-nav :title-obj="{con: '找企业'}">
      <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
    </title-nav>
    <ul class="ul">
      <li class="flsb border-e5 pl20 pb20 pt20 pr20">
        <img src="../../assets/imgs/banner.jpg" alt="" class="border-e5 mr10">
        <div class="right f14">
          <div class="one flsb">
            <p>华春工程建设项目管理有限公司</p>
            <span class="f808080">会员等级：甲级</span>
          </div>
          <p class="cont f808080">工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，</p>
          <div class="typeul fl">
            <span>司法鉴定</span>
            <span>工程审计</span>
          </div>
        </div>
      </li>
      <li class="flsb border-e5 pl20 pb20 pt20 pr20">
        <img src="../../assets/imgs/banner.jpg" alt="" class="border-e5 mr10">
        <div class="right f14">
          <div class="one flsb">
            <p>华春工程建设项目管理有限公司</p>
            <span class="f808080">会员等级：甲级</span>
          </div>
          <p class="cont f808080">工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，</p>
          <div class="typeul fl">
            <span>司法鉴定</span>
            <span>工程审计</span>
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
        margin-bottom: 12px;
        &:last-of-type{
            margin-bottom: 0;
        }
        .right{
            flex: 1;
        }
        img{
            width:80px;
            height: 80px;
        }
        .cont{
            // text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            // text-overflow: ellipsis;
            // display: -webkit-box;
            // -webkit-line-clamp: 2;
            // -webkit-box-orient: vertical;
            max-height: 38px;
            width: 100%;

        }
        .typeul{
            span{
                border: 1px solid #fa9c00;
                border-radius: 8px;
                padding: 1px;
                color: #fa9c00;
                margin-right: 10px;
            }
        }
        &:hover{
            //box-shadow:  投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色;
            box-shadow:6px 6px 6px 5px #cfcfcf;
            transition: .4s;
            .one>p{
                 color: #fa9c00;
            }
        }
    }
}
</style>
