import { createAction, props } from "@ngrx/store";
import { Task } from "../../models/task";
import { NewTask } from "../../models/newTask";

export const fetchTodoList = createAction(
    '[todo] Fetch all'
);

export const create = createAction(
    '[Todo] Create',
    props<Task>()
);

export const update = createAction(
    '[todo] update',
    props<Task>()
);

export const deleteTask = createAction(
    '[todo] delete',
    props<{ taskId: number }>()
);

