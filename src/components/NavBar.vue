<template>
  <div class="relative w-12 z-40">
    <nav class="fixed bg-primary w-full text-white">
      <div class="flex flex-col">
        <div class="container flex items-center justify-between">
          <a href="/" class="py-4 text-xl font-semibold">Send-IT</a>
          <span class="md:hidden" @click="toggleShowNav()">
            <font-awesome-icon :icon="['fas', 'bars']" class="text-3xl" />
          </span>
          <ul class="hidden md:flex font-medium">
            <li><a href="#home" class="px-4" v-smooth-scroll>Home</a></li>
            <li><a href="#about" class="px-4" v-smooth-scroll>About</a></li>
            <li><a href="#why" class="px-4" v-smooth-scroll>Why Us</a></li>
            <li><a href="#contact" class="px-4" v-smooth-scroll>Contact</a></li>
            <li><a href="/" class="px-4">Login</a></li>
            <li><a href="/" class="px-4">Register</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      class="transform transition ease-in-out duration-200 md:hidden bg-white text-primary fixed top-0 bottom-0 right-0 w-screen sm:w-96"
      :class="{
        'translate-x-0': showNavMenu,
        'translate-x-full': !showNavMenu
      }"
    >
      <ul class="container text-2xl text-center">
        <li class="text-right my-6">
          <span @click="toggleShowNav()">
            <font-awesome-icon
              :icon="['far', 'window-close']"
              class="text-primary text-4xl"
            />
          </span>
        </li>
        <li>
          <button @click="scrollToSection('#home')" class="inline-block p-4">
            Home
          </button>
        </li>
        <li>
          <button @click="scrollToSection('#about')" class="inline-block p-4">
            About
          </button>
        </li>
        <li>
          <button @click="scrollToSection('#why')" class="inline-block p-4">
            Why Us
          </button>
        </li>
        <li>
          <button @click="scrollToSection('#contact')" class="inline-block p-4">
            Contact
          </button>
        </li>
        <li><a href="/" class="inline-block p-4">Log In</a></li>
        <li><a href="/" class="inline-block p-4">Register</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'

export default defineComponent({
  name: 'NavBar',

  setup() {
    const showNavMenu = ref<boolean>(false)

    const smoothScroll:
      | ((ojb: { scrollTo: Element | null }) => void)
      | undefined = inject('smoothScroll')

    const toggleShowNav = () => {
      showNavMenu.value = !showNavMenu.value
    }

    const scrollToSection = (sectionId: string) => {
      toggleShowNav()
      const section = document.querySelector(sectionId)

      if (smoothScroll) {
        smoothScroll({
          scrollTo: section
        })
      }
    }

    return {
      showNavMenu,
      scrollToSection,
      toggleShowNav
    }
  }
})
</script>
