<template>
    <div class="friend">
        <friend-Header></friend-Header>
        <friend-middle></friend-middle>
        <friend-main></friend-main>
    </div>
</template>

<script>
import FriendHeader from './components/FriendHeader'
import FriendMiddle from './components/FriendMiddle'
import FriendMain from './components/FriendMain'
export default {
    name:'Friend',
    components: {
        FriendHeader,
        FriendMiddle,
        FriendMain
    }
}
</script>

<style lang="less" scoped>

</style>


