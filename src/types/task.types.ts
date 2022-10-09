export enum ETaskStatus {
  DONE = 'done',
  IN_PROGRESS = 'in-progress',
  INCOMPLETE = 'incomplete'
}

export interface ITask {
  taskTitle: string,
  status: ETaskStatus
}