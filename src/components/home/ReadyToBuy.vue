<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReadyToBuy",
});
</script>

<template>
  <div class="bg-red-50 pt-6">
    <div class="max-w-7xl mx-auto p-7 space-y-4 lg:p-20">
      <div class="mx-auto text-center">
        <h1 class="font-bold text-red-500 text-3xl md:text-4xl">
          Place your order now
        </h1>
        <h3 class="text-gray-900 text-xl lg:text-2xl mt-3">
          Make the PWR. Vite eBike yours today.
        </h3>
      </div>

      <div class="flex flex-col items-center space-y-6">
        <img
          class="p-5 lg:px-20 max-w-sm md:max-w-2xl lg:max-w-4xl"
          src="@/assets/bike.png"
        />

        <div
          class="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-4xl space-x-0 lg:space-x-4 space-y-4 lg:space-y-0"
        >
          <router-link
            :to="{ name: 'Buy Now' }"
            v-slot="{ isExactActive, navigate, href }"
            custom
          >
            <a
              class="transition-colors pleasee items-center text-center border-2 border-red-500 bg-red-500 text-white rounded-md py-1.5 px-7 hover:bg-transparent hover:text-red-500 focus:outline-none text-lg font-semibold"
              :href="href"
              @click="navigate"
              :disabled="isExactActive"
            >
              Buy Now
            </a>
          </router-link>

          <router-link
            :to="{ name: 'Specifications' }"
            v-slot="{ isExactActive, navigate, href }"
            custom
          >
            <a
              class="relative pleasee transition-colors border-2 border-gray-300 text-gray-500 rounded-md py-1.5 px-7 hover:bg-transparent hover:text-black hover:border-gray-700 focus:outline-none text-lg"
              :href="href"
              @click="navigate"
              :disabled="isExactActive"
            >
              Specifications
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
