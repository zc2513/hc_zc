<template>
  <div class="pr15 pl15 pt10 pb12" style="background:#fff;">
    <p><a class="f20 bold" :class="hztype===1?'hzxz':''" @mouseover="hztp(1)">合作单位</a><a class="f20 ml20 bold" :class="hztype===2?'hzxz':''" @mouseover="hztp(2)">友情链接</a></p>
    <ul v-show="hztype===1" class="mt20" style="border: 1px solid #FBF5F5;overflow: hidden;">
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
      <li class="hzdw">
        <img src="../../assets/imgs/Issuingdemand1.png">
      </li>
    </ul>
    <div v-show="hztype===2" class="mt20 h160"><a href="https://www.baidu.com/">百度</a></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            hztype: 1
        }
    },
    methods: {
        hztp(val) {
            this.hztype = val
        }
    }
}
</script>

<style lang="scss" scoped>
.hzxz{
    border-bottom: 2px solid #ff6620;
}
.hzdw{
    text-align:center;
    cursor: pointer;
    height: 90px;
    width: 6.6666%;
    float: left;
    border-right: 1px solid #FBF5F5;
    border-bottom: 1px solid #FBF5F5;
    &:hover{
        border-bottom: 2px solid #ff6620;
    }
    img{
        margin-top: 15px;
        height: 60px;
        width: 60px;
        display: inline-block;
    }
    &:nth-child(15){
    border-right:0 ;
    }

}
</style>
