<template>
  <div id="app">
    <timeline :items="items" @timeline-edit="edit" @timeline-copy="copy" @timeline-trash="trash" v-on="$listeners"></timeline>
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
      Status.WARNING,
      'title',
      [new Control('edit', 'pencil-alt'), new Control('copy', 'plus')],
      new Date(),
      'Here is the body message of item 0'
    ),
    new Item(
      1,
      'calendar-alt',
      Status.DANGER,
      'title',
      [new Control('edit', 'pencil-alt'), new Control('trash', 'trash')],
      new Date(),
      'Here is the body message of item 1'
    )
  ];

  public edit(e: any) {
    console.log('edit ' + e['eventId']);
  }

  public copy(e: any) {
    console.log('copy ' + e['eventId']);
    let item: Item = <Item>this.items.find(item => item.id == e['eventId']);
    let clone = new Item(this.items.length, item.icon, item.status, item.title, item.controls, item.createdDate, item.body);
    this.items.push(clone);
  }

  public trash(e: any) {
    console.log('trash ' + e['eventId']);
    this.items.pop();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
