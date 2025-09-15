const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
  año: Number,
  transmision: mongoose.Schema.Types.Mixed,
  distribucion: {
    tipo: String
  },
  motor: {
    tipo: String,
    cilindrada: String,
    potencia: String
  },
  neumaticos: {
    cantidad: Number,
    medidas: String
  }
}, { _id: false });


const carSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  pais: { type: String },
  versiones: [versionSchema]
});

module.exports = mongoose.model('Car', carSchema);