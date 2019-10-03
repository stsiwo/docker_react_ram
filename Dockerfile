FROM node:10.16-alpine as dev
WORKDIR ./app
COPY ./src ./

RUN ["npm", "install"]
RUN ["npm", "start"]

