import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTask } from '../../models/newTask';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  isAddingTask = false;

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

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime(),
      title: taskData.title,
      content: taskData.content,
      dueDate: taskData.dueDate,
      completed: false
    });

    this.isAddingTask = false;
  }
}
