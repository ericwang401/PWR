<script>
import { defineComponent } from 'vue'
import VHero from "@/components/technology/Hero.vue";
import LongRange from "@/components/technology/LongRange.vue";
import VPerformant from "@/components/technology/Performant.vue"

export default defineComponent({
  name: "Technology",
  components: {
    VHero,
    LongRange,
    VPerformant
  }
});
</script>

<template>
  <v-hero />
  <long-range />
  <v-performant />
</template>
