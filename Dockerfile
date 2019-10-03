FROM node:10.16-alpine as dev
WORKDIR ./app
COPY ./package.json ./package.json

RUN ["npm", "install"]
# CMD is executed when cotnainer is created
CMD ["npm", "start"]

