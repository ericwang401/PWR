<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EcoFriendly",
});
</script>

<template>
  <section class="text-gray-600 bg-white body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Eco-friendly Design
        </h1>
        <p
          class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
        >
          At PWR, we believe in renewability and incorporate it into our
          products. Everything made and shipped from us is made from recycled
          materials.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
        </div>
      </div>
      <div
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
      >
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0"
          >
            <svg
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Conflict Free
            </h2>
            <p class="leading-relaxed text-base">
              We only work with manufacturers that provide high-quality
              materials through renewable technologies.
            </p>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0"
          >
            <svg
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              100% Recycled Materials
            </h2>
            <p class="leading-relaxed text-base">
              Contribute to recycling efforts by purchasing a PWR. Vite.
              Everything from the top to bottom is made from recycled metals.
            </p>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0"
          >
            <svg
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Built to Last
            </h2>
            <p class="leading-relaxed text-base">
              We made sure that every component on our bike are weather resistant by rigourously testing and enhancing our hardware.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
