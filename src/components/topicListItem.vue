<template lang="pug">
    li.topic
        img.avater(src="topic.author.avater_url")
        .readNum {{topic.reply_count}}/{{topic.visit_count}}
        .type
        span {{topic.title}}
</template>

<script>
    export default {
        props: {
            topic: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../variable.styl'
    .topic
        background-color #fff
        display flex
        .avater
            background url

</style>