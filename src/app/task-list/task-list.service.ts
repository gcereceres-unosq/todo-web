import { Task } from "../../models/task";
import { NewTask } from "../../models/newTask";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TaskListService {

    private tasks = [
        {
            id: 1,
            title: 'Create Front End',
            content: 'Create the front end for the todo application using Angular',
            dueDate: new Date(),
            completed: false
        },
        {
            id: 2,
            title: 'Create Backend',
            content: 'Create the back end for the todo application using dotnet 8',
            dueDate: new Date(),
            completed: false
        },
        {
            id: 3,
            title: 'Integrate Back and Front end',
            content: 'Integrate both pieces together.',
            dueDate: new Date(),
            completed: false
        }
    ]

    getTasks() {
        return this.tasks;
    }

    addTask(newTask: NewTask) {

        this.tasks.unshift({
            id: new Date().getTime(),
            title: newTask.title,
            content: newTask.content,
            dueDate: newTask.dueDate,
            completed: false
        });
    }

    completeTask(task: Task) {
        task.completed = true;
    }
}