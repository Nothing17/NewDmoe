<template>
  <div class="wrapper">
      <mt-swipe :auto="8000">
        <mt-swipe-item v-for="(item, index) in urlList" :key="index"> 
        <img :src="item" alt=""> 
        </mt-swipe-item>
    <!-- <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item> -->
      </mt-swipe>
  </div>
  

</template>

<script>
export default {
  name: "InfoSwiper",
  props: [
    "urlList"
  ],
  data() {
    return {
      
    };
  },
  mounted () {
   console.log(this.$refs);
   
    
  }
};
</script>

<style lang="less" scoped>


.mint-swipe {
  // height: 5.603865rem;
  height: 5.075845rem;
  overflow:visible;
  .mint-swipe-item:nth-child(1) {
    background-color: cornflowerblue;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: burlywood;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: cadetblue;
  }
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 小下标的样式
  
}
// .mint-swipe /deep/  .mint-swipe-indicators {
//     bottom: -1.207729rem;
//     .mint-swipe-indicator {
//       width: .724638rem;
//       height: .724638rem;
//       background-color: red;
//       border-radius: 0;
//       margin-left:.241546rem;
//     }
//   }
</style>

