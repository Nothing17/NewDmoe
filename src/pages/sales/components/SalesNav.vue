<template>
  <div class="">
      <div class="T-head">
    <ul>
      <li>
        <a href="/">首页</a>
      </li>
      <li>
        <a href="/">目的地</a>
      </li>
      <li>
        <a href="/">游记</a>
      </li>
      <li>
        <a href="/">酒店</a>
      </li>
    </ul>
    <div class="spesales">
        <div>旅行特卖</div>
        <div>更多</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "SalesNav"
};
</script>

<style lang="less" scoped>
.T-head {
  height: 1.146rem;
  background-color: #ff9d00;
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 .241546rem;
    a {
      color: #fff;
      display: block;
      line-height: 1.146rem;
      font-size: 0.43rem;
    }
  }
  .spesales {
      display: flex;
      line-height: 1.846rem;
      justify-content: space-between;
      padding: 0 .241546rem;
      font-size: .434783rem;
      background-color: #fff;
  }
}
</style>

