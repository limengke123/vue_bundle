<template lang="pug">
    li.topic
        img.avatar(:src="topic.author.avatar_url")
        .read
            span.replyNum {{topic.reply_count}}
            span /
            span.readNum {{topic.visit_count}}
        .tab(:class="isTop ? 'top' : '' ") {{tab}}
        span.title {{topic.title}}
</template>

<script>
    import {topicType as topicTypeMap} from '../util/map'
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
        align-items center
        height 30px
        padding 10px
        border-bottom 1px solid $borderColor
        &:hover
            background-color $tabBgColor
            .title
                text-decoration underline
                cursor pointer
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
</style>