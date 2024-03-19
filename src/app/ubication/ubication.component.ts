import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthGoogleService } from '../_services/auth-google.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.scss']
})
export class UbicationComponent {

  profileData: any;
  picture: any;

 
  locationPermission: boolean = false;
  cityName: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private AuthGoogleService: AuthGoogleService
  ){}

  ngOnInit() {
    this.AuthGoogleService.initLogin().then(() => {
      this.getProfileData();
    });
  }

  continueToHomeScreen() {
    const extras: NavigationExtras = {
      state: {
        cityName: this.cityName
      }
    };
    this.router.navigate(['/homescreen'], extras);                
  }

  getProfileData() {
    const metaData = this.AuthGoogleService.getProfile();
    this.profileData = metaData;
    this.picture = this.profileData.picture;
  }


  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {                                       
          // Dentro del método getUserLocation()
          this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyArfCLbaxTQCgUzAm4hdXl7u-HCfR5Qubs`)
          .subscribe((data) => {            
            if (data.results && data.results.length > 0 && data.results[0].address_components) {
              const addressComponents = data.results[0].address_components;
              for (let component of addressComponents) {                
                if (component.types.includes('locality')) {
                  this.cityName = component.long_name;                  
                  break;
                }
              }
            } else {
              console.error('La respuesta de la API no contiene datos válidos.');
            }
          }, (error) => {
            console.error('Error al obtener la ubicación:', error);
          });
        },
        (error) => {
          console.log('No se pudo obtener la ubicacion');
          this.locationPermission = true;
        }
      )
    } else {
      console.log('El navegador no soporta la geolocalizacion');      
    }
  }
}
