<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sources",
  setup() {
    const images = [
      "https://www.hiclipart.com/free-transparent-background-png-clipart-ppjxy",
      "https://pixabay.com/photos/mountain-bike-e-bike-ebike-bike-5567847/",
      "https://unsplash.com/photos/YOk0D5sz3e4",
      "https://unsplash.com/photos/QnSjbDB57AU",
    ];
    return { images };
  },
});
</script>

<template>
  <div class="bg-red-500 w-full h-72">
    <div class="flex items-center justify-center max-w-7xl mx-auto h-full">
      <h1 class="font-bold text-6xl md:text-7xl text-white">SOURCES</h1>
    </div>
  </div>
  <div class="max-w-7xl p-5 lg:p-20 mx-auto">
    <h1 class="text-3xl font-bold">Images</h1>
    <h2 class="text-xl font-regular">
      Images were obtained from <a href="https://unsplash.com">Unsplash</a> and
      are royalty free
    </h2>
    <ul class="list-disc list-inside">
      <li v-for="image in images" :key="image">
        <a :href="image">{{ image }}</a>
      </li>
    </ul>
  </div>
</template>
