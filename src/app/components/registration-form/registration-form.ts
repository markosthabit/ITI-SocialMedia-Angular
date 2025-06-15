import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-registration-form',
  imports: [],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css'
})
export class RegistrationForm {
  userService = inject(UserService)
  constructor() { }
  addUser() {
    let user: IUser = {
      fullName: 'Alee Lukra Danti',
      email: 'al@gmail.com',
      password: 'password',
      phoneNum: ['333-423-4234']
    }
    this.userService.register(user).subscribe((data) =>
      console.log(data));
  }
}
