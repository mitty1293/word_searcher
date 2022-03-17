FROM node:16.14.0-bullseye-slim AS builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
COPY tsconfig.json /app/
COPY ts/ /app/ts/
COPY dist/ /app/dist/
COPY ejdict-hand-utf8-english-only.txt /app/
RUN npm run build