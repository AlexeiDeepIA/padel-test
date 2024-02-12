import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../_services/video-service.service';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.scss']
})
export class DetailVideoComponent implements OnInit{

  picture: any;
  videoUri: any;
  videoId = '908757963';
  videoInfo: any;
  sanitizedHtml: SafeHtml | undefined;
  html: any;

  constructor(    
    private vimeoService: VideoServiceService,
    private sanitizer: DomSanitizer
  ) {}  

  ngOnInit() {    
    this.vimeoService.getVideos().subscribe((data: any) => {
      this.videoInfo = data.data[0].assets;
      const rawHtml = this.videoInfo.iframe;      
      this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(rawHtml);      
    });
  }
}
