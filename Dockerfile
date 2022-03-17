FROM node:16.14.0-bullseye-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json ./
COPY ts/ ./ts/
COPY dist/ ./dist/
RUN npm run build

FROM httpd:2.4 AS runner
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/dist/
COPY ejdict-hand-utf8-english-only.txt /usr/local/apache2/htdocs/
COPY html/index.html /usr/local/apache2/htdocs/
COPY html/base.css /usr/local/apache2/htdocs/