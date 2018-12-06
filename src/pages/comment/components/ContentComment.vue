<template>
  <div class="content-comment">
      <!-- 输入框的信息 -->
    <div class="message">
        <textarea  cols="30" rows="10" class="impmessage"></textarea>
        <button class="btn">发送</button>
    </div>
    
    <!-- for 遍历的对象 -->
    <div class="item">
      <div class="info golden-remark">
        <img
          alt="很帅**角"
          src="https://p3-q.mafengwo.net/s12/M00/A0/A5/wKgED1v7qFOAP8GFAAB6I5fVaQo74.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
          class="photo"
        >
        <span class="name">很帅**角</span>
        <span class="user-lv lv-s1">Lv.2</span>
        <span class="time">2天前</span>
      </div>
      <div class="text">感觉好舒畅啊，最后一天晚上逛了泰国网红夜市，里面好吃好玩的太多了，最关键是便宜，这里简直就是吃货的天堂，呵呵。</div>
      <div class="picture"></div>
    </div>
    <div class="item">
      <div class="info golden-remark">
        <img
          alt="很帅**角"
          src="https://p3-q.mafengwo.net/s12/M00/A0/A5/wKgED1v7qFOAP8GFAAB6I5fVaQo74.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
          class="photo"
        >
        <span class="name">很帅**角</span>
        <span class="user-lv lv-s1">Lv.2</span>
        <span class="time">2天前</span>
      </div>
      <div class="text">感觉好舒畅啊，最后一天晚上逛了泰国网红夜市，里面好吃好玩的太多了，最关键是便宜，这里简直就是吃货的天堂，呵呵。</div>
      <div class="picture"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentComment"
};
</script>

<style lang="less" scoped>
.content-comment {
  margin: 0 0.2666666667rem;
  margin-top: 0.4rem;
  overflow: hidden;
    .message {
        margin-bottom: 0.4rem;
        overflow: hidden;
        box-sizing: border-box;
        .impmessage {
            box-sizing: border-box;
            border: .024155rem solid rgb(222, 224, 108);
            width: 100%;
            margin-bottom: 0.3rem;
            // padding-right: .024155rem;
        }
        .btn {
            width: 1.932367rem;
            height: .724638rem;
            line-height: .724638rem;
            font-size: .362319rem;
            font-weight: 700;
            float: right;
            text-align: center;

        }
    }





  .item {
    margin: .724638rem 0;
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
  }
}
</style>
