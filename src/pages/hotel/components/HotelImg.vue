<template>
  <div class="hotel-img">
    <div>
      <a href="/">
        <img
          src="https://images.mafengwo.net/mobile/images/hotel/widgets/new_user_coupon_m_1802/coupon-banner-gif.gif"
          alt
        >
      </a>
    </div>
    <div>
      <a href="/">
        <img src="https://images.mafengwo.net/images/hotel/activity/2019_0313/h5_banner.jpg" alt>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HotelImg"
});
</script>


<style lang="less" scoped>
.hotel-img {
  div:first-child {
    margin-bottom: 0.101546rem;
  }
  a {
    display: block;
    img {
      width: 100%;
    }
  }
}
</style>
