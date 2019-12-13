
FROM node:10.16.3

WORKDIR /usr/src/app
COPY package.json .
RUN npm config set https-proxy http://10.211.3.68:8080
RUN npm install
RUN npm install -g @angular/cli@8.3.20
COPY . .

CMD ng serve --host 0.0.0.0