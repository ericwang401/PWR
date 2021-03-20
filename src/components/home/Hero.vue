<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
});
</script>

<style scoped>
.hero-container {
    background: linear-gradient(to right, #F3F4F6 50%, red 50%);
}
.hero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  font-size: 30px;
  font-weight: 600;
}
.hero:before {
  position: absolute;
  right: 0;
  content: "VERS";
  color: red;
  font-size: 12rem;
  font-weight: 700;
  transform: translateY(-18rem);
}
.hero:after {
  position: absolute;
  left: 0;
  content: "ATILE";
  color: white;
  font-size: 12rem;
  font-weight: 700;
  transform: translateY(-18rem);
}
</style>

<template>
  <div class="h-screen overflow-y-hidden">
    <div class="h-5/6 w-full">
      <div
        class="hero-container absolute h-5/6 w-full overflow-y-hidden overflow-x-hidden hidden lg:flex -z-1"
      >
        <div class="hero"></div>
      </div>

      <div class="absolute flex lg:hidden h-screen w-full -z-1 text-center">
        <div class="w-full" style="transform: translateY(3%)">
          <h1 class="text-2xl font-medium">Vite 3.0</h1>
          <h1
            class="w-full text-red-500 text-6xl sm:text-8xl md:text-9xl font-bold"
          >
            VERSATILE
          </h1>
        </div>
      </div>

      <div class="flex h-full justify-center items-center z-10">
        <img class="lg:max-w-4xl transform translate-y-5" src="@/assets/bike.png" />
      </div>
    </div>
    <div class="bg-white w-full h-1/6">
      <div class="flex items-center h-full mx-auto max-w-2xl">
        <div class="flex justify-between w-full max-w-7xl">
          <div>
            <h1>Vite</h1>
          </div>
          <div class="flex space-x-5">
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

            <router-link
              :to="{ name: 'Specifications' }"
              v-slot="{ isExactActive, navigate, href }"
              custom
            >
              <a
                class="transition-colors flex items-center border-2 border-gray-300 text-gray-500 rounded-md py-1.5 px-7 hover:bg-transparent hover:text-black hover:border-gray-700 focus:outline-none text-lg"
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
  </div>
</template>
