<template>
  <div class="raider-header">
    <div class="logo">
      <a href="javascript:void(0)">旅游</a>
    </div>
   
    <router-link to="/" tag="div" class="main-index">官网首页</router-link>
  </div>
</template>

<script>
export default {
  name: "SalesHeader"
};
</script>

<style lang="less" scoped>
.raider-header {
//   display: flex;
  // background-color: paleturquoise;
  background-color: #fff;
  border-bottom: 0.024155rem solid #e5e5e5;
  height: 1.33rem;
  .logo {
    float: left;
    padding: 0.362319rem 0.241546rem 0;
    a {
      display: block;
      width: 2.51rem;
      height: 0.67rem;
      background: url("../../../assets/images/logo2.png") no-repeat;
      background-size: 2.16rem 0.56rem;

      text-indent: -9999px;
    }
  }
  .main-index {
      float: right;
      line-height: 1.33rem;
      font-size: .410628rem;
      padding-right: 0.241546rem;
      color:#ff9d00;
  }
}
</style>

