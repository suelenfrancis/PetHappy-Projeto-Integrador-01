# Primeiro passo: Container para buildar o projeto
FROM node:18 AS build-stage
WORKDIR /app
COPY ../pet-happy/package*.json ./
RUN npm install
COPY ../pet-happy/ .
RUN npm run build

# Segundo passo: Container que irá servir a aplicação
FROM nginx:alpine
COPY --from=build-stage /app/dist/pet-happy /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]