# Build stage
FROM node:23-alpine AS runner

WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .
RUN npm run build

# Environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3001

# Expose the port
EXPOSE 3001

# Start the server
CMD ["npm", "run", "start"]
