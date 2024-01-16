# DockerFile nodejs v21.1.0 + express + mongoose

FROM node:21.1.0

# Create app directory
WORKDIR /usr/src/app

#Permissions
RUN chown -R node:node /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
COPY --chown=node:node . .

# Expose port
EXPOSE 3000

# Run app
CMD [ "node", "app.js" ]
