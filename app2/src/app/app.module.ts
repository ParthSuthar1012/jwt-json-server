// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
// import { ReactiveFormsModule,FormsModule} from '@angular/forms'

// export function tokenGetter() {
//   return localStorage.getItem('token');
// }

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//        JwtModule.forRoot({
//       config: {
//         tokenGetter: tokenGetter,
//         allowedDomains: ['localhost:3000'],
//         disallowedRoutes: []
//       }
//     }),
    
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
 import { HomeComponent } from './home/home.component';
 import { LoginComponent } from './login/login.component';
 import {RouterModule} from '@angular/router'


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: []
      }
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [ JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }