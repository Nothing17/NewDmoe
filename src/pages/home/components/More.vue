<template>
    <div class="more">
        <div class="title">继续加载 <span class="down"> <img src="../../../assets/images/down.png" alt=""> </span> </div>
    </div>
</template>

<script>
export default {
    name:'More'
}
</script>

<style lang="less" scoped>
.more {
    // padding: 0.3rem 1.5rem 0 0.4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    .title {
        height: 1.207729rem;
        line-height: 1.207729rem;
        text-align: center;
        // width: 4.830918rem;
        background-color: #ddd;
        // margin: 0 auto;
        font-size: .386473rem;
    }
    .down {
        display: block;
        position: absolute;
        top:0;
        right:3.285024rem;
        width: .402947rem;
        height: .358937rem;
        animation: slideUp 0.7s infinite both;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
