import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

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
    RouterModule,
  ]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('admin'),
    password: new FormControl('admin'),
  });

  constructor(
    private readonly router: Router,
  ) {}

  doLogin() {
    if (
      this.loginForm.value.email == 'admin' &&
      this.loginForm.value.password == 'admin'
    ) {
      this.router.navigate(['/']);
    }
  }
}
