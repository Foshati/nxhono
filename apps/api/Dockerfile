FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the API
ENV NX_CLOUD_ACCESS_TOKEN=false
ENV NX_DAEMON=false
RUN bunx nx build api --skip-nx-cache

# Expose port
EXPOSE 3001

# Start the application
CMD ["node", "apps/api/dist/main.js"]