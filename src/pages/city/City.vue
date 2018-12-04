<template>
    <div class="city">
        <city-header :cities='cities'></city-header>
        <city-list   :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
        <charcter-index :cities='cities' @change='handleLetterChange'></charcter-index>
    </div>
</template>

<script>
import CityHeader from "./components/CityHeader";
import CityList from "./components/CityList";
import CharcterIndex from "./components/CharcterIndex";
export default {
  components: {
    CityHeader,
    CityList,
    CharcterIndex
  },
  data () {
      return {
          hotCities: [],
          cities: [],
          letter: ''
      }
  },
  methods: {
    getHomeInfo () {
      this.axios.get("/mock/city.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc (res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
        
      }
    },
    handleLetterChange (letter) {
      // console.log(letter);
      this.letter = letter
      
    }
  },
  mounted () {
      this.getHomeInfo ();
  }
};
</script>

<style lang="less" scoped>

</style>
