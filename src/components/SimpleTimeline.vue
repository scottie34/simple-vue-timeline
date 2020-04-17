<template>
  <b-container fluid="md" class="timeline-container">
    <timeline-item :dateFormat="dateFormat" :key="item.id" :item="item" v-for="item of items" v-on="$listeners"></timeline-item>
  </b-container>
</template>
<script lang="ts" src="./simple-timeline.component.ts"></script>
