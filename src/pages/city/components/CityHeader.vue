<template>
    <div class="cityheader" >
       <div class="city">
            <div class="iconfont backindex" @click.prevent="goCity">&#xe624;</div>
            <div class="suggest_div">
              <input v-model="keyword" type="text" class="cityinput" placeholder="城市">

            </div>
            <div class="search-content" v-show="this.keyword" ref="searchitem">
              <ul>
                <li class="search-item" v-for=" city in list" :key='city.id' @click.prevent="handleClickCity(city)"> {{ city.name }} </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
              </ul>
            </div>
       </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "cityHeader",
  props: ["cities"],
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  methods: {
    goCity() {
      this.$router.push({ path: "/" });
    },
    handleClickCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push({ path: "/" });
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted () {
      const options = {
      click: true,
      tap: true
    };
    this.scroll = new Bscroll(this.$refs.searchitem, options);
  }
};
</script>

<style lang="less" scoped>
.cityheader {
  width: 100%;
  height: 1.062802rem;
  background-color: #feca2b;
  .city {
    padding: 0.120773rem 0;
    .backindex {
      position: absolute;
      top: 0;
      left: 0;
      width: 1.014493rem;
      line-height: 1.014493rem;
      cursor: pointer;
      text-align: center;
      font-size: 0.438164rem;
      font-weight: 800;
      color: #fff;
    }
    .suggest_div {
      font-size: 0.289855rem;
      height: 0.772947rem;
      border-radius: 0.120773rem;
      margin-left: 1.014493rem;
      margin-right: 0.362319rem;
      padding-left: 0.120773rem;
      background: #fff;
      text-align: left;
      .cityinput {
        width: 80%;
        font-size: 0.289855rem;
        height: 0.772947rem;
        border: 0;
        background: 0;
        padding-left: 0.120773rem;
        font-size: 0.31401rem;
      }
    }
    .search-content {
      z-index: 1;
      overflow: hidden;
      position: absolute;
      top: 0.966184rem;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
      .search-item {
        padding: 0 0.362319rem;
        height: 1.014493rem;
        // width: 21%;
        width: 100%;
        line-height: 1.014493rem;
        font-size: 0.402319rem;
        font-weight: 900;
        border-bottom: 0.024155rem solid #ccc;
        margin-top: -0.024155rem;
      }
      .border-bottom {
        color: rgba(255, 0, 0, .5)
      }
    }
  }
}
</style>

