import { IControl } from '@/components/simple-timeline-control.model';

export const enum Status {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info'
}

export interface IItem {
  id?: number;
  icon?: string;
  status?: Status;
  title?: string;
  controls?: IControl[];
  createdDate?: Date;
  body?: string;
}

export class Item implements IItem {
  constructor(
    public id?: number,
    public icon?: string,
    public status?: Status,
    public title?: string,
    public controls?: IControl[],
    public createdDate?: Date,
    public body?: string
  ) {}
}
