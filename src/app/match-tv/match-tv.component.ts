import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthGoogleService } from '../_services/auth-google.service';
import { VideoServiceService } from '../_services/video-service.service';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-match-tv',
  templateUrl: './match-tv.component.html',
  styleUrls: ['./match-tv.component.scss']
})
export class MatchTvComponent {

  isDarkMode: boolean = false;
  profileData: any;
  picture: any;
  videoId = '908757963';
  videoInfo: any;
  trustedVideoUrl: SafeResourceUrl | undefined;

  constructor(
    private AuthGoogleService: AuthGoogleService,
    private el: ElementRef,
    private vimeoService: VideoServiceService,
    private sanitizer: DomSanitizer
  ) {}
  trustedVideoHtml: SafeHtml | undefined;

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
