<template>
  <div class="hotel-find">
    <div class="hotel-find-label">
      <div class="hotel-find-title">目的地</div>
      <div class="hotel-address">
        <span class="hotel-address-input">目的地/城市</span>
        <div class="hotel-address-icon">
          <span class="el-icon-location-outline"></span>
          <span>我的位置</span>
        </div>
      </div>
    </div>
    <div>
      <div class="hotel-date-label">
        <div class="hotel-time">
          <div class="hotel-date">
            <div class="hotel-find-title">入住</div>
            <div class="hotel-date-input">
              <span>5月1日</span>
            </div>
          </div>
        </div>
        <div class="hotel-guest"></div>
      </div>
      <div class="hotel-date-label">
        <div class="hotel-time">
          <div class="hotel-date">
            <div class="hotel-find-title">离店</div>
            <div class="hotel-date-input">
              <span>5月2日</span>
            </div>
          </div>
        </div>
        <div class="hotel-guest"></div>
      </div>
      <div class="hotel-date-label hotel-date-label-last">
        <div class="hotel-time">
          <div class="hotel-date">
            <div class="hotel-find-title">每间</div>
            <div class="hotel-date-input">
              <span>2成人</span>,
              <span>0儿童</span>
            </div>
          </div>
        </div>
        <div class="hotel-guest"></div>
      </div>
    </div>
    <div class="hotel-btn">查找酒店</div>
  </div>
</template>


<script>
export default {
  name: "HotelFind"
};
</script>

<style lang="less" scoped>
.hotel-find {
  padding-left: 5.333vw;
  padding-top: 3.2vw;
  padding-right: 5.333vw;
  margin-bottom: 2.667vw;
  background: #fff;
  .hotel-find-label {
    border-bottom: 0.024155rem solid #ccc;
    .hotel-find-title {
      color: #474747;
      font-size: 3.733vw;
      font-weight: 300;
      text-align: left;
      line-height: 1;
    }
    .hotel-address {
      display: flex;
      .hotel-address-input {
        flex: 1;
        padding: 4.8vw 0 3.2vw;
        font-size: 5.333vw;
        font-weight: 600;
        text-align: left;
        position: relative;
        border: 0;
        color: #c1c1c1;
      }
      .hotel-address-icon {
        width: 17.6vw;
        color: #474747;
        font-size: 3.2vw;
        font-weight: 300;
        text-align: center;
        span:first-child {
          display: block;
          font-size: 0.724638rem;
        }
      }
    }
  }
  .hotel-date-label {
    margin-top: 0.362319rem;
    width: 24vw;
    display: inline-block;
    border-bottom: 0.024155rem solid #ccc;
    .hotel-find-title {
      font-size: 0.386473rem;
    }
    .hotel-date-input {
      font-size: 0.483092rem;
      font-weight: 600;
      padding: 4.533vw 0 3.467vw;
    }
  }
  .hotel-date-label-last {
    .hotel-find-title {
      text-align: center;
    }
    width: 40vw;
    text-align: right;
    border-left: 0.024155rem solid #ccc;
  }
}
.hotel-btn {
  
  width: 100%;
  height: 13.333vw;
  margin: 0 auto;
  line-height: 13.333vw;
  background: #ffe24c;
  border-radius: 0.533vw;
  border: 0;
  color: #474747;
  font-size: 4.8vw;
  font-weight: 400;
  text-align: center;
  margin-top: .724638rem;
}
</style>

