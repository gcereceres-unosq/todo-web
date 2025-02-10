import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TaskStatus } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-status',
  imports: [CommonModule],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.css'
})
export class TaskStatusComponent implements OnInit, OnChanges {
  @Input({ required: true }) selectedTaskStatus!: TaskStatus;

  public statusName: string = '';

  ngOnInit() {
    this.statusName = TaskStatus[this.selectedTaskStatus];
  }

  ngOnChanges() {
    this.statusName = TaskStatus[this.selectedTaskStatus];
  }
}
