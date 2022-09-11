FROM node:18-alpine
WORKDIR /app
COPY . /app/
RUN npm install --save-dev
RUN npm run build 
CMD [ "node", "build/index.js" ]

