import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-lenguajes',
  templateUrl: './switch-lenguajes.component.html',
  styleUrls: ['./switch-lenguajes.component.css']
})
export class SwitchLenguajesComponent {

  // Opciones de idiomas disponibles para seleccionar.
  options = [
    {value: 'es', display: 'Español'},
    {value: 'en', display: 'English'} 
  ];
  
  // Inyección del servicio de traducción en el constructor.
  constructor(private translate: TranslateService) {}

  // Método que se ejecuta cuando el usuario cambia el idioma.
  onChange = (event: Event) => {
    const lang = (event.target as HTMLSelectElement).value; // Obtiene el idioma seleccionado.
    this.translate.use(lang); // Cambia el idioma activo en la aplicación.
  }
}
