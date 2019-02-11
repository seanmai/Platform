FROM node:alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install
# Recopy everything else in directory so RUN npm etc doesn't rebuild --minimize cache busting
COPY . .

CMD ["npm", "start"]
