<template>
  <div class="header-info">
    <div class="logo">
      <a href="/">旅游</a>
    </div>
    <div class="city-name" @click="goCity"> <span>鼓浪屿</span> </div>
  </div>
</template>

<script>
export default {
  name: 'headerInfo',
  methods: {
    goCity () {
            this.$router.push({path:'/city'})
        }
  }
}
</script>


<style lang="less" scoped>
.header-info {
  height: 1.207729rem;
  line-height: 1.207729rem;
  // background-color: pink;
//   display: flex;
  .logo {
    float: left;
    padding: 0.362319rem 0.241546rem 0;
    a {
      display: block;
      width: 2.51rem;
      height: 0.67rem;
      background: url("../../../assets/images/logo2.png") no-repeat;
      background-size: 2.16rem 0.56rem;

      text-indent: -9999px;
    }
  }
  .city-name {
    float: right;
    margin-right: 0.883092rem;
    margin-top:.2623185rem;
    font-size: .386473rem;
    min-height: .683092rem;
    line-height: .683092rem;
    min-width: 1.207729rem;
    background-color: rgba(238, 238, 238, 0.959);
    border-radius: 80%;
    box-sizing: content-box;
    color: #ff9d00;
    span {
        display: block;
        padding: .120773rem .241546rem 0;
    }
  }
}
</style>
