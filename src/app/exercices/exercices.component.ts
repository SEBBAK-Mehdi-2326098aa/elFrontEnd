import {Component, OnInit, signal} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ExerciceService} from "../../service/exerciceService";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/userService";
import {ExerciceModel} from "../../model/exerciceModel";
import {single} from "rxjs";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [
    NgForOf,
    MatSelectionList,
    MatListOption,
    MatRadioGroup,
    MatRadioButton,
    FormsModule
  ],
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {

  public exercices: ExerciceModel[] = [];
  public singleExercice: ExerciceModel | undefined;
  public selectedAnswer: string = "";
  constructor(private route: ActivatedRoute, private router: Router, private exerciceService: ExerciceService) {
  }

  ngOnInit() {
    this.exerciceService.getExercices().subscribe((data) => {
      this.exercices = Object.values(data).flat();
    });
  }

  checkAnswer(exercice: ExerciceModel, answer: string) {
    console.log(exercice);
    console.log(answer);
  }


}
