import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../app/environment/environment';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getUser(idUser: number): Observable<UserModel> {
    const apiUrl = `${this.apiBaseUrl}/api/user/` + idUser;
    return this.http.get<UserModel>(apiUrl);
  }

  login(email: string, password: string): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/api/user/check/login`;
    const data = {
      email: email,
      password: password
    };
    return this.http.post<any>(apiUrl, data);
  }
}
