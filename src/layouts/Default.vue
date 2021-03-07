<script>
import { defineComponent } from "vue";
import VNavbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "Default",
  components: {
    VNavbar,
  },
});
</script>

<template>
  <v-navbar />
  <router-view />
</template>
