FROM node

WORKDIR /app/frontend/

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
