import {Component, OnInit, signal} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ExerciceService} from "../../service/exerciceService";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/userService";
import {ExerciceModel} from "../../model/exerciceModel";
import {single} from "rxjs";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [
    NgForOf,
    MatSelectionList,
    MatListOption,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {

  public exercices: ExerciceModel[] = [];
  public singleExercice: ExerciceModel | undefined;
  public selectedAnswer: string = "";
  public compteur: number = 0;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private exerciceService: ExerciceService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.exerciceService.getExercices().subscribe((data) => {
      this.exercices = Object.values(data).flat();
    });
  }

  checkAnswer(exercice: ExerciceModel, answer: string) {

    exercice.isAnswered = true;
    this.exerciceService.checkAnswer(exercice.id, answer).subscribe((data) => {
      if (data['isCorrect']) {
        this.matSnackBar.open("Bonne réponse !", "Fermer", {
          panelClass: ['success-snackbar'],
          duration: 3000
        });
        this.compteur+=10;
      } else {
        this.matSnackBar.open("Mauvaise réponse", "Fermer", {
          panelClass: ['error-snackbar'],
          duration: 3000
        });
        this.compteur-=20;
        if (this.compteur < 0) {
          this.compteur = 0;
        }
      }
    });
    exercice.isAnswered = true;

    setTimeout(() => {
      this.exercices = this.exercices.filter(e => e !== exercice);
    }, 500);
  }



}
