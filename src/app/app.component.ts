import { Component } from '@angular/core';
import { RouteService } from './services/route.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleMapsProject';

  origin_address: string = '';
  destination_address: string = '';
  origin_latitude: number = 0;
  origin_longitude: number = 0;
  destination_latitude: number = 0;
  destination_longitude: number = 0;

  
   // Inyectamos el servicio en el constructor  
   constructor(private routeService: RouteService, private translate: TranslateService) {
    this.translate.addLangs(['en','es']);
    const lang = this.translate.getBrowserLang();
    if(lang !== 'en' && lang !== 'es') {
      this.translate.setDefaultLang('en');
    } else {
      this.translate.use(lang);
    }
   }

   saveRoute() {
    const routeData = {
      origin_address: this.origin_address,
      destination_address: this.destination_address,
      origin_latitude: this.origin_latitude,
      origin_longitude: this.origin_longitude,
      destination_latitude: this.destination_latitude,
      destination_longitude: this.destination_longitude
    };

    // Llamamos al servicio para guardar la ruta        
    this.routeService.saveRoute(routeData).subscribe(
      (response) => {
        console.log('Ruta guardada:', response);
      },
      (error) => {
        console.error('Error al guardar la ruta:', error);
      }
    );
  }
}
