# FROM node:18-alpine
# WORKDIR /app


# COPY package.json package-lock.json* ./


# RUN npm ci --only=production || npm install --only=production


# COPY . .


# EXPOSE 4000


# CMD ["node", "index.js"]
# Backend Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "run", "dev"]  # or "start" depending on your setup
