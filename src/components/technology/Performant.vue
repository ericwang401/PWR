<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Performant",
});
</script>

<template>
  <section class="text-black bg-gray-200 body-font">
    <div class="max-w-7xl mx-auto py-5">
      <div class="container px-5 py-24 mx-auto flex justify-between flex-row-reverse flex-wrap">
        <div
          class="flex flex-wrap mt-auto mb-auto lg:w-1/2 sm:w-2/3 sm:pr-10"
        >
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-bold text-4xl mb-2 text-black">
              Need to travel? Make it fast
            </h1>

            <p class="text-xl">Make your trips in no time. PWR Vite delivers up to 30 km/h performance and enough power to make it in time.</p>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 p-4 sm:mt-0"
        >
          <img
            class="object-cover object-center w-full h-full"
            src="@/assets/fast_bike.webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
