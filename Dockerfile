FROM dykoffi/node:light

WORKDIR /App
COPY package.json ./package.json

RUN yarn install

COPY . /App

EXPOSE 8000

CMD [ "pm2-runtime", "index.js" ]