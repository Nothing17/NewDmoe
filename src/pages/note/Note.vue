<template>
    <div class="note">
        <note-header></note-header>
        <fs-wrapper :urlList="urlList"></fs-wrapper>
        <note-main></note-main>
    </div>
</template>

<script>
import NoteHeader from './components/NoteHeader'
import FsWrapper from './components/FsWrapper'
import NoteMain from './components/NoteMain'
export default {
    name: 'Note',
    components: {
        NoteHeader,
        FsWrapper,
        NoteMain
    },
    data () {
        return {
            urlList:["https://n1-q.mafengwo.net/s13/M00/7F/03/wKgEaVx5PcOALyyqAAMyHCmWCfA35.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90","https://b1-q.mafengwo.net/s13/M00/3B/B5/wKgEaVx6N9KAaHcgAAMSzqJ5hp000.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90","https://b1-q.mafengwo.net/s13/M00/DF/2D/wKgEaVx3zTOAUwikAAMZPeMOvyA77.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90"]
        }
    }
}
</script>

<style lang="less" scoped>

</style>

