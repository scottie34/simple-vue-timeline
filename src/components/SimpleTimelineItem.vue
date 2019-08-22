<template id="timeline-item-template">
  <li class="timeline-item">
    <div class="timeline-badge" :class="item.status">
      <font-awesome-icon :icon="item.icon" />
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4 class="timeline-title">{{ item.title }}</h4>
        <div class="timeline-panel-controls">
          <div class="controls">
            <timeline-control
              :eventId="item.id"
              :control="control"
              v-for="control of item.controls"
              :key="control.method"
            ></timeline-control>
          </div>
          <div class="timestamp">
            <small class="text-muted">{{ formattedDate }}</small>
          </div>
        </div>
      </div>
      <div class="timeline-body">{{ item.body }}</div>
    </div>
  </li>
</template>
<script lang="ts" src="./simple-timeline-item.component.ts"></script>
