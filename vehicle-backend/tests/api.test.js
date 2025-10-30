/* eslint-env jest */
const request = require('supertest');
const app = require('../app');
const Vehicle = require('../models/Vehicle');

describe('API CarLog', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // 🧪 GET /api/vehicles
    it('GET /api/vehicles debe responder con 200 y devolver lista', async () => {
        const res = await request(app).get('/api/vehicles');
        expect(res.statusCode).toBe(200);
        expect(res.body.data).toHaveLength(1);
        expect(Vehicle.find).toHaveBeenCalled();
        expect(Vehicle.countDocuments).toHaveBeenCalled();
    });

    // 🧪 GET /api/vehicles/:id
    it('GET /api/vehicles/:id debe devolver un vehículo existente', async () => {
        const res = await request(app).get('/api/vehicles/1');
        expect(res.statusCode).toBe(200);
        expect(res.body.data._id).toBe('1');
    });

    it('GET /api/vehicles/:id debe devolver 404 si no existe', async () => {
        const res = await request(app).get('/api/vehicles/99');
        expect(res.statusCode).toBe(404);
    });

    // 🧪 POST /api/vehicles
    it('POST /api/vehicles debe crear un vehículo nuevo', async () => {
        const newVehicle = { marca: 'Peugeot', modelo: '208', pais: 'Francia' };
        const res = await request(app).post('/api/vehicles').send(newVehicle);
        expect(res.statusCode).toBe(201);
        expect(res.body.data.marca).toBe('Peugeot');
    });

    // 🧪 PUT /api/vehicles/:id
    it('PUT /api/vehicles/:id debe actualizar un vehículo existente', async () => {
        const res = await request(app)
            .put('/api/vehicles/1')
            .send({ modelo: 'Punto' });
        expect(res.statusCode).toBe(200);
        expect(res.body.data.modelo).toBe('Punto');
        expect(Vehicle.findByIdAndUpdate).toHaveBeenCalledWith(
            '1',
            { modelo: 'Punto' },
            expect.objectContaining({ new: true, runValidators: true }),
        );
    });

    it('PUT /api/vehicles/:id debe devolver 404 si no existe', async () => {
        const res = await request(app)
            .put('/api/vehicles/99')
            .send({ modelo: 'Nuevo' });
        expect(res.statusCode).toBe(404);
    });

    // 🧪 DELETE /api/vehicles/:id
    it('DELETE /api/vehicles/:id debe eliminar un vehículo existente', async () => {
        const res = await request(app).delete('/api/vehicles/1');
        expect(res.statusCode).toBe(200);
    });

    it('DELETE /api/vehicles/:id debe devolver 404 si no existe', async () => {
        const res = await request(app).delete('/api/vehicles/99');
        expect(res.statusCode).toBe(404);
    });

    // 🧪 Error simulado
    it('GET /api/vehicles debe devolver 500 si hay error en el modelo', async () => {
        // 🔹 Forzamos error en find
        Vehicle.forceError('find');

        const res = await request(app).get('/api/vehicles');

        expect(res.statusCode).toBe(500);
        expect(res.body.success).toBe(false);
    });
});
