<template>
  <div class="swiper-box" :style="{'height':`${height}px`}" :class="{'swiper-Radius':isRadius}">
    <div class="header-slot" :style="pubSlotCls">
      <slot name="header">
        <!-- 公用UI插槽 -->
      </slot>
    </div>
    <el-carousel
      :interval="interval"
      :height="`${height}px`"
      :initial-index="initIndex"
      :autoplay="autoplay"
      :trigger="trigger"
      :type="type"
      :loop="loop"
      :indicator-position="indicatorPosition"
    >
      <template v-if="lists.length != 0">
        <el-carousel-item
          v-for="(item,index) in lists"
          :key="index"
        >
          <div :style="{'height':`${height}px`}">
            <div class="flcc hfull">
              <el-image style="height:100%;width:100%" :src="item.AttachPath? item.AttachPath:''">
                <img slot="error" class="hfull wfull" src="../../assets/imgs/banner.jpg" title="加载失败">
              </el-image>
            </div>
          </div>
        </el-carousel-item>
      </template>
      <div v-else class="wfull hfull">
        <img class="hfull wfull" src="../../assets/imgs/banner.jpg" title="默认照片">
      </div>
    </el-carousel>
  </div>
</template>
<script>
import props from './props'
export default {
    name: 'NavSwiper',
    props
}
</script>
<style lang="scss" scoped>
  .swiper-box{
    width: 100%;
    position: relative;
    .header-content{
      position: absolute;
    }
    .header-slot{
      position: absolute;
      z-index: 100;
    }
  }
</style>
<style>
  .swiper-box .el-carousel__item h3 {
    color: #f00;
    font-size: 18px;
    opacity: 0.75;
  }
  .swiper-Radius .el-carousel__button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
  .el-carousel__item:nth-child(2n) {
    background-color: rgba(0,0,0,0.2);
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
