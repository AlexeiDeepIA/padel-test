import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGoogleService } from './_services/auth-google.service';
import { RepetitionComponent } from './repetition/repetition.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { UbicationComponent } from './ubication/ubication.component';
import { MatchTvComponent } from './match-tv/match-tv.component';
import { ReelsComponent } from './reels/reels.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HomeScreenComponent,
    MyGamesComponent,
    NavMenuComponent,
    ProfileComponent,
    DetailVideoComponent,
    RepetitionComponent,
    DarkmodeComponent,
    UbicationComponent,
    MatchTvComponent,
    ReelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
