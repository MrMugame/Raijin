FROM node:18.4-alpine

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .

RUN npm run build

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
FROM node:18.4-alpine

WORKDIR /app
COPY --from=0 /app .
COPY . .
RUN mkdir /app/database/ 

EXPOSE 3000
CMD ["node", "./build"]