import { Injectable } from '@angular/core';

declare global {
  interface Window { google: any; }
}

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private loaded = false;

  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        return resolve();
      }

      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAWEmRjNw8bjuR0Qp8s5CW3IHoIR0jOGVw&libraries=places';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  }
}
