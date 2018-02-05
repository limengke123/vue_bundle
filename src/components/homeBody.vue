<template lang="pug">
    main
        .wrapper
            ul.tabs
              li(v-for="(tab,index) in tabs" v-bind:key="index" v-bind:class="[tab.selected === true ? 'isSelected' : '' , 'tab']" v-bind:data-href="tab.href") {{tab.title}}
            ul.topicList()
                item(v-for="(topic,index) in topicList" v-bind:key="index" v-bind:topic="topic")
</template>

<script>
    import HttpRequest from '../util/http'
    import item from  './topicListItem.vue'
    export default {
        data(){
            return {
                topicList:[],
                tabs:[
                    {
                        title:"全部",
                        href:"/all",
                        selected:true
                    },{
                        title:"精华",
                        href:"/all",
                        selected:false
                    },{
                        title:"分享",
                        href:"/all",
                        selected:false
                    },{
                        title:"问答",
                        href:"/all",
                        selected:false
                    },{
                        title:"招聘",
                        href:"/all",
                        selected:false
                    },{
                        title:"客户端测试",
                        href:"/all",
                        selected:false
                    },
                ],
            }
        },
        mounted:function () {
            new HttpRequest('/api/topics',{
                page:1,
                //tab:'ask',
                limit:'20',
                mdrender:true
            }).GET()
                .then(resp => {
                    console.log(resp)
                    if(resp.success === true){
                        this.topicList = resp.data
                    } else {
                        console.log(resp.data)
                    }
                })
        },
        components:{
            item
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../variable.styl'
    main
        display flex
        justify-content center
        background-color $bodyBgColor
        .wrapper
            width $wrapWidth
            margin-top 10px
            border-radius 50px
            .tabs
                display flex
                align-items center
                background-color $tabBgColor
                height w=20px
                line-height w
                padding 10px 0
                .tab
                    color $tabColor
                    font-size $normalFontSize
                    padding 2px 4px
                    border-radius 3px
                    margin 0 5px 0 20px
                    cursor pointer
                    &:hover
                        color $tabHover
                .isSelected
                    background-color $tabColor
                    color #fff
                    &:hover
                        color #fff
            .topicList
                margin-bottom 10px
</style>