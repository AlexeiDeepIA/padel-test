import { Component } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent {

  profileData: any;
  picture: any;

 constructor(private AuthGoogleService: AuthGoogleService){}  

 ngOnInit() {
  this.AuthGoogleService.initLogin().then(() => {
    this.getProfileData();
  });

}

setDefaultImage() {
  this.profileData.picture =
    'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg';
}

  getProfileData() {
    const metaData = this.AuthGoogleService.getProfile();
    this.profileData = metaData;
    this.picture = this.profileData.picture;
  }

}
