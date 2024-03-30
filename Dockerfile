FROM node:20-alpine as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json /app/
RUN npm ci

FROM node:20-alpine as builder
RUN echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > ~/.npmrc
ARG NPM_TOKEN
WORKDIR /app
COPY --from=dependencies /app/node_modules /app/node_modules
COPY ./ /app
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone /app/standalone
COPY --from=builder /app/public /app/standalone/public
COPY --from=builder /app/.next/static /app/standalone/.next/static
EXPOSE 8080
HEALTHCHECK --interval=5s --timeout=3s CMD curl -f http://127.0.0.1:8080/ || exit 1
CMD ["node", "standalone/server.js"]
