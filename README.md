# simple-vue-timeline
![CI](https://img.shields.io/travis/scottie34/simple-vue-timeline/master.svg?style=flat-square)
![download](https://img.shields.io/npm/dm/simple-vue-timeline.svg?style=flat-square)
![version](https://img.shields.io/npm/v/simple-vue-timeline.svg?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)

A timeline vue component which leverages the use of common libraries:
 * [bootstrap vue components](https://bootstrap-vue.js.org/),
 * [font-awesome icons](https://fontawesome.com/) 
 * and [momentjs](https://momentjs.com/) date format.

Please use [github](https://github.com/scottie34/simple-vue-timeline) for any issue you encountered or to give me some feedbacks of your usage.

If you find it useful, give it a star. 

![sample](https://raw.githubusercontent.com/scottie34/simple-vue-timeline/master/doc/simple-vue-timeline.png)


## Getting Started

```
npm install --save simple-vue-timeline
```

As bootstrap is used, you must add the vendor.css style in the project using this component.

Refer to the `Vue Class Component Sample` section below for a complete sample.

### Template Element
Add the element as follow:
```vue
<timeline :items="items" dateFormat="YY/MM/DD" @timeline-edit="edit" v-on="$listeners"></timeline>
```

## Props
| Name | Type | Description |
| --- | --- | --- |
| `items` | `Item[]` | An item array containing your timeline items |
| `dateformat` | `string` | The [momentjs](https://momentjs.com/) pattern to use to format date |
| `v-on` | `Listener[]` | This one must be set to `$listeners` to be able to react on event emitted by Control (see Controls below) |
| `@timeline-<xxx>` | `string` | The method to be called to react on `<xxx>` events (see Controls below) |

## items
Component expects an array of Items

| Variable | Type | Description |
| --- | --- | --- |
| `id` | `number` | An unique id for your Item |
| `icon` | `string` | The id of the `fontawesome` icon to use |
| `status` | `Status` | A field of the Status enum related to [bootstrap color variant](https://bootstrap-vue.js.org/docs/reference/color-variants/#base-variants) (used for icon and card). |
| `title` | `string` | The Item title |
| `controls` | `Control[]` | An array of control for this Item (see Controls below) |
| `createdDate` | `Date` | Date of your Item (`dateFormat` used to format it) |
| `body` | `string` | The Item content |

## Controls
It allows to add buttons on your Item.

| Variable | Type | Description |
| --- | --- | --- |
| `method` | `string` | A method name used when emitting events |
| `icon` | `string` | The id of the `fontawesome` icon to use |

### Event
On button click, an event is emitting using the identifier `timeline-{{method}}`.

Events are emitted with the following object as parameter 
```vue
{ eventId: this.eventId }
```
 (`this.eventId` matches the id of the Item).

#### Example
For instance adding the following control 
```vue
new Control("edit", "pencil-alt")
```
will generate `timeline-edit` event.

To react on such event, one should provide:
 * the following prop to the timeline component: 
 ```vue
 @timeline-edit="edit"`
```

 * the associated `edit` method which will be called 
```vue 
public edit(e: any) {
    console.log("edit " + e["eventId"]);
}
```

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
      
## Project setup
```
npm install --save simple-vue-timeline
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
