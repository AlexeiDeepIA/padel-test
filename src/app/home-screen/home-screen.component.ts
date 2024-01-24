import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {

   profileData: any;

  constructor (private AuthGoogleService: AuthGoogleService) {}

  ngOnInit(){
    this.AuthGoogleService.initLogin().then(() =>{
      this.getProfileData();
    })
  } 

  getProfileData(){
    const metaData = this.AuthGoogleService.getProfile();
    this.profileData = metaData;        
  }
    
}
