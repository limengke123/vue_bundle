<template lang="pug">
    footer
        .wrapper
            div this is footer
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>
    @import '../variable.styl'
    footer
        display flex
        justify-content center
        .wrapper
            width $wrapWidth
            height w = 60px
            display flex
            justify-content center
            align-items center
</style>