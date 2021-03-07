<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const links = ["Home", "Technology", "Specifications", "Reviews"];

    return {
      links,
    };
  },
});
</script>

<template>
  <nav class="sticky top-0 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="font-bold text-4xl">PWR.</h1>
          </div>
          <div class="h-16 hidden md:block">
            <div class="h-full ml-10 flex items-baseline">
              <router-link
                v-for="link in links"
                :key="link"
                :to="{ name: link }"
                v-slot="{ isExactActive, navigate, href }"
                custom
              >
                <a
                  class="transition-colors flex items-center h-full px-6 focus:outline-none text-lg font-regular border-b-2 border-transparent"
                  :class="{
                    'text-black border-b-2 border-black bg-gray-200': isExactActive,
                    'text-gray-500 hover:bg-gray-100': !isExactActive,
                  }"
                  :href="href"
                  @click="navigate"
                  :disabled="isExactActive"
                >
                  {{ link }}
                </a>
              </router-link>
            </div>
          </div>
        </div>

        <div class="h-16 hidden md:block">
          <div class="h-full ml-10 flex space-x-3 items-center">

            <router-link
              :to="{ name: 'Buy Now' }"
              v-slot="{ isExactActive, navigate, href }"
              custom
            >
              <a
                class="transition-colors flex items-center border-2 border-red-500 bg-red-500 text-white rounded-md py-1.5 px-7 hover:bg-transparent hover:text-red-500 focus:outline-none text-lg font-semibold"
                :href="href"
                @click="navigate"
                :disabled="isExactActive"
              >
                Buy Now
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
