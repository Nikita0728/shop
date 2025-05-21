# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the app code
COPY . .

# Expose the Next.js dev port
EXPOSE 3000

# Run the Next.js app in development mode
CMD ["npm", "run", "dev"]
