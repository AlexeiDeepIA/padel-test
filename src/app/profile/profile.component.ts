import { Component } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor (private authGoogleService: AuthGoogleService) {}

  profileData: any;

  async ngOnInit() {
    try {
      const metaData = await this.authGoogleService.getProfile();
      this.profileData = metaData;
      console.log(this.profileData);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  }

  logout(){
    this.authGoogleService.logout();    
  }

}
