# Usar una imagen oficial de Node.js para la construcción
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Construir la aplicación Angular
RUN npm run build --prod

# Usar una imagen ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copiar los archivos de la carpeta dist/browser al contenedor Nginx
COPY ./frontend/dist/browser/ /usr/share/nginx/html/

# Cambiar permisos del directorio
RUN chmod -R 755 /usr/share/nginx/html

# Copiar la configuración de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

