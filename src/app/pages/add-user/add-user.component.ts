import { Component, Input } from '@angular/core';
import { UserService} from '../../services/user.service';
import { User } from '../../models/user'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent{

  constructor(private userService : UserService) {}

  @Input() user: User = {
    id: 0,
    firstName: "",
    lastName: "",
    email: ""
  }

  btnAddUser = () => {
    console.log("Adding user....")

    let o = { ...this.user }

    this.userService.saveUser(o).subscribe((user) => {
      console.log(user)
    })

    this.clearForm()
  }

  btnClear = () => {
    console.log("Clearing add user form....")
    this.clearForm()
  }

  clearForm(): void {
    this.user.id = undefined
    this.user.firstName = ""
    this.user.lastName = ""
    this.user.email = ""
  }
}
