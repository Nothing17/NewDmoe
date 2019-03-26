<template>
  <div class="header">
    <div class="logo">
      <a href="/">旅游</a>
    </div>
    <div class="search">
      <!-- <form class="search-wrap">
                <input type="text" class="search-input" placeholder="搜索目的地/攻略/游记">
                <button class="btn"></button>
      </form>-->
      <img src="../../../assets/images/flower.png" alt="" srcset="">
    </div>
    <div class="ctiy" @click.prevent="goCity">
      {{ this.$store.state.city }}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goCity() {
      this.$router.push({ path: "/city" });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  // background-color: paleturquoise;
  background-color: #fff;
  border-bottom: 0.024155rem solid #e5e5e5;
  height: 1.33rem;
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
  .search {
    // display: none;
    
    // flex: 1;
    position: absolute;
    img {
        width: 100%;
    }
 
  }
  .ctiy {
    position: absolute;
    float: right;
    top: 0.555556rem;
    right: 0.845411rem;
    font-size: 0.31401rem;
    .arrow-icon {
      position: absolute;
      top: -0.024155rem;
      right: -0.783092rem;
    }
  }
}
</style>

