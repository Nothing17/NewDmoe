<template>
  <div class="fs-wrapper">
    <div class="hd clearfix">
      <span class="day">27</span>
      <span class="year-month">
        <em>2018</em>
        <em>NOV</em>
      </span>
      <span class="text">我们的纪念</span>
    </div>
    <div class="sider"> 
        <info-swiper></info-swiper>
    </div>  
    <div class="text-info">
        风景路上，我带你放空可好？—..
    </div>
    
  </div>
</template>

<script>
import InfoSwiper from './InfoSwiper'
export default {
  name: "FsWrapper",
  components:{
      InfoSwiper
  }
 
};
</script>


<style lang="less" scoped>
.fs-wrapper {
  padding: 0.8rem 0.26667rem 0;
  background: #309296 url("../../../assets/images/fs-bg.png") no-repeat center
    top;
  position: relative;
  background-size: cover;
  height: 10.857246rem;

  .hd {
      color: #fff;
    .day {
      font-size: 0.85333rem;
      float: left;
      padding: 0 0.13333rem;
      line-height: 0.66667rem;
      color: #fff;
      text-shadow: 0 0 0.08rem rgba(0, 0, 0, 0.3);
      position: relative;
      text-align: center;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0.05333rem;
        height: 0.66667rem;
        background-color: #fff;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0.05333rem;
        height: 0.66667rem;
        background-color: #fff;
      }
    }
    .year-month {
      float: left;
      font-size: 0.37333rem;
      line-height: 0.33333rem;
      padding: 0 .13333rem;
      position: relative;
      em {
        display: block;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0.05333rem;
        height: 0.66667rem;
        background-color: #fff;
      }
    }
    .text {
      float: left;
      font-size: 0.66667rem;
      padding: 0 .13333rem;
      position: relative;
       &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0.05333rem;
        height: 0.66667rem;
        background-color: #fff;
      }
    }
  }
  .sider {
    margin-top: .441546rem;
    // background-color: pink;
  }
  .text-info {
      text-align: center;
      font-size:.604638rem;
      color: #474747;
    //   margin-top: .724638rem;
      background-color: #fff;
      height: 2.990821rem;
      line-height: 2.990821rem;
    //   border-top-left-radius: .120773rem;
    //   border-top-right-radius: .120773rem;
      border-bottom-left-radius: .241546rem;
      border-bottom-right-radius: .241546rem;

  }
  .img {
      height: 3.023188rem;
      margin-top:.33rem;
      width: 100%;
      img {
          height: 100%;
          width: 100%;
      }
  } 
}
</style>
