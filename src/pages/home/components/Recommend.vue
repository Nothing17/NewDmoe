<template>
    <div class="guideflow">
        <div class="recommend">
            <div class="hd"><h3>推荐攻略</h3></div>
            <div class="bd" v-for="(item,index) in recommendList" :key="index"  @click="headleClickToInfo(item.id)">
                <a>
                <div class="title"> {{item.title}} </div>
                <dl>
                    <dt><img :src="item.imgUrl" alt=""></dt>
                    <dd>
                        <div class="summary"> {{ item.desc }} </div>
                    </dd>
                    <dd> <span class="more" >更多详细</span> </dd>
                </dl>
                </a>
            </div>
          
        </div>
        
    </div>
    
</template>

<script>
export default {
    name:'recommend',
    props: ['recommendList'],
    methods:{
      headleClickToInfo(id) {
        // name为路由中的定义的name属性
        this.$router.push({ name: 'info', params: { id }})
        // console.log(id);
        
      }
    }
  
};
</script>

<style lang="less" scoped>
.recommend {
  .hd {
    height: 0.917874rem;
    line-height: 0.917874rem;
    text-align: center;
    border-top: 0.024155rem solid #ccc;
    border-bottom: 0.024155rem solid #ccc;
    font-size: 0.41401rem;
    font-weight: 800;
    color: #000;
    background-color: rgba(230, 224, 224, 0.3);
  }
  .bd {
    a {
      display: block;
      .title {
        padding: 0.3rem 1.5rem 0 0.4rem;
        font-size: 0.506rem;
        color: #111;
        line-height: 1.4em;
        max-height: 1.3rem;
        position: relative;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      dl {
              padding: .24rem .4rem .4rem;
      }
      dt {
        width: 3.466rem;
        float: left;
        img {
          width: 3.466rem;
          height: 2.4rem;
        }
      }
      dd {
        margin-left: 3.893rem;
        color: #999;
        height: 2.4rem;
        position: relative;
        .summary {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3em;
          font-size: 0.373rem;
          padding: 0.14rem 0 0;
          color: #bbb;
        }
      }
      .more {
        float: right;
        width: 1.432367rem;
        height: .603865rem;
        line-height: .603865rem;
        text-align: center;
        margin-right: .724638rem;
        // border: .024155rem solid #87cdff;
        padding: .084155rem;
        border-radius: .241546rem;
        background-color: #87cdff;
        color:#fff;
        font-size: 14px
      }
    }
  }
}
</style>
