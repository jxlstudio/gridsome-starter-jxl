
<template>
  <div class="fixed bottom-0 right-0 dark:bg-purple-900 bg-yellow-100 px-4 py-1 rounded-tl-md opacity-60">
    <div class="flex flex-col items-center dark:text-white text-black">
      <button class="p-2 hover:opacity-100" @click="setColorScheme('dark')" alt="Dark Mode">
        <!-- <Moon size="w-6 h-6" /> -->
        Dark Mode
      </button>
      <button class="p-2 hover:opacity-100" @click="setColorScheme('light')" alt="Light Mode">
        <!-- <Sun size="w-6 h-6" /> -->
        Light Mode
      </button>
      <button class="p-2 hover:opacity-100" @click="removeColorScheme()" alt="Match System Color Scheme">
        <!-- <Screen size="w-6 h-6" /> -->
        System Default
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorSchemeToggle',
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

<style>

</style>

