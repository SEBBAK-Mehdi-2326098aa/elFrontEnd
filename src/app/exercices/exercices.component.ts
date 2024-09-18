import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ExerciceService} from "../../service/exerciceService";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/userService";
import {ExerciceModel} from "../../model/exerciceModel";
import {single} from "rxjs";
import {MatListOption, MatSelectionList} from "@angular/material/list";

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [
    NgForOf,
    MatSelectionList,
    MatListOption
  ],
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {

  public exercices: ExerciceModel[] = [];
  public singleExercice: ExerciceModel | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private exerciceService: ExerciceService) {
  }

  ngOnInit() {
    this.exerciceService.getExercices().subscribe((data) => {
      this.exercices = Object.values(data).flat();
    });
  }



}
