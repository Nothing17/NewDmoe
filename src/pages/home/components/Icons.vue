<template>
    <div class="icons">
        <ul class="clearfix" id="j-nav-li">
            <li>
               
                <router-link to="/raider" tag="a" class="i1"> <i></i><br>找攻略</router-link>
            </li>
            <li> <router-link to="/note" tag="a" class="i5"> <i></i><br>看游记</router-link></li>
            <li><router-link to="/wenda" tag="a" class="i7"> <i></i><br>问达人</router-link></li>
            <li><router-link to="/friend" tag="a" class="i6"> <i></i><br>结伴</router-link> </li>
            <li><a href="/hotel/" class="i2"><i></i><br>酒店</a></li>
            <li><a href="/sales/" class="i3"><i></i><br>旅行商城</a></li>
            <li><a href="/flight/" class="i4"><i></i><br>机票</a></li>
            <li><a href="/localdeals/" class="i8"><i></i><br>当地玩乐</a></li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.icons {
  padding: 0.2rem 0 0.8rem;
  height: 5.797101rem;
  #j-nav-li {
    padding: 0.2rem;
    li {
      float: left;
      width: 2.4rem;
      height: 2.4rem;
      a {
        display: block;
        width: 100%;
        line-height: 1rem;
        text-align: center;
        font-size: 0.426rem;
        padding: 0.553rem 0 0;
        //   background-color: pink;
        i {
          width: 1.22rem;
          height: 1.22rem;
          display: inline-block;
          background: url("../../../assets/images/i_nav3.png") no-repeat;
          background-size: 5rem;
          //   margin-bottom: .266rem;
        }
      }
      .i1 {
        color: #ff9d00;
      }
      .i5 {
        color: #feca2b;
        i {
          background-position: 0 -1.24rem;
        }
      }
      .i7 {
        color: #42d6ba;
        i {
          background-position: -2.48rem -1.24rem;
        }
      }
      .i6 {
        color: #f94a87;
        i {
          background-position: -1.24rem -1.24rem;
        }
      }
      .i2 {
        color: #32a2f1;
        i {
          background-position: -1.24rem 0;
        }
      }
      .i3 {
        color: #fd4e4e;
        i {
          background-position: -2.48rem 0;
        }
      }
      .i4 {
        color: #acce0e;
        i {
          background-position: -3.72rem 0;
        }
      }
      .i8 {
        color: #b160df;
        i {
          background-position: -3.72rem -1.24rem;
        }
      }
    }
  }
}
</style>
