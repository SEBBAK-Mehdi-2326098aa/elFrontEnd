import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UserService} from "../../service/userService";
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
  }
  ngOnInit() {
     this.userService.getUser(1).subscribe((data) => {
       console.log(data);
     });
  }
  prenom = '';
  nom = '';
  goToExercices() {
  this.router.navigate(['home/exercices']);
}
}
