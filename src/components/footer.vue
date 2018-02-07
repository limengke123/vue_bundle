<template lang="pug">
    footer
        .wrapper
            img.logo(:src="logo")
            div tommorrow is a new day !
</template>

<script>
    import logo from '../assets/logo.png'
    console.log(logo)
    export default {
        data(){
            return {
                logo
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../variable.styl'
    footer
        display flex
        justify-content center
        flex-shrink 0
        .wrapper
            width $wrapWidth
            height w = 50px
            display flex
            justify-content center
            align-items center
            .logo
                width 40px
</style>