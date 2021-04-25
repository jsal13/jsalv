/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint quote-props: "off" */

import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import readmeGenerator from '@/store/readmeGenerator';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import 'prismjs';
// import 'prismjs/themes/prism.css';

require('@/styles/styles.css');

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { 'readmeGenerator': readmeGenerator },
  strict: true,
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
