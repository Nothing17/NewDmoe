<template>
  <div class="wenda-date">
    <a href="#" class="wenda-top">
      <span class="day" v-html="day"></span>
      <span class="date">
        <em v-html="years"></em>
        <em v-html="month"></em>
      </span>
      <div class="remember">纪念日</div>
    </a>
  </div>
</template>


<script>
export default {
  name: "WendaDate",
  data() {
    return {
      day: "",
      month: "",
      years: ""
    };
  },
  methods: {
    // 获取时间
    getTime() {
      const time = new Date();
      this.day = time.getDate();
      this.years = time.getFullYear();
      switch (parseInt(time.getMonth())) {
        case 0:
          this.month = "Jan";
          break;
        case 1:
          this.month = "Feb";
          break;
        case 2:
          this.month = "Mar";
          break;
        case 3:
          this.month = "Apr";
          break;
        case 4:
          this.month = "May";
          break;
        case 5:
          this.month = "June";
          break;
        case 6:
          this.month = "July";
          break;
        case 7:
          this.month = "Aug";
          break;
        case 8:
          this.month = "Sep";
          break;
        case 9:
          this.month = "Oct";
          break;
        case 10:
          this.month = "Nov";
        case 11:
          this.month = "Dec";
          break;
        default:
          break;
      }
     
    }
  },
  created() {
    this.getTime();
  }
};
</script>


<style lang="less" scoped>
.wenda-date {
  .wenda-top {
    display: block;
    padding: 0.533rem;
    color: #008489;
    text-align: center;
    position: relative;
    // display:flex;
    .day {
      position: relative;
      font-size: 1.6rem;
      font-weight: 600;
      display: inline-block;
      margin-right: 0.483092rem;
      &::before {
        content: "";
        position: absolute;
        left: -0.207rem;
        top: 0;
        height: 1.333rem;
        width: 0.107rem;
        background-color: #008489;
      }
      &::after {
        content: "";
        position: absolute;
        right: -0.207rem;
        top: 0;
        height: 1.333rem;
        width: 0.107rem;
        background-color: #008489;
      }
    }
    .date {
      line-height: 0.667rem;
      font-size: 0.667rem;
      letter-spacing: 0.053rem;
      display: inline-block;

      em {
        display: block;
        font-style: normal;
      }
      &::after {
        content: "";
        position: absolute;
        right: 2.657005rem;
        top: 0.555556rem;
        height: 1.333rem;
        width: 0.107rem;
        background-color: #008489;
      }
    }
    .remember {
      margin-top: 0.267rem;
      font-size: 1.013rem;
      line-height: 1;
      font-weight: 600;
    }
  }
}
</style>
