import Vue from 'vue';
import App from './App.vue';
import './assets/scss/vendor.scss';
import './assets/scss/simple-vue-timeline.scss';
import { SimpleTimelinePlugin } from '@/main';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BadgePlugin, ButtonPlugin, CardPlugin, LayoutPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';

Vue.config.productionTip = false;

// font-awesome
library.add(faTrash, faPlus, faPencilAlt, faTasks, faBell, faHome, faCalendarAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// bootstrap
Vue.use(BadgePlugin);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(LayoutPlugin);

// simpleTimeLine
Vue.use(SimpleTimelinePlugin);

new Vue({
  render: h => h(App)
}).$mount('#app');
