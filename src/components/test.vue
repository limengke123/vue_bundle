<template lang="pug">
    div
        router-link(to="/") 去往首页
        button(@click="clickFn") fetch
</template>

<script>
    export default{
        data(){
            return {

            }
        },
        methods:{
            clickFn(e){
                alert(e)
            }
        }
    }
</script>

<style lang="stylus" scoped>
.test
    font-size 16px
</style>