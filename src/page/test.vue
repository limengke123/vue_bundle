<template lang="pug">
    div
        router-link(to="/") 去往首页
        spinner

</template>

<script>
    import HttpRequest from '../util/http'
    import spinner from '../components/spinner.vue'
    export default{
        components:{
            spinner
        }
    }
</script>

<style lang="stylus" scoped>
.test
    font-size 16px
</style>