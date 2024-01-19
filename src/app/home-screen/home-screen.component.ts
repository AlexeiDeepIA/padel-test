import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {

  constructor (private AuthGoogleService: AuthGoogleService) {}

  ngOnInit(){
    const metaData = JSON.stringify(this.AuthGoogleService.getProfile());
    console.log(metaData);    
  }
  
}
