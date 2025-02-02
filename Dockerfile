# syntax = docker/dockerfile:1

ARG NODE_VERSION=23.1.0
FROM node:${NODE_VERSION}-slim AS base
LABEL fly_launch_runtime="Node.js"

WORKDIR /app
ENV NODE_ENV="production"

FROM base AS build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build
RUN npm prune --omit=dev

# ---

FROM base
COPY --from=build /app /app

EXPOSE 3001
CMD [ "npm", "run", "start" ]
