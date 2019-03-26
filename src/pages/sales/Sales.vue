<template>
    <div class="sales">
        <sales-header></sales-header>
        <sales-nav></sales-nav>
        <sales-main></sales-main>
        <sales-hot></sales-hot>
    </div>
</template>


<script>
import SalesHeader from './components/SalesHeader'
import SalesNav from './components/SalesNav'
import SalesMain from './components/SalesMain'
import SalesHot from './components/SalesHot'

export default {
    name:'Sales',
    components: {
        SalesHeader,
        SalesNav,
        SalesMain,
        SalesHot
    }
}
</script>
