<template lang="pug">
    div
        header-component(:headerList="headerList")
        body-component
</template>

<script>
    import Headercomponent from '../components/header.vue'
    import Bodycomponet from '../components/homeBody.vue'
    export default{
        data(){
            return {
                headerList:[
                    {
                        title:"首页",
                        href:"/"
                    },{
                        title:"未读消息",
                        href:"/unread"
                    },{
                        title:"新手入门",
                        href:"/newIn"
                    },{
                        title:"API",
                        href:"/api"
                    },{
                        title:"关于",
                        href:"/about"
                    },{
                        title:"设置",
                        href:"/set"
                    },{
                        title:"退出",
                        href:"/exit"
                    }
                ]
            }
        },
        components:{
            ["header-component"]:Headercomponent,
            ["body-component"]:Bodycomponet
        }
    }
</script>

<style lang="stylus" scoped>

</style>