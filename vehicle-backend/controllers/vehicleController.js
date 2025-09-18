const Vehicle = require("../models/Vehicle");

exports.getAllVehicles = async (req, res) => {
    try {
        const filter = {};
        if (req.query.brand) filter.brand = req.query.brand;
        if (req.query.year) filter.year = req.query.year;
        const vehicles = await Vehicle.find(filter);

        res.status(200).json({
            success: true,
            count: vehicles.length,
            data: vehicles,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los vehículos",
            error: error.message,
        });
    }
};

exports.createVehicle = async (req, res) => {
    try {
        const newVehicle = new Vehicle(req.body);
        await newVehicle.save();

        res.status(201).json({
            success: true,
            message: "Vehículo creado correctamente",
            data: newVehicle,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Datos invalidos para crear el vehículo",
                error: error.message,
            });
        }
        res.status(500).json({
            success: false,
            message: "Error del servidor al crear el vehículo",
            error: error.message,
        });
    }
};

exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({
                success: false,
                message: "Vehículo no encontrado",
            });
        }
        res.status(200).json({
            success: true,
            data: vehicle,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el vehículo",
            error: error.message,
        });
    }
};

exports.updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!vehicle) {
            return res.status(404).json({ 
                success: false,
                message: "Vehiculo no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: vehicle,
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Datos invalidos para actualizar el vehículo",
                error: error.errors,
            });
        }
        res.status(500).json({ 
            success: false,
            message: "Error del servidor al actualizar el vehículo",
            error: error.message
        });
    }
};

exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) {
            return res.status(404).json({
                success: false,
                message: "Vehiculo no encontrado"
            });
        }
        res.json({
            success: true,
            message: "Vehiculo eliminado con exito"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error del servidor al eliminar el vehículo",
            error: error.message
        });
    }
};
