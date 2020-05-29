<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="12">
        <div class="mt10" style="background:#fff;padding:10px">
          <title-nav :title-obj="{con: '推荐'}">
            <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
          </title-nav>
          <el-carousel height="220px" arrow="nerver">
            <el-carousel-item v-for="item in 4" :key="item" style="background:#000">
              {{ item }}
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="mt10" style="background:#fff;padding:10px">
          <title-nav :title-obj="{con: '资讯中心'}" class="ml10">
            <span slot="titleIcon" class="w10 h24 mr10 leftOrange" style="display: inline-block;" />
          </title-nav>
          <div class="h20 mb10">
            <div style="float:right;font-weight: 700;color: #999999;">
              <span @click="zxtp(1)">行业资讯</span> / <span @click="zxtp(2)">工厂新闻</span>
            </div>
          </div>
          <div style="height:195px;background:#fff;">
            <ul>
              <li style="height:95px;background:#fff;margin-bottom: 5px;" class="flsb">
                <div style="width: 30%;height: 100%;position: relative;">
                  <img src="../../assets/imgs/Issuingdemand5.png" style="width: 100%;height: 100%;">
                  <p class="zxrq">2020 04-17</p>
                </div>
                <div style="width: 65%;overflow: hidden;">
                  <p style="font-size: 14px;font-weight: 700;" class="mb5">啊是冬季傲娇</p>
                  <p class="zxt">软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！</p>
                </div>
              </li>
              <li style="height:95px;background:#fff;margin-bottom: 5px;" class="flsb">
                <div style="width: 30%;height: 100%;position: relative;">
                  <img src="../../assets/imgs/Issuingdemand5.png" style="width: 100%;height: 100%;">
                  <p class="zxrq">2020 04-17</p>
                </div>
                <div style="width: 65%;overflow: hidden;">
                  <p style="font-size: 14px;font-weight: 700;" class="mb5">啊是冬季傲娇</p>
                  <p class="zxt">软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    },
    data() {
        return {
            zxtype: 1
        }
    },
    methods: {
        zxtp(val) {
            this.zxtype = val
            console.log(this.zxtype)
        }
    }
}
</script>

<style lang="scss" scoped>
.zxrq{
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 40px;
    text-align: center;
    background:rgba(0,0,0,.3);
    color: #fff;
}
.zxt{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color:#999999;
}
.zxxz{
    color: #000;
}
</style>
