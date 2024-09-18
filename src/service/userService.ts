import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../app/environment/environment";
import {UserModel} from "../model/userModel";
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private httpClientModule: HttpClientModule) {
  }

  getUser(idUser: number): Observable<UserModel> {
    const apiUrl = `${this.apiBaseUrl}/api/user/` + idUser;
    return this.http.get<UserModel>(apiUrl);
  }
}
