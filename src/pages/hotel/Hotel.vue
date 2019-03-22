<template>
    <div class="hotel">
        <hotel-header></hotel-header>
        <hotel-img></hotel-img>
        <hotel-find></hotel-find>
        <hotel-icon></hotel-icon>
        <recommend-theme></recommend-theme>
    </div>
</template>


<script>
import HotelHeader from './components/HotelHeader'
import HotelImg from './components/HotelImg'
import HotelFind from './components/HotelFind'
import HotelIcon from './components/HotelIcon'
import recommendTheme from './components/HotelRecommendTheme'
export default {
    name: 'Hotel',
    components: {
        HotelHeader,
        HotelImg,
        HotelFind,
        HotelIcon,
        recommendTheme
    }
}
</script>


<style lang="less" scoped>
    .hotel {
        // background-color: #ccc;
    }
</style>
