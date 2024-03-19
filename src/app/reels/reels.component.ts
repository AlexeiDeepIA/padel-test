import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.scss']
})
export class ReelsComponent {
  
  @ViewChild('videosContainer') videosContainer!: ElementRef;
  @ViewChild('videoPlayers') videoPlayers!: ElementRef[];

  currentVideoIndex: number = 0;

  constructor(private el: ElementRef) {}

  toggleVideoPlayback(videoElement: HTMLVideoElement, index: number): void {
    if (!videoElement.paused) {
      videoElement.pause();
      return; // Si el video no está pausado, sal de la función
    }
    this.pauseAllVideos();
    videoElement.play();
    this.currentVideoIndex = index;
  }
  

  pauseAllVideos(): void {
    this.videoPlayers.forEach((videoElement, index) => {
      if (index !== this.currentVideoIndex) {
        videoElement.nativeElement.pause();
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const containerTop = this.videosContainer.nativeElement.offsetTop;
    const containerBottom = containerTop + this.videosContainer.nativeElement.offsetHeight;
    const scrollPosition = window.pageYOffset + (window.innerHeight / 2);

    if (scrollPosition >= containerTop && scrollPosition <= containerBottom) {
      const index = Math.floor((scrollPosition - containerTop) / window.innerHeight);
      if (index !== this.currentVideoIndex) {
        this.toggleVideoPlayback(this.videoPlayers[index].nativeElement, index);
      }
    }
  }


}
