<template>
  <div class="raider-hot">
    <div class="block">
      <a class="item-hd" href="/mdd/list.html">
        <h2>热门目的地</h2>
        <p class="dec">最受大家喜欢的目的地推荐</p>
      </a>
      <div class="scopebar">
        <div class="scrollview">
          <div class="conbox">
            <a href="javascript:void(0);" :class="{tab:activeColor,'cur':true}" @click="ClickTab">国内</a>
            <a href="javascript:void(0);" @click="ClickSite('港澳台')" >港澳台</a>
            <a href="javascript:void(0);" @click="ClickSite('日韩')" >日韩</a>
            <a href="javascript:void(0);">东南亚</a>
            <a href="javascript:void(0);">南亚 西亚</a>
            <a href="javascript:void(0);">欧洲 美洲</a>
            <a href="javascript:void(0);">澳洲 非洲</a>
          </div>
        </div>
        <div class="tab-con" data-tabname="国内" style="display: block;">
          <div class="item-list clearfix">
            <a href="#">
              <img
                src="https://n4-q.mafengwo.net/s7/M00/2E/D4/wKgB6lSgx0KAAtuCAAVoSPI1DUk40.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">北京</div>
            </a>
            <a href="#">
              <img
                src="https://b3-q.mafengwo.net/s9/M00/7F/37/wKgBs1dP15aAEhYRAARtahavugY95.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">三亚</div>
            </a>
            <a href="#">
              <img
                src="https://n3-q.mafengwo.net/s8/M00/A2/BA/wKgBpVYfQ3qAW4lGAADfj5rcROU25.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">厦门</div>
            </a>
            <a href="#">
              <img
                src="https://p1-q.mafengwo.net/s5/M00/2B/FB/wKgB3FYu57iAeKCZAADn6gzPV2o53.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">上海</div>
            </a>
            <a href="#">
              <img
                src="https://n4-q.mafengwo.net/s8/M00/A5/44/wKgBpVYfRkqAIeUVAAIhvcm_97Y75.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">成都</div>
            </a>
            <a href="#">
              <img
                src="https://b4-q.mafengwo.net/s6/M00/66/87/wKgB4lNYlJGAf371AAE58nN48GY90.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100"
                style="display: inline;"
              >
              <div class="title">丽江</div>
            </a>
          </div>
          <div class="showmore">
            <a href="/mdd/list.html">更多目的地</a>
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
    },
    ClickSite(msg) {
console.log(msg);

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

