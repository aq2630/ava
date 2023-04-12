FROM node:13.8.0-alpine as build

ARG CMS_SPACE_ID
ARG CMS_AUTH_TOKEN
ARG GATSBY_STAGING_URL
ARG GATSBY_MAIN_URL

RUN apk add bash jq git
# https://stackoverflow.com/a/64927666
RUN apk add --no-cache make automake autoconf libtool dpkg pkgconfig libpng libpng-dev g++ nasm

COPY . /app

WORKDIR /app

ENV CI="true"

RUN ["/bin/bash", "-c", "npm install"]
RUN ["/bin/bash", "-c", "npm run build"]

FROM node:13.8.0-alpine as runtime

RUN apk add bash

COPY --from=build /app/public /public
COPY --from=build /app/server /server

WORKDIR /server

RUN ["/bin/bash", "-c", "yarn"]

EXPOSE 3000

CMD ["node", "server.js"]
