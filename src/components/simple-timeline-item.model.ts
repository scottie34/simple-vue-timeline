import { Control } from './simple-timeline-control.model';
import { Status } from './simple-timeline-status.model';

export class Item {
  id?: number | undefined;
  icon?: string | undefined;
  status?: Status | undefined;
  title?: string | undefined;
  controls?: Control[] | undefined;
  createdDate?: Date | undefined;
  body?: string | undefined;

  constructor(
    id?: number | undefined,
    icon?: string | undefined,
    status?: Status | undefined,
    title?: string | undefined,
    controls?: Control[] | undefined,
    createdDate?: Date | undefined,
    body?: string | undefined
  ) {
    this.id = id;
    this.icon = icon;
    this.status = status;
    this.title = title;
    this.controls = controls;
    this.createdDate = createdDate;
    this.body = body;
  }
}
