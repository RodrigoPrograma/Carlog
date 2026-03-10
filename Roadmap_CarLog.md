# 🛣️ Roadmap CarLog

## 1. Backend (API con Node.js + MongoDB)

- [x] Crear proyecto con Express y Mongoose  
- [x] Conectar a MongoDB Atlas  
- [x] Definir modelo `Car` con sus campos  
- [x] Implementar controlador con CRUD básico  
- [x] Crear rutas en `vehiclesRoutes.js`  
- [x] Probar POST en Postman (crear vehículo)  
- [x] Probar GET `/api/vehicles` (listar todos)  
- [x] Probar GET `/api/vehicles/:id` (buscar uno por ID)  
- [x] Probar PUT `/api/vehicles/:id` (editar un vehículo)  
- [x] Probar DELETE `/api/vehicles/:id` (eliminar un vehículo)  
- [x] Agregar validaciones en el modelo (`required`, valores por defecto)  
- [x] Mejorar controladores (mensajes de error claros, 400/404/500)  
- [x] Implementar filtros (ej: `GET /api/vehicles?brand=Toyota`)  
- [x] Implementar paginación  

## 2. Entorno y organización

- [x] Crear `.env` con `MONGODB_URI`  
- [x] Ignorar `.env` en `.gitignore`  
- [x] Documentar endpoints en un README (ejemplo de request y response)  
- [x] Configurar ESLint/Prettier para tener código limpio  
- [ ] (Opcional) Crear documentación con Swagger  

## 3. Docker y CI/CD

- [x] Dockerizar la API (`Dockerfile`)  
- [X] Crear `docker-compose.yml` (API + MongoDB local)  
- [x] Probar levantar entorno con `docker-compose up`  
- [X] Crear workflow de CI en GitHub Actions (build + test)  
- [X] Crear workflow de CD (deploy automático a Render/Cloud Run)  

## 4. Pruebas

- [x] Testear CRUD completo en Postman  
- [x] Crear colección de Postman exportable  
- [x] Implementar tests unitarios con Jest o Mocha  
- [x] Automatizar tests en GitHub Actions (CI/CD)  

## 5. Frontend

### Setup del proyecto

- [x] Crear proyecto en React con Vite  
- [ ] Instalar dependencias (axios, react-router-dom)
- [x] Crear estructura básica de carpetas (components, pages, services, hooks)
- [ ] Configurar archivo de conexión a la API (axios)

### Conexión a la API

- [ ] Crear servicio vehicleService.js  
- [ ] Implementar funciones:
- getVehicles()
- getVehicleById(id)
- createVehicle(data)
- updateVehicle(id, data)
- deleteVehicle(id)

### Pantallas

- [ ] Página Lista de vehículos
- GET /api/vehicles
- [ ] Página Detalle de vehículo
- GET /api/vehicles/:id
- [ ] Página Crear vehículo
- POST /api/vehicles/
- [ ] Página Editar vehículo
- PUT /api/vehicles/
- [ ] Página Borrar vehículo
- DELETE /api/vehicles/

### Componentes

- [ ] Componente VehicleCard
- [ ] Componente VehicleForm
- [ ] Componente Navbar
- [ ] Componente Loading
- [ ] Componente ErrorMessage
- [ ] Componente Footer

### Funcionalidades

- [ ] Botón Eliminar vehículo
- [ ] Confirmar antes de eliminar
- [ ] Feedback visual:
- loading
- error
- success

### Ux básica

- [ ] Mostrar lista en cards o tabla
- [ ] Navegación entre paginas con React Router
- [ ] Redirección después de crear/editar vehículo

### Opcional

- [ ] Buscador de vehículos
- [ ] Filtro por marca
- [ ] Paginación
- [ ] Dark Mode

## 6. Frontend (React Native)

- [ ] Crear proyecto en React Native  
- [ ] Conectar la app a la API (`fetch` o `axios`)  
- [ ] Pantalla: Lista de vehículos (GET `/api/vehicles`)  
- [ ] Pantalla: Detalle de vehículo (GET `/api/vehicles/:id`)  
- [ ] Formulario: Crear vehículo (POST `/api/vehicles`)  
- [ ] Formulario: Editar vehículo (PUT `/api/vehicles/:id`)  
- [ ] Botón: Eliminar vehículo (DELETE `/api/vehicles/:id`)  

## 6. Extras / Escalabilidad

- [ ] Autenticación (JWT) si querés usuarios con login  
- [ ] Roles (admin, usuario)  
- [X] Deploy del backend (ej. en Render, Railway o Vercel con DB en Atlas)  
- [ ] Deploy del frontend en Expo o Google Play  
