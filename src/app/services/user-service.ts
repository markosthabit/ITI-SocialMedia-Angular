import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(environment.dbUrl + '/users', user);
  }

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
