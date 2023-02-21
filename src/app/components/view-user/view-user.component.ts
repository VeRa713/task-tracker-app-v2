import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit{
  id: number

  @Input() user: User = {
    id: 0,
    firstName: "",
    lastName: "",
    email: ""
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // get value from url
    this.id =  Number(this.route.snapshot.paramMap.get('id'))
    console.log(`View Component for user ${this.id}`)

    this.userService.getById(this.id).subscribe((user) => {
      this.user =  user
    })
 }

}
