<template>
    <div class="comment">
        <header-comment></header-comment>
        <main-comment></main-comment>
        <content-comment></content-comment>
    </div>
</template>

<script>
import HeaderComment from './components/HeaderComment'
import MainComment from './components/MainComment'
import ContentComment from './components/ContentComment'
export default {
    name:'Commet',
    components: {
        HeaderComment,
        MainComment,
        ContentComment
    }
}
</script>

<style lang="less" scoped>

</style>
