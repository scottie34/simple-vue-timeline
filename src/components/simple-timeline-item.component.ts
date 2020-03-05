import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from './simple-timeline-item.model';
import SimpleTimelineControl from './SimpleTimelineControl.vue';
import moment from 'moment';

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
    return moment(this.item.createdDate).format(this.dateFormat);
  }

  public delete() {
    this.$emit('timeline-delete-item', this.item.id);
  }

  public edit() {}
}
