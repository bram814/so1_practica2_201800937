# Version node
FROM node:18.7.0

# Creando el espacio de trabajo
WORKDIR /front-app

# Copiando archivos con dependencias y librerias necesarias para el servicio
COPY package.json ./
COPY package-lock.json ./

# Ejecutando para crear dependencias
RUN npm install

# Copiando todo el codigo
COPY . .

# Levantando la aplicacion
CMD ["npm", "start"]