<template lang="pug">
    li.topic
        .left
            img.avatar(:src="topic.author.avatar_url")
            .read
                span.replyNum {{topic.reply_count}}
                span /
                span.readNum {{topic.visit_count}}
            .tab(:class="isTop ? 'top' : '' ") {{tab}}
            router-link.title(:to="href") {{topic.title}}
        .time {{time}}
</template>

<script>
    import {topicType as topicTypeMap} from '../util/map'
    //import moment from 'moment'
    import {timeFormat} from '../util/index'
    export default {
        data(){
            return {
                isTop:false
            }
        },
        props: {
            topic: {
                type: Object,
                required: true
            }
        },
        computed:{
            tab:function () {
              if(this.topic.top){
                  this.isTop = true
                  return "置顶"
              } else {
                  return this.getType()
              }
            },
            href:function () {
                return `/topic/${this.topic.id}`
            },
            time:function () {
                return timeFormat(this.topic.last_reply_at)
            }
        },
        methods:{
            getType:function () {
                return topicTypeMap[this.topic.tab]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../variable.styl'
    .topic
        background-color #fff
        display flex
        justify-content space-between
        height 30px
        padding 10px
        border-bottom 1px solid $borderColor
        &:hover
            background-color $tabBgColor
            .title
                text-decoration underline
                cursor pointer
        .left
            display flex
            align-items center
            .avatar
                width 30px
                height 30px
            .tab
                font-size 12px
                background-color $bodyBgColor//$tabColor
                color #888
                padding 3px 4px
                border-radius 3px
                margin-left 5px
                margin-right 5px
                flex-shrink 0
            .top
                background-color $tabColor
                color #fff
            .read
                font-size 12px
                margin-left 5px
                .replyNum
                    color $replyNum
                .readNum
                    color #888
            .title
                color #666
        .time
            display flex
            align-items center
            font-size 12px
            color #708087
</style>