<template lang="pug">
    header
        .wrap
            .left
                router-link.logo(to="/")
                div Cnode
            ul.right
                li(v-for="item in headerList")
                    span(:data-href="item.href") {{item.title}}
</template>

<script>
    import {headerList} from '../config/index'
    export default {
        data(){
            return {
                headerList
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../variable.styl'
    header
        color $fontColor
        display flex
        justify-content center//space-between
        height w=50px
        line-height w
        background-color $headerBgColor
        font-size $headerFontSize
        .wrap
            display flex
            justify-content space-between
            width $wrapWidth
            .left
                display flex
                .logo
                    width 50px
                    background url('../assets/logo.png')
                    background-size contain
                    margin-right 25px
                    flex-shrink 0
            .right
                display flex
                justify-content space-between
                li
                    margin-left 20px
                    cursor pointer
                    &:hover
                        color $hoverColor
</style>