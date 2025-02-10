import { Task } from "../../models/task";
import { NewTask } from "../../models/newTask";
import { inject, Injectable, Signal, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, reduce } from "rxjs";

import { environment } from "../environment";

@Injectable({ providedIn: 'root' })
export class TaskListService {

    private httpClient = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    fetchTaskList() {
        return this.httpClient.get<Task[]>(`${this.apiUrl}/todo`);
    }

    addTask(newTask: NewTask): Observable<Task> {
        return this.httpClient.post<Task>(`${this.apiUrl}/todo`, newTask);
    }

    updateTask(updatedTask: Task): Observable<Task> {
        return this.httpClient.put<Task>(`${this.apiUrl}/todo/${updatedTask.id}`, updatedTask);
    }

    deleteTask(taskId: number): Observable<Task> {
        return this.httpClient.delete<Task>(`${this.apiUrl}/todo/${taskId}`);
    }

    completeTask(task: Task) {
        // task.completed = true;
    }

    handleError(message: string, obj: any) {
        console.log(`Error Message: ${message} for: ${obj}`);
    }
}