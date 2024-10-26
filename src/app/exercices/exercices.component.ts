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

  isLogin = localStorage.getItem('userEmail') !== null;
  public exercices: ExerciceModel[] = [];
  public compteur: number = 0;
  public exerciceCompleted : number = 0;
  public exerciceStarted: boolean = false;
  public selectedAnswer: string = '';
  public level : number = 1;


  public categories = [
    { name: 'Conversion heures et minutes', difficulty: 'easy', label: 'FACILE', id: 1 },
    { name: 'Conversion heures et minutes', difficulty: 'medium', label: 'MOYEN', id: 2 },
    { name: 'Conversion heures et minutes', difficulty: 'hard', label: 'DIFFICILE', id: 3 },
    { name: 'Pourcentages', difficulty: 'easy', label: 'FACILE', id: 4 },
    { name: 'Pourcentages', difficulty: 'medium', label: 'MOYEN', id: 5 },
    { name: 'Pourcentages', difficulty: 'hard', label: 'DIFFICILE', id: 6 },
    { name: 'Calcul mental', difficulty: 'easy', label: 'FACILE', id: 7 },
    { name: 'Calcul mental', difficulty: 'medium', label: 'MOYEN', id: 8 },
    { name: 'Calcul mental', difficulty: 'hard', label: 'DIFFICILE', id: 9 },
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private exerciceService: ExerciceService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {

    if (!this.isLogin) {
      this.router.navigate(['/home']);
    }
    const storedLevel = localStorage.getItem('userLevel');
    this.level = storedLevel !== null ? +storedLevel : 1;
  }

  checkAnswer(exercice: ExerciceModel, answer: string) {

    this.exerciceCompleted++;
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

  returnToExercices() {
    this.router.navigate(['/home/exercices']);
  }

  startExercice(category: string, difficulty: string, selectedLevel: number) {
    this.exerciceService.get10RandomExercices(category, difficulty).subscribe((data) => {
      this.exercices = Object.values(data).flat();
    });
    this.exerciceStarted = true;
    localStorage.setItem('selectedLevel', selectedLevel.toString());
  }


  saveResult() {
    const userId = localStorage.getItem('userId');
    const levelCompleted = localStorage.getItem('selectedLevel');
    if (levelCompleted !== null && userId !== null) {
      const numberLevel = +levelCompleted;
      const numberId = +userId
      this.exerciceService.saveResult(numberId, numberLevel).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/home/account']);
      });
    }

  }
}
