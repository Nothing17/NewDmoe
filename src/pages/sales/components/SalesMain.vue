<template>
  <div class="cats">
    <ul class="holiday clearfix">
      <li class="t1">旅游度假</li>
      <li class="t2">
        <a href="https://m.mafengwo.cn/sales/list.php?tag=3">机酒套餐</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/flight/">国内机票</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/hotel/">订酒店</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/sales/list.php?tag=6">跟团游</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/sales/list.php?tag=5">邮轮</a>
      </li>
    </ul>
    <ul class="holiday clearfix">
      <li class="t1">当地玩乐</li>
      <li class="t2">
        <a href="https://m.mafengwo.cn/sales/list.php?tag=3">一日游</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/flight/">多日游</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/hotel/">景点门票</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/sales/list.php?tag=6">酒店套餐</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/sales/list.php?tag=5">当地体验</a>
      </li>
    </ul>
    <ul class="holiday clearfix">
      <li class="t1">出行必填</li>
      <li class="">
        <a href="https://m.mafengwo.cn/sales/list.php?tag=3">签证</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/flight/">定制</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/hotel/">WiFi</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/sales/list.php?tag=6">接送机</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/sales/list.php?tag=5">电话卡</a>
      </li>
      <li>
        <a href="https://m.mafengwo.cn/sales/list.php?tag=5">交通卡</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "SalesMain"
};
</script>

<style lang="less" scoped>
.cats {
//   background-color: #ff9d00;
  margin-top: 2.077295rem;
  ul:nth-child(1) {
      background-color: #ff9d00;
  }
  ul:nth-child(2) {
      background-color: #11cc92;
  }
  ul:nth-child(3) {
      background-color: #1fb3de;
  }
  ul {
    margin-bottom: 0.05rem;
    li {
      width: 3.093rem;
      line-height: 1.253rem;
      float: left;
      border: 0.053rem solid #fff;
      border-left: none;
      border-top: 0;
      text-align: center;
      color: #fff;
    }
    .t1 {
      width: 0.506rem;
      height: 2.2rem;
      padding-top: 0.34rem;
    //   background: url("../../../assets/images/catbg.png") no-repeat;
      background-size: 3.6rem;
      font-size: 0.373rem;
      line-height: 1.2em;
    }
    a {
      display: block;
      line-height: 2.56rem;
      font-size: 0.362319rem;
    }
    .t2 {
      height: 2.53rem;
    //   background: url("../../../assets/images/catbg.png") no-repeat;
      background-size: 3.6rem;
      background-position: -0.506rem 0;
      a {
        line-height: 2.56rem;
        font-size: 15px;
      }
    }
  }
  li {
    a {
      display: block;
      line-height: 1.253rem;
      color: #fff;
      font-size: 15px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

