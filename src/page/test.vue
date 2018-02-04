<template lang="pug">
    div
        router-link(to="/") 去往首页
        button(@click="clickFn") fetch
        button(@click="httpTest") http
        div
            span {{target.innerText}}
</template>

<script>
    import HttpRequest from '../util/http'
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
            },
            httpTest(){
                new HttpRequest('/api/topics',{
                    page:1,
                    tab:'ask',
                    limit:'20',
                    mdrender:true
                }).GET()
                    .then(resp => {
                        console.log(resp)
                    })
            }
        }
    }
</script>

<style lang="stylus" scoped>
.test
    font-size 16px
</style>