# builder
FROM node:18-bullseye-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json ./
COPY ts/ ./ts/
COPY dist/ ./dist/
RUN npm run build

# runner
FROM httpd:2.4 AS runner
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/dist/
COPY html/index.html /usr/local/apache2/htdocs/
COPY html/default.css /usr/local/apache2/htdocs/