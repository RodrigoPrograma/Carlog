# 🚗 CarLog API

API REST para la gestión de vehículos desarrollada con **Node.js, Express y MongoDB**.

## Instalación y uso

## Clonar repositorio

git clone <https://github.com/RodrigoPrograma/Carlog>

## Entrar en el proyecto

cd carlog/vehicle-backend

## Instalar dependencias

npm install

## Crear archivo .env

## Reemplaza 'usuario' y 'password' con tus credenciales de MongoDB Atlas

MONGODB_URI=mongodb+srv://'usuario':'password'@cluster0.mongodb.net/carlog?retryWrites=true&w=majority

Levantar servidor
npm run dev

La API se ejecuta en:
<http://localhost:3000/api/vehicles>

## Endpoints

📍 1. Obtener todos los vehículos

curl <http://localhost:3000/api/vehicles>

**Query params opcionales:**

- `marca` → filtra por marca (ej: `Toyota`)
- `modelo` → filtra por modelo (ej: `Corolla`)
- `año` → filtra por año (ej: `2018`)
- `page` → número de página (ej: `1`)
- `limit` → resultados por página (ej: `10`)

**Ejemplo:**

````bash
curl http://localhost:3000/api/vehicles?marca=Toyota&año=2018&page=1&limit=5

Respuesta:
{
  "success": true,
  "page": 1,
  "limit": 5,
  "total": 12,
  "totalPages": 3,
  "count": 5,
  "data": [
    {
      "_id": "66e7b4...",
      "marca": "Toyota",
      "modelo": "Corolla",
      "versiones": [
        { "año": 2018, "motor": "1.8", "combustible": "Nafta" }
      ]
    }
  ]
}

📍 2. Obtener un vehículo por ID
GET /api/vehicles/:id
**Ejemplo:**
```bash
curl http://localhost:3000/api/vehicles?marca=Toyota&año=2018&page=1&limit=5

Respuesta:

{
  "success": true,
  "data": {
    "_id": "66e7b4...",
    "marca": "Toyota",
    "modelo": "Corolla",
    "versiones": [
      { "año": 2018, "motor": "1.8", "combustible": "Nafta" }
    ]
  }
}

📍 3. Crear un vehículo
POST /api/vehicles
**Ejemplo:**
Body(JSON):
{
  "marca": "Honda",
  "modelo": "Civic",
  "versiones": [
    { "año": 2020, "motor": "2.0", "combustible": "Nafta" }
  ]
}

Respuesta:
{
  "success": true,
  "message": "Vehículo creado correctamente",
  "data": {
    "_id": "66e7b7...",
    "marca": "Honda",
    "modelo": "Civic",
    "versiones": [
      { "año": 2020, "motor": "2.0", "combustible": "Nafta" }
    ]
  }
}

📍 4. Editar un vehículo
PUT /api/vehicles/:id
**Ejemplo:**
Body(JSON):
{
  "modelo": "Civic EX",
  "versiones": [
    { "año": 2021, "motor": "2.0", "combustible": "Nafta" }
  ]
}

Respuesta:
{
  "success": true,
  "message": "Vehículo actualizado correctamente",
  "data": {
    "_id": "66e7b7...",
    "marca": "Honda",
    "modelo": "Civic EX",
    "versiones": [
      { "año": 2021, "motor": "2.0", "combustible": "Nafta" }
    ]
  }
}

📍 5. Eliminar un vehículo
DELETE /api/vehicles/:id
**Ejemplo:**
curl -X DELETE http://localhost:3000/api/vehicles/66e7b7...
Respuesta:
{
  "success": true,
  "message": "Vehículo eliminado correctamente"
}


## Código limpio y estilo

Este proyecto utiliza **ESLint** y **Prettier** para mantener el código consistente y limpio.

- **ESLint**: ayuda a detectar errores, malas prácticas y mantener un estilo uniforme.
- **Prettier**: formatea automáticamente el código según reglas definidas (en este proyecto, 4 espacios por indentación y comillas dobles `"`) para mantener consistencia.

````

## 🐳 Docker

### 1. Requisitos

Tener instalado Docker
.
Tener el archivo .env en la carpeta vehicle-backend.

### 2. Construir la imagen

Desde la carpeta vehicle-backend:

docker compose build backend

### 3. Levantar contenedor

docker compose up -d

El contenedor se llama carlog-backend.

La API se expondrá en el puerto 3000.

Nodemon está configurado para desarrollo y detectará cambios en tu código automáticamente.

### 4. Ver logs del contenedor

docker compose logs -f backend

### 5. Detener y eliminar contenedores

docker compose down

### 6. Acceder al contenedor

docker compose exec backend sh

Dentro del contenedor podés ejecutar comandos como printenv MONGODB_URI para verificar variables de entorno.

## 🧪 Testing

El proyecto incluye un conjunto de pruebas con **Jest** y **Supertest** para garantizar la estabilidad de los controladores y endpoints principales.

### Comandos útiles

- Formatear todo el proyecto con Prettier:

```bash
npm run format
npm run lint

### 🔹 Ejecución de los tests
npm test

