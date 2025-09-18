# Base image for the backend
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies for the backend
COPY backend/package*.json ./
RUN npm install

# Install Python and its dependencies for the AI model
RUN apk add --no-cache python3 py3-pip
COPY backend/ai/requirements.txt ./ai/requirements.txt
RUN pip install --no-cache-dir --break-system-packages -r ./ai/requirements.txt

# Copy backend source files
COPY backend/ .

# Build the TypeScript project
RUN npm run build

# Build frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Go back to app directory
WORKDIR /app

# Copy frontend build to the correct location
RUN cp -r frontend/dist ./public

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "serve"]
