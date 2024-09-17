import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../app/environment/environment";
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private httpClientModule: HttpClientModule) {
    this.getUser(1).subscribe((data) => {
      console.log(data);
    });
  }

  getUser(idUser: number): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/api/user/` + idUser;
    return this.http.get(apiUrl);
  }
}
