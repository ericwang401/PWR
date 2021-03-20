<template>
  <v-hero />
  <one-bike-unlimited-possibilities />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VHero from "@/components/home/Hero.vue";
import OneBikeUnlimitedPossibilities from "@/components/home/OneBikeUnlimitedPossibilities.vue";

export default defineComponent({
  name: "Home",
  components: {
    VHero,
    OneBikeUnlimitedPossibilities
  },
});
</script>
