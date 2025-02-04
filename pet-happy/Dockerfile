FROM node:20
WORKDIR /app/REDACTED
COPY . .
RUN npm install
RUN npm install @angular/cli@16.0.6 -g
EXPOSE 80
CMD ["ng", "serve", "--port","80","--host", "0.0.0.0"]