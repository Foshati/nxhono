FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the web app
RUN bunx nx build web

# Expose port
EXPOSE 3000

# Start the application
CMD ["bunx", "nx", "start", "web"]