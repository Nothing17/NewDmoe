<template>
  <div class="hotel-icon">
    <ul>
      <li>
        <a href="/">
          <i></i>
          优惠卷
        </a>
      </li>
      <li>
        <a href="/">
          <i></i>
          酒店收藏
        </a>
      </li>
      <li>
        <a href="/">
          <i></i>
          我的订单
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotelIcon"
};
</script>


<style lang="less" scoped>
.hotel-icon {
  padding-left: 5.333vw;
  padding-top: 3.2vw;
  padding-right: 5.333vw;
  background-color: #fff;
  ul {
    display: flex;
    li {
      
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 3.333333rem;
        height: 2.333092rem;
        color: #474747;
        font-size: 4vw;
        font-weight: 300;  
        text-align: center;  
        i {
          display: block;
          width: 5.6vw;
          height: 5.6vw;
          margin-bottom: 2.8vw;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(1) {
        i {
          background: url("../../../assets/images/icon-1.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(2) {
        i {
          background: url("../../../assets/images/icon-2.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(3) {
        i {
          background: url("../../../assets/images/icon-3.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
