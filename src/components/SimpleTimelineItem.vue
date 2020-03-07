<template>
  <b-row>
    <b-col cols="3" sm="2" lg="1" class="align-self-center">
      <div class="text-muted">{{ formattedDate }}</div>
    </b-col>
    <b-col cols="1" sm="1" lg="1">
      <div class="timeline h-100">
        <h3 class="h-100 d-flex justify-content-center">
          <div class="badge badge-pill align-self-center" :class="'badge-' + item.status">
            <font-awesome-icon :icon="item.icon" />
          </div>
        </h3>
      </div>
    </b-col>
    <b-col cols="8" sm="9" lg="10">
      <b-card
        :header="item.title"
        :border-variant="item.status"
        :header-bg-variant="item.status"
        header-text-variant="white"
        footer-tag="footer"
        class="mt-1 mb-1"
      >
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
