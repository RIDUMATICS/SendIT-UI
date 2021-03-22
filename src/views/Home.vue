<template>
  <Header />
  <section class="relative">
    <div
      class="md:absolute container -top-14 h-24 left-0 right-0 py-4 px-2 md:px-7 lg:px-10"
    >
      <div class="">
        <form
          class="container md:bg-white md:shadow-2xl py-6 flex flex-col md:flex-row"
        >
          <input
            type="text"
            placeholder="Enter Parcel ID"
            class="flex-1 border-2 border-primary md:mr-4"
          />
          <button class="bg-secondary font-medium my-3 p-2 md:w-1/5 md:m-0">
            Track
          </button>
        </form>
      </div>
    </div>
  </section>
  <About />
  <Why /><!--why choose us section -->
  <Contact />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Header, About, Why, Contact, Footer } from '@/components'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    About,
    Contact,
    Footer,
    Why
  }
})
</script>
