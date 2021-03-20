<template>
  <v-hero />
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
