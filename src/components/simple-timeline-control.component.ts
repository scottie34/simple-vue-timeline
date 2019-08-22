import { Component, Prop, Vue } from 'vue-property-decorator';
import { Control, IControl } from '@/components/simple-timeline-control.model';

@Component({})
export default class SimpleTimelineControl extends Vue {
  @Prop()
  public control!: IControl;

  @Prop()
  public eventId!: IControl;

  public handleClick() {
    console.log('handleClick ' + this.control.method + ' ' + this.eventId);
    if (this.control.method == 'delete') {
      this.$emit('timeline-delete');
    } else if (this.control.method == 'edit') {
      this.$emit('timeline-edit');
    } else {
      console.log('Unknown method ' + this.control.method);
    }
  }
}
