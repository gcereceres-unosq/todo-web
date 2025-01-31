import { Component, EventEmitter, inject, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../models/newTask';
import { TaskListService } from '../task-list/task-list.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();

  newTask: NewTask = this.resetTask();

  private tasklistService = inject(TaskListService);

  onSaveTask(task: NewTask) {
    console.log(this.newTask);
    this.newTask = this.resetTask();
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasklistService.addTask(this.newTask);
    this.close.emit();
  }

  resetTask() {
    return {
      title: "",
      content: "",
      dueDate: new Date()
    };
  }
}
