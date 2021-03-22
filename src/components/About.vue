<template>
  <section class="container py-32 overflow-hidden" id="about">
    <h2
      class="inline-block text-3xl font-bold md:hidden border-b-4 mb-4 border-secondary"
    >
      About Us
    </h2>
    <div class="flex flex-col md:flex-row items-start">
      <div
        class="flex-1 order-2 md:order-1 py-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2
          class="hidden md:inline-block text-3xl font-bold border-b-4 mb-4 border-secondary"
        >
          About Us
        </h2>
        <p class="text-xl mb-4 tracking-normal leading-8 md:w-11/12">
          We are Nigeria's fastest B2B-focused on-demand and last-mile delivery
          service company, present in Nigeria.
        </p>
        <p class="text-xl mb-4 tracking-normal leading-8 md:w-11/12">
          Send-IT can handle every kind of delivery, no matter what size. A wide
          range of shipping options for a better, faster and bigger on-demand
          delivery service.
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        class="overflow-hidden md:order-2 flex-1 h-72 md:h-96 md:pl-10 my-4"
      >
        <img
          src="@/assets/img/delivery.jpg"
          alt=""
          class="w-full h-full object-cover object-bottom"
        />
      </div>
    </div>
  </section>
</template>
