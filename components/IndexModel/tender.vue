<template>
  <div class="pr15 pl15 pt10 pb12" style="background:#fff;">
    <title-nav :title-obj="{con: '招投标广场'}">
      <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
    </title-nav>
    <ul class="ul">
      <li class="border-e5 pl12 pb5 pt5 pr12">
        <p class="cont f14 mb5 wfull">工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，工程造价代理，</p>
        <div class="one flsb f808080 f14">
          <div class="other fl f14">
            <p class="mr20 type">公开招标</p>
            <p>山西太原</p>
          </div>
          <p>2018-12-12</p>
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
.type{
     border: 1px solid #f29607;
     color: #f29607;
}
    .cont{
        // text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        // text-overflow: ellipsis;
        // display: -webkit-box;
        // -webkit-line-clamp: 1;
        // -webkit-box-orient: vertical;
        height: 19px;
    }
</style>
