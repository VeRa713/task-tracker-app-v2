import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../../models/task-item';
import { TaskService} from '../../services/task.service';
import { Priority } from '../../models/priority';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  constructor(private taskService : TaskService) {}

  statusId : number
  priorityId: number

  @Input() taskItem: TaskItem = {
    id: 0,
    taskName: "",
    userId: "",
    desc: "",
    status: 0,
    priorityId: 0
  }

  @Input() priority: Priority

  // will change this - get values from db
  priorities : Priority[] = [
    {
      id: 1,
      priorityName: "Low"
    },
    {
      id: 2,
      priorityName: "Medium"
    },
    {
      id: 3,
      priorityName: "High"
    }
  ]

  @Output() prioritySelectedEvent : EventEmitter<any> = new EventEmitter<any>()

  btnAddTask = () => {
    console.log("Adding task....")
    console.log(this.taskItem)

    let o = { ...this.taskItem }

    //set to 1 for now
    o.status = 1
    o.priorityId = 1;

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

  handlerPriority = (payload: any) => {
    let priorityId = payload.target.value
    this.prioritySelectedEvent.emit({ id: priorityId })
  }

  setPriorityId = (payload: any) => {
    this.priorityId = Number(payload.id)
  }
}
