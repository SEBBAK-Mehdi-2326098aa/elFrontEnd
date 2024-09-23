import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ExercicesComponent} from "./exercices/exercices.component";
import {AccountComponent} from "./account/account.component";

export const routes: Routes = [


  {path: 'home', component: HomeComponent},
  {path: 'home/exercices', component: ExercicesComponent},
  {path: 'home/account', component: AccountComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home'}

];
