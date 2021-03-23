<template>
  <v-hero />
  <one-bike-unlimited-possibilities />
  <learn-how-much-savings class="mt-4" />
  <save-money />
  <business-reviews />
  <reviews />
  <ready-to-buy />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VHero from "@/components/home/Hero.vue";
import OneBikeUnlimitedPossibilities from "@/components/home/OneBikeUnlimitedPossibilities.vue";
import LearnHowMuchSavings from "@/components/home/LearnHowMuchSavings.vue";
import SaveMoney from "@/components/home/SaveMoney.vue";
import Reviews from "@/components/home/Reviews.vue";
import BusinessReviews from "@/components/home/BusinessReviews.vue";
import ReadyToBuy from "@/components/home/ReadyToBuy.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    VHero,
    OneBikeUnlimitedPossibilities,
    LearnHowMuchSavings,
    SaveMoney,
    Reviews,
    BusinessReviews,
    ReadyToBuy,
    Footer
  },
});
</script>
