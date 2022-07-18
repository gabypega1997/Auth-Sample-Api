FROM node:16-buster-slim

WORKDIR /usr/src/auth-sample-api

COPY ./ ./

RUN npm install 

CMD ["sh"]