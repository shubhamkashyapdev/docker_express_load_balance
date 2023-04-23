FROM node:16-alpine 

WORKDIR /app

COPY package.json .
COPY yarn.lock . 

RUN yarn  

COPY . .

EXPOSE 5000 

CMD ["yarn", "dev"]
