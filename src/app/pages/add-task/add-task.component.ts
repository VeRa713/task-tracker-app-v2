import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TaskItem } from '../../models/task-item';
import { TaskService} from '../../services/task.service';
import { Priority } from '../../models/priority';
import { UserService} from '../../services/user.service';
import { User } from '../../models/user'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  users: User[] = []

  constructor(
    private taskService : TaskService,
    private userService : UserService
  ) {}

  ngOnInit(): void {
    console.log("ngOnInit() fired for Add-Tasks.Component")

    this.userService.getAllUsers().subscribe((users) => {

      console.log("TYPE "+ typeof users)
      console.log(typeof this.priorities)

      this.users = users
      console.log(this.users)
    })
  }

  statusId : number
  priorityId: number
  userId: number

  @Input() taskItem: TaskItem = {
    id: 0,
    taskName: "",
    userId: "",
    desc: "",
    statusId: 0,
    priorityId: 0
  }

  @Input() priority: Priority

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

    //set to 1 - default status is "to do"
    o.statusId = 1

    console.log("Default Status: " + o.statusId)
    console.log(o)

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
    this.taskItem.priorityId = 0
  }

  handlerPriority = (payload: any) => {
    let priorityId = payload.target.value

    this.priorityId = priorityId;
    console.log("Set priority to: " + this.priorityId)
  }

  handlerUser = (payload: any) => {
    let userId = payload.target.value

    this.userId = userId;
    console.log("Assign to: " + this.userId)
  }
}
