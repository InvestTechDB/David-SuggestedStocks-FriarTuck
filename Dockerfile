FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
ENV PORT=8080

# COPY package.json package.json
RUN npm install  

# COPY . .
RUN npm run starting
RUN npm run grunting
RUN npm run compile
RUN npm run grunting
RUN npm install nodemon -g

EXPOSE 8080
CMD nodemon /src/app/server/server.js  