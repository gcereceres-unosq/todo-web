export interface Task {
    id: number;
    title: string;
    content: string;
    dueDate: Date;
    taskStatus: TaskStatus;
}


export enum TaskStatus {
    ToDo,
    InProgress,
    Done,
    Overdue
}

