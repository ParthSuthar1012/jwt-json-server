import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
       username: any;
  password: any;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login({username: this.username, password: this.password}).subscribe(
      response => {
        localStorage.setItem('token', response.token);
      },
      error => {
        console.log('Error logging in: ', error);
      }
    );
  }
}
