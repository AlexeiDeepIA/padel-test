import { Component } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authGoogleService: AuthGoogleService){}

  login(){
    this.authGoogleService.login();    
  }

}
