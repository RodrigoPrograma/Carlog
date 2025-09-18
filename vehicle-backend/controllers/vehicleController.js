const Vehicle = require("../models/Vehicle");

exports.getAllVehicles = async (req, res) => {
    try {
        let queryObj = { ...req.query };
        const { marca, modelo, año } = req.query;

        const filter = {};
        if (marca) {
            filter.marca = { $regex: new RegExp(`^${marca}$`, 'i') };
        }
        if (modelo) {
            filter.modelo = { $regex: new RegExp(`^${modelo}$`, 'i') };
        }
        if (año && typeof año !== "object") {
            // Año único como número
            filter["versiones.año"] = parseInt(año);
        }

        // Paginación
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Buscar vehículos
        const vehicles = await Vehicle.find(filter).skip(skip).limit(limit);
        const total = await Vehicle.countDocuments(filter);

        // Filtrar las versiones según rango de años si es necesario
        const filteredVehicles = vehicles.map(vehicle => {
            let versionesFiltradas = vehicle.versiones;

            if (año && typeof año === "object") {
                const gte = año.gte ? parseInt(año.gte) : null;
                const lte = año.lte ? parseInt(año.lte) : null;
                versionesFiltradas = vehicle.versiones.filter(v => {
                    return (gte === null || v.año >= gte) && (lte === null || v.año <= lte);
                });
            }

            return {
                ...vehicle.toObject(),
                versiones: versionesFiltradas
            };
        });

        res.status(200).json({
            success: true,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            count: filteredVehicles.length,
            data: filteredVehicles,
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
                message: "Datos inválidos para crear el vehículo",
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

// Actualizar un vehículo
exports.updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

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
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Datos inválidos para actualizar el vehículo",
                error: error.errors,
            });
        }
        res.status(500).json({
            success: false,
            message: "Error del servidor al actualizar el vehículo",
            error: error.message,
        });
    }
};

exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) {
            return res.status(404).json({
                success: false,
                message: "Vehículo no encontrado",
            });
        }
        res.status(200).json({
            success: true,
            message: "Vehículo eliminado con éxito",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error del servidor al eliminar el vehículo",
            error: error.message,
        });
    }
};
