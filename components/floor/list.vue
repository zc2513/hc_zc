<template>
  <div class="show-list">
    <div class="title">{{ list.title }}</div>
    <div v-for="(item,index) in list.data" :key="index" class="con">
      <template v-if="list.id == 3">
        <span v-for="(ite,ind) in item" :key="ind">
          <a v-if="ite.link !== '/gotomarket/jump'" :href="ite.link">{{ ite.NewsTitle }}</a>
          <router-link v-else :to="ite.link" v-text="ite.NewsTitle" />{{ ind==0&&item.length>1 ? "/" : "" }}
        </span>
      </template>
      <template v-else>
        <a target="_blank" :href="'/SitePage/AboutUs.aspx?TypeId='+item.TypeId+'&ID='+item.ID">{{ item.NewsTitle }}</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        // eslint-disable-next-line vue/require-default-prop
        list: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.show-list{
    min-width: 50%;
    max-width: 180px;
    .title,.con{
        height: 30px;
        line-height: 30px;
    }
    .title{
        font-size: 16px;
        color: #595757;
        font-weight: 700;
    }
    .con{
        font-size: 14px;
        color: #666;
        a:hover{
            color: #F65F10;
        }
    }
}
</style>
