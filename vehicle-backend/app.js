require('dotenv').config();
const healthroutes = require('./routes/healthRoutes');
const express = require('express');
const vehiclesRoutes = require('./routes/vehicleRoutes');

const app = express();

// Middlewares
app.use(express.json());

app.use('/health', healthroutes);

// Rutas
app.use('/api/vehicles', vehiclesRoutes);

module.exports = app;
