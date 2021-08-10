<template>
    <div :class="container +' px-' + paddingX + ' py-' + paddingY">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        container: {
            type: String,
            default: 'container'
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

<style lang="postcss">
    .container {
        max-width: 100%;
        @apply mx-auto;
    }
    @media (min-width: 640px) {
        .container {
            max-width: 100%;
        }
    }
    @media (min-width: 768px) {
        .container {
            max-width: 95%;
        }
    }
    @media (min-width: 1168px) {
        .container {
            max-width: 1024px;
        }
    }
    @media (min-width: 1280px) {
        .container {
            max-width: 1280px;
        }
    }
</style>
