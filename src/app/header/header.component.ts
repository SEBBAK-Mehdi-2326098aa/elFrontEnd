import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['/home']);
  }


  goToExercices() {
    this.router.navigate(['/home/exercices']);
  }

  goToAccount() {
    this.router.navigate(['/home/account']);
  }
}
