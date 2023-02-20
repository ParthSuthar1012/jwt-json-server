import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
   items: any[] = [];

  constructor(public authService: AuthService, private apiService: ApiService, private router:Router) {}

  ngOnInit() {
    this.apiService.getItems().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.log('Error getting items: ', error);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
