<template>
  <div class="info">
    <header-info :city="city"></header-info>
    <fs-wrapper :urlList="urlList"></fs-wrapper>
    <info-list :city="city"></info-list>
  </div>
</template>
<script>
import HeaderInfo from "./components/headerInfo";
import FsWrapper from "./components/FsWrapper";
import InfoList from "./components/InfoList";
export default {
  name: "Info",
  components: {
    HeaderInfo,
    FsWrapper,
    InfoList
  },
  data () {
    return {
      city:{},
      urlList:[]
    }
  },
  methods: {
    getHomeInfo() {
      this.axios.get("/mock/infodata.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      const id = this.$route.params.id
      // console.log(id);
      
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.infoList[id].title;
        this.urlList = data.infoList[id].urlList;
        console.log(data.infoList[id].urlList);
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

