import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from './simple-timeline-item.model';
import SimpleTimelineItem from './SimpleTimelineItem.vue';

@Component({
  components: {
    timeline: SimpleTimeline,
    timelineItem: SimpleTimelineItem
  }
})
export default class SimpleTimeline extends Vue {
  @Prop({ default: () => [] })
  public items!: Item[];

  @Prop({ default: 'DD/MM/YY' })
  public dateFormat!: string;
}
