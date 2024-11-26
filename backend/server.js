// Archivo: Backend/server.js 

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Configura el servidor Express
const app = express();
const port = 3000;

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para manejar los datos JSON
app.use(bodyParser.json());

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '54321',
  database: 'google_maps_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Endpoint para guardar la ruta buscada
app.post('/api/routes', (req, res) => {
  const { origin_address, destination_address, origin_latitude, origin_longitude, destination_latitude, destination_longitude } = req.body;

  const query = 'INSERT INTO routes (origin_address, destination_address, origin_latitude, origin_longitude, destination_latitude, destination_longitude) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [origin_address, destination_address, origin_latitude, origin_longitude, destination_latitude, destination_longitude];

  db.query(query, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error al guardar la ruta' });
    } else {
      res.status(200).json({ message: 'Ruta guardada correctamente', data: result });
    }
  });
});

// Endpoint para obtener las últimas 5 rutas
app.get('/api/routes', (req, res) => {
  const query = 'SELECT * FROM routes ORDER BY request_datetime DESC LIMIT 5';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener las rutas' });
    } else {
      res.status(200).json({ data: results });
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
