import { Component } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private authGoogleService: AuthGoogleService){}

  login(){
    this.authGoogleService.login();    
  }

}
