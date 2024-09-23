import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  public isLogin: boolean = false;
  public firstname = localStorage.getItem('userFirstname');
  public lastname = localStorage.getItem('userLastName');
  public email = localStorage.getItem('userEmail');
  public civility = localStorage.getItem('userCivility');

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.isLogin = localStorage.getItem('userEmail') !== null;
    if (!this.isLogin) {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    localStorage.removeItem('userEmail');
    this.router.navigate(['/home']);
  }
}
