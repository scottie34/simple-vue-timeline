import { Component, Prop, Vue } from 'vue-property-decorator';
import { Control } from './simple-timeline-control.model';

@Component({})
export default class SimpleTimelineControl extends Vue {
  @Prop()
  public control!: Control;

  @Prop()
  public eventId!: number;

  public handleClick() {
    this.$parent.$emit('timeline-' + this.control.method, { eventId: this.eventId });
  }
}
