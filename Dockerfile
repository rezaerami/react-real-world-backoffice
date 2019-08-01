FROM node:8 as build
ARG NODE_ENV=development
ARG BASE_API=http://api-staging.tripino.app

WORKDIR /app
COPY ./ /app/

RUN sed -i -e  "s#BASE_API=.*#BASE_API="$BASE_API"#g" .env ;\
  npm install ;\
  npm run build

FROM nginx:alpine
COPY --from=build /app/build/ /usr/share/nginx/html/
ADD ./deploy/nginx-custom.conf /etc/nginx/conf.d/default.conf
