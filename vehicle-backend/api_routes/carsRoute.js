const express = require('express');
const router = express.Router();
const Car = require('../database_models/carModel.js');

// Ruta para buscar por marca, modelo y año
router.get('/', async (req, res) => {
    const { brand, model, year } = req.query;

    if (!brand || !model || !year) {
        return res.status(400).json({
            error: 'Please provide brand, model and year as query parameters.',
        });
    }

    try {
        // Buscar el auto por marca y modelo
        const car = await Car.findOne({
            marca: brand.toUpperCase(),
            modelo: model.toUpperCase(),
        });

        if (!car) {
            return res.status(404).json({ error: 'Vehicle not found.' });
        }

        // Buscar la versión por año
        const versionFound = car.versiones.find(
            (v) => v.año === parseInt(year),
        );

        if (!versionFound) {
            return res
                .status(404)
                .json({ error: 'Year not available for this model.' });
        }

        // Devolver datos
        return res.json({
            brand: car.marca,
            model: car.brand,
            country: car.pais,
            data: versionFound,
        });
    } catch (error) {
        console.error('Error fetching car data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
