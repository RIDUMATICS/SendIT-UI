<template>
  <footer class="bg-primary text-white pt-16">
    <div class="container flex flex-col md:flex-row">
      <div class="w-full md:flex-1">
        <ul>
          <li>
            <h3 class="font-semibold text-2xl py-2 md:text-4xl">
              Let's get in touch
            </h3>
          </li>
          <li class="py-2">
            <p class="flex items-center">
              <font-awesome-icon
                :icon="['far', 'clock']"
                class="text-secondary mr-2"
              />
              Monday to Sunday: 24/7
            </p>
          </li>
          <li class="py-2">
            <p class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'mobile-alt']"
                class="text-secondary mr-2"
              />
              +234 812 268 9423
            </p>
          </li>
          <li class="py-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:support@send-it.com"
              class="flex items-center"
            >
              <font-awesome-icon
                :icon="['far', 'envelope']"
                class="text-secondary mr-2"
              />
              support@send-it.com
            </a>
          </li>
        </ul>
      </div>
      <div class="md:mx-10">
        <ul>
          <li
            class="lin uppercase font-semibold py-2 mt-5 mb-4 border-t border-b md:m-0 md:border-0"
          >
            our pages
          </li>
          <li class="py-2 md:px-2">Home</li>
          <li class="py-2 md:px-2">About</li>
          <li class="py-2 md:px-2">Contact</li>
          <li class="py-2 md:px-2">Profile</li>
        </ul>
      </div>
      <div class="md:ml-10">
        <ul>
          <li
            class="uppercase font-semibold py-2 mt-5 mb-4 border-t border-b md:m-0 md:border-0"
          >
            transparency
          </li>
          <li class="py-2 md:px-2">Help and contact</li>
          <li class="py-2 md:px-2">Privacy Policy</li>
          <li class="py-2 md:px-2">Terms and Conditions</li>
        </ul>
      </div>
    </div>
    <p class="border-t p-5 text-center mt-16">
      &copy; 2021 Property of SendIT <span class="border mx-4"></span>
      Design with 💖 By
      <a target="_blank" rel="noreferrer" href="#"> Ridwan Onikoyi </a>
    </p>
  </footer>
</template>
