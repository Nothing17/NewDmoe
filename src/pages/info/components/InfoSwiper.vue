<template>
  <div class="wrapper">
      <mt-swipe :auto="4000">
        <!-- <mt-swipe-item v-for="(item, index) in swiperList" :key="index"> 
        <img :src="item.imgUrl" alt=""> 
        </mt-swipe-item> -->
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
  </div>
  

</template>

<script>
export default {
  name: "InfoSwiper",
  props: [
    // 'swiperList'
  ],
  data() {
    return {
      
    };
  }
};
</script>

<style lang="less" scoped>


.mint-swipe {
  // height: 5.603865rem;
  height: 5.075845rem;
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
}
</style>

