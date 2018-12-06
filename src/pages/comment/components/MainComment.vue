<template>
  <div class="main-comment">
    <div class="main-top">
      <div class="total">点评</div>
      <div class="score">
        10.0
        <span class="feng">分</span>
      </div>
    </div>
    <div class="main-center">
      <span class="mark">全部</span>
      <span>有图</span>
      <span>金牌点评</span>
      <span>近半年</span>
      <span>导游讲解专业</span>
      <span>行程安排合理</span>
      <span>行程描述相符</span>
      <span>司机贴心专业</span>
      <span>无强迫购物消费</span>
      <span>餐食可口</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainComment"
};
</script>

<style lang="less" scoped>
.main-comment {
  margin: 0 0.2666666667rem;
  .main-top {
    overflow: hidden;
    font-size: 0.64rem;
    font-weight: 600;
    margin-top: 0.483092rem;
    .total {
      float: left;
      //   margin-left: .483092rem;
    }
    .score {
      float: right;
      //   margin-right: 0.483092rem;
      .feng {
        font-size: 0.34rem;
      }
    }
  }
  .main-center {
    margin-top: 0.4rem;
    span {
      display: inline-block;
      height: 0.96rem;
      padding: 0 0.2666666667rem;
      font-size: 0.32rem;
      line-height: 0.96rem;
      text-align: center;
      color: #474747;
      border-radius: 0.0533333333rem;
      background-color: #f8f8f8;
      margin-right: 0.2133333333rem;
      margin-bottom: 0.2133333333rem;
    }
    .mark {
      background-color: #ffdb26;
    }
  }
}
</style>

