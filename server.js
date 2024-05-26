const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const usuariosRoutes = require('./rutas/usuarios');
const recetasRoutes = require('./rutas/recetas');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configurar la carpeta 'public' como el directorio estático
app.use(express.static(path.join(__dirname, 'public')));

// Define las rutas de la API
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/recetas', recetasRoutes);

// Define una ruta para manejar las solicitudes GET a la ruta raíz ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
