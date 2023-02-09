import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../models/task-item';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  taskItems: TaskItem[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  // called when component is initialized
  // async
  ngOnInit() : void {
    console.log("ngOnInit() fired for Tasks.Component")

    this.taskService.getAllTasks().subscribe((taskItems) => {
      console.log("TaskComponent")
      console.log(typeof taskItems) //object (should be an array)
      console.log(taskItems)
      this.taskItems = taskItems
    })
  }

  formEventHandler = (payload: TaskItem) => {
    console.log("Handling formEventHandler...")
    console.log(payload)

    this.taskItems.push(payload)

    console.log(this.taskItems.length);
  }
}
