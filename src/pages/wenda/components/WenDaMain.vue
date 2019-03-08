<template>
  <div class="wenda-main">
    <div class="notes-cover">
      <img
        src="https://p4-q.mafengwo.net/s13/M00/04/A8/wKgEaVx3TdGARfgtABZ8aqRm8fo37.jpeg?imageMogr2%2Fthumbnail%2F%21450x270r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21450x270%2Fquality%2F90"
        alt="头图"
      >
    </div>
    <div class="notes-wrapper">
      <div class="header-title">澳大利亚“尝新”，时尚都市与乡间野趣的混搭之旅</div>
      <div class="notes-meta">19-03-05</div>
      <div class="notes-author">
        <div class="user">
          <img
            src="https://p2-q.mafengwo.net/s8/M00/8C/A0/wKgBpVW09JOAYtIxAAVGqgDG4Fg46.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90"
            alt
            srcset
          >
          <div class="in">
            <div class="username">IN老板</div>
            <div class="dec">28篇游记 4396粉丝</div>
          </div>
        </div>
        <div class="address">澳大利亚</div>
      </div>
      <div class="notes-point">
        <span class="legend">我的出行信息</span>
        <ul class="clearfix">
          <li>出行时间：2019-03-05</li>
          <li>出行地点：澳大利亚</li>
          <li>出行方式：飞机</li>
          <li>出行天气：晴</li>
        </ul>
      </div>
      <div class="notes-detail">
        <h1 class="j_title">【来自大洋彼岸的Freestyle】</h1>
        <div class="j_renditem">
          <p class="j_time">
            【1&nbsp;month&nbsp;ago】
            <br>熟悉的航站楼，不同过往的乡音和穿梭其间步履匆匆的人们，我们再次赶上春运的节骨眼儿上如约而至。春节小分队整装待发！坐标帝都大 北京 ，目的地南半球最大的岛=AUSTRALIA。
            对于初次到访 澳大利亚 的人来说，也实属目的地选择障碍，经典的过于大众，毕竟要把自由行玩成春节旅行团就有点太衰了哈哈。所以在小分队成员的一通鸡血建设后，我这个行程大总管就要开启我的秘境挖掘机了，欲知后事如何,请看下面分解。
          </p>
          <p class="j_time">【一组开篇的旅行VLOG】
            <br>澳大利亚 给人的感觉是安逸自由、自然纯净并充满阳光的，这里的紫外线一点也不吝啬，小伙伴们嘴里一边抱怨着一边又在想着下一次的澳洲目的地是哪儿了，哈哈人总是很矛盾。一只开篇视频做个预告
          </p>
          <video width="320" height="240" controls="controls" autoplay="autoplay">
            <source src="https://www.mafengwo.cn/rest/app/note/video/1947542?jsondata=%7B%22data_style%22%3A%22jump%22%7D" type="application/x-mpegURL">
            
          </video>
          <p class="j_time">【INS Style行程】
            <br>春节期间的 澳大利亚 充满Chinese气息，满大街的猪年大吉和福字让人有一种回家的感觉，就连街心公园的老年乐团中间都摆放了一只猪玩偶，他们指着它告诉我it's your pig year。。。
拥有6大州和2个领地的 澳大利亚 我们去了4个：NSW 新南威尔士 州、ACT首都领地、VIC 维多利亚州 和TAS 塔斯马尼亚 州。为了避开人潮，这次没有选择那些必打卡，所以这篇游记你看不到 悉尼 歌剧院这类景点，深入当地ins景点和店铺才是这趟旅行的宗旨。
          </p>
          <div class="img">
            <img src="https://b1-q.mafengwo.net/s13/M00/70/F4/wKgEaVx9M6OAdRYhAAkVhG5vN-s83.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "WenDaMain"
};
</script>

<style lang="less" scoped>
.wenda-main {
  .notes-cover {
    height: 5.434783rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .notes-wrapper {
    padding: 0.667rem 0.533rem;
    height: 12.077295rem;
    // background-color: pink;

    .header-title {
      text-align: center;
      margin-bottom: 0.53333rem;
      font-size: 0.8rem;
      line-height: 1.2;
      font-weight: 600;
    }
    .notes-author {
      display: flex;
      justify-content: space-between;
      margin-top: 0.241546rem;
      .address {
        font-size: 0.724638rem;
      }
      .user {
        img {
          float: left;
          width: 1.449275rem;
          height: 1.449275rem;
          border-radius: 50%;
        }
        .in {
          line-height: 1.44/2rem;
          margin-left: 0.241546rem;
          float: right;
          .username {
            //    display: inline;
          }
          .dec {
            // display: inline;
          }
        }
      }
    }
    .notes-point {
      margin-top: 0.841546rem;
      box-sizing: content-box;
      position: relative;
      .legend {
        position: absolute;
        top: -0.180773rem;
        left: 0.555556rem;
      }
      ul {
        padding: 0.483092rem 0;
        border: 0.024155rem solid #ccc;
        li {
          width: 3.381643rem;
          float: left;
          padding: 0.241546rem;
          &:nth-child(2n) {
            text-align: left;
            padding-left: 0.483092rem;
          }
        }
      }
    }
    .notes-detail {
      margin-top: 0.483092rem;
      .j_title {
        text-align: left;
        font-size: 0.634783rem;
        font-weight: 800;
      }
      .j_renditem {
        margin-top: 0.483092rem;

        .j_time {
          // font-size: 0.334783rem;
          color: #908e8e;
          font-weight: 600;
          margin-bottom: 0.8rem;
          font-size: 0.48rem;
          line-height: 1.5;
        }
        .img {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

