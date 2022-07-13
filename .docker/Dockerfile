FROM node:14.18.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json $WORK_DIR
RUN npm install

COPY . /usr/src/app

RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "dev"]
