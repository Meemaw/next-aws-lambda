FROM node:13-alpine as build

COPY . /src
WORKDIR /src

RUN yarn install --frozen-lockfile
RUN yarn build
RUN yarn install --frozen-lockfile --production --ignore-scripts --prefer-offline

FROM node:13-alpine

WORKDIR /usr/app

COPY --from=build /src/node_modules /usr/app/node_modules
COPY --from=build /src/package.json /usr/app/package.json
COPY --from=build /src/.next /usr/app/.next

ENV NODE_ENV production

CMD ["npm", "start"]
