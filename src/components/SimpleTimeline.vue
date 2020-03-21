<template>
  <b-container fluid="md" class="timeline-container">
    <timeline-item :dateFormat="dateFormat" :key="item.id" :item="item" v-for="item of items" v-on="$listeners"></timeline-item>
  </b-container>
</template>
<script lang="ts" src="./simple-timeline.component.ts"></script>
<style lang="scss">
.timeline {
  position: relative;
}
.timeline:before {
  background-color: #eee;
  bottom: 0;
  content: '';
  margin-left: -2px;
  position: absolute;
  top: 0;
  width: 4px;
  z-index: 1;
  height: 100%;
}
.timeline-icon {
  z-index: 2;
}
.timeline-container {
  text-align: center;
}
</style>
