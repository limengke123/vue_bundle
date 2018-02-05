<template lang="pug">
    main
        .wrapper
            ul.tabs
              li(v-for="(tab,index) in tabs"
                v-bind:key="index"
                v-on:click="changeTab"
                v-bind:class="[tab.selected === true ? 'isSelected' : '' , 'tab']"
                v-bind:data-href="tab.href") {{tab.title}}
            .no-item(v-if="topicList.length === 0") there is no item anymore!!!
            ul.topicList
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
                        href:"",
                        selected:true
                    },{
                        title:"精华",
                        href:"good",
                        selected:false
                    },{
                        title:"分享",
                        href:"share",
                        selected:false
                    },{
                        title:"问答",
                        href:"ask",
                        selected:false
                    },{
                        title:"招聘",
                        href:"job",
                        selected:false
                    }
                ],
            }
        },
        methods:{
            getTopicsByTab(tab){
                let params = {
                    page:1,
                    //tab:'ask',
                    limit:'20',
                    mdrender:true
                }
                if(tab) params = Object.assign({},params,{tab})
                new HttpRequest('/api/topics',params).GET()
                    .then(resp => {
                        console.log(resp)
                        if(resp.success === true){
                            this.topicList = resp.data
                        } else {
                            console.log(resp.data)
                        }
                    })
            },
            changeTab(e){
                const targetEl = e.target
                const tab = targetEl.getAttribute('data-href')
                this.topicList = []
                this.changeSelected(tab)
                this.getTopicsByTab(tab)
            },
            changeSelected(tab){
                this.tabs.map(val => {console.log(val);val.selected = false})
                console.log(this.tabs.find(el => el.href === tab))
                this.tabs.find(el => el.href === tab)["selected"] = true
            }
        },
        mounted:function () {
            this.getTopicsByTab()
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
                    padding 2px 7px
                    border-radius 3px
                    margin 0 5px 0 15px
                    cursor pointer
                    flex-shrink 0
                    &:hover
                        color $tabHover
                .isSelected
                    background-color $tabColor
                    color #fff
                    &:hover
                        color #fff
            .no-item
                font-size 24px
                text-align center
                padding 60px 0
            .topicList
                margin-bottom 10px
</style>