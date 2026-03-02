FROM node:24.14-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD ["node", "index.js"]