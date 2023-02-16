import { TaskItem } from './../../models/task-item';
import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() taskItem: TaskItem

  constructor(private taskService: TaskService) { }

  handleDelete(taskItem: TaskItem): void {
    console.log("Delete button for " + taskItem.id +" clicked...")

    let o = { ...taskItem }
    o.id = taskItem.id

    this.taskService.deleteTask(o).subscribe((deleteTask) => {
      console.log("Deleted Task #" + taskItem.id)
      window.location.reload();
    });
  }
}
