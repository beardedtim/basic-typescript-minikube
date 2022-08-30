FROM node:16 as BUILD

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile && npx tsc

FROM node:16 as FINAL

WORKDIR /app

COPY package.json tsconfig.json yarn.lock ./
RUN yarn install --production=true --frozen-lockfile
COPY --from=BUILD /app/dist/ ./dist/

ENV PORT=5000

CMD ["node", "dist/index.js"]