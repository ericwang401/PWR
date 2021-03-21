<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LearnHowMuchSavings",
  setup() {
    /* const carProgressCircle = ref('0px');
    const bikeProgressCircle = ref('0px'); */


    /* const visibilityChanged = (isVisible: boolean) => {
      if (!isVisible) return;

      // animate the bike
      carProgressCircle.value = "164px"
      bikeProgressCircle.value = "164px"
      for (let i = 0; i < 164; i++)
      {
        setTimeout(function() {
          bikeProgressCircle.value = `${i}px 164px`
        }, 10 + 10 * i)
      }

      // animate the car
      for (let i = 0; i < 164; i++)
      {
        setTimeout(function() {
          carProgressCircle.value = `${i}px 164px`
        }, 30 + 30 * i)
      }
    }; */

    /* return {
      visibilityChanged,
      carProgressCircle,
      bikeProgressCircle
    }; */
  },
});
</script>

<style>

</style>

<template>
  <div class="flex flex-col-reverse items-stretch lg:flex-row-reverse">
    <div class="lg:w-2/3 bg-red-600">
      <div class="flex flex-col p-5 md:p-20 w-full space-y-8">
        <h1
          class="font-bold relative text-white text-2xl text-center lg:text-left lg:text-4xl"
        >
          Save more time with PWR. Vite
        </h1>

        <div class="w-full rounded-md bg-white shadow-md p-5">
          <div
            class="flex flex-col space-y-4"
          >
            <div class="flex items-center space-x-1">
              <h1>Rockefeller Center</h1>
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
                    class="absolute inset-0 w-full h-full text-green-400 transition-all"
                    transform="rotate(90) scale(1 -1)"
                  >
                    <path
                      d="M6,32a26,26 0 1,0 52,0a26,26 0 1,0 -52,0"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="12"
                      stroke-dashoffset="0px"
                      stroke-dasharray="145px 164px"
                    ></path>
                  </svg>
                  <div
                    class="relative bg-white rounded-full w-10 h-10 shadow-sm"
                  ></div>
                  <svg

                    viewBox="0 0 64 64"
                    class="absolute inset-0 w-full h-full transition-all"
                  >
                    <path
                     class="transition-all ease-in-out"
                      d="M22.668 33.333l5.333 5.334 13.334-13.334"
                      fill="none"
                      stroke="#22C55E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="164px 164px"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-col">
                <h2
                  class="font-regular text-gray-600 text-xl lg:text-left"
                >
                  <span class="font-bold">PWR.</span> Vite
                </h2>
                <h1 class="font-bold text-2xl">4 minutes</h1>
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
                     class="transition-all ease-in-out"
                      d="M6,32a26,26 0 1,0 52,0a26,26 0 1,0 -52,0"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="12"
                      stroke-dashoffset="0px"
                      stroke-dasharray="110px 164px"
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
                  class="font-regular text-gray-600 text-xl lg:text-left"
                >
                  Tesla Model 3
                </h2>
                <h1 class="font-bold text-2xl">8 minutes</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3">
      <div class="flex flex-col lg:flex-row h-full">
        <iframe
          class="w-full lg:w-1/2 h-full"
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24174.59336376546!2d-73.98690212078199!3d40.765891830820166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2sRockefeller%20Center%2C%20Rockefeller%20Plaza%2C%20New%20York%2C%20NY!3m2!1d40.7587402!2d-73.9786736!4m5!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park%2C%20New%20York%2C%20NY!3m2!1d40.781219899999996!2d-73.9665138!5e0!3m2!1sen!2sus!4v1616361457678!5m2!1sen!2sus"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <iframe
          class="w-full lg:w-1/2 h-full"
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24173.619847333972!2d-73.99091965551652!3d40.768568026830955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2sRockefeller%20Center%2C%20Rockefeller%20Plaza%2C%20New%20York%2C%20NY!3m2!1d40.7587402!2d-73.9786736!4m5!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park%2C%20New%20York%2C%20NY!3m2!1d40.781219899999996!2d-73.9665138!5e0!3m2!1sen!2sus!4v1616361502889!5m2!1sen!2sus"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>
