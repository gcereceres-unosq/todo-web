import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../models/newTask';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  newTask: NewTask = this.resetTask();

  onSaveTask(task: NewTask) {
    console.log(this.newTask);
    this.newTask = this.resetTask();
  }

  resetTask(){
    return {
      title: "",
      content: "",
      dueDate: new Date()
    };
  }
}
