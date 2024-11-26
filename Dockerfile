FROM node:20

WORKDIR /app

COPY package* .

COPY . .

ENTRYPOINT ["npm" ,"install"]

CMD [ "npm","run","dev" ]