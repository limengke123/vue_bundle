<template lang="pug">
    div.whole-wrapper
        header-component
        topic-body
        footer-component
</template>

<script>
    import HeaderComponent from '../components/header.vue'
    import FooterComponent from '../components/footer.vue'
    import TopicBody from '../components/topicBody.vue'
    export default {
        components:{
            ['header-component']:HeaderComponent,
            ['topic-body']:TopicBody,
            ['footer-component']:FooterComponent
        }
    }
</script>

<style lang="stylus" scoped>
.whole-wrapper
    display flex
    flex-direction column
    height 100%
</style>