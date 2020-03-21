<template>
  <div>
    <timeline
      :items="items"
      dateFormat="YY/MM/DD"
      @timeline-edit="edit"
      @timeline-copy="copy"
      @timeline-trash="trash"
      v-on="$listeners"
    ></timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SimpleTimeline from '@/components/SimpleTimeline.vue';
import { Status } from '@/components/simple-timeline-status.model';
import { Item } from '@/components/simple-timeline-item.model';
import { Control } from '@/components/simple-timeline-control.model';

@Component({
  components: {
    timeline: SimpleTimeline
  }
})
export default class App extends Vue {
  public items: Item[] = [
    new Item(
      0,
      'calendar-alt',
      Status.DANGER,
      'Event Title',
      [new Control('edit', 'pencil-alt'), new Control('copy', 'plus')],
      new Date(),
      'Here is the body message of item 0'
    ),
    new Item(
      1,
      'tasks',
      Status.INFO,
      'Task Title',
      [new Control('edit', 'pencil-alt'), new Control('trash', 'trash')],
      new Date(2020, 2, 2),
      'Here is the body message of item 1'
    ),
    new Item(
      2,
      'home',
      Status.SUCCESS,
      'Another Title',
      [new Control('edit', 'bell')],
      new Date(2019, 11, 4),
      'Here is the body message of item 2'
    )
  ];

  public edit(e: any) {
    console.log('edit ' + e['eventId']);
  }

  public copy(e: any) {
    console.log('copy ' + e['eventId']);
    let item: Item = this.items.find(item => item.id == e['eventId']) as Item;
    let clone = new Item(this.items.length, item.icon, item.status, item.title, item.controls, item.createdDate, item.body);
    this.items.push(clone);
  }

  public trash(e: any) {
    console.log('trash ' + e['eventId']);
    this.items.pop();
  }
}
</script>
