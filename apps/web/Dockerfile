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
ENV NX_SKIP_NX_CACHE=true
ENV NX_CLOUD_NO_TIMEOUTS=true
ENV NX_NO_CLOUD=true
ENV CI=true
RUN bunx nx build web --skip-nx-cache --no-cloud

# Expose port
EXPOSE 3000

# Start the application
CMD ["bunx", "nx", "start", "web"]