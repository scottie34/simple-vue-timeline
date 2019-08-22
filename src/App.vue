<template>
  <div id="app">
    <timeline :items="items"></timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SimpleTimeline from '@/components/SimpleTimeline.vue';
import { IItem, Item, Status } from '@/components/simple-timeline-item.model';
import { Control } from '@/components/simple-timeline-control.model';

@Component({
  components: {
    timeline: SimpleTimeline
  }
})
export default class App extends Vue {
  public items: IItem[] = [
    new Item(0, 'user-injured', Status.WARNING, 'title', [new Control('edit', 'pencil-alt')], new Date(), 'body'),
    new Item(1, 'calendar-alt', Status.DANGER, 'title', [], new Date(), 'body')
  ];
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
