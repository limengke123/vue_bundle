<template lang="pug">
    div
        router-link(to="/") 去往首页
        button(@click="clickFn") fetch
        div
            span {{target.innerText}}
</template>

<script>
    export default{
        data(){
            return {
                target:""
            }
        },
        methods:{
            clickFn(e){
                console.log(e)
                console.log(e.target)
                this.target = e.target
            }
        }
    }
</script>

<style lang="stylus" scoped>
.test
    font-size 16px
</style>