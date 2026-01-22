FROM node:18-slim

WORKDIR /usr/src/app

# Copy package files if you have dependencies, otherwise just copy app.js
COPY app.js ./

# We pass the Git SHA as a build argument to show it in the app
ARG IMAGE_TAG
ENV IMAGE_TAG=$IMAGE_TAG

EXPOSE 8080

CMD [ "node", "app.js" ]