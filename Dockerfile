FROM node:16.14.0-bullseye-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json ./
COPY ts/ ./ts/
COPY dist/ ./dist/
RUN npm run build