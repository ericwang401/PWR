<script>
import { defineComponent } from "vue";
import VFooter from "@/components/Footer.vue";

export default defineComponent({
  name: "Specifications",
  components: {
    VFooter
  }
});
</script>

<template>
  <div class="bg-red-500">
    <div class="max-w-7xl mx-auto flex justify-center items-center h-72">
      <h1 class="font-bold text-4xl sm:text-5xl md:text-7xl text-white">
        Specifications
      </h1>
    </div>
  </div>
  <div class="bg-white py-5">
    <div class="flex flex-col space-y-5 max-w-7xl mx-auto justify-center">
      <img class="px-40" src="@/assets/bike.png" alt="PWR. Vite bike" />
      <h1 class="font-bold text-center text-4xl text-red-500">PWR. Vite</h1>
      <div class="w-full">
        <table class="table-auto mx-auto">
          <tbody class="divide-y divide-gray-300">
            <tr>
              <td class="p-5">Colors</td>
              <td class="p-5">Black, Gray</td>
            </tr>
            <tr>
              <td class="p-5">Materials</td>
              <td class="p-5">Titantium Ti 6AL-4V</td>
            </tr>
            <tr>
              <td class="p-5">Weight</td>
              <td class="p-5">18 kg / 39.6 lbs</td>
            </tr>
            <tr>
              <td class="p-5">Charge Time (Full Charge)</td>
              <td class="p-5">3 hours</td>
            </tr>
            <tr>
              <td class="p-5">Range</td>
              <td class="p-5">80 kilometers</td>
            </tr>
            <tr>
              <td class="p-5">Top Speed</td>
              <td class="p-5">30 km/h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <v-footer />
</template>
