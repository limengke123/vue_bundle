<template lang="pug">
    div
        Header
        router-link(to="/test") 去往test的按钮
        router-link(to="/api") 去往api的按钮
</template>

<script>
    import header from '../components/header.vue'
    export default{
        components:{
            Header:header
        }
    }
</script>

<style lang="stylus" scoped>

</style>