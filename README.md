                                                       Proyecto Google Maps


# Descripción 

Este proyecto utiliza un  mapa interactivo que nos ofrece el API de Google Maps, para realizar busquedas simulando "Google Maps", cuenta con dos campos
para colocar el Origen, Destino y un boton para calcular la ruta en Google Maps, adicional a esto hay una barra lateral donde esta el historial de las ultimas 
5 busquedas recientes.

Este Proyecto se realizó con el fin de cumplir el siguiente requerimiento: Evaluar  habilidades como desarrollador fullstack, 
trabajando con Angular para el frontend y Node.js con Express para el backend, integrando el API de Google Maps, y utilizando 
MySQL como base de datos.

# Requisitos previos

>Tener instalada una versión de Node js en mi caso tengo la versión (22.11.0)
>Tener instalada una versión de Angular en mi caso tengo la versión (16.2.16)
>Tener instalada una versión de MySQL Workbench en mi caso la versión (8.0 CE)

# Pasos para ejecutar el proyecto 

>Descargar el proyecto "GoogleMapsProject"
>Dentro del proyecto se encuenta una carpeta llamada "backend" y dentro se encuentra otra carpeta llamada "DB" donde se encuenta la base de datos, la base de datos debe ser ejecutada de forma local en el gestor:

	Despues de importar la base de datos en MySQL Workbench, aplicar las siguientes consultas en un Query para visualizar los datos:
	
	USE google_maps_db;
	SHOW TABLES;
	DESCRIBE routes;
	SELECT * FROM routes;
	
>Abrir el proyecto "GoogleMapsProject" en un editor de código, puede utilizar Visual Studio Code 
>En la carpeta backend abrir el archivo server.js y verificar que la conexión de la base de datos MySQL sean las mismas que las credenciales configuradas en tu MySQL:

	user: 'root', 
	password: 'tu_contraseña',
  
>En la terminal del Visual Studio Code o en CMD ubicarse en la carpeta  "backend" Y ejecutar el comando "node server.js" y debe mostrar:

	Servidor corriendo en http://localhost:3000
	Conectado a la base de datos MySQL
	
>En una nueva terminal de Visual Studio Code o en CMD ubicarse en la carpeta raiz de "GoogleMapsProject"  Y ejecutar el comando "ng serve" el proyecto se debe ver en
http://localhost:4200/


# Créditos

Estiven Mampira
