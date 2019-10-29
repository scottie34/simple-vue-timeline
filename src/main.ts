import Vue from 'vue';
import App from './App.vue';
import * as config from './config/config';
import * as bootstrapVueConfig from './config/config-bootstrap-vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import './assets/scss/vendor.scss';

Vue.config.productionTip = false;

config.initFortAwesome();
bootstrapVueConfig.initBootstrapVue(Vue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(App)
}).$mount('#app');
