import { Component } from '@angular/core';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  sidebarOpen: boolean = false;
  center = { lat: 4.711, lng: -74.0721 }; // Coordenadas iniciales para centrar el mapa (Bogotá)
  zoom = 12; // Nivel de zoom inicial en el mapa
  origin: string = ''; // Dirección de origen
  destination: string = ''; // Dirección de destino
  directions: google.maps.DirectionsResult | null = null; // Resultado de la dirección calculada
  language: string = 'es'; // Idioma inicial para el mapa
  directionsService = new google.maps.DirectionsService(); // Servicio de direcciones de Google Maps
  showPopup = false;
  errorMessage = '';
  recentRoutes: any[] = []; // Arreglo para las rutas recientes

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    // LLamamos el metodo para cargar las rutas recientes cuando se inicializa el componente
    this.loadRecentRoutes(); 
  }

  // este método se ejecuta después de la inicialización de la vista para validar los datos 
  ngAfterViewInit() {
    const checkGoogleMaps = () => {
      if (typeof google !== 'undefined' && google.maps) { 

        // Obtiene los elementos que se escriben en los campos de  origen y destino para realizar la busqueda
        const originInput = document.getElementById('originInput') as HTMLInputElement;
        const destinationInput = document.getElementById('destinationInput') as HTMLInputElement;

        // En esta parte se configura el autocompletado del input de origen y Destino
        const autocompleteOrigin = new google.maps.places.Autocomplete(originInput);
        autocompleteOrigin.addListener('place_changed', () => {
          const place = autocompleteOrigin.getPlace();
          if (place.geometry) {
            this.origin = place.formatted_address || ''; // formateada la dirección 
          }
        });

        const autocompleteDestination = new google.maps.places.Autocomplete(destinationInput);
        autocompleteDestination.addListener('place_changed', () => {
          const place = autocompleteDestination.getPlace();
          if (place.geometry) {
            this.destination = place.formatted_address || ''; // formateada la dirección 
          }
        });
      } else {
        setTimeout(checkGoogleMaps, 100); // Reintenta después de 100ms si Google Maps no está listo
      }
    };

    checkGoogleMaps(); // Llama la función para verificar si Google Maps está disponible
  }

  // Método para calcular la ruta que esta en el input de Origen y Destino
  calculateRoute() {
    if (!this.origin && !this.destination) { // Validación para saber si ambos campos están vacíos y emviar una alerta para que sean rellenados
      this.showPopup = true;
      this.errorMessage = 'Debe llenar ambos campos: Origen y Destino.';
    } else if (!this.origin) { // Verifica si el campo de origen está vacío
      this.showPopup = true;
      this.errorMessage = 'Debe llenar el campo Origen.';
    } else if (!this.destination) { // Verifica si el campo de destino está vacío
      this.showPopup = true;
      this.errorMessage = 'Debe llenar el campo Destino.';
    } else {
      // Solicita la ruta usando la API de Google Maps
      const request: google.maps.DirectionsRequest = {
        origin: this.origin,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      // Se llama el  servicio de direcciones de Google Maps
      this.directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) { // Si la ruta se calcula correctamente
          this.directions = result;

          const leg = result.routes[0].legs[0]; // Obtiene la primera ruta calculada
          const routeData = {

            //Datos que se envian para la Base de datos
            origin_address: leg.start_address,
            destination_address: leg.end_address,
            origin_latitude: leg.start_location.lat(),
            origin_longitude: leg.start_location.lng(),
            destination_latitude: leg.end_location.lat(),
            destination_longitude: leg.end_location.lng(),
          };

          // Guarda la informaicón de la consulta en la base de datos
          this.routeService.saveRoute(routeData).subscribe(
            (response) => {
              this.loadRecentRoutes(); // Recarga las rutas recientes en el historial de busqueda
            },
            (error) => {
              this.showPopup = true;
              this.errorMessage = 'Hubo un error al guardar la ruta.';
            }
          );
        } else if (status === google.maps.DirectionsStatus.NOT_FOUND) {
          this.showPopup = true;
          this.errorMessage =
            'No se pudo calcular la ruta. Verifica las direcciones. Ejemplo: calle 26 No. 69-76.';
        } else {
          this.showPopup = true;
          this.errorMessage =
            'Hubo un error al calcular la ruta. Inténtalo nuevamente más tarde.';
        }
      });
    }
  }

  // Método para seleccionar una ruta reciente
  selectRoute(route: any) {
    this.origin = route.origin_address; // Actualiza el origen
    this.destination = route.destination_address; // Actualiza el destino

    this.calculateRoute(); // Calcula la ruta automáticamente

    // Actualiza los input de Origen y Destino con respecto a lo selecionado en el sidebar
    const originInput = document.getElementById('originInput') as HTMLInputElement;
    const destinationInput = document.getElementById('destinationInput') as HTMLInputElement;

    if (originInput) {
      originInput.value = route.origin_address;
    }
    if (destinationInput) {
      destinationInput.value = route.destination_address;
    }

    this.closeSidebar();
  }

  // Método para cargar las rutas recientes desde el servidor
  loadRecentRoutes() {
    this.routeService.getRecentRoutes().subscribe(
      (data) => {
        this.recentRoutes = data.data; // Asigna los datos de las rutas recientes
      },
      (error) => {
        console.error('Error al cargar las rutas:', error);
      }
    );
  }

  // Método para sidebar
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Método para cerrar el sidebar
  closeSidebar() {
    this.sidebarOpen = false;
  }

  // Método para cerrar el popup de error
  closePopup() {
    this.showPopup = false;
  }
}
