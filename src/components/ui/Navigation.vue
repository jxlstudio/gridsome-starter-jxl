
<template>
  <header>
    <!-- NavBar -->
    <nav class="flex flex-row flex-wrap items-center justify-between text-white bg-black px-4 py-6" aria-label="Top Navigation">
      <div class="left">
        <g-link :to="$static.metadata.siteUrl">
          {{ $static.metadata.siteName }}
        </g-link>
      </div>
      <div class="right">
        Links
      </div>
    </nav>
    <!-- OffCanvas -->
    <nav></nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
export default {
  name: 'Navigation',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style>

</style>

