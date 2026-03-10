require('dotenv').config();
const healthroutes = require('./routes/healthRoutes');
const express = require('express');
const vehiclesRoutes = require('./routes/vehicleRoutes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*', // permite cualquier frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());


// Middlewares
app.use(express.json());

app.use('/health', healthroutes);

// Rutas
app.use('/api/vehicles', vehiclesRoutes);

module.exports = app;
