import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from './simple-timeline-item.model';
import SimpleTimelineItem from './SimpleTimelineItem.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as config from './../config/config';
import * as bootstrapVueConfig from './../config/config-bootstrap-vue';

config.initFortAwesome();
bootstrapVueConfig.initBootstrapVue({ vue: Vue });
Vue.component('font-awesome-icon', FontAwesomeIcon);

@Component({
  components: {
    timelineItem: SimpleTimelineItem
  }
})
export default class SimpleTimeline extends Vue {
  @Prop({ default: () => [] })
  public items!: Item[];

  @Prop({ default: 'DD/MM/YY' })
  public dateFormat!: string;
}
