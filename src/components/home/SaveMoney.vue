<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SaveMoney",
});
</script>

<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-5 lg:p-20">
      <h1 class="font-semibold text-4xl lg:w-2/3">
        <span class="text-red-600 underline">Not convinced?</span> We save you
        thousands of dollars from the beginning you purchase it to the end of
        life.
      </h1>

      <div class="flex lg:py-10 lg:px-36 lg:flex-row lg:space-x-10">
        <div class="lg:w-1/2 lg:p-10 bg-gray-50 rounded-md shadow-lg">
          <h1 class="text-2xl font-bold text-center">Toyota Rav4</h1>
          <div class="flex items-center w-full h-56">
            <img src="@/assets/rav4.webp" alt="Toyota Rav4" />
          </div>
          <ul class="text-lg">
            <li>Upfront cost</li>
          </ul>
        </div>
        <div class="lg:w-1/2 lg:p-10 bg-gray-50 rounded-md shadow-lg">
          <h1 class="text-2xl font-bold text-center">PWR Vite</h1>
          <div class="flex items-center w-full h-56">
            <img src="@/assets/bike.png" alt="Toyota Rav4" />
          </div>
          <ul>
            <li>Upfront cost</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
