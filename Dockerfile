FROM node:16-alpine

WORKDIR ./personal_website_app

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install -g npm@9.3.0
RUN npm install npx
RUN npm install react-icons

COPY . ./

WORKDIR ./personal_website_app/src
CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]

FROM nginx
COPY --from=build /usr/src/app/dist/personal_website /usr/share/nginx/html

# FROM --platform=linux/amd64 node:16-alpine