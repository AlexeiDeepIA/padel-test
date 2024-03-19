import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';
import { Router } from '@angular/router';
import { VideoServiceService } from '../_services/video-service.service';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  isDarkMode: boolean = false;
  profileData: any;
  picture: any;
  videoId = '908757963';
  videoInfo: any;
  trustedVideoUrl: SafeResourceUrl | undefined;
  cityName: any;

  constructor(
    private AuthGoogleService: AuthGoogleService,
    private router: Router,
    private el: ElementRef,
    private vimeoService: VideoServiceService,
    private sanitizer: DomSanitizer
  ) {}
  trustedVideoHtml: SafeHtml | undefined;

  ngOnInit() {
    this.AuthGoogleService.initLogin().then(() => {
      this.getProfileData();
    });

    this.getCityNameFromState();
  }

 // Método para obtener cityName desde el estado de la navegación
  getCityNameFromState() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.cityName = navigation.extras.state; // Corrige la línea aquí      
      console.log('cityName:', this.cityName); // Agrega esta línea para depurar      
    }
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

  toggleDarkMode() {
    this.el.nativeElement.ownerDocument.documentElement.classList.toggle('dark');
  }
}
