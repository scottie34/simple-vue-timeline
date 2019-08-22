import { Component, Prop, Vue } from 'vue-property-decorator';
import { IItem, Item, Status } from '@/components/simple-timeline-item.model';
import SimpleTimelineItem from '@/components/SimpleTimelineItem.vue';

@Component({
  components: {
    timelineItem: SimpleTimelineItem
  }
})
export default class SimpleTimeline extends Vue {
  @Prop({ default: () => [] })
  public items!: IItem[];

  public deleteItem() {
    return true;
  }
}
