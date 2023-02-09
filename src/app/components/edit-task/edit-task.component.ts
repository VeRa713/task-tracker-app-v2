import { Component, OnInit } from '@angular/core';
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

  taskItem: TaskItem = {
    id: 0,
    taskName: "",
    userId: "",
    desc: "",
    status: 0,
    priorityId: 0
  }

  constructor(
    private route: ActivatedRoute,
    private TaskService: TaskService
  ) {}

  ngOnInit(): void {
     // get value from url
     this.id =  Number(this.route.snapshot.paramMap.get('id'))
     console.log(`EditComponent for id ${this.id}`)

     this.TaskService.getById(this.id).subscribe((task) => {
       this.taskItem =  task
     })
  }

}
