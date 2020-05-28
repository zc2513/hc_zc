<template>
  <div class="pr15 pl15 pt10 pb12" style="background:#fff;">
    <title-nav :title-obj="{con: '人才招聘/求职'}">
      <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
    </title-nav>
    <ul class="ul">
      <li class="border-e5 pl5 pb5 pt5 pr5 fl">
        <div class="one">
          <span class="type">找人才</span>
          <p>工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，</p>
        </div>
        <p class="end">
          联系人：马经理
        </p>
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
li{
    flex-wrap: wrap;
}
.one{
    p{
        display: initial;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    .type{
        border: 1px solid #f29607;
        color: #f29607;
    }
}
    .end{
        flex: 1;
text-align: right;
    }
</style>
