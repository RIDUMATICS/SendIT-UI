<template>
  <section class="bg-gray-200 py-20 w-full overflow-hidden" id="why">
    <div class="container text-primary flex flex-col items-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Us!</h2>
      <p class="md:w-2/4 text-center">
        We continue to pursue that same vision in today's complex, uncertain
        world, working every day to earn our customers’ trust!
      </p>
    </div>
    <ul class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10">
      <li
        v-for="(reason, index) in reasons"
        data-aos="fade-left"
        data-aos-duration="500"
        :data-aos-delay="index * 300"
        :key="index"
        class="relative rounded-lg shadow-md bg-white inline-block text-center mx-3 my-6 py-14"
      >
        <div class="w-full absolute -top-7 flex justify-center">
          <div
            class="rounded-full w-12 h-12 flex items-center justify-center bg-primary text-white font-semibold"
          >
            {{ index + 1 }}
          </div>
        </div>
        <font-awesome-icon
          :icon="reason.icon"
          class="text-6xl text-secondary"
        />
        <h3 class="text-xl font-semibold my-5 p-3">{{ reason.head }}</h3>
        <p class="px-2">
          {{ reason.body }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const reasons = ref([
      {
        icon: ['fas', 'wallet'],
        head: 'Transparent Pricing',
        body: 'International supply chains involves challenging regulations.'
      },
      {
        icon: ['fas', 'shield-alt'],
        head: 'Security For Cargo',
        body: 'High security requirements and are certified to local standards.'
      },
      {
        icon: ['fas', 'map-marked-alt'],
        head: 'Real-Time Tracking',
        body:
          'Ensure customers’ supply chains are fully compliant by practices.'
      },
      {
        icon: ['fas', 'shipping-fast'],
        head: 'Fast & Efficient Delivery',
        body: 'We enhance our operations by relieving you of the worries.'
      }
    ])

    return { reasons }
  }
})
</script>
