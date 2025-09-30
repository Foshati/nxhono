FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the web app
ENV NX_CLOUD_ACCESS_TOKEN=false
ENV NX_DAEMON=false
RUN bunx nx build web --skip-nx-cache

# Expose port
EXPOSE 3000

# Start the application
CMD ["bunx", "nx", "start", "web"]