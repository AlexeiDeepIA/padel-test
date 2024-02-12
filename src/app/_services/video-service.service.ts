import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  private apiUrl = 'https://sandbox.api.video/videos';
  private token = 'X1OJ9kdyKQIgWbZt2RbmAh6gI2DrmcubcbCKRFxJaYI'; 

  constructor(
    private http: HttpClient
  ) { }

  getVideos() {
    return this.http.get(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }
}
