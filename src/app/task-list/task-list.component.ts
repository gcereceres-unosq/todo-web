import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks = [
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
}
