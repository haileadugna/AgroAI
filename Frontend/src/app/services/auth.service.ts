// AuthService in Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(userDto: any) {
    return this.http.post('/api/auth/signup', userDto);
  }

  login(loginData: any) {
    return this.http.post('/api/auth/login', loginData);
  }

  changePassword(changePasswordData: any) {
    return this.http.post('/api/auth/change-password', changePasswordData);
  }
}
