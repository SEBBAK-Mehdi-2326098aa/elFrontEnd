import { Component, OnInit } from '@angular/core';
import { ListExercices } from "../model/listExercices";
import { Exercice } from "../model/exercice";

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [],
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {
  listExercices = new ListExercices();
  exercices: Exercice[] = [];

  constructor() {
    this.exercices = this.listExercices.AllExercices;
  }
  ngOnInit(): void {
  }
}
