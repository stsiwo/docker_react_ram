FROM node:10.16-alpine as dev
WORKDIR ./app
COPY ./ ./

RUN ["npm", "install"]
CMD ["npm", "start"]

