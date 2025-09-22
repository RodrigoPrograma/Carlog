const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Car = require('../database_models/CarModel');

// URL de conexión (reemplazá con tu usuario y contraseña reales)
const mongoUri =
    'mongodb+srv://RodriAlon:Ambar2022@cluster0.jjlda.mongodb.net/carlog?retryWrites=true&w=majority';

async function importAllJsonFiles(baseDir) {
    const filesToImport = [];

    // Función recursiva para recorrer carpetas y encontrar .json
    function traverseDirectory(currentPath) {
        const entries = fs.readdirSync(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);
            if (entry.isDirectory()) {
                traverseDirectory(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.json')) {
                filesToImport.push(fullPath);
            }
        }
    }

    traverseDirectory(baseDir);

    console.log(
        `🔍 Encontrados ${filesToImport.length} archivos JSON para importar.`,
    );

    for (const filePath of filesToImport) {
        try {
            const rawData = fs.readFileSync(filePath, 'utf-8');
            const carData = JSON.parse(rawData);

            // Insertar o actualizar (upsert)
            await Car.updateOne(
                { marca: carData.marca, modelo: carData.modelo },
                { $set: carData },
                { upsert: true },
            );

            console.log(`✅ Importado: ${filePath}`);
        } catch (err) {
            console.error(`❌ Error al procesar ${filePath}:`, err.message);
        }
    }
}

async function main() {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Conectado a MongoDB Atlas');

        await importAllJsonFiles(path.join(__dirname, '..', 'data'));

        console.log('🎉 Importación completa');
        await mongoose.disconnect();
    } catch (error) {
        console.error('❌ Error general:', error.message);
    }
}

main();
