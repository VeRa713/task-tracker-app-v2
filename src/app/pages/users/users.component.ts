import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("ngOnInit() fired for Users.Component")

    this.userService.getAllUsers().subscribe((users) => {
      this.users = users
    })
  }

  formEventHandler = (payload: User) => {
    console.log("Handling formEventHandler...")
    console.log(payload)

    this.users.push(payload)

    console.log(this.users.length);
  }

}
