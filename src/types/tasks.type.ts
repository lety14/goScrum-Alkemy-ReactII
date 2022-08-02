export interface ITask {
  _id?: number;
  createdAt?: number;
  deleted?: false;
  deletedAt?: string;
  modifiedAt?: number;
  teamId?: string;
  title: string;
  status: string;
  importance: string;
  description: string;
}
