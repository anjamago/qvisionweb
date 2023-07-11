FROM node:alpine3.18 as build-step

RUN mkdir -p /app
WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod 



FROM nginx:alpine

RUN  rm -rf /user/shared/nginx/html/*

CMD [ "nginx","-g", "daemon off;" ]

COPY --from=build-step /app/dist/qvision-web /user/shared/nginx/html