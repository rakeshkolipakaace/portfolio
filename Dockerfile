# Use official Node.js image
FROM node:20-alpine as build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copy all files
COPY . .

# Build frontend
RUN npm run build

# --- Production image ---
FROM node:20-alpine
WORKDIR /app

COPY --from=build /app /app

ENV PORT=5000
EXPOSE 5000

CMD ["npm", "start"]
