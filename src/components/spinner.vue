<template lang="pug">
    .spinner
        - for (var x = 1; x < 13; x++)
          div(class="bar" + x)
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>
    $num = 1 2 3 4 5 6 7 8 9 10 11 12
    add(a,b)
        a + b
    @-webkit-keyframes loading
        from
            opacity: 1
            width:1px
            height:1px
        to
            opacity: 0.25
            width:8px
            height:8px
    .spinner
        position absolute
        top 50%
        left 50%
        display inline-block
        zoom 2
        div
            width 8px
            height 8px
            background #111  //#a4a2a4
            border 1px solid #fff
            position absolute
            left 100%
            top 100%
            opacity 0
            -webkit-animation loading 2s linear infinite
            -webkit-border-radius 30px
        for num in $num
            {'.bar' + num}
                -webkit-transform rotate(add(30*num,0deg)) translate(0, -34px)
                -webkit-animation-delay add(0.1*num,0s)
</style>