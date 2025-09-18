# Use a Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight Nginx image to serve the built app
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx public directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
