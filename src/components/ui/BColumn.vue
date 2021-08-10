<template>
    <div :class="'b-column ' + size + ' px-' + paddingX + ' py-' + paddingY + ' '">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'flex-1'
        },
        paddingX: {
            type: String,
            default: '4'
        },
        paddingY: {
            type: String,
            default: '2'
        }
    }
}
</script>