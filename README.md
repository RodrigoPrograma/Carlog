# 🚗 CarLog

**CarLog** es un proyecto de gestión de información vehicular diseñado como una aplicación escalable, moderna y orientada a APIs.  
Su objetivo es centralizar datos técnicos de vehículos (marca, modelo, versiones, motor, combustible, año, etc.) y servirlos de forma eficiente a aplicaciones cliente.

El proyecto está pensado con una arquitectura separada por responsabilidades, siguiendo buenas prácticas de desarrollo backend y preparado para crecer hacia un entorno fullstack.

---

## 🧩 Estructura del proyecto

Este repositorio se divide en **dos secciones principales**, cada una con su propia documentación detallada:

### 🔹 1. Vehicle Backend
📁 `vehicle-backend/`

API REST desarrollada con **Node.js, Express y MongoDB**, encargada de:
- Gestionar vehículos y sus versiones
- Exponer endpoints REST con filtros y paginación
- Manejar persistencia de datos
- Ejecutarse tanto en entorno local como en contenedores Docker

👉 Toda la documentación técnica, instalación, endpoints, testing y Docker se encuentra en:  
📄 **`vehicle-backend/README.md`**

---

### 🔹 2. (Futuro) Frontend / Cliente
📁 *(pendiente de implementación)*

La arquitectura del proyecto contempla la incorporación de un frontend (por ejemplo en React o React Native) que consuma la API del backend.

Esta sección contará con su propio README cuando sea incorporada al repositorio.

---

## 🚀 Estado del proyecto

- Backend funcional y documentado
- CRUD completo de vehículos
- Filtros, paginación y validaciones
- Testing automatizado
- Dockerización para desarrollo y despliegue
- Preparado para integración continua (CI/CD)

---

## 📌 Notas para reclutadores

Este proyecto fue desarrollado con foco en:
- Código limpio y mantenible
- Separación de responsabilidades
- Buenas prácticas backend
- Escalabilidad futura

Cada sección del proyecto contiene su propia documentación específica para facilitar su comprensión y ejecución.
