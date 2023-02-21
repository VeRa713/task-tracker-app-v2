import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent {
  @Input() user: User;

  constructor(private userService: UserService) {}

  handleDelete(user: User): void {
    console.log('Delete button for ' + user.id + ' clicked...');

    let o = { ...user }
    o.id = user.id

    this.userService.deleteUser(o).subscribe((deleteUser) => {
      console.log("Deleted User #" + user.id)
      window.location.reload();
    });
  }
}
