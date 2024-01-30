import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { RepetitionComponent } from './repetition/repetition.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'welcome', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'homescreen', component: HomeScreenComponent},
  { path: 'my-games', component: MyGamesComponent},
  { path: 'menu', component: NavMenuComponent},  
  { path: 'profile', component: ProfileComponent},
  { path: 'details', component: DetailVideoComponent},
  { path: 'video', component: RepetitionComponent},
  { path: 'darkmode', component: DarkmodeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
