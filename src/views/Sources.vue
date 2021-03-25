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
      "https://unsplash.com/photos/XhMSz5I1kn8",
      "https://unsplash.com/photos/t0Aio60jD4Q",
      "https://unsplash.com/photos/S7nzSaoMQi4"
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
  <div class="max-w-7xl p-5 lg:p-20 mx-auto">
    <h1 class="text-3xl font-bold">Downloadable Documents</h1>
    <ul class="list-disc list-inside">
      <li>
        <a target="_blank" href="https://drive.google.com/file/d/1Q6M8KcQOT3T5Kk7F6jmNCculdbraMgre/view?usp=sharing">Contribution Log</a>
      </li>
      <li>
        <a target="_blank" href="https://drive.google.com/file/d/1eYPn0RIno1A_nEtX49R1GeTbV8o2yI0_/view?usp=sharing">Copyright Checklist</a>
      </li>
    </ul>
  </div>
</template>
