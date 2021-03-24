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
                Outstanding product
            </h2>
            <figure>
                <blockquote>
                    <p class="text-gray-500 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mx-auto mb-6">
                        Really revolutionizes the way the bike industry works. It can compete with many of the top brands. It has great range of motion and feels smooth any any terrain. It's such a quality product
                    </p>
                </blockquote>
                <figcaption class="flex flex-col items-center font-medium sm:text-xl">
                    <div class="border-2 border-red-400 rounded-full mb-4 p-1">
                        <img class="rounded-full bg-red-100 w-10 h-10" src="@/assets/asian_man.webp" alt="albert">
                    </div>
                    <h3 class="text-gray-900">Albert Sheng</h3>
                    <h3 class="text-red-600">CEO of Alibobo</h3>
                </figcaption>
            </figure>
        </div>
      </div>
    </div>
  </div>
</template>
