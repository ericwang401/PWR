<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const links = ["Home", "Technology", "Specifications"];
    const active = ref(false);

    return {
      links,
      active,
    };
  },
});
</script>

<template>
  <nav class="fixed w-full z-50 top-0 bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="font-bold text-4xl">PWR.</h1>
          </div>
          <div class="h-16 hidden lg:block">
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

        <div class="h-16">
          <div class="h-full ml-10 flex space-x-3 items-center">
            <router-link
              :to="{ name: 'Buy Now' }"
              v-slot="{ isExactActive, navigate, href }"
              custom
            >
              <a
                :class="{
                  'hidden': isExactActive
                }"
                class="transition-colors flex items-center border-2 border-red-500 bg-red-500 text-white rounded-md py-1.5 px-7 hover:bg-transparent hover:text-red-500 focus:outline-none text-lg font-semibold"
                :href="href"
                @click="navigate"
                :disabled="isExactActive"
              >
                Buy Now
              </a>
            </router-link>
            <button
              class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              @click="active = !active"
            >
              <svg
                v-if="!active"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                v-else
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="active" class="lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            v-for="link in links"
            :key="link"
            :to="{ name: link }"
            v-slot="{ isExactActive, navigate, href }"
            custom
          >
            <a
              class="block px-3 py-2 rounded-md text-base font-medium"
              :class="{
                'bg-red-500 text-white': isExactActive,
                'text-black hover:bg-red-400 hover:text-white': !isExactActive,
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
  </nav>
</template>
