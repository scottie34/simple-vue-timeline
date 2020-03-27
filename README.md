# simple-vue-timeline
![CI](https://img.shields.io/travis/scottie34/simple-vue-timeline/master.svg?style=flat-square)
![download](https://img.shields.io/npm/dm/simple-vue-timeline.svg?style=flat-square)
![version](https://img.shields.io/npm/v/simple-vue-timeline.svg?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)

A timeline vue component which leverages the use of common libraries:
 * [bootstrap vue components](https://bootstrap-vue.js.org/),
 * [font-awesome icons](https://fontawesome.com/) 
 * and [fecha](https://github.com/taylorhakes/fecha) date formatting.

Use [github](https://github.com/scottie34/simple-vue-timeline) for any issue you encountered or to give me some feedback of your usage.

If you find it useful, give it a star and please consider [buying me a coffee](https://cdn.buymeacoffee.com/buttons/default-green.png).

Refer to the [documentation](https://scottie34.github.io/simple-vue-timeline/) for further details.

![sample](https://raw.githubusercontent.com/scottie34/simple-vue-timeline/master/docs/simple-vue-timeline.png)


## Getting Started

### Installation
```
npm install --save simple-vue-timeline
```

### Style
```ts
@import '~simple-vue-timeline/dist/simple-vue-timeline';
```

As bootstrap is used, you must add the bootstrap style:
```ts
@import '~bootstrap/scss/bootstrap';
```

### Template Element
Add the element as follow:

`template`
```vue
<timeline :items="items" dateFormat="YY/MM/DD" @timeline-edit="edit" v-on="$listeners"></timeline>
```

`script`
```ts
import { SimpleTimeline, Item, Control, Status } from 'simple-vue-timeline';

@Component({
  components: {
    timeline: SimpleTimeline
  }
})
export default class ...
```

Refer to the `Vue Class Component Sample` section below for a complete sample.

## Vue Class Component Sample

```vue
<template>
  <div id="app">
    <timeline
      :items="items"
      @timeline-edit="edit"
      @timeline-copy="copy"
      @timeline-trash="trash"
      v-on="$listeners"
    ></timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  SimpleTimeline,
  Item,
  Control,
  Status
} from "simple-vue-timeline";

@Component({
  components: {
    timeline: SimpleTimeline
  }
})
export default class App extends Vue {
  public items: Item[] = [
    new Item(
      0,
      "calendar-alt",
      Status.WARNING,
      "title",
      [new Control("edit", "pencil-alt"), new Control("copy", "plus")],
      new Date(),
      "Here is the body message of item 0"
    ),
    new Item(
      1,
      "tasks",
      Status.WARNING,
      "title",
      [new Control("edit", "pencil-alt"), new Control("trash", "trash")],
      new Date(2019, 10, 20),
      "Here is the body message of item 1"
    )
  ];

  public edit(e: any) {
    console.log("edit " + e["eventId"]);
  }

  public copy(e: any) {
    console.log("copy " + e["eventId"]);
    const item: Item = this.items.find(item => item.id == e["eventId"]) as Item;
    const clone = new Item(
      this.items.length,
      item.icon,
      item.status,
      item.title,
      item.controls,
      item.createdDate,
      item.body
    );
    this.items.push(clone);
  }

  public trash(e: any) {
    console.log("trash " + e["eventId"]);
    this.items.pop();
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.timeline {
  position: relative;

  &:before {
    background-color: #eee;
    bottom: 0;
    content: "";
    margin-left: -2px;
    position: absolute;
    top: 0;
    width: 4px;
    z-index: -1;
    height: 100%;
  }
}
</style>
```

