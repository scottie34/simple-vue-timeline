import { Control } from './simple-timeline-control.model';
import { Status } from './simple-timeline-status.model';

export class Item {
  id: number;
  icon: string;
  status: Status;
  title: string;
  controls: Control[];
  createdDate: Date;
  body: string;

  constructor(id: number, icon: string, status: Status, title: string, controls: Control[], createdDate: Date, body: string) {
    this.id = id;
    this.icon = icon;
    this.status = status;
    this.title = title;
    this.controls = controls;
    this.createdDate = createdDate;
    this.body = body;
  }
}
