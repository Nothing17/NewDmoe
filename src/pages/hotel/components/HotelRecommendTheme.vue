<template>
  <div class="recommend-theme">
    <div class="recommend-theme-title">主题推荐</div>
    <div class="recommend-theme-list">
      <ul>
        <li class="active">童话小镇</li>
        <li>血拼购物</li>
        <li>潜水胜地</li>
        <li>设计酒店</li>
        <li>朝拜历史</li>
        <li>私人海滩</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "recommendTheme"
};
</script>


<style lang="less" scoped>
.recommend-theme {
  padding-left: 5.333vw;
  //   padding-top: 3.2vw;
  //   padding-right: 5.333vw;
  background-color: #fff;
  margin-top: 0.362319rem;
  .recommend-theme-title {
    font-size: 0.583092rem;
    font-weight: 300;
    margin-bottom: 0.241546rem;
  }
  .recommend-theme-list {
    .active {
      background-color: pink;
      font-weight: 600;
    }
    li {
      display: inline-block;
      width: 28vw;
      height: 9.333vw;
      margin-right: 2.667vw;
      margin-bottom: 2.667vw;
      line-height: 9.333vw;
      border-radius: 0.533vw;
      color: #474747;
      font-size: 4.267vw;
      font-weight: 300;
      text-align: center;
      background: #f8f8f8;
      cursor: pointer;
    }
  }
}
</style>


