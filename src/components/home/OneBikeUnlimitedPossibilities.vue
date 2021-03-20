<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OneBikeUnlimitedPossibilities",
});
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <div class="lg:w-2/3 bg-red-600">
      <div class="flex flex-col p-5 md:p-20 w-full space-y-8">
        <h1
          class="font-bold relative lg:ml-auto text-white text-4xl text-center lg:text-right lg:text-6xl"
        >
          One Bike. <br />
          Unlimited Possibilities
        </h1>
        <div class="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-3">
          <div class="transition duration-200 ease-in-out transform md:hover:z-2 md:hover:scale-110 md:w-1/3 bg-white shadow-lg rounded-md py-4 px-4">
            <div class="flex flex-col space-y-2">
              <div class="flex w-full items-center space-x-3">
                <span
                  class="flex items-center justify-center text-center bg-red-600 text-white rounded-md w-10 h-10"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
                    />
                  </svg>
                </span>
                <h1 class="font-bold text-2xl">Fast</h1>
              </div>
              <p class="text-center">
                Skip all the traffic and unpaved roads. PWR Vite will take you anywhere.
              </p>
            </div>
          </div>
          <div class="transition duration-200 ease-in-out transform md:hover:z-2 md:hover:scale-110 md:w-1/3 bg-white shadow-lg rounded-md py-4 px-4">
            <div class="flex flex-col space-y-2">
              <div class="flex w-full items-center space-x-3">
                <span
                  class="flex items-center justify-center text-center bg-red-600 text-white rounded-md w-10 h-10"
                >
                  <svg
                    class="w-6 h-6F"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <h1 class="font-bold text-2xl">Robust</h1>
              </div>
              <p class="text-center">
                All terrain tires and resistant to all types of weather.
              </p>
            </div>
          </div>
          <div class="transition duration-200 ease-in-out transform md:hover:z-2 md:hover:scale-110 md:w-1/3 bg-white shadow-lg rounded-md py-4 px-4">
            <div class="flex flex-col space-y-2">
              <div class="flex w-full items-center space-x-3">
                <span
                  class="flex items-center justify-center text-center bg-red-600 text-white rounded-md w-10 h-10"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <h1 class="font-bold text-2xl">Cheap</h1>
              </div>
              <p class="text-center">
                Affordable, runs on electricity, and needs absolutely no
                maintenance compared to a car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3"></div>
  </div>
</template>
