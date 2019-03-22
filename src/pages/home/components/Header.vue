<template>
    <div class="header">
        <div class="logo">
            <a href="/">旅游</a>
        </div>
        <div class="search">
            <form class="search-wrap">
                <input type="text" class="search-input" placeholder="搜索目的地/攻略/游记">
                <button class="btn"></button>
            </form>
        </div>
        <div class="ctiy" @click.prevent="goCity">
            {{ this.$store.state.city }}
             <span class="iconfont arrow-icon" >&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        goCity () {
            this.$router.push({path:'/city'})
        }
    }
}
</script>

<style lang="less" scoped>
    .header {
            display: flex;
            // background-color: paleturquoise;
            background-color: #fff;
            border-bottom: .024155rem solid #e5e5e5;
            height: 1.33rem;
        .logo {
            float: left;
            padding: .362319rem .241546rem 0;  
            a { 
                display: block;
                width: 2.51rem;
                height: .67rem;      
                background: url('../../../assets/images/logo2.png') no-repeat;
                background-size: 2.16rem .56rem; 
                
                text-indent: -9999px;
            }
        }
        .search {
                flex: 1;
                .search-wrap {
                     padding: .362319rem .241546rem 0;
                     position: relative;  
                     .search-input {
                         border-radius: .4rem;
                         width: 4.641787rem;
                         height: .691546rem;
                         background-color: #eee;
                         padding-left: .241546rem;
                     }
                     .btn {
                         position: absolute;
                         top: .507246rem;
                         right: 1.459275rem;
                         width: .933rem;
                         height: .8rem;
                         background: url('../../../assets/images/btn_search2.png') no-repeat;
                         background-size: .453rem;
                     }
                }
        }
        .ctiy {
            position: absolute;
            float: right;
            top: .555556rem;
            right: .241546rem;
            font-size: .31401rem;
            .arrow-icon {
                position: absolute;
                top:-0.024155rem;
                right: -0.783092rem;
            }
        }
    }
</style>

