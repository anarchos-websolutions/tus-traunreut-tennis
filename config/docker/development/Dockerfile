# Development Dockerfile for Bun + Nuxt + Vite
# Based on official Bun Docker best practices
FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies stage - caches dependencies for faster rebuilds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Development stage - includes dev dependencies and source code
FROM base AS development
# Copy installed dependencies
COPY --from=install /temp/dev/node_modules node_modules
# Copy source code (will be overridden by volume mount in docker-compose)
COPY . .

# Sharp should be installed via package.json dependencies
# No need to install separately as it's part of devDependencies

# Set development environment
ENV NODE_ENV=development

# Expose ports for dev server and Vite HMR WebSocket
EXPOSE 3000/tcp 24678/tcp

# Run as root in development to avoid permission issues with mounted volumes
# For production, use the release stage from main Dockerfile which runs as bun user

