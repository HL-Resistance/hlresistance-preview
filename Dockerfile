# Select NodeJS LTS as image
FROM node:lts

# Create a folder for the website
WORKDIR /app
COPY package.json .
COPY package-lock.json .

# Install packages
RUN npm ci

# Copy the remaining files
COPY . .

# Build the website
RUN npm run build --if-present

# Use port 8080 as requested: https://fly.io/docs/getting-started/node/
CMD ["npm", "run", "start"]