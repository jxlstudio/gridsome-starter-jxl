<template>
  <div class="layout">

    <navigation/>
    
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>

    <b-footer/>

    <ColorSchemeToggle/>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from '@/components/ui/Navigation.vue'
import BFooter from '@/components/ui/BFooter.vue'
import ColorSchemeToggle from '@/components/ui/ColorSchemeToggle.vue'
export default {
  components: {
    Navigation,
    BFooter,
    ColorSchemeToggle
  }
}
</script>

<style lang="postcss">
  html {
    scroll-behavior: smooth;
  }
  html.dark {
    @apply bg-gray-900;
  }

  body.dark {
    @apply bg-gray-900;
  }

  .fade-enter-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-leave {
    opacity: 0;
  }
  p > strong {
      font-weight: 900;
  }
  iframe, .ly-iframe {
    max-width: 100%;
    max-height: 90vh;
  }
</style>
