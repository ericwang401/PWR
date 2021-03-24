<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const developmentTools = [
      "Vue 3",
      "Vue Router",
      "TailwindCSS 2.0 Utility Tool",
    ];

    return { developmentTools }
  }
});
</script>

<template>
  <div class="bg-red-500 w-full h-72">
    <div class="flex items-center justify-center max-w-7xl mx-auto h-full">
      <h1 class="font-bold text-6xl md:text-7xl text-white">ABOUT</h1>
    </div>
  </div>
  <div class="w-full bg-white">
    <div class="max-w-7xl p-5 mx-auto">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            >
              The PWR. Team
            </h1>
          </div>
          <div class="flex justify-center flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Eric Wang
                  </h2>
                  <p class="text-gray-500">Lead Developer & UI Designer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Albert Sheng
                  </h2>
                  <p class="text-gray-500">Lead of Content Development</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Ben Wick
                  </h2>
                  <p class="text-gray-500">Photographer & Graphic Designer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Marco Uscanga
                  </h2>
                  <p class="text-gray-500">UI Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="max-w-7xl p-5 lg:p-20 mx-auto">
    <h1 class="text-3xl font-bold">Development Tools</h1>

    <ul class="list-disc list-inside">
      <li v-for="tool in developmentTools" :key="tool">{{ tool }}</li>
    </ul>
  </div>
</template>
