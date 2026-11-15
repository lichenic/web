FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

RUN pnpm deploy --prod --legacy /app/pruned

FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/pruned/node_modules ./node_modules
COPY --from=builder /app/pruned/package.json ./

ENV PORT=5174
ENV HOST=0.0.0.0
ENV NODE_ENV=production

EXPOSE 5174

CMD ["node", "build"]
