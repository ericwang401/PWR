<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
});
</script>

<template>
  <section class="text-gray-600 bg-red body-font">
    <div class="max-w-7xl py-5 md:py-20 mx-auto">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            Designed to perform
          </h1>
          <p class="mb-8 leading-relaxed">
            Whether you needed to transport cargo or quickly reach a
            destination. PWR. Vite has you covered and will deliver on our
            promise on peak performance.
          </p>
          <div class="flex justify-center">
            <button
              class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-8 bg-white rounded-md"
        >
          <h1 class="font-bold text-2xl text-gray-900">Vite</h1>
          <h2>Adverb ⦁ \ ˈvēt \</h2>
          <h2 class="pt-5 text-lg text-gray-700 font-medium">
            Fast, performant, brisk, rapid, nimble
          </h2>
          <h2 class="pt-5 text-gray-500 font-medium">
            "The PWR. Vite eBike was the best purchase I made since the car. It
            was versatile and light and allowed me to go anywhere I desired."
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
