<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SaveMoney",
});
</script>

<template>
  <div class="bg-white pt-6">
    <div class="max-w-7xl p-7 mx-auto py-5 lg:p-20">
      <h1 class="font-semibold text-xl md:text-4xl lg:w-2/3">
        <span class="text-red-600 underline">Not convinced?</span> We save you
        thousands of dollars from the beginning you purchase it to the end of
        life.
      </h1>

      <div class="flex items-stretch flex-wrap -m-4 py-7 lg:py-10">
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg lg:h-full">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Broken or Stolen?
            </h2>
            <p class="leading-relaxed text-base">
              We offer free replacements under our warranty and coverage plan
              for $10/mo.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg lg:h-full">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Smart and Efficient
            </h2>
            <p class="leading-relaxed text-base">
              Our bike will automatically find the most efficient route and
              adjust component efficiency to provide peak performance and range.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg lg:h-full">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Low Operation Cost
            </h2>
            <p class="leading-relaxed text-base">
              Vite fully charges up in 3 hours and provides up to 80 km of
              range, and it only costs
              <span class="underline font-bold">cents</span> from a full charge.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg lg:h-full">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Industry Leading Performance
            </h2>
            <p class="leading-relaxed text-base">
              Our efficient hardware will deliver up to 30 km/h and help you
              reach your destinations.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg lg:h-full">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Designed to Last
            </h2>
            <p class="leading-relaxed text-base">
              Say goodbye to long hours of maintenance. With Vite, you can ride
              your bike for thousands of kilometers and replace parts with a
              phillips screw driver
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg lg:h-full">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Strong and Versatile
            </h2>
            <p class="leading-relaxed text-base">
              Waterproof, all terrain, and durable. Nothing will stop you from reaching your destination, not even potholes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
