<template lang="pug">
    div
        router-link(to="/") 回到首页
        button(@click="fetch") 拿到list
</template>

<script>
    import axios from 'axios'
    export default{
        methods: {
            fetch(e){
                axios.get('api/topics')
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>