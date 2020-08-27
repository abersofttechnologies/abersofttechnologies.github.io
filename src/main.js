import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VuePageTransition from 'vue-page-transition'
import VueScrollReveal from 'vue-scroll-reveal'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/nprogress/nprogress.css'
import './assets/css/main.css'

const fixIdScrolling = {
  watch: {
    $route() {
      const currentRoute = this.$router.currentRoute;
      const idToScrollTo = currentRoute.hash;
      this.$nextTick(() => {
        if (idToScrollTo && document.querySelector(idToScrollTo)) {
          document.querySelector(idToScrollTo).scrollIntoView();
        }
      });
    },
  },
};

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VuePageTransition)
Vue.use(VueScrollReveal, {
  delay: 50,
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});

Vue.config.productionTip = false

new Vue({
  mixins: [fixIdScrolling],
  router,
  render: h => h(App)
}).$mount('#app')
