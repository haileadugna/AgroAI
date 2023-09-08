// // AuthService in Angular
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   myUrl:string = "https://localhost:3000/auth"

//   constructor(private http: HttpClient) {}

//   signup(userDto: { username: string; password: string , email: string, fullname: string, profilepic:string}) {
//     const user = this.http.post(`${this.myUrl}/sighup`, userDto);
//     console.log(user);
//     return user;
//   }

//   login(loginData: { username: string; password: string }) {
//     return this.http.post(`${this.myUrl}/login`, loginData);
//   }

//   changePassword(changePasswordData: {username: string; password: string , email: string, fullname: string, profilepic:string}) {
//     return this.http.post(`${this.myUrl}/change-password`, changePasswordData);
//   }
// }
