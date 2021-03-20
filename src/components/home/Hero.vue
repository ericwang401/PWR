<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
});
</script>

<style scoped>
.hero-container {
  background: linear-gradient(to right, #f3f4f6 50%, red 50%);
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
  font-size: 4rem;
  font-weight: 700;
  transform: translateY(-10rem);
}
.hero:after {
  position: absolute;
  left: 0;
  content: "ATILE";
  color: white;
  font-size: 4rem;
  font-weight: 700;
  transform: translateY(-10rem);
}

@media screen and (min-width: 640px) {
  .hero:before {
    font-size: 6rem;
  }
  .hero:after {
    font-size: 6rem;
  }
}

@media screen and (min-width: 768px) {
  .hero:before {
    font-size: 8rem;
    transform: translateY(-18rem);
  }
  .hero:after {
    font-size: 8rem;
    transform: translateY(-18rem);
  }
}

@media screen and (min-width: 1024px) {
  .hero:before {
    font-size: 12rem;
  }
  .hero:after {
    font-size: 12rem;
  }
}

@media screen and (max-width: 1024px) {
  .space-vertical > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  }
  .please-freaking-work {
    max-width: 520px;
  }
  .pleasee {
    width: 100%;
  }
}
</style>

<template>
  <div class="h-screen overflow-y-hidden">
    <div class="h-4/6 lg:h-5/6 w-full">
      <div
        class="hero-container absolute h-5/6 w-full overflow-y-hidden overflow-x-hidden flex -z-1"
      >
        <div class="hero"></div>
      </div>

      <div
        class="flex h-5/6 justify-center items-center z-10 transform translate-y-12"
      >
        <img class="lg:max-w-4xl max-h-full" src="@/assets/bike.png" />
      </div>
    </div>
    <div class="bg-white w-full h-2/6 lg:h-1/6 m-0 z-5">
      <div class="flex items-center h-full w-full mx-auto max-w-4xl">
        <div
          class="flex flex-col lg:flex-row items-center lg:justify-between w-full"
        >
          <div class="lg:w-96">
            <h1 class="font-medium text-center lg:text-left text-3xl">
              <span class="font-bold">PWR.</span> Vite
            </h1>
            <p class="hidden lg:block">
              Ditch large and expensive cars for commutes. Take the PWR Vite
              with you on your next trip and cut down on travel time and costs.
            </p>
          </div>
          <div
            class="flex flex-col lg:flex-row items-center please-freaking-work space-vertical lg:space-x-4"
          >
            <router-link
              :to="{ name: 'Buy Now' }"
              v-slot="{ isExactActive, navigate, href }"
              custom
            >
              <a
                class="transition-colors pleasee items-center text-center border-2 border-red-500 bg-red-500 text-white rounded-md py-1.5 px-7 hover:bg-transparent hover:text-red-500 focus:outline-none text-lg font-semibold"
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
                class="relative pleasee transition-colors border-2 border-gray-300 text-gray-500 rounded-md py-1.5 px-7 hover:bg-transparent hover:text-black hover:border-gray-700 focus:outline-none text-lg"
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
