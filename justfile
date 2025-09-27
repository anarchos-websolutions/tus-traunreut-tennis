# Justfile
# Runs npm commands in a Node.js 24 Docker environment

# Docker configuration
DOCKER_IMAGE := "node:24"
DOCKER_VOLUME := "$PWD:/app"
DOCKER_WORKDIR := "/app"

# Default recipe - shows available commands
default:
    @just --list

npm *args:
    #!/bin/bash
    docker run --rm -v "{{DOCKER_VOLUME}}" -w "{{DOCKER_WORKDIR}}" --env TZ=Europe/Berlin -u node {{DOCKER_IMAGE}} /bin/sh -c "npm {{args}}"

# Install dependencies
install:
    @echo "Installing dependencies in Docker container..."
    @just npm install

# Start development server
dev:
    @echo "Starting development server in Docker container..."
    @just npm "run dev"

# Build for production
build:
    @echo "Building for production in Docker container..."
    @just npm run build

# Preview production build
preview:
    @echo "Previewing production build in Docker container..."
    @just npm run preview"

# Clean node_modules and package-lock.json
clean:
    @echo "Cleaning node_modules and package-lock.json..."
    rm -rf node_modules package-lock.json
    @echo "Clean complete!"

# Full setup - clean, install, and start dev server
setup: clean install dev

# Show Docker version and Node version
info:
    @echo "Docker version:"
    docker --version
    @echo "Node.js version in container:"
    docker run --rm "{{DOCKER_IMAGE}}" node --version
    @echo "NPM version in container:"
    docker run --rm "{{DOCKER_IMAGE}}" npm --version
