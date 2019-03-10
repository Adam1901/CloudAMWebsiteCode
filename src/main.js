import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import vueScrollto from 'vue-scrollto'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(vueScrollto)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
