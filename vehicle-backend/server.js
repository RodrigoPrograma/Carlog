require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const vehiclesRoutes = require('./routes/vehicleRoutes'); // Tus rutas de vehículos

const app = express();
const port = process.env.PORT || 3000;

// Middleware para manejar JSON en las peticiones
app.use(express.json());

// Usa las rutas definidas en 'vehiclesRoutes.js'
app.use('/api/vehicles', vehiclesRoutes);

// Conexión a MongoDB Atlas con Mongoose
const mongoUri = process.env.MONGODB_URI;

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB Atlas conectado con Mongoose');

        // Solo arrancar el servidor si la conexión a MongoDB fue exitosa
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error conectando a MongoDB Atlas:', err);
    });
