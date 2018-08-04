FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
ENV PORT=8080

# COPY package.json package.json
RUN npm install  

# COPY . .
# RUN npm run starting
RUN npm run grunting
RUN npm run compile
RUN npm run grunting
# RUN npm install nodemon -g
RUN yarn install --ignore-engines

# ENTRYPOINT [ "/src/app/custom.sh" ]
# RUN ["chmod", "+x", "/src/app/custom.sh"]
 
EXPOSE 8080
# CMD node ./server/database/index.js && node ./server/database/seeder.js && node ./server/server.js

CMD node ./server/server.js 
