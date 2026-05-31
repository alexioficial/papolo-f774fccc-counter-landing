FROM node:22-slim AS builder
WORKDIR /app
RUN npm install -g pnpm@9
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:22-slim
WORKDIR /app
RUN npm install -g pnpm@9
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["node", "build"]
