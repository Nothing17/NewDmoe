<template>
  <div class="info-list">
    <div class="desc-info">
      <h1 class="city-name">{{ city }}</h1>
      <p v-for="(item,index) in descList" :key="index">{{ item }}</p>
    </div>
    <div class="time-info">
      <div class="row">
        <div class="time1">开放时间</div>
        <span class="time2">全天</span>
      </div>
      <div class="row">
        <div class="time1">门票攻略</div>
        <span class="time2">{{ status }}</span>
      </div>
      <div class="row">
        <div class="time1">用时参考</div>
        <span class="time2">{{ day }} 天</span>
      </div>
      <div class="row">
        <div class="time1">门票参考</div>
        <span class="time2">  <span class="price">￥ {{ price }} </span>  </span>
      </div>
      <div class="row">
        <div class="time1">电话</div>
        <span class="time2">{{ phone }}</span>
      </div>
    </div>
    <div class="list-info">
      <h1 class="city-name">图文介绍</h1>
      <h1 class="comment" @click.prevent="headleClickToComment">评论</h1>
      <div class="img-list" v-for="(item ,index) in imgUrl" :key="index">
        <img :src="item.img">
        <p class="img-desc"  v-show="item.imgdesc">{{ item.imgdesc }}</p>
      </div>
    </div>
    <div class="list-footer">
      <tip-com></tip-com>
    </div>
  </div>
</template>

<script>
import TipCom from '../../Tip/Tipcom'
export default {
  name: "InfoList",
  props: ["city", "status", "day", "phone", "descList", "imgUrl", "pdesc","price"],
  components: {
    TipCom
  },
  methods: {
    headleClickToComment() {
      const id = this.$route.params.id;
      // name为路由中的定义的name属性
      this.$router.push({ name: "comment", params: { id } });
      // console.log(id);
    }
  }
};
</script>

<style lang="less" scoped>
.desc-info,
.list-info {
  padding: 0.8rem 0.26667rem 0;
  .city-name {
    margin: 0.241546rem 0;
    font-size: 0.724638rem;
    position: relative;
    padding-left: 0.241546rem;
    &::before {
      content: "";
      width: 0.054155rem;
      height: 0.724638rem;
      background: #ffdb26;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  p {
    font-size: 0.4rem;
    margin-bottom: 0.2666666667rem;
    line-height: 0.6133333333rem;
  }
}
.time-info {
  padding: 0.4rem 0.26667rem 0;
  font-size: 0.4rem;
  // position: relative;
  .row {
    overflow: hidden;
    margin-bottom: 0.2666666667rem;
    padding-top: 0.120773rem;
    .time1 {
      // font-size: .4rem;
      font-weight: 800;
      float: left;
    }
    .time2 {
      // position: absolute;
      // top: .400628rem;
      // left: 2.270531rem;
      float: left;
      margin-left: 0.483092rem;
      color: rgb(114, 109, 109);
      .price {
        color: red;
        font-weight: 700;
      }
    }
  }
}
.list-info {
  width: 100%;
  padding: 0;
  .city-name {
    margin-left: 0.26667rem;
    float: left;
  }
  .comment {
    box-sizing: border-box;
    float: right;
    // margin: 0.241546rem 0;
    font-size: 0.524638rem;
    // padding-right: 0.241546rem;

    // display: inline-block;
    // height: 0.96rem;
    padding: 0 0.2666666667rem;
    // font-size: 0.32rem;
    line-height: 0.96rem;
    text-align: center;
    color: #ff9d00;
    border-radius: 0.0533333333rem;
    background-color: #f8f8f8;
    margin-right: 0.2133333333rem;
    margin-bottom: 0.2133333333rem;
  }

  .img-list {
    padding: 0.4rem 0.26667rem 0;
    img {
      width: 100%;
      height: 100%;
    }
    .img-desc {
      box-sizing: border-box;
      margin-top: .241546rem;
      background-color: rgba(0, 0, 0, 0.1);
      padding:.120773rem 0;
    }
  }
}
.list-footer {
  

}
</style>
