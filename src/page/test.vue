<template lang="pug">
    div
        router-link(to="/") 去往首页
        button(@click="message") 测试一下
        el-card
            div(slot="header")
                span 卡片名称
            - for(var i =0;i < 3; i ++ )
              span 这是一个i

</template>

<script>
    import HttpRequest from '../util/http'
    import spinner from '../components/spinner.vue'
    import Vue from 'vue'
    import Card from '../self-lib/packages/card/index'
    console.log(Card)
    Vue.use(Card)
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