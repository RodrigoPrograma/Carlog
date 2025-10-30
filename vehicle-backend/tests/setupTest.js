/* eslint-disable */
/* eslint-env jest */
const mongoose = jest.requireActual('mongoose');
mongoose.connect = jest.fn(() => Promise.resolve());

// 🔹 Mock del modelo Vehicle y sus métodos
const Vehicle = require('../models/Vehicle');

// find() debe soportar chaining: .skip().limit()
Vehicle.find = jest.fn(() => ({
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockResolvedValue([
        {
            _id: '1',
            marca: 'FIAT',
            modelo: 'UNO',
            pais: 'ARGENTINA',
            versiones: [],
            toObject: function () {
                return this;
            },
        },
    ]),
}));

// countDocuments
Vehicle.countDocuments = jest.fn(() => Promise.resolve(1));

// findById
Vehicle.findById = jest.fn((id) =>
    id === '1'
        ? Promise.resolve({
            _id: '1',
            marca: 'FIAT',
            modelo: 'UNO',
            pais: 'ARGENTINA',
            versiones: [],
        })
        : Promise.resolve(null)
);

// Mock de save()
Vehicle.prototype.save = jest.fn(function () {
    return Promise.resolve({
        _id: '2',
        marca: this.marca,
        modelo: this.modelo,
        pais: this.pais,
    });
});

// findByIdAndUpdate
Vehicle.findByIdAndUpdate = jest.fn((id, data) =>
    id === '1' ? Promise.resolve({ _id: '1', ...data }) : Promise.resolve(null)
);

// findByIdAndDelete
Vehicle.findByIdAndDelete = jest.fn((id) =>
    id === '1' ? Promise.resolve({ _id: '1' }) : Promise.resolve(null),
);

Vehicle.forceError = (methodName, message = 'Error simulado') => {
    Vehicle[methodName] = jest.fn(() => {
        throw new Error(message);
    });
};
module.exports = mongoose;
