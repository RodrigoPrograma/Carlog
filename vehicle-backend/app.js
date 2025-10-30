require('dotenv').config();
const express = require('express');
const vehiclesRoutes = require('./routes/vehicleRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/vehicles', vehiclesRoutes);

module.exports = app;
