import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  
   isDarkMode: boolean = false;
   profileData: any;
   picture: any;

  constructor (private AuthGoogleService: AuthGoogleService, private el: ElementRef) {}

  ngOnInit(){
    this.AuthGoogleService.initLogin().then(() =>{
      this.getProfileData();      
    })
  } 

  setDefaultImage() {
    this.profileData.picture = 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg';    
  }

  getProfileData(){
    const metaData = this.AuthGoogleService.getProfile();
    this.profileData = metaData;    
    this.picture = this.profileData.picture;          
  }

  toggleDarkMode() {
    this.el.nativeElement.ownerDocument.documentElement.classList.toggle('dark');
  }

  
  
    
}
