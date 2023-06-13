import { Component } from '@angular/core';
import { UserProps } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: UserProps = {
    name: "",
    email: "",
    password: "",
    cpf: "",
    phone: ""
  };

  constructor() { }

  onSubmit() {
    console.log("Send:", this.user);
  }
}
