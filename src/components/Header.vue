<template>
  <header
    id="home"
    class="relative max-h-header h-screen bg-primary text-white overflow-hidden"
  >
    <NavBar />
    <Hero />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './NavBar.vue'
import Hero from './Hero.vue'

export default defineComponent({
  name: 'Header',
  components: {
    NavBar,
    Hero
  }
})
</script>
