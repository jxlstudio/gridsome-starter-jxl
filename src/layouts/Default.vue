<template>
  <div class="layout">

    <navigation/>
    
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>

    <b-footer/>

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
export default {
  components: {
    Navigation,
    BFooter
  },
  methods: {
    checkColorScheme () {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    setColorScheme (mode) {
      localStorage.theme = mode
      this.checkColorScheme()
    },
    removeColorScheme () {
      localStorage.removeItem('theme')
      this.checkColorScheme()
    }
  },
  mounted () {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    this.checkColorScheme()
  }
}
</script>

<style lang="postcss">
  html {
    scroll-behavior: smooth;
  }
  html.dark {
    @apply bg-black;
  }

  body.dark {
    @apply bg-black;
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
