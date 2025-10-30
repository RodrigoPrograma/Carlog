require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;

// Función de conexión con reintento
const connectWithRetry = () => {
    mongoose
        .connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('✅ MongoDB Atlas conectado con Mongoose');
            app.listen(PORT, () => {
                console.log(
                    `🚀 Servidor corriendo en http://localhost:${PORT}`,
                );
            });
        })
        .catch((err) => {
            console.error(
                '❌ Error conectando a MongoDB, reintentando en 5s:',
                err,
            );
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();
