<template>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
import AOS from 'aos'
export default defineComponent({
  setup() {
    AOS.init()
  }
})
</script>
