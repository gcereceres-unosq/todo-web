import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTask } from '../../models/newTask';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskListService } from './task-list.service';
import { reduce } from "rxjs";
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  constructor(private taskListService: TaskListService) { }

  public taskList!: Task[];

  ngOnInit() {
    this.getTasks();
  }

  isAddingTask = false;



  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  getTasks() {
    this.taskListService.fetchTaskList()
      .subscribe(data => {this.taskList = data; console.log(this.taskList)});
  }
}
