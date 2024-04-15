FROM node:alpine

WORKDIR /nextapp

COPY package* .

RUN npm install

COPY ./prisma .

RUN npx prisma generate

COPY . .

CMD [ "npm" , "run" , "dev" ]