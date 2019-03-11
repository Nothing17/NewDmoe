<template>
    <div class="list" ref="wrapper">
      <div class="content">
        <div class="selections">
            <ul>
                <li class="local-title">当前</li>
                <li class="location"> {{ this.$store.state.city }} </li>
            </ul>
            <ul>
                <li class="local-title">热门</li>
                <li v-for="(city,index) in hotCities" :key="index" 
                @click.prevent="handleClickCity(city)"> {{ city.name }} </li>
            </ul>
        </div>

        <div class="cities">
            <ul v-for="(item,index) in cities" :key="item.index">
                <li :ref="index"> {{index}} </li>
                <li :data-city="city.name" v-for="city in item" :key="city.id" 
                @click.prevent="handleClickCity(city)"> {{ city.name }} </li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "cityList",
  props: ["hotCities", "cities", "letter"],
  data() {
    return {};
  },
  methods: {
    handleClickCity(city) {
      this.$store.commit("changeCity", city);
      
      this.$router.push({ path: "/" });
    }
    
  },
  mounted() {
    const options = {
      click: true,
      tap: true
    };
    this.scroll = new Bscroll(this.$refs.wrapper,options);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  overflow: hidden;
  height: 16.111111rem;
  .selections {
    overflow: hidden;
    .local-title {
      display: block;
      height: 0.724638rem;
      width: 100%;
      line-height: 0.724638rem;
      font-size: 0.289855rem;
      background-color: #f2f8fb;
      margin-left: 0;
      position: -webkit-sticky;
      position: sticky;
      top: -0.024155rem;
      border-bottom: 0;
      text-align: start;
    }
    li {
      padding: 0 0.362319rem;
      display: inline-block;
      margin-left: 0.362319rem;
      height: 1.014493rem;
      width: 21%;
      line-height: 1.014493rem;
      background-color: pink;
      // margin: .241546rem 0;
      font-size: 0.402319rem;
      margin-top: 0.241546rem;
      margin-bottom: 0.241546rem;
      text-align: center;
    }
  }
  .cities {
    overflow: hidden;
    li {
      padding: 0 0.362319rem;
      height: 1.014493rem;
      width: 21%;
      line-height: 1.014493rem;
      font-size: 0.402319rem;
      font-weight: 900;
      &:first-child {
        display: block;
        height: 0.724638rem;
        width: 100%;
        line-height: 0.724638rem;
        font-size: 0.289855rem;
        background-color: #f2f8fb;
        margin-left: 0;
        position: -webkit-sticky;
        position: sticky;
        top: -0.024155rem;
        border-bottom: 0;
        font-weight: normal;
      }
    }
  }
}
</style>

