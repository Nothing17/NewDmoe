<template>
    <div class="wenda">
        <wen-da-header></wen-da-header>
        <wen-da-date></wen-da-date>
        <wen-da-main></wen-da-main>
    </div>
</template>


<script>
import WenDaHeader from './components/WenDaHeader'
import WenDaDate from './components/WenDaDate'
import WenDaMain from './components/WenDaMain'
export default {
    name:'WenDa',
    components: {
        WenDaHeader,
        WenDaDate,
        WenDaMain
    }
}
</script>

<style lang="less" scoped>

</style>

