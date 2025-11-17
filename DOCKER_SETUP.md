# Docker Setup Guide

This guide explains how to build and run the goAI website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

## Environment Variables

The application requires the following environment variables for Supabase integration:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous/public API key

**Important**: These variables are embedded at build time by Vite, so they need to be available during the Docker build process.

## Building the Docker Image

### Option 1: Using Docker directly

```bash
# Build the image
docker build -t goai-website .

# Run the container
docker run -d \
  -p 8080:80 \
  --name goai-website \
  goai-website
```

### Option 2: Using Docker Compose (Recommended)

1. Create a `.env` file in the project root (optional, for environment variables):

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

2. Build and run:

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

## Building with Environment Variables

If you need to pass environment variables during build time:

```bash
# Using Docker build
docker build \
  --build-arg VITE_SUPABASE_URL=https://your-project.supabase.co \
  --build-arg VITE_SUPABASE_ANON_KEY=your-anon-key \
  -t goai-website .

# Using Docker Compose with .env file
docker-compose build
docker-compose up -d
```

## Accessing the Website

Once the container is running, access the website at:
- http://localhost:8080

## Useful Docker Commands

```bash
# View running containers
docker ps

# View logs
docker logs goai-website
# or with docker-compose
docker-compose logs -f

# Stop the container
docker stop goai-website
# or with docker-compose
docker-compose down

# Remove the container
docker rm goai-website

# Remove the image
docker rmi goai-website

# Rebuild after code changes
docker-compose build --no-cache
docker-compose up -d
```

## Troubleshooting

### Port already in use
If port 8080 is already in use, change it in `docker-compose.yml`:
```yaml
ports:
  - "3000:80"  # Change 8080 to any available port
```

### Environment variables not working
Remember that Vite embeds environment variables at build time. If you change environment variables, you need to rebuild the Docker image:

```bash
docker-compose build --no-cache
docker-compose up -d
```

### Check if container is running
```bash
docker ps | grep goai-website
```

### View container logs
```bash
docker logs goai-website
```

## Production Deployment

For production deployment:

1. Ensure environment variables are set correctly
2. Use a reverse proxy (like Traefik or nginx) in front of the container
3. Set up SSL/TLS certificates
4. Configure proper domain names in nginx.conf
5. Consider using Docker secrets for sensitive environment variables

