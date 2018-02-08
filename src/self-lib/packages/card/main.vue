<template lang="pug">
    .el-card
        .el-card__header(v-if="$slots.header || header")
            slot(name="header") {{header}}
        .el-card__body(:style="bodyStyle")
            slot
</template>

<script>
    export default {
        name:"ElCard",
        props:['header','bodyStyle']
    }
</script>


