require('dotenv').config();
const healthroutes = require('./routes/healthRoutes');
const express = require('express');
const vehiclesRoutes = require('./routes/vehicleRoutes');
const cors = require('cors');

const app = express();
/*
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
*/
app.use(cors());

app.options('*', cors());

// Middlewares
app.use(express.json());

app.use('/health', healthroutes);

// Rutas
app.use('/api/vehicles', vehiclesRoutes);

module.exports = app;
