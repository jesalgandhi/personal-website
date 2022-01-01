import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuePdfApp from "vue-pdf-app";
import '@babel/polyfill'

Vue.config.productionTip = false
Vue.component("vue-pdf-app", VuePdfApp);

new Vue({
  router,
  store,
  vuetify,
  components: {
    
  },
  render: h => h(App)
}).$mount('#app')

