<template>
  <div class="blue">
    首页
    <div class="h220" style="background:#fff">
      <div class="h50 lh50" style="position: relative;">
        <span class="f30 ql">快速找</span>
        <div class="h50" style="display: inline-block;position: absolute;left: 100px;">
          <p class="h24 lh24" style="color:#A3A3A3;">解决异地项目、员工不足 </p>
          <p class="h24 lh24" style="color:#A3A3A3;">资源对接</p>
        </div>
      </div>
      <ul class="flsb">
        <li class="qlli">
          <img src="../assets/imgs/quicklook1.png">
          <p style="padding-top:5px;font-weight: 600;">找企业</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/quicklook2.png">
          <p style="padding-top:5px;font-weight: 600;">找团队</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/quicklook3.png">
          <p style="padding-top:5px;font-weight: 600;">找业绩</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/quicklook4.png">
          <p style="padding-top:5px;font-weight: 600;">找人才</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/quicklook5.png">
          <p style="padding-top:5px;font-weight: 600;">找项目</p>
        </li>
      </ul>
    </div>
    <div class="h220" style="background:#fff">
      <div class="h50 lh50" style="position: relative;">
        <span class="f30 ql">发需求</span>
        <div class="h50" style="display: inline-block;position: absolute;left: 100px;">
          <p class="h24 lh24" style="color:#A3A3A3;">汇集建设工程全产业链业务合作需求 </p>
          <p class="h24 lh24" style="color:#A3A3A3;">随时随地匹配资源</p>
        </div>
      </div>
      <ul class="flsb">
        <li class="qlli">
          <img src="../assets/imgs/Issuingdemand1.png">
          <p style="padding-top:5px;font-weight: 600;">需要加盟公司</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/Issuingdemand2.png">
          <p style="padding-top:5px;font-weight: 600;">需要干活团队</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/Issuingdemand3.png">
          <p style="padding-top:5px;font-weight: 600;">需要合作公司</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/Issuingdemand4.png">
          <p style="padding-top:5px;font-weight: 600;">广告天地</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/Issuingdemand5.png">
          <p style="padding-top:5px;font-weight: 600;">在建项目</p>
        </li>
      </ul>
    </div>
    <div class="h50 lh50 mt10" style="background:#fff">
      <span class="f22 ml10 mr30">其他服务</span>
      <span class="f18 mr40"><span class="yx mr10">查</span>企业报告查询</span>
      <span class="f18 mr40"><span class="yx mr10">租</span>企业报告查询</span>
      <span class="f18 mr40"><span class="yx mr10">告</span>企业报告查询</span>
    </div>
    <div class="h220 mt10" style="background:#fff">
      <div class="h50 lh50" style="position: relative;">
        <span class="f30 ql">一站委托</span>
        <div class="h50" style="display: inline-block;position: absolute;left: 125px;">
          <p class="h24 lh24" style="color:#A3A3A3;">汇集建设工程全产业链业务合作需求 </p>
          <p class="h24 lh24" style="color:#A3A3A3;">随时随地匹配资源</p>
        </div>
      </div>
      <ul class="flsb">
        <li class="qlli">
          <img src="../assets/imgs/entrust1.png">
          <p style="padding-top:5px;font-weight: 600;">委托项目</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/entrust2.png">
          <p style="padding-top:5px;font-weight: 600;">委托加盟</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/entrust3.png">
          <p style="padding-top:5px;font-weight: 600;">委托扩展机构分支</p>
        </li>
        <li class="qlli">
          <img src="../assets/imgs/entrust4.png">
          <p style="padding-top:5px;font-weight: 600;">委托寻找</p>
        </li>

      </ul>
    </div>
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
              <span class="zxxz">行业资讯</span> / <span>工厂新闻</span>
            </div>
          </div>
          <div style="height:195px;background:#fff;">
            <ul>
              <li style="height:95px;background:#fff;margin-bottom: 5px;" class="flsb">
                <div style="width: 30%;height: 100%;position: relative;">
                  <img src="../assets/imgs/Issuingdemand5.png" style="width: 100%;height: 100%;">
                  <p class="zxrq">2020 04-17</p>
                </div>
                <div style="width: 65%;overflow: hidden;">
                  <p style="font-size: 14px;font-weight: 700;" class="mb5">啊是冬季傲娇</p>
                  <p class="zxt">软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！软件采用成熟的OCR识别技术，支持JPG、BMP、PNG、MP3、MAV、TIF等格式图片识别为TXT；高效的识别各类复杂字体和语音.识别率高！</p>
                </div>
              </li>
              <li style="height:95px;background:#fff;margin-bottom: 5px;" class="flsb">
                <div style="width: 30%;height: 100%;position: relative;">
                  <img src="../assets/imgs/Issuingdemand5.png" style="width: 100%;height: 100%;">
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
    <div class="h50 lh50 mt10" style="background:#fff">
      <span class="f22 ml10 mr30">其他服务</span>
      <span class="f18 mr40"><span class="yx mr10">查</span>企业报告查询</span>
      <span class="f18 mr40"><span class="yx mr10">租</span>企业报告查询</span>
      <span class="f18 mr40"><span class="yx mr10">告</span>企业报告查询</span>
    </div>
  </div>

</template>

<script>
export default {
    async asyncData({ $axios }) {
        await $axios.$get('/Handler/SearchHandler.ashx?OP=SearchData')
    }
}
</script>

<style lang="scss" scoped>
.ql{
    border-right: 8px solid #F69900;
    padding-right: 10px;
    padding-left: 10px;
}
.qlp{
    display: inline-block;
    line-height: 16px;
    font-size: 12px;
}
.qlli{
    height: 120px;
    width: 150px;
    text-align: center;
    margin-left: 50px;
    margin-top: 20px;
    padding-top: 20px;
    margin-right: 85px;
    background: #fff;
    cursor: pointer;
    &:hover{
            z-index: 2;
            -webkit-box-shadow: 5px 5px 5px rgba(0,0,0,.3);
            box-shadow: 5px 5px 5px rgba(0,0,0,.3);
            -webkit-transform: translate3d(0,-2px,0);
            transform: translate3d(0,-2px,0)
        }
     &:hover p{
                color:#F69900;
        }
}
.yx{
    border-radius: 50%;
    border: 1px solid #999999;
    color: #999999;
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
}
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
