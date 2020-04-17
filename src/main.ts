import * as components from './components';
import { VueConstructor } from 'vue';
import './assets/scss/simple-vue-timeline.scss';
import { Status, Item, Control } from './components';

const SimpleTimelinePlugin = {
  install(vue: VueConstructor, options = {}) {
    for (const component in components) {
      // @ts-ignore
      if (vue && component && components[component]) {
        // @ts-ignore
        vue.component(component, components[component]);
      }
    }
  }
};

export { SimpleTimelinePlugin, Control, Item, Status };

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SimpleTimelinePlugin);
}
