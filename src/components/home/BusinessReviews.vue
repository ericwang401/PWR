<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BusinessReviews",
});
</script>

<template>
  <div class="bg-gray-50 pt-6">
    <div class="max-w-7xl mx-auto p-7 space-y-4 lg:p-20">

      <div class="flex flex-col">
        <div class="text-center">
            <h2 class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 mb-8">
                Absolutely Phenomenal
            </h2>
            <figure>
                <blockquote>
                    <p class="text-gray-500 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mx-auto mb-6">
                        I use it to go to walmart and buy more dr bepper 
                    </p>
                </blockquote>
                <figcaption class="flex flex-col items-center font-medium sm:text-xl">
                    <div class="border-2 border-red-400 rounded-full mb-4 p-1">
                        <img class="rounded-full bg-red-100 w-10 h-10" src="@/assets/unknown.png" alt="albert">
                    </div>
                    <h3 class="text-gray-900">Albert Sheng</h3>
                    <h3 class="text-red-600">CEO of Sheng Industries</h3>
                </figcaption>
            </figure>
        </div>
      </div>
    </div>
  </div>
</template>
