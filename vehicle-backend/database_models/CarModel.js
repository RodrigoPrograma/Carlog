const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
    año: {
        type: Number,
        required: true,
        min: 2010,
        max: new Date().getFullYear() + 1
    },
    transmision: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    distribucion: {
        tipo: {
            type: String,
            required: true,
            trim: true
        }
    },
    motor: {
        tipo:
        {
            type: String,
            enum: ['Gasolina', 'Diesel', 'Híbrido', 'Eléctrico'],
            required: true
        },
        cilindrada: {
            type: String,
            required: true,
            trim: true
        },
        potencia: {
            type: String,
            required: true,
            trim: true
        }
    },
    neumaticos: {
        cantidad: { type: Number, required: true, trim: true },
        medidas: { type: String, required: true, trim: true }
}
}, { _id: false });


const carSchema = new mongoose.Schema({
    marca: { type: String, required: true, trim : true },
    modelo: { type: String, required: true, trim: true },
    pais: { type: String, default: 'Desconocido', trim: true },
    versiones: {
        type: [versionSchema],
        validate: [arr => arr.length > 0, 'Debe tener al menos una versión']
    }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);