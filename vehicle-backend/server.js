require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const vehiclesRoutes = require('./routes/vehicleRoutes');

const app = express();
const port = process.env.PORT || 3000;

const connectWithRetry = () => {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log('MongoDB Atlas conectado con Mongoose'))
        .catch((err) => {
            console.error(
                'Error conectando a MongoDB, reintentando en 5s',
                err,
            );
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();

app.use(express.json());

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

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error conectando a MongoDB Atlas:', err);
    });
