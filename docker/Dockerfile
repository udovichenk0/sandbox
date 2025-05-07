FROM node:18.17.0-alpine as tmp

WORKDIR /usr/tmp

COPY . .

RUN npm install

CMD npm run dev