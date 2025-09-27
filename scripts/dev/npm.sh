#!/bin/bash
# Docker-based npm script for TUS Tennis Traunreut Website
# Alternative to justfile for environments without just

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the directory of this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Function to run npm command in Docker
run_docker_npm() {
    local cmd="$1"
    echo -e "${GREEN}Running npm $cmd in Docker container...${NC}"
    docker run --rm -v "$PROJECT_DIR":/app -w /app node:24 npm "$cmd"
}

# Function to run npm command in Docker with port mapping
run_docker_npm_with_port() {
    local cmd="$1"
    local port="$2"
    echo -e "${GREEN}Running npm $cmd in Docker container (port $port)...${NC}"
    docker run --rm -it -v "$PROJECT_DIR":/app -w /app -p "$port:$port" node:24 npm "$cmd"
}

# Function to show help
show_help() {
    echo -e "${YELLOW}TUS Tennis Traunreut - Docker NPM Script${NC}"
    echo ""
    echo "Usage: $0 <command>"
    echo ""
    echo "Available commands:"
    echo "  install     Install dependencies"
    echo "  dev         Start development server (port 3000)"
    echo "  build       Build for production"
    echo "  generate    Generate static site"
    echo "  preview     Preview production build (port 3000)"
    echo "  clean       Remove node_modules and package-lock.json"
    echo "  info        Show Docker and Node.js versions"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 install"
    echo "  $0 dev"
    echo "  $0 build"
}

# Main script logic
case "${1:-help}" in
    install)
        run_docker_npm "install"
        ;;
    dev)
        run_docker_npm_with_port "run dev" "3000"
        ;;
    build)
        run_docker_npm "run build"
        ;;
    generate)
        run_docker_npm "run generate"
        ;;
    preview)
        run_docker_npm_with_port "run preview" "3000"
        ;;
    clean)
        echo -e "${YELLOW}Cleaning node_modules and package-lock.json...${NC}"
        rm -rf "$PROJECT_DIR/node_modules" "$PROJECT_DIR/package-lock.json"
        echo -e "${GREEN}Clean complete!${NC}"
        ;;
    info)
        echo -e "${YELLOW}Docker version:${NC}"
        docker --version
        echo -e "${YELLOW}Node.js version in container:${NC}"
        docker run --rm node:24 node --version
        echo -e "${YELLOW}NPM version in container:${NC}"
        docker run --rm node:24 npm --version
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac
