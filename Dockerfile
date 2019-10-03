FROM node:10.16-alpine as dev
WORKDIR ./app
COPY ./ ./

RUN ["npm", "install"]
# CMD is executed when cotnainer is created
CMD ["npm", "start"]

