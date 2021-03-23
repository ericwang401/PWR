<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    const mainLinks = ["Home", "Technology", "Specifications"];

    const otherLinks = ["About", "Sources"];

    return {
      mainLinks,
      otherLinks,
    };
  },
});
</script>

<template>
  <footer class="text-gray-600 body-font bg-gray-50">
    <div
      class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a
          class="flex font-extrabold text-6xl title-font items-center md:justify-start justify-center text-gray-900"
        >
          PWR.
        </a>
        <p class="mt-2 text-md text-gray-500">
          Developing high-class eco-friendly technologies for the advancing
          society.
        </p>
      </div>
      <div
        class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
      >
        <div class="lg:w-1/3 md:w-1/2 w-full px-4 text-lg">
          <nav class="list-none mb-10">
            <li class="py-1" v-for="link in mainLinks" :key="link">
              <router-link
                v-slot="{ navigate, href }"
                :to="{ name: link }"
                custom
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-gray-600 hover:text-gray-800"
                  >{{ link }}</a
                >
              </router-link>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4 text-lg">
          <nav class="list-none mb-10">
            <li class="py-1" v-for="link in otherLinks" :key="link">
              <router-link
                v-slot="{ navigate, href }"
                :to="{ name: link }"
                custom
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-gray-600 hover:text-gray-800"
                  >{{ link }}</a
                >
              </router-link>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-gray-500 text-sm text-center sm:text-left">
          &copy; 2021 PWR. Technologies
        </p>
      </div>
    </div>
  </footer>
</template>
