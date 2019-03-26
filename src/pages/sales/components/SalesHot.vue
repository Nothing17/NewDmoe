<template>
  <div>
    <div class="hotsales clearfix">
      <div class="item-hd">
        <span>常驻运营区</span>
      </div>
      <div class="qiang">
        <img
          src="https://n3-q.mafengwo.net/s13/M00/C0/FB/wKgEaVx0tfaAOlO1AAO7mc_4rWA81.jpeg?imageMogr2%2Fthumbnail%2F%21670x340r%2Fgravity%2FCenter%2Fcrop%2F%21670x340%2Fquality%2F90"
          alt
        >
        <div class="title">天津直飞芽庄6天半自助游（1~2天自由活动+珍珠岛五星行程+赠送泥浆浴或蚕岛游+京津大巴接送+600多人出游+旅游意外险）</div>
        <div class="tag">
          <div class="price">
            <span>￥</span>1599
          </div>
          <div class="price-btn">去抢购</div>
        </div>
      </div>
      <a href="/" class="act act1">
        <p>新人礼包</p>
        <p>首次下单可领</p>
        <span class="el-icon-star-off"></span>
      </a>
      <a href="/" class="act">
        <p>限时特价</p>
        <p>每日尾货抢不停</p>
        <span class="el-icon-star-off"></span>
      </a>
    </div>
    <div class="hotsales clearfix">
      <div class="item-hd">
        <span>爆款热卖</span>
      </div>
      <div class="qiang">
        <img
          src="https://n3-q.mafengwo.net/s13/M00/C0/FB/wKgEaVx0tfaAOlO1AAO7mc_4rWA81.jpeg?imageMogr2%2Fthumbnail%2F%21670x340r%2Fgravity%2FCenter%2Fcrop%2F%21670x340%2Fquality%2F90"
          alt
        >
        <div class="title">天津直飞芽庄6天半自助游（1~2天自由活动+珍珠岛五星行程+赠送泥浆浴或蚕岛游+京津大巴接送+600多人出游+旅游意外险）</div>
        <div class="tag">
          <div class="price">
            <span>￥</span>1599
          </div>
          <div class="price-btn">去抢购</div>
        </div>
      </div>
      <a href="/" class="act act1">
        <p>新人礼包</p>
        <p>首次下单可领</p>
        <span class="el-icon-star-off"></span>
      </a>
      <a href="/" class="act">
        <p>限时特价</p>
        <p>每日尾货抢不停</p>
        <span class="el-icon-star-off"></span>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "HotSales"
};
</script>


<style lang="less" scoped>
.hotsales {
  background: #fff;
  .item-hd {
    background: #f7f7f7;
    height: 0.426rem;
    padding: 0.4rem 0;
    text-align: center;
    // position: relative;
    span {
      font-size: 0.426rem;
      line-height: 0.426rem;
      color: #999;
      // position: relative;
      vertical-align: top;
    }
  }
  .qiang {
    float: left;
    padding: 0.32rem;
    img {
      width: 3.866rem;
      height: 2.186rem;
    }
    .title {
      width: 3.866rem;
      padding: 0.186rem 0 0;
      font-size: 0.373rem;
      color: #111;
      line-height: 1.2em;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .tag {
      width: 3.866rem;
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 0.533rem;
        color: #ff7800;
        line-height: 1em;
        padding: 0.3rem 0 0;
        // position: relative;
      }
      .price-btn {
        box-sizing: border-box;
        line-height: 1em;
        padding: 0.3rem 0.120773rem 0;
        background-color: #f63c3c;
        color: #fff;
      }
    }
  }
  .act {
    box-sizing: border-box;
    float: left;
    display: block;
    width: 5.494rem;
    height: 2.266rem;
    background-size: 2.4rem;
    //   border: .024155rem solid #000;
    position: relative;
    p:nth-child(1) {
      padding: 0.666rem 0 0 0.293rem;
      font-size: 0.426rem;
      color: #111;
      line-height: 1em;
    }
    p:nth-child(2) {
      padding: 0.213rem 0 0 0.293rem;
      font-size: 0.373rem;
      color: #999;
      line-height: 1em;
    }
    span {
      position: absolute;
      right: 0.966184rem;
      top: 0.603865rem;
      color: #67c23a;
      font-size: 0.966184rem;
    }
  }
  .act1 {
    border-bottom: 0.024155rem dotted #909399;
  }
}
</style>
