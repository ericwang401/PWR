/* eslint-disable */
import { createApp } from "vue";
import { ObserveVisibility } from 'vue-observe-visibility';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/styles.css";

createApp(App)
  .directive("observe-visibility", {
    beforeMount: (el, binding, vnode) => {
      (vnode as any).context = binding.instance;
      ObserveVisibility.bind(el, binding, vnode);
    },
    updated: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind,
  })
  .use(store)
  .use(router)
  .mount("#app");
