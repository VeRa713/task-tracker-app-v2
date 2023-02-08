import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../../models/task-item';
import { TaskService} from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  constructor(private taskService : TaskService) {}

  status_id : number
  priority_id: number

  @Input() taskItem: TaskItem = {
    id: 0,
    task_name: "",
    assigned_to: "",
    assigned_by: "",
    desc: "",
    status_id: 0,
    priority_id: 0
  }

  btnAddTask = () => {
    console.log("Adding task....")
    console.log(this.taskItem)

    let o = { ...this.taskItem }

    // o.status_id = this.status_id
    // o.priority_id = this.priority_id

    //set to 0 for now
    o.status_id = 0
    o.priority_id = 0

    this.taskService.saveTask(o).subscribe((savedTask) => {
      console.log(savedTask)
    })

    this.taskItem.id = undefined;
    this.taskItem.task_name = ''
    this.taskItem.assigned_to = ''
    this.taskItem.assigned_by = ''
    this.taskItem.desc = ''
  }

  btnClear = () => {
    console.log("Clearing add task form....")

    this.taskItem.id = undefined;
    this.taskItem.task_name = ''
    this.taskItem.assigned_to = ''
    this.taskItem.assigned_by = ''
    this.taskItem.desc = ''
  }
}
