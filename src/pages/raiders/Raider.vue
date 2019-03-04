<template>
    <div class="raiders">
        <raider-header></raider-header>
        <raider-swiper></raider-swiper>
        <raider-hot></raider-hot>
        <raider-theme></raider-theme>
    </div>
</template>

<script>
import RaiderHeader from './components/RaiderHeader'
import RaiderSwiper from './components/Raiderswiper'
import RaiderHot from './components/RaiderHot'
import RaiderTheme from './components/RaiderTheme'
export default {
    name:"Raider",
    components: {
        RaiderHeader,
        RaiderSwiper,
        RaiderHot,
        RaiderTheme
    }
}
</script>

<style lang="less" scoped>

</style>

