<template lang="pug">
    div
        header-component
        body-component
        footer-component
</template>

<script>
    import Headercomponent from '../components/header.vue'
    import Bodycomponet from '../components/homeBody.vue'
    import Footercomponet from '../components/footer.vue'
    export default{
        components:{
            ["header-component"]:Headercomponent,
            ["body-component"]:Bodycomponet,
            ['footer-component']:Footercomponet
        }
    }
</script>

<style lang="stylus" scoped>

</style>