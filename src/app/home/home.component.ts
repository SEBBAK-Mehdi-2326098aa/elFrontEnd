import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
  }



  prenom = '';
nom = '';

goToExercices() {
  this.router.navigate(['home/exercices']);
}
}
