import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from '../../models/task';
import { TaskListService } from '../task-list/task-list.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskListService = inject(TaskListService);

  onCompleteTask() {
    this.taskListService.completeTask(this.task);
  }
}
