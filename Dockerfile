FROM node:16-buster-slim

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN npm install 

CMD ["sh"]