<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BuyNow",
});
</script>

<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="mx-auto flex flex-wrap">
        <img
          alt="Vite eBike"
          class="lg:w-2/3 w-full lg:h-auto h-100 object-cover object-center rounded"
          src="@/assets/bike.png"
        />
        <div class="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            PWR.
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            Vite eBike
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <span class="text-gray-600 ml-3">73 Reviews</span>
            </span>
          </div>
          <p class="leading-relaxed">
            Ditch large and expensive cars for commutes. Take the PWR Vite with you on your next trip and cut down on travel time and costs. 
          </p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
          >
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900"
              >$2,500.00</span
            >
            <button
              class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>