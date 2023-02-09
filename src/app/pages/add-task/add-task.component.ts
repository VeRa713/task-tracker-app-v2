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
    taskName: "",
    userId: "",
    desc: "",
    status: 0,
    priorityId: 0
  }

  btnAddTask = () => {
    console.log("Adding task....")
    console.log(this.taskItem)

    let o = { ...this.taskItem }

    // o.status_id = this.status_id
    // o.priority_id = this.priority_id

    //set to 1 for now
    o.status = 1
    o.priorityId = 1

    this.taskService.saveTask(o).subscribe((savedTask) => {
      console.log(savedTask)
    })

    this.clearForm()
  }

  btnClear = () => {
    console.log("Clearing add task form....")

    this.clearForm()
  }

  clearForm(): void {
    this.taskItem.id = undefined
    this.taskItem.taskName = ''
    this.taskItem.userId = ""
    this.taskItem.desc = ''
  }
}
