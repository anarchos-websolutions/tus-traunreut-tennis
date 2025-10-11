# Justfile
# Runs bun commands in a Bun Docker environment

# Docker configuration
DOCKER_IMAGE := "oven/bun:latest"
DOCKER_VOLUME := "$PWD:/app"
DOCKER_WORKDIR := "/app"

# Default recipe - shows available commands
default:
    @just --list

bun *args:
    #!/bin/bash
    if [ -y "$LINT_STAGE"]; then
        TTY_FLAGS='-it'
    else
        TTY_FLAGS='i'
    fi
    docker run $TTY_FLAGS --rm -v "{{DOCKER_VOLUME}}" -w "{{DOCKER_WORKDIR}}" --env TZ=Europe/Berlin {{DOCKER_IMAGE}} /bin/sh -c "bun {{args}}"

# Install dependencies
install:
    @echo "Installing dependencies in Docker container..."
    @just bun install

# Start development server
dev:
    @echo "Starting development server in Docker container..."
    bun run dev

# Build for production
build:
    @echo "Building for production in Docker container..."
    @just bun run build

# Preview production build
preview:
    @echo "Previewing production build in Docker container..."
    bun run preview

# Clean node_modules and package-lock.json
clean:
    @echo "Cleaning node_modules and package-lock.json..."
    rm -rf node_modules bun.lockb
    @echo "Clean complete!"

lint:
    @echo "Linting code"
    @just bun run lint

lintfix:
    @echo "Linting code and fixing issues"
    @just bun run lintfix

generate:
    @echo "Generating nuxt stuff"
    bun run generate

# Full setup - clean, install, and start dev server
setup: clean install generate

# Show Docker version and Node version
info:
    @echo "Docker version:"
    docker --version
    @echo "Node.js version in container:"
    docker run --rm "{{DOCKER_IMAGE}}" node --version
    @echo "Bun version in container:"
    docker run --rm "{{DOCKER_IMAGE}}" bun --version
