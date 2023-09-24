import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
  ]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('admin'),
    password: new FormControl('admin'),
  });

  doLogin() {
    if (
      this.loginForm.value.email == 'admin' &&
      this.loginForm.value.password == 'admin'
    ) {
      alert('login successfull')
    }
  }
}
