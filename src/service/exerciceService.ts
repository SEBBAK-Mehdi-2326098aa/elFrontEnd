import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../app/environment/environment";
import {ExerciceModel} from "../model/exerciceModel";
@Injectable({
  providedIn: 'root'
})

export class ExerciceService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getExercices(): Observable<ExerciceModel[]> {
    const apiUrl = `${this.apiBaseUrl}/api/exercice`;
    return this.http.get<ExerciceModel[]>(apiUrl);
  }
  getExerciceById(idExercice: number): Observable<ExerciceModel> {
    const apiUrl = `${this.apiBaseUrl}/api/exercice/` + idExercice;
    return this.http.get<ExerciceModel>(apiUrl);
  }
}
