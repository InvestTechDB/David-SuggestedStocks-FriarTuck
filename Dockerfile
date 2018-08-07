FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
ENV PORT=8080

RUN npm install  

RUN npm run grunting
RUN npm run compile
RUN npm run grunting

RUN yarn install --ignore-engines
 
EXPOSE 8080

CMD node ./server/server.js 
