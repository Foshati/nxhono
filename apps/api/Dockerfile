FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the API
RUN bunx nx build api

# Expose port
EXPOSE 3001

# Start the application
CMD ["node", "apps/api/dist/main.js"]