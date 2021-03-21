<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LearnHowMuchSavings",
});
</script>

<template>
  <div class="flex flex-col-reverse lg:flex-row-reverse">
    <div class="lg:w-2/3 bg-red-600">
      <div class="flex flex-col p-5 md:p-20 w-full space-y-8">
        <h1
          class="font-bold relative text-white text-2xl text-center lg:text-left lg:text-4xl"
        >
          Save more time with PWR. Vite
        </h1>

        <div class="w-full rounded-md bg-white shadow-md p-5">
          <div class="flex flex-col space-y-4">
            <div class="flex items-center space-x-1">
              <h1>Empire State Building</h1>
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1>Central Park</h1>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-14 h-14 sm:w-16 sm:h-16">
                <div
                  class="absolute w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 64 64"
                    class="absolute inset-0 w-full h-full text-green-400"
                    transform="rotate(90) scale(1 -1)"
                  >
                    <path
                      d="M6,32a26,26 0 1,0 52,0a26,26 0 1,0 -52,0"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="12"
                      stroke-dashoffset="0px"
                      stroke-dasharray="130px 163.38558959960938px"
                    ></path>
                  </svg>
                  <div
                    class="relative bg-white rounded-full w-10 h-10 shadow-sm"
                  ></div>
                  <svg
                    viewBox="0 0 64 64"
                    class="absolute inset-0 w-full h-full"
                  >
                    <path
                      d="M22.668 33.333l5.333 5.334 13.334-13.334"
                      fill="none"
                      stroke="#22C55E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="26.399829864501953px 26.399829864501953px"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-col">
                <h2
                  class="font-regular text-gray-600 text-xl text-center lg:text-left"
                >
                  <span class="font-bold">PWR.</span> Vite
                </h2>
                <h1 class="font-bold text-2xl">69 miles</h1>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-14 h-14 sm:w-16 sm:h-16">
                <div
                  class="absolute w-14 h-14 sm:w-16 sm:h-16 bg-red-200 rounded-full flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 64 64"
                    class="absolute inset-0 w-full h-full text-red-500"
                    transform="rotate(90) scale(1 -1)"
                  >
                    <path
                      d="M6,32a26,26 0 1,0 52,0a26,26 0 1,0 -52,0"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="12"
                      stroke-dashoffset="0px"
                      stroke-dasharray="50px 163.38558959960938px"
                    ></path>
                  </svg>
                  <div
                    class="relative bg-white rounded-full w-10 h-10 shadow-sm"
                  ></div>
                  <svg
                    viewBox="0 0 64 64"
                    class="absolute inset-0 w-full h-full"
                  >
                    <path
                      d="M22.668 33.333l5.333 5.334 13.334-13.334"
                      fill="none"
                      stroke="red"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="26.399829864501953px 26.399829864501953px"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-col">
                <h2
                  class="font-regular text-gray-600 text-xl text-center lg:text-left"
                >
                  Tesla Model 3
                </h2>
                <h1 class="font-bold text-2xl">420 miles</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 h-40"></div>
  </div>
</template>
