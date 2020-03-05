import { BadgePlugin, ButtonPlugin, CardPlugin, LayoutPlugin } from 'bootstrap-vue';

export function initBootstrapVue({ vue }: { vue: any }) {
  vue.use(BadgePlugin);
  vue.use(ButtonPlugin);
  vue.use(CardPlugin);
  vue.use(LayoutPlugin);
}
