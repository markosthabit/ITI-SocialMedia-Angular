import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login() {
    return localStorage.setItem('userToken', 'userAuthenticated');
  }
  logout() {
    localStorage.removeItem('userToken');
  }
  get isUserLogged(): boolean {
    return (localStorage.getItem('userToken')) ? true : false;
  }
}
