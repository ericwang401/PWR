<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<template>
  <nav class="sticky top-0 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="font-bold text-4xl">PWR.</h1>
          </div>
          <div class="h-16 hidden md:block">
            <div class="h-full ml-10 flex items-baseline">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="flex items-center h-full px-6 hover:bg-gray-100 text-lg font-semibold"
                >Home
              </a>
              
              <a
                href="#"
                class="flex items-center h-full px-6 hover:bg-gray-100 text-lg font-regular"
                >Technology
              </a>
              
              <a
                href="#"
                class="flex items-center h-full px-6 hover:bg-gray-100 text-lg font-regular"
                >Specifications
              </a>
              
              <a
                href="#"
                class="flex items-center h-full px-6 hover:bg-gray-100 text-lg font-regular"
                >Reviews
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
