<template>
  <div class="friend-middle">
    <div class="j_fixed clearfix">
      <div class="mdd">
        目的地
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="time" @click="timeList">
        全部出发时间
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="search-content" ref="searchitem" v-show="timeListFlag" @click="timeList" >
      <ul>
        <li class="search-item">111111111</li>
        <li class="search-item">111111111</li>
        <li class="search-item">111111111</li>
        <li class="search-item">111111111</li>
        <li class="search-item">111111111</li>
      </ul>
    </div>
    <div class="imgbg">
      <img src="../../../assets/images/topNum-bg.jpg" alt>
    </div>
  </div>
</template>


<script>
export default {
  name: "FriendMiddle",
  data () {
    return {
     timeListFlag: false
    }
  },
  methods: {
    timeList () {
      this.timeListFlag = !this.timeListFlag
    }
  }
};
</script>


<style lang="less" scoped>
.friend-middle {
  position: relative;
  
}
.j_fixed {
  border-bottom: 0.024155rem solid #ddd;
  height: 1.062802rem;
  padding: 7px 0;
  //   line-height: 1.062802rem;
  box-sizing: border-box;
  
  .mdd,
  .time {
    float: left;
    width: 50%;
    padding: 0 0.724638rem;
    box-sizing: border-box;
    font-size: 0.362319rem;
    color: #a4a4a4;
    line-height: 0.700483rem;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  .mdd {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0.024155rem;
      height: 100%;
      background-color: #ccc;
    }
  }
}
.imgbg {
  img {
    width: 100%;
    height: 100%;
  }
}
.search-content {
  z-index: 1;
  position: absolute;
  top: 0.966184rem;
  left: 0;
  right: 0;
  height: 19rem;
  bottom: 0;
  background: #eee;
  overflow: hidden;
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
  .box-height {
    height: 16.376812rem;
    display: block;
  }
}
</style>

