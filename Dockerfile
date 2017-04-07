# Actually `now` should work without custom Dockerfile but not today :(
FROM node:latest
LABEL name "evil-form"

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build

EXPOSE 3000
CMD npm run start:prod
