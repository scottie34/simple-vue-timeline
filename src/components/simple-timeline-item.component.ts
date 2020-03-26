import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from './simple-timeline-item.model';
import SimpleTimelineControl from './SimpleTimelineControl.vue';
import { format } from 'fecha';

@Component({
  components: {
    timelineControl: SimpleTimelineControl
  }
})
export default class SimpleTimelineItem extends Vue {
  @Prop()
  public item!: Item;

  @Prop()
  public dateFormat!: string;

  get formattedDate() {
    return format(this.item.createdDate, this.dateFormat);
  }
}
