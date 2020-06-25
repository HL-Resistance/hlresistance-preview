# Select NodeJS LTS as image
FROM node:lts

# Create a temporary folder to build the website
WORKDIR /tmp
COPY package.json .
COPY package-lock.json .

# Install packages
RUN npm ci

# Copy the remaining files
COPY . .

# Build the website
RUN npm run build --if-present

# Switch to the app directory
WORKDIR /app

# Copy the build files and remove the temp folder
RUN cp -r /tmp/build/* . && \
    rm -rf /tmp

# Install webserver, following https://create-react-app.dev/docs/deployment
RUN npm i serve --no-save

# Use port 8080 as requested: https://fly.io/docs/getting-started/node/
CMD [ 'serve', '-s', '/app', '-l', '8080' ]