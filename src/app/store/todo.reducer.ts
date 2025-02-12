import { createReducer, on } from "@ngrx/store";
import { create, deleteTask, fetchTodoList, update } from "./todo.actions";
import { Task } from "../../models/task";


interface TodoState {
    todoList: Task[];
}

const initialState: TodoState = {
    todoList: []
};

export const todoReducer = createReducer(
    initialState,
    on(fetchTodoList, (state) => ({ ...state })),
    on(create, (state, action) => ({
        ...state,
        todoList: [...state.todoList, action]
    })),
    on(update, (state, action) => ({
        ...state,
        todoList: state.todoList.map(task =>
            task.id === action.id ? { ...task, ...action } : task
        )
    })),
    on(deleteTask, (state, action) => ({
        ...state,
        todoList: state.todoList.filter(task => task.id !== action.taskId)
    }))
);