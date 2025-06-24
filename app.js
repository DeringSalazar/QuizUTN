const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000; 

// Middleware para parsear JSON
app.use(express.json());

// Base de datos simulada
let datos = {
  id: 1,
  nombre: 'Dering y Felipe',
  profesion: 'Desarrolladores'
};

// GET - Obtener los datos
app.get('/api/datos', (req, res) => {
  res.json(datos);
});

// PUT - Actualizar los datos
app.put('/api/datos', (req, res) => {
  const { nombre, profesion } = req.body;

  if (nombre) datos.nombre = nombre;
  if (profesion) datos.profesion = profesion;

  res.json({
    mensaje: 'Datos actualizados correctamente',
    datos
  });
});

// DELETE - Eliminar los datos
app.delete('/api/datos', (req, res) => {
  datos = {};
  res.json({ mensaje: 'Datos eliminados correctamente' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});

// Endpoint raíz para que la página principal responda
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API desplegada en Azure 🚀');
});