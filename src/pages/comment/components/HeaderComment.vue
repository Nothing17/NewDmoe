<template>
  <div class="header-comment">
    <div class="back" @click.prevent="back">
      <span>
        <img src="../../../assets/images/i_head5_03.png" alt>
      </span>
    </div>
    <div class="title">全部点评</div>
  </div>
</template>

<script>
export default {
  name: "HeaderComment",
  methods:{
    back () {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
.header-comment {
  height: 1.328502rem;
  line-height: 1.328502rem;
  //   background-color: pink;
  margin: 0 0.2666666667rem;
  display: flex;
  justify-content: space-between;
  .back {
    // float:left;
    text-align: left;
    line-height: 1.328502rem;
    color: #ffdb26;
    span {
      height: 0.603865rem;

      width: 0.603865rem;
      display: block;
      // font-size: 0;
      // line-height: 1.328502rem;
      img {
        width: 100%;
      }
    }
  }
  .title {
    //   float: left;
    // align-self: center;
    width: 2.030918rem;
    font-size: 0.42666667rem;
    margin-right: 0.483092rem;
    color: rgb(110, 107, 107);
  }
}
</style>

