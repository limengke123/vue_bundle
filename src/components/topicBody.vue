<template lang="pug">
    main
        .wrapper
            .fetching(v-if="isFetching") i m tring fetching
            div(v-else)
                .header
                    .title {{topic.title}}
                    .info
                        span 发布于{{day}}
                        a.author 作者 {{topic.author.loginname}}
                        span {{topic.visit_count}}次访问
                        span 来自 {{tab}}
                .content(v-html="topic.content")
</template>

<script>
    import HttpRequest from '../util/http'
    import {topicType} from '../util/map'
    import moment from 'moment'
    export default {
        data(){
            return {
                isFetching: true,
                topic: {}
            }
        },
        mounted: function () {
            new HttpRequest(`/api/topic/${this.$route.params.id}`, {
                mdrender: true
            }).GET().then(resp => {
                this.isFetching = false
                if (resp.success === true) {
                    this.topic = resp.data
                } else {
                    console.log(resp.data)
                }
            })
        },
        computed:{
            tab:function () {
                return topicType[this.topic.tab]
            },
            day:function () {
                return moment(this.topic.create_at).startOf('day').fromNow()
            }
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
            background-color #fff
            display flex
            align-items center
            flex-direction column
            min-height 300px
            .header
                padding 10px
                border-bottom 1px solid $borderColor
                .title
                    font-size 22px
                    font-weight 700
                    margin 8px 0
                .info
                    display flex
                    flex-direction row
                    font-size 12px
                    color #838383
                    span
                        margin-right 12px
                    .author
                        margin-right 12px
                        &:hover
                            cursor pointer
                            text-decoration underline
            .content
                display flex
                justify-content center
                padding 0 20px 20px 20px
</style>

<style lang="stylus">
    @import '../markdown.styl'
</style>