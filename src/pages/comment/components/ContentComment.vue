<template>
  <div class="wrapper" ref="wrapper">
    <div class="content-comment">
      <!-- 输入框的信息 -->
      <div class="message">
        <textarea cols="30" rows="10" class="impmessage" v-model="content"></textarea>
        <button class="btn" @click.prevent="postContent" :disabled="isDisabl">发送</button>
      </div>

      <!-- for 遍历的对象 -->
      <div class="item" v-for="(item,index) in  list" :key="index">
        <div class="info golden-remark">
          <img
            src="https://p3-q.mafengwo.net/s12/M00/A0/A5/wKgED1v7qFOAP8GFAAB6I5fVaQo74.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
            class="photo"
          >
          <span class="name">游客 </span>
          <span class="user-lv lv-s1">Lv.2</span>
          <span class="time"> {{ new Date() |datefmt }} </span>
        </div>
        <div class="text">{{ item.content }}</div>
        <div class="picture">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Upload from "./UploadComment"
export default {
  name: "ContentComment",
  components: {
    // Upload
  },
  data() {
    return {
      list: [],
      content: "",
      isDisabl: true,
      time:''
    };
  },
  methods: {
    postContent() {
      var contentObj = {
        id: Math.floor(Math.random() * 1000),
        content: this.content
      };

      const id = this.$route.params.id;
      console.log();

      // 现在 localStorage 中获取
      // 在存入localStorage中
      // localStorage.getItem('tpl', JSON.stringify(listObj) 得到的是字符串
      var list = JSON.parse(localStorage.getItem(`${id}comment`) || "[]");
      list.unshift(contentObj);
      localStorage.setItem(`${id}comment`, JSON.stringify(list));
      this.content = "";
      this.loadConent();
    },
    loadConent() {
      const id = this.$route.params.id;
      var list = JSON.parse(localStorage.getItem(`${id}comment`) || "[]");
      this.list = list;
    }
  },
  watch: {
    content() {
      const content = this.content;
      // console.log(content);
      if (content !== "") {
        return (this.isDisabl = false);
      } else {
        return (this.isDisabl = true);
      }
    }
  },
  created() {
    this.loadConent();
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  .content-comment {
    margin: 0 0.2666666667rem;
    margin-top: 0.4rem;
    .message {
      margin-bottom: 0.4rem;
      overflow: hidden;
      box-sizing: border-box;
      .impmessage {
        box-sizing: border-box;
        border: 0.024155rem solid rgb(222, 224, 108);
        width: 100%;
        margin-bottom: 0.3rem;
        // padding-right: .024155rem;
      }
      .btn {
        width: 1.932367rem;
        height: 0.724638rem;
        line-height: 0.724638rem;
        font-size: 0.362319rem;
        font-weight: 700;
        float: right;
        text-align: center;
      }
    }

    .item {
      margin: 0.724638rem 0;
      .info .photo {
        display: inline-block;
        vertical-align: top;
        width: 0.64rem;
        height: 0.64rem;
        border-radius: 50%;
        margin-right: 0.2666666667rem;
      }
      .name {
        font-size: 0.4rem;
        font-weight: bold;
      }
      .user-lv {
        font-size: 0.26667rem;
        color: #474747;
        padding: 0 0.08rem;
        text-align: center;
        line-height: 0.32rem;
        height: 0.32rem;
        border-radius: 0.05333rem;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        margin: 0 0 0.08rem 0.13333rem;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0.08rem;
      }
      .time {
        float: right;
      }
      .text {
        margin-top: 0.4rem;
        max-height: 5.6rem;
        font-size: 0.4rem;
        line-height: 0.56rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10;
      }
      .picture {
        margin-top: .241546rem;
      }
    }
  }
}
</style>
