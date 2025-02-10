import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Task, TaskStatus } from '../../models/task';
import { TaskListService } from '../task-list/task-list.service';
import { TaskStatusComponent } from '../task-status/task-status.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [DatePipe, TaskStatusComponent, FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskUpdated = new EventEmitter<void>();
  deleted = output({alias: 'taskDeleted'});
  private taskListService = inject(TaskListService);
  public isOnEditMode: boolean = false;
  public editedTask!: Task;  
  today: Date = new Date();

  public statusName:string = '';

  constructor() {
  }

  onDeleteTask() {
    this.taskListService.deleteTask(this.task.id).subscribe({
      complete: () => this.deleted.emit()
    });
  }

  toggleEditMode() {
    this.isOnEditMode = !this.isOnEditMode;
    if (this.isOnEditMode) {
      this.resetEditedTaskValue();
    }
  }

  resetEditedTaskValue() {
    this.editedTask = {
      id: this.task.id,
      title: this.task.title,
      content: this.task.content,
      dueDate: this.task.dueDate,
      taskStatus: this.task.taskStatus
    };
  }

  onStatusClicked(selectedStatus: TaskStatus) {
    this.editedTask.taskStatus = selectedStatus;
  }

  onSubmit() {
    this.taskListService.updateTask(this.editedTask).subscribe({
      complete: () => {this.taskUpdated.emit(); this.toggleEditMode(); }
    })
  }

  onCancel() {
    this.resetEditedTaskValue();
    this.toggleEditMode();
  }
}
