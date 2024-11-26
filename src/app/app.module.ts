import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulos necesarios para la traducción de idiomas en la aplicación.
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Módulo de Google Maps para usar mapas interactivos en la aplicación.
import { GoogleMapsModule } from '@angular/google-maps';

// Módulos para realizar peticiones HTTP y trabajar con los formularios.
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Componentes
import { SwitchLenguajesComponent } from './components/switch-lenguajes/switch-lenguajes.component';
import { MainViewComponent } from './components/main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchLenguajesComponent,
    MainViewComponent
  ],
  imports: [
    // Módulos
    BrowserModule,           
    AppRoutingModule,        
    GoogleMapsModule,         
    HttpClientModule,         
    FormsModule,              
    // Configuración para la carga de traducciones i18n.
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttLoaderFactory,  // Función que carga los archivos JSON de traducción.
        deps: [ HttpClient ]           // Dependencia de HttpClient para cargar los archivos de traducción.
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]  // Componente raíz que se usará al iniciar la aplicación.
})
export class AppModule { }

// Función que crea una instancia de TranslateHttpLoader para cargar archivos JSON de traducción.
export function HttLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lenguajes/', '.json');
}
