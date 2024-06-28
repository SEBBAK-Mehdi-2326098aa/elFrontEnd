import { Component } from '@angular/core';
import {ListExercices} from "../model/listExercices";
import {Exercice} from "../model/exercice";

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.scss'
})
export class ExercicesComponent {
  exercices: Exercice[] = [];

  constructor() {
    let listExercices = new ListExercices();
    this.exercices = listExercices.AllExercices;
  }

  ngOnInit(): void {



  }
}

