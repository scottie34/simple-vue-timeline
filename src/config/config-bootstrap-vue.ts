import {BadgePlugin, ButtonPlugin, CardPlugin, LayoutPlugin} from 'bootstrap-vue';

// @ts-ignore
export function initBootstrapVue(vue) {
  vue.use(BadgePlugin);
  vue.use(ButtonPlugin);
  vue.use(CardPlugin);
  vue.use(LayoutPlugin);
}
