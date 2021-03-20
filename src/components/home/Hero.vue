<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
});
</script>

<template>
  <div class="h-screen overflow-y-hidden">
    <div class="h-full w-full mt-16">
      <div class="absolute h-full w-full overflow-y-hidden overflow-x-hidden hidden lg:block -z-1">
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

      <div class="absolute flex lg:hidden h-full w-full -z-1 text-center">
        <div class="w-full" style="transform: translateY(3%)">
          <h1
            class="w-full text-red-500 text-6xl sm:text-8xl md:text-9xl font-bold"
          >
            VERSATILE
          </h1>
        </div>
      </div>

      <div class="flex justify-center z-10">
        <img class="lg:max-w-6xl" src="@/assets/bike.png" />
      </div>
    </div>
  </div>
</template>
