import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TaskService } from './../../services/task.service';
import { TaskItem } from './../../models/task-item';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit{
  id: number
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

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
     // get value from url
     this.id =  Number(this.route.snapshot.paramMap.get('id'))
     console.log(`EditComponent for id ${this.id}`)

     this.taskService.getById(this.id).subscribe((task) => {
       this.taskItem =  task
     })
  }

  btnSaveEdit = () => {
    console.log("Saving edit...")
    console.log(this.taskItem)

    let o = { ...this.taskItem }

    //set to 1 for now
    o.id = this.id
    console.log("this id: " + this.id)
    console.log("o.id: " + o.id)
    o.status = 1
    o.priorityId = 1

    this.taskService.saveTask(o).subscribe((savedTask) => {
      console.log(o)
      console.log(savedTask)
    })
  }
}
