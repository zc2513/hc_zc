<template>
  <div class="pr15 pl15 pt10 pb12" style="background:#fff;">
    <title-nav :title-obj="{con: '需要加盟公司'}">
      <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
    </title-nav>
    <ul class="ul">
      <li class="border-e5 pl20 pb12 pt12 pr20 f14">
        <p class="cont mb5">工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，</p>
        <div class="one fl f808080">
          <p class="mr20">联系人：王先生</p>
          <p>联系电话：15503668888</p>
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
</style>
