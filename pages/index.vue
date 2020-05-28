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
    <div class="h220 mt10" style="background:#fff">
      <title-nav :type="1" />
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
            -webkit-box-shadow: 0px 10px 15px rgba(0,0,0,.3);
            box-shadow: 8px 10px 10px rgba(0,0,0,.3);
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
</style>
