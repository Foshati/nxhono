FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the web app
RUN bunx nx build web

# Expose port
EXPOSE 3000

# Start the application
CMD ["bunx", "nx", "start", "web"]