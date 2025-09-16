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
- [ ] Mejorar controladores (mensajes de error claros, 400/404/500)  
- [ ] Implementar filtros (ej: `GET /api/vehicles?brand=Toyota`)  
- [ ] Implementar paginación  

## 2. Entorno y organización
- [x] Crear `.env` con `MONGODB_URI`  
- [x] Ignorar `.env` en `.gitignore`  
- [ ] Documentar endpoints en un README (ejemplo de request y response)  
- [ ] Configurar ESLint/Prettier para tener código limpio  
- [ ] (Opcional) Crear documentación con Swagger  

## 3. Pruebas
- [ ] Testear CRUD completo en Postman  
- [ ] Crear colección de Postman exportable  
- [ ] Implementar tests unitarios con Jest o Mocha  
- [ ] Automatizar tests en GitHub Actions (CI/CD)  

## 4. Frontend (React Native)
- [ ] Crear proyecto en React Native  
- [ ] Conectar la app a la API (`fetch` o `axios`)  
- [ ] Pantalla: Lista de vehículos (GET `/api/vehicles`)  
- [ ] Pantalla: Detalle de vehículo (GET `/api/vehicles/:id`)  
- [ ] Formulario: Crear vehículo (POST `/api/vehicles`)  
- [ ] Formulario: Editar vehículo (PUT `/api/vehicles/:id`)  
- [ ] Botón: Eliminar vehículo (DELETE `/api/vehicles/:id`)  

## 5. Extras / Escalabilidad
- [ ] Autenticación (JWT) si querés usuarios con login  
- [ ] Roles (admin, usuario)  
- [ ] Deploy del backend (ej. en Render, Railway o Vercel con DB en Atlas)  
- [ ] Deploy del frontend en Expo o Google Play  
