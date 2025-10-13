# Imagen base
FROM node:20-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Instalar nodemon globalmente (opcional)
RUN npm install -g nodemon

# Copiar todo el proyecto
COPY . .

# Comando por defecto (para dev usar nodemon)
CMD ["npm", "run", "dev"]
