<template>
  <ul class="timeline">
    <timeline-item :key="item.id" :item="item" v-for="item of items"></timeline-item>
  </ul>
</template>
<script lang="ts" src="./simple-timeline.component.ts"></script>
<style lang="scss">
#timeline-header {
  font-size: 26px;
}

.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;

  &:before {
    background-color: #eee;
    bottom: 0;
    content: ' ';
    left: 50px;
    margin-left: -1.5px;
    position: absolute;
    top: 0;
    width: 3px;
  }

  > li {
    margin-bottom: 20px;
    position: relative;

    &:before,
    &:after {
      content: ' ';
      display: table;
    }

    &:after {
      clear: both;
    }

    > .timeline-panel {
      border-radius: 2px;
      border: 1px solid #d4d4d4;
      box-shadow: 0 1px 2px rgba(100, 100, 100, 0.2);
      margin-left: 100px;
      padding: 20px;
      position: relative;

      .timeline-heading {
        .timeline-panel-controls {
          position: absolute;
          right: 8px;
          top: 5px;

          .timestamp {
            display: inline-block;
          }

          .controls {
            display: inline-block;
            padding-right: 5px;
            border-right: 1px solid #aaa;

            a {
              color: #999;
              font-size: 11px;
              padding: 0 5px;

              &:hover {
                color: #333;
                text-decoration: none;
                cursor: pointer;
              }
            }
          }

          .controls + .timestamp {
            padding-left: 5px;
          }
        }
      }
    }
  }

  .timeline-badge {
    background-color: #999;
    border-radius: 50%;
    color: #fff;
    font-size: 1.4em;
    height: 50px;
    left: 50px;
    line-height: 52px;
    margin-left: -25px;
    position: absolute;
    text-align: center;
    top: 16px;
    width: 50px;
    z-index: 100;
  }

  .timeline-badge + .timeline-panel {
    &:before {
      border-bottom: 15px solid transparent;
      border-left: 0 solid #ccc;
      border-right: 15px solid #ccc;
      border-top: 15px solid transparent;
      content: ' ';
      display: inline-block;
      position: absolute;
      left: -15px;
      right: auto;
      top: 26px;
    }

    &:after {
      border-bottom: 14px solid transparent;
      border-left: 0 solid #fff;
      border-right: 14px solid #fff;
      border-top: 14px solid transparent;
      content: ' ';
      display: inline-block;
      position: absolute;
      left: -14px;
      right: auto;
      top: 27px;
    }
  }
}

.timeline-badge {
  &.primary {
    background-color: #2e6da4 !important;
  }

  &.success {
    background-color: #3f903f !important;
  }

  &.warning {
    background-color: #f0ad4e !important;
  }

  &.danger {
    background-color: #d9534f !important;
  }

  &.info {
    background-color: #5bc0de !important;
  }
}

.timeline-title {
  margin-top: 0;
  color: inherit;
}

.timeline-body {
  > p,
  > ul {
    margin-bottom: 0;
  }

  > p + p {
    margin-top: 5px;
  }
}
</style>