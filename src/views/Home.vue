<template>
  <v-hero />
  <div class="h-screen w-full bg-red-500">
    <h1>wilkerson is the best</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VHero from "@/components/home/Hero.vue";

export default defineComponent({
  name: "Home",
  components: {
    VHero
  },
});
</script>
