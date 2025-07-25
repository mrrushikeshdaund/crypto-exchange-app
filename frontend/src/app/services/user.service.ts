import { Injectable } from '@angular/core';
import { user } from '../types/user.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../utils/enviroments';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(userObj: user) {
    const url = `${environment.baseUrl}${environment.users.register}`;
    return this.http.post(url, userObj);
  }

  loginUser(userObj: user) {
    const url = `${environment.baseUrl}${environment.users.login}`;
    return this.http.post(url, userObj);
  }
}
