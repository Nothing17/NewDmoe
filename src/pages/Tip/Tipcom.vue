<template>
    <div class="tip">
        <tip-main></tip-main>
    </div>
</template>

<script>
import TipMain from './components/TipMain'
export default {
    name: 'TipCom',
    components: {
        TipMain
    }
}
</script>

<style lang="less" scoped>
    .tip {
         padding: 0.4rem 0.26667rem 0;
    }
</style>

