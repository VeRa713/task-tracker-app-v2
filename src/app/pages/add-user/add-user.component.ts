import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  btnAddUser = () => {
    console.log("Adding user....");
  }

  btnClear = () => {
    console.log("Clearing add user form....");
  }
}
