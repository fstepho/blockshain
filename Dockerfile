FROM node:7
MAINTAINER Greg Taschuk
RUN mkdir -p /usr/src/etherchain
WORKDIR /usr/src/etherchain

COPY package.json /usr/src/etherchain
RUN npm install

COPY . /usr/src/etherchain

CMD npm start
