// src/app/services/route.service.ts      

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private apiUrl = 'http://localhost:3000/api/routes'; // Backend URL

  constructor(private http: HttpClient) {}

  // Método para guardar la ruta de Origen y Destino
  saveRoute(routeData: any): Observable<any> {
    return this.http.post(this.apiUrl, routeData);
  }

  // Método para obtener las últimas 5 rutas
  getRecentRoutes(): Observable<any> {
   return this.http.get(`${this.apiUrl}`);
  }


}
