<template>
  <div class="footer">
    <div class="footer-top ">
      <div class="footer-content c">
        <ul>
          <li class="footer-title">
            关于我们
          </li>
          <li><nuxt-link to="/about?TypeId=gywm&ID=oins2017040000000002">平台简介</nuxt-link></li>
          <li><nuxt-link to="/about?TypeId=gywm&ID=oins2017040000000003">公司简介</nuxt-link></li>
        </ul>
        <ul style="margin-right: 20px;">
          <li class="footer-title">
            网站地图
          </li>
          <li><nuxt-link to="/">网站首页</nuxt-link></li>
          <li><nuxt-link to="/tenderSquare">招投标广场</nuxt-link></li>
          <li><nuxt-link to="/projectChannel">项目频道</nuxt-link></li>
          <li><nuxt-link to="/purchase">采购专场</nuxt-link></li>
          <li><nuxt-link to="/exhibition">行业展会</nuxt-link></li>
        </ul>
        <ul style="margin-top: 21px;">
          <li class="footer-title" />
          <li><nuxt-link to="/productSupply">产品供应</nuxt-link></li>
          <li><nuxt-link to="/Transaction">交易费用</nuxt-link></li>
          <li><nuxt-link to="/price">材料价格</nuxt-link></li>
          <li><nuxt-link to="/platForm">企业平台</nuxt-link></li>
          <li><nuxt-link to="/information">资讯信息</nuxt-link></li>
        </ul>
        <ul>
          <li class="footer-title">
            安全隐私
          </li>
          <li><nuxt-link to="/about?TypeId=aqys&ID=oins2017040000000004">免责声明</nuxt-link></li>
          <li><nuxt-link :to="{name:'platForm-PlatformExplain'}">平台服务说明</nuxt-link></li>
          <li><nuxt-link to="/about?TypeId=aqys&ID=oins2017040000000005">链接及责任限度</nuxt-link></li>
          <li><nuxt-link to="/about?TypeId=aqys&ID=oins2017040000000006">服务条款的修改</nuxt-link></li>
        </ul>
        <ul>
          <li class="footer-title">
            服务与支持
          </li>
          <li><nuxt-link to="/about?TypeId=fwzc&ID=oins2017040000000007">在线支持</nuxt-link></li>
          <li><nuxt-link to="/about?TypeId=fwzc&ID=oins2017040000000008">联系我们</nuxt-link></li>
          <li><nuxt-link to="/Business">合作平台</nuxt-link></a></li>
        </ul>
        <div class="footer-img pull-right">
          <div class="footer-imga">
            <a href="#">
              <img src="../../assets/imgs/floor/ewm.jpg" alt="Alternate Text" title="关注微信服务平台实时提醒定制信息" width="105" height="105"></a>
            <p><a href="#">关注微信服务平台</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-qh">
        <p>版权所有 ©<span id="year">2020</span>&nbsp;陕西华春网络科技股份有限公司&nbsp;&nbsp;&nbsp;<a href="http://www.miitbeian.gov.cn" style="color: #999;" target="_blank">陕ICP备06011814号-2</a></p>
        <p>
          增值电信业务经营许可证：陕B2-20170009
          <span id="cnzz_stat_icon_1261724519">
            <a href="https://www.cnzz.com/stat/website.php?web_id=1261724519" target="_blank" title="站长统计">
              <img border="0" hspace="0" vspace="0" src="../../assets/imgs/floor/pic.gif">
            </a>
          </span>
        </p>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import serve from './serve'
import about from './about'
import copyright from './copyright'

export default {
    components: {
    // eslint-disable-next-line vue/no-unused-components
        serve, about, copyright
    }
}
</script>

<style lang="scss" scoped>
/*footer*/
// .footer-top {width: 100%;margin-top:15px;background: url(../../assets/imgs/floor/pic.gif)top repeat;}
    .footer-top ul {float: left;margin-right: 86px;}
// .footer-content {width: 1200px;margin: 0 auto;background: url(../../assets/imgs/floor/pic.gif)top repeat;padding:20px 0px 0px; height:220px;}

.footer-title {font-size: 15px;color: #606771;margin-bottom: 18px;}
.footer-content a {color: #606771;font-size: 12px;line-height: 24px;}
.footer-imga {float: left;margin:26px 24px 0 0;}
    .footer-imga img {margin-bottom: 10px;}
    .footer-imga a {display: block;text-align: center;}
.footer-bottom {width: 1200px;margin: auto auto;}
.footer-qh {color: #999999;font-size: 12px;display: block;text-align: center;margin-top: 24px;}
.footer-qh img {
    display: inline-block !important;
}
.footer-bottom-img {width: 745px;margin: 0 auto;}
    .footer-bottom-img a { float: left;margin-right: 8px;}
.footer-qh p{line-height:20px;}
.pull-right {
    float: right !important;
}
/*footer end*/
</style>
