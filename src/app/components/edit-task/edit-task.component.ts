import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from './../../services/task.service';
import { TaskItem } from './../../models/task-item';
import { UserService} from '../../services/user.service';
import { User } from '../../models/user'
import { Priority } from '../../models/priority';
import { Status } from './../../models/status';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  users: User[] = []

  id: number;
  statusId: number;
  priorityId: number;
  userId: number

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

  statuses : Status[] = [
    {
      id: 1,
      statusName: "To Do"
    },
    {
      id: 2,
      statusName: "In Progress"
    },
    {
      id: 3,
      statusName: "Done"
    }
  ]

  @Input() taskItem: TaskItem = {
    id: 0,
    taskName: '',
    userId: '',
    desc: '',
    statusId: 0,
    priorityId: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private userService : UserService
  ) {}

  ngOnInit(): void {
    // get value from url
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`EditComponent for id ${this.id}`);

    this.taskService.getById(this.id).subscribe((task) => {
      this.taskItem = task;
    });

    console.log('ngOnInit() fired for Add-Tasks.Component');

    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  btnSaveEdit = () => {
    console.log('Saving edit...');
    console.log(this.taskItem);

    let o = { ...this.taskItem };

    //set to 1 for now
    o.id = this.id;
    console.log('this id: ' + this.id);
    console.log('o.id: ' + o.id);

    this.taskService.saveTask(o).subscribe((savedTask) => {
      console.log(o);
      console.log(savedTask);
    });
  };

  handlerUser = (payload: any) => {
    let userId = payload.target.value

    this.userId = userId;
    console.log("Assign to: " + this.userId)
  }

  handlerPriority = (payload: any) => {
    let priorityId = payload.target.value

    this.priorityId = priorityId;
    console.log("Set priority to: " + this.priorityId)
  }

  handlerStatus = (payload: any) => {
    let statusId = payload.target.value

    this.statusId = statusId;
    console.log("Set status to: " + this.statusId)
  }
}
