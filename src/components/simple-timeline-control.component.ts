import {Component, Prop, Vue} from 'vue-property-decorator';
import {IControl} from '@/components/simple-timeline-control.model';

@Component({})
export default class SimpleTimelineControl extends Vue {
  @Prop()
  public control!: IControl;

  @Prop()
  public eventId!: IControl;

  public handleClick() {
    console.log('handleClick ' + this.control.method + ' ' + this.eventId);
    this.$emit('timeline-' + this.control.method, { eventId: this.eventId });
  }
}
