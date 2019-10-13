FROM node:12-alpine as build

COPY . /src
WORKDIR /src

RUN npm ci

FROM circleci/node:10.14-browsers

LABEL maintainer="Meemaw <ematej.snuderl@gmail.com>"

LABEL "com.github.actions.name"="testcafe"
LABEL "com.github.actions.description"="Runs testcafe inside container that has all popular browsers pre-installed"
LABEL "com.github.actions.icon"="terminal"
LABEL "com.github.actions.color"="purple"

WORKDIR /usr/app

COPY --from=build /src/node_modules /usr/app/node_modules
COPY --from=build /src/e2e /usr/app/e2e

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["help"]

