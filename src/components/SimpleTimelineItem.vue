<template>
  <b-row>
    <b-col class="align-self-center">
      <div class="text-muted">{{ formattedDate }}</div>
    </b-col>
    <b-col>
      <div class="timeline h-100">
        <h3 class="h-100 d-flex justify-content-center">
          <div class="badge badge-pill badge-danger align-self-center" :class="item.status">
            <font-awesome-icon :icon="item.icon" />
          </div>
        </h3>
      </div>
    </b-col>
    <b-col cols="8">
      <b-card :header="item.title" footer-tag="footer" class="mt-1 mb-1">
        <b-card-text>{{ item.body }}</b-card-text>
        <div slot="footer">
          <timeline-control :eventId="item.id" :control="control" v-for="control of item.controls" :key="control.method">
          </timeline-control>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script lang="ts" src="./simple-timeline-item.component.ts"></script>
