<template>
    <div :class="'b-row ' + grid + ' px-' + paddingX + ' py-' + paddingY">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        grid: {
            type: String,
            default: 'flex flex-row flex-wrap'
        },
        paddingX: {
            type: String,
            default: '0'
        },
        paddingY: {
            type: String,
            default: '0'
        }
    }
}
</script>