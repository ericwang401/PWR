<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LongRange",
});
</script>

<template>
  <section class="text-white bg-red-600 body-font">
    <div class="max-w-7xl mx-auto py-5">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div
          class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10"
        >
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-bold text-4xl mb-2 text-white">
              Design Without Compromise
            </h1>

            <p class="flex items-center text-white mb-2 text-lg mt-4">
              <span
                class="w-6 h-6 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Large cargo capacity
            </p>
            <p class="flex items-center text-white mb-2 text-lg mt-4">
              <span
                class="w-6 h-6 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Unyielding stainless steel body
            </p>
            <p class="flex items-center text-white mb-2 text-lg mt-4">
              <span
                class="w-6 h-6 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Automatic transmission
            </p>
            <p class="flex items-center text-white mb-2 text-lg mt-4">
              <span
                class="w-6 h-6 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Fast-charging batteries
            </p>
          </div>
        </div>
        <div
          class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"
        >
          <img
            class="object-cover object-center w-full h-full"
            src="@/assets/bike_bw.jpg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
