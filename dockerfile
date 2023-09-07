#Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json and package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm Install


# Bundle app source
COPY . .

# Creates a "dist" folder with the build
RUN npm run build

# Start the server using the build
CMD [ "node", "dist/main.js" ]



