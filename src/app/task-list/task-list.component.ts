import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTask } from '../../models/newTask';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  isAddingTask = false;

  constructor(private taskListService: TaskListService) { }

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  getTasks(){
    return this.taskListService.getTasks();
  }
}
