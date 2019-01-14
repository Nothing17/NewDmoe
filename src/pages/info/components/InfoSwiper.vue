<template>
  <div class="wrapper">
    <el-carousel :interval="4000" type="card" height="5.075845rem">
      <el-carousel-item v-for="item in urlList" :key="item">
        <h3>
          <img :src="item" alt>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "InfoSwiper",
  props: ["urlList"],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$refs);
  }
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 5.075845rem;
  margin: 0;
  img {
    width: 100%;
    height: 100%;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

