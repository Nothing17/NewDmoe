<template>
  <div class="comment" ref="comment" v-cloak>
    <div>
      <header-comment></header-comment>
      <main-comment></main-comment>
      <content-comment></content-comment>
      
    </div>
  </div>
</template>

<script>
import HeaderComment from "./components/HeaderComment";
import MainComment from "./components/MainComment";
import ContentComment from "./components/ContentComment";
// import Upload from "./components/UploadComment"
import Bscroll from "better-scroll";
export default {
  name: "Commet",
  components: {
    HeaderComment,
    MainComment,
    ContentComment
    // Upload
  },
  mounted() {
    const options = {
      click: true,
      tap: true
    };
    this.scroll = new Bscroll(this.$refs.comment, options);
  }
};
</script>

<style lang="less" scoped>
.comment {
    overflow: hidden;
    height: 16.111111rem;
}
</style>
