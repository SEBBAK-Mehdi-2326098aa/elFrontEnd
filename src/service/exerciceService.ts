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

  get10RandomExercices(category: string, difficulty: string): Observable<ExerciceModel[]> {
    const apiUrl = `${this.apiBaseUrl}/api/exercice/ten/random`;
    const data = {
      category: category,
      difficulty: difficulty
    }
    return this.http.post<ExerciceModel[]>(apiUrl, data);
  }
  getExerciceById(idExercice: number): Observable<ExerciceModel> {
    const apiUrl = `${this.apiBaseUrl}/api/exercice/` + idExercice;
    return this.http.get<ExerciceModel>(apiUrl);
  }
  checkAnswer(idExercice: number, answer: string) {
    const apiUrl = `${this.apiBaseUrl}/api/exercice/` + idExercice + `/check`;
    const data = {
      answer: answer
    }
    return this.http.post<any>(apiUrl,data);
  }
}
