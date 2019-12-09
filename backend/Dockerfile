FROM node:10.16.3

# Create app directory
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
run npm config set https-proxy http://10.211.3.68:8080

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . ../backend

EXPOSE 3000
CMD [ "node", "index.js" ]