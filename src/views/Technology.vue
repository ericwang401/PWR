<script>
import { defineComponent } from 'vue'
import VHero from "@/components/technology/Hero.vue";
import LongRange from "@/components/technology/LongRange.vue";
import VPerformant from "@/components/technology/Performant.vue"
import EcoFriendly from "@/components/technology/EcoFriendly.vue";
import ReadyToBuy from "@/components/technology/ReadyToBuy.vue";
import VFooter from "@/components/Footer.vue";

export default defineComponent({
  name: "Technology",
  components: {
    VHero,
    LongRange,
    VPerformant,
    EcoFriendly,
    ReadyToBuy,
    VFooter
  }
});
</script>

<template>
  <v-hero />
  <long-range />
  <v-performant />
  <eco-friendly />
  <ready-to-buy />
  <v-footer />

</template>
