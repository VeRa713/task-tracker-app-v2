import { UserService } from './../../services/user.service';
import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { TaskItem } from 'src/app/models/task-item';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  id: number;

  taskItems: TaskItem[] = []

  @Input() user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    // get value from url
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`View Component for user ${this.id}`);

    this.userService.getById(this.id).subscribe((user) => {
      this.user = user;
    });

    this.taskService.getTasksByUser(this.id).subscribe((taskItems) => {
      this.taskItems = taskItems
    })
  }
}
