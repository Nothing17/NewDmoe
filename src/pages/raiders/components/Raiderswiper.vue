<template>
  <div class="raider-swiper">
    <div class="fouc">
      <img src="../../../assets/images/r_bg.jpeg">
    </div>
    <p class="text">封岛结束，重新开岛！海岛控速速收藏哦</p>
  </div>
</template>

<script>
export default {
  name: "RaiderSwiper"
};
</script>


<style lang="less" scoped>
.raider-swiper {

    position: relative;
  height: 3.623188rem;
  overflow: hidden;
  margin-top: .483092rem;
  .fouc {
    height: 3.623188rem;
    img {
      height: 100%;
      width: 100%;
      filter: blur(0.022077rem);
    }
  }
  .text {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.4rem 1.06667rem 0.4rem 0.4rem;
    line-height: 0.66667rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.48rem;
    color: #fff;
    &::after {
      content: "";
      display: block;
      width: 0.32rem;
      height: 0.53333rem;
      background-position: 0 0;
      position: absolute;
      bottom: 0.45333rem;
      right: 0.42667rem;
      background-image: url('../../../assets/images/i_index.png');
      background-repeat: no-repeat;
      background-size: 2rem;
    }
  }
}
</style>
