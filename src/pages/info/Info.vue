<template>
    <div class="info">
        <header-info></header-info>
        <fs-wrapper></fs-wrapper>
        <info-list></info-list>
    </div>
</template>
<script>
import HeaderInfo from './components/headerInfo'
import FsWrapper from './components/FsWrapper'
import InfoList from './components/InfoList'
export default {
    name:'Info',
    components:{
        HeaderInfo,
        FsWrapper,
        InfoList
    }
}
</script>

<style lang="less" scoped>
    
</style>
