import { TaskItem } from './../../models/task-item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() taskItem: TaskItem

  // constructor(private taskService: TaskServiceService) { }

  handleEdit(task_name: String): void {
    console.log("Edit button clicked...")

    // this.taskService.editTask(task_name)
  }

  handleDelete(task_name: String): void {
    console.log("Delete button clicked...")

    // this.taskService.deleteTask(task_name)
  }
}
