<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
});
</script>

<template>
  <div class="h-screen overflow-y-hidden mt-16">
    <div class="h-screen w-full">
      <div
        class="absolute h-screen w-full overflow-y-hidden overflow-x-hidden hidden lg:block -z-1"
      >
        <svg
          class="transform translate-x-1/20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1737 1076.306"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="Path_8"
                data-name="Path 8"
                d="M-1339.914-5164l-478.549,1076.306H-652V-5164Z"
                transform="translate(2572 5171.694)"
                fill="#fff"
              />
            </clipPath>
          </defs>
          <text
            id="VERSATILE"
            transform="translate(0 358.306)"
            fill="#ff2424"
            font-size="300"
            font-family="Poppins-Bold, Poppins"
            font-weight="700"
          >
            <tspan x="0" y="0">VERSATILE</tspan>
          </text>
          <path
            id="Path_2"
            data-name="Path 2"
            d="M-1339.914-5164l-478.549,1076.306H-652V-5164Z"
            transform="translate(2389 5164)"
            fill="#ff2424"
          />
          <g
            id="Mask_Group_2"
            data-name="Mask Group 2"
            transform="translate(-183 -7.694)"
            clip-path="url(#clip-path)"
          >
            <text
              id="VERSATILE-2"
              data-name="VERSATILE"
              transform="translate(183 366)"
              fill="#fff"
              font-size="300"
              font-family="Poppins-Bold, Poppins"
              font-weight="700"
            >
              <tspan x="0" y="0">VERSATILE</tspan>
            </text>
          </g>
        </svg>
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

      <div class="flex justify-center z-10">
        <img class="lg:max-w-5xl" src="@/assets/bike.png" />
      </div>
    </div>
    <div class="absolute bg-white w-full h-1/4 bottom-0">
      <div class="relative flex items-center h-full mx-auto max-w-2xl">
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
