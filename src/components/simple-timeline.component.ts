import {Component, Prop, Vue} from 'vue-property-decorator';
import {IItem} from '@/components/simple-timeline-item.model';
import SimpleTimelineItem from '@/components/SimpleTimelineItem.vue';

@Component({
  components: {
    timelineItem: SimpleTimelineItem
  }
})
export default class SimpleTimeline extends Vue {
  @Prop({ default: () => [] })
  public items!: IItem[];

  @Prop({ default: 'DD/MM/YY' })
  public dateFormat!: string;

  public deleteItem() {
    return true;
  }
}
