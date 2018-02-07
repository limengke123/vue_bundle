<template lang="pug">
    div
        router-link(to="/") 去往首页
        button(@click="message") 测试一下

</template>

<script>
    import HttpRequest from '../util/http'
    import spinner from '../components/spinner.vue'
    export default{
        components:{
            spinner
        },
        methods:{
            message:function(){
                this.$message({
                    message:"文字",
                    type:"success",
                    showClose:true,
                    duration:300000
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
.test
    font-size 16px
</style>