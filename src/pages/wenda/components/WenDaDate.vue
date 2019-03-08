<template>
  <div class="wenda-date">
    <a href="#" class="wenda-top">
      <span class="day">05</span>
      <span class="date">
        <em>2019</em>
        <em>MAR</em>
      </span>
      <div class="remember">纪念日</div>
    </a>
  </div>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
.wenda-date {
  .wenda-top {
    display: block;
    padding: 0.533rem;
    color: #008489;
    text-align: center;
    position: relative;
    // display:flex;
    .day {
      position: relative;
      font-size: 1.6rem;
      font-weight: 600;
      display: inline-block;
      margin-right: 0.483092rem;
      &::before {
        content: "";
        position: absolute;
        left: -0.207rem;
        top: 0;
        height: 1.333rem;
        width: 0.107rem;
        background-color: #008489;
      }
      &::after {
        content: "";
        position: absolute;
        right: -0.207rem;
        top: 0;
        height: 1.333rem;
        width: 0.107rem;
        background-color: #008489;
      }
    }
    .date {
      line-height: 0.667rem;
      font-size: 0.667rem;
      letter-spacing: 0.053rem;
      display: inline-block;

      em {
        display: block;
        font-style: normal;
      }
      &::after {
        content: "";
        position: absolute;
        right: 2.657005rem;
        top: 0.555556rem;
        height: 1.333rem;
        width: 0.107rem;
        background-color: #008489;
      }
    }
    .remember {
      margin-top: 0.267rem;
      font-size: 1.013rem;
      line-height: 1;
      font-weight: 600;
    }
  }
}
</style>
