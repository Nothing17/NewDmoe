<template>
  <div class="raider-hot">
    <div class="block">
      <a class="item-hd" href="/mdd/list.html">
        <h2>主题精选</h2>
        <p class="dec">大量主题出行，个性化你的旅行</p>
      </a>
      <div class="scopebar">
        <div class="scrollview">
          <div class="conbox">
            <a
              href="javascript:void(0);"
              :class="{tab:activeColor,'cur':true}"
              @click="ClickTab"
            >全年适宜</a>
            <a href="javascript:void(0);">季节</a>
            <a href="javascript:void(0);">出行方式</a>
            <a href="javascript:void(0);">节假日</a>
            <a href="javascript:void(0);">用户搜索</a>
          </div>
        </div>
        <div class="tab-con" data-tabname="全年适宜" style="display: block;">
          <div class="item-list clearfix">
            <a href="#">
              <img
                src="https://p2-q.mafengwo.net/s9/M00/03/B7/wKgBs1fH30CASZL3AAD2zZ5J3Eg43.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
    
                style="display: inline;"
              >
              <div class="title">免签</div>
            </a>
            <a href="#">
              <img
                src="https://n2-q.mafengwo.net/s9/M00/F8/54/wKgBs1fH0J-Ad7PSAAGpIqB38oU56.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">人文历史</div>
            </a>
            <a href="#">
              <img
                src="https://n2-q.mafengwo.net/s9/M00/01/6D/wKgBs1fH3M2ACD0jAAEdYs-0KUA83.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">拍片圣地</div>
            </a>
            <a href="#">
              <img
                src="https://p4-q.mafengwo.net/s9/M00/01/49/wKgBs1fH3KSADtxdAADINcFVy4k75.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">自然风景</div>
            </a>
            <a href="#">
              <img
                src="https://b2-q.mafengwo.net/s9/M00/05/F2/wKgBs1fH4d2AdJRbAACiVYpVTYM06.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">小众</div>
            </a>
            <a href="#">
              <img
                src="https://n3-q.mafengwo.net/s9/M00/02/A0/wKgBs1fH3kCAEL12AAEYrn_QfMY23.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">登山</div>
            </a>
          </div>
          <div class="showmore">
            <a href="/mdd/list.html">更多主题</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RaiderHot",
  data() {
    return {
      activeColor: false
    };
  },
  methods: {
    ClickTab() {
      this.activeColor = !this.activeColor;
    }
  }
};
</script>

<style lang="less" scoped>
.block {
  border-bottom: 0.024155rem solid #e6e6e6;
  padding: 0 0.4rem;
  //   background-color: pink;
  overflow: hidden;
  .item-hd {
    text-align: center;
    display: block;
    border-bottom: 1px dotted #ddd;
    padding: 0.8rem 0 0.66667rem;
    h2 {
      font-size: 0.53333rem;
      color: #111;
      line-height: 1em;
      padding-bottom: 0.24rem;
      font-weight: normal;
    }
    .dec {
      font-size: 0.37333rem;
      color: #999;
    }
  }
  .scopebar {
    position: relative;
    margin: 0 -0.4rem;
    padding-left: 0.4rem;
    .scrollview {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      z-index: 1;
      .conbox {
        width: 28rem;
      }
      a {
        display: block;
        float: left;
        line-height: 1em;
        font-size: 0.426rem;
        color: #696969;
        padding: 0.53333rem 0.53333rem 0.26667rem;
        position: relative;
      }
      .tab {
        color: coral;
        border-bottom: 0.024155rem solid coral;
      }
    }
    .item-list {
      padding: 0.53333rem 0 0;
      margin-right: -0.4rem;
      a {
        display: block;
        padding: 0 0.4rem 0 0;
        float: left;
      }
      img {
        width: 2.74667rem;
        height: 2.26667rem;
      }
      .title {
        font-size: 0.4rem;
        color: #111;
        text-align: center;
        padding: 0.26667rem 0 0.66667rem;
      }
    }
    .showmore {
      padding-bottom: 0.66667rem;
      text-align: center;
      a {
        display: inline-block;
        padding: 0 1.33333rem;
        line-height: 1.12rem;
        font-size: 0.37333rem;
        color: #ff9d00;
        border: 1px solid #ff9d00;
        border-radius: 3px;
      }
    }
  }
}
</style>

