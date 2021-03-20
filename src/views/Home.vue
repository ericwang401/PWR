<template>
  <v-hero />
  <one-bike-unlimited-possibilities />
  <learn-how-much-savings />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VHero from "@/components/home/Hero.vue";
import OneBikeUnlimitedPossibilities from "@/components/home/OneBikeUnlimitedPossibilities.vue";
import LearnHowMuchSavings from "@/components/home/LearnHowMuchSavings.vue";

export default defineComponent({
  name: "Home",
  components: {
    VHero,
    OneBikeUnlimitedPossibilities,
    LearnHowMuchSavings
  },
});
</script>
