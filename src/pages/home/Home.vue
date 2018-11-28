<template>
    <div class="home" ref="home">
      <div>
          <home-header></home-header>
          <swiper-com :swiperList='swiperList'></swiper-com>
          <icons></icons>
          <recommend :recommendList='recommendList'></recommend>
      </div>
    </div>
</template>

<script>
import HomeHeader from "./components/Header";
import SwiperCom from "./components/SwiperCom";
import Icons from "./components/Icons";
import Recommend from "./components/Recommend";
import Bscroll from "better-scroll";

export default {
  name: "home",
  components: {
    HomeHeader,
    SwiperCom,
    Icons,
    Recommend
  },
  data() {
    return {
      swiperList: [],
      recommendList: []
    };
  },
  methods: {
    getHomeInfo() {
      this.axios.get("/mock/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList[this.$store.state.city] || data.recommendList['北京'] ;
        console.log(this.recommendList);
        
      }
    }
  },
  mounted() {
    const options = {
      click: true,
      tap: true
    };
    this.getHomeInfo();
    this.scroll = new Bscroll(this.$refs.home, options);
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 16.111111rem;
  margin: 0 auto;
  overflow: hidden;
}
</style>
