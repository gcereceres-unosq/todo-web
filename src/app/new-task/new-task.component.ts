import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../models/newTask';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  newTask: NewTask = this.resetTask();

  onSaveTask(task: NewTask) {
    console.log(this.newTask);
    this.newTask = this.resetTask();
  }

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit(this.newTask);
  }

  resetTask(){
    return {
      title: "",
      content: "",
      dueDate: new Date()
    };
  }
}
