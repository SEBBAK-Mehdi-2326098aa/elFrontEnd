import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UserService} from "../../service/userService";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    RouterLink,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  public isLogin: boolean = false;
  public prenom = '';
  public nom = '';
  email: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private matSnackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.isLogin = localStorage.getItem('userEmail') !== null;
    if (this.isLogin) {
      this.router.navigate(['/home/exercices']);
    }
  }

  goToExercices(email: string, password: string) {
    this.userService.login(email, password)
    .subscribe((data) => {
      if (data && data['civility']) {
        localStorage.setItem('userEmail', data['email']);
        localStorage.setItem('userLastName', data['lastname']);
        localStorage.setItem('userFirstname', data['name']);
        localStorage.setItem('userCivility', data['civility']);
        localStorage.setItem('userLevel', data['level']);
        this.matSnackBar.open("Connexion réussie", "Fermer", {
          panelClass: ['success-snackbar'],
          duration: 3000
        });
        this.router.navigate(['/home/exercices']);
      }
      else {
        this.matSnackBar.open("Identifiants incorrects", "Fermer", {
          panelClass: ['error-snackbar'],
          duration: 3000
        });
      }
    });
  }
}
