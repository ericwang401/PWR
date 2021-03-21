<template>
  <v-hero />
  <one-bike-unlimited-possibilities />
  <learn-how-much-savings class="mt-4" />
  <save-money />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VHero from "@/components/home/Hero.vue";
import OneBikeUnlimitedPossibilities from "@/components/home/OneBikeUnlimitedPossibilities.vue";
import LearnHowMuchSavings from "@/components/home/LearnHowMuchSavings.vue";
import SaveMoney from "@/components/home/SaveMoney.vue"

export default defineComponent({
  name: "Home",
  components: {
    VHero,
    OneBikeUnlimitedPossibilities,
    LearnHowMuchSavings,
    SaveMoney
  },
});
</script>
