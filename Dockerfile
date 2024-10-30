FROM node:18.18.2

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


EXPOSE 4200

CMD ["npx","ng","serve","--host", "0.0.0.0"]