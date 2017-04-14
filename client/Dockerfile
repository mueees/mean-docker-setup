# Create image based on the official Node 6 image from dockerhub
FROM node:6

MAINTAINER Vitalii Mishchenko


########################
# INSTALL NGINX
########################

RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
COPY docker/nginx/nginx.conf /etc/nginx/


########################
# BUILD ANGULAR CLIENT
########################

# Create a directory where our app will be placed
RUN mkdir -p /usr/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/app

# Copy dependency definitions
COPY package.json  /usr/app

# Install dependecies
RUN npm install

# Copy all code for building app
COPY . /usr/app

# Build app
RUN npm run build

# Delete all unnecessary files
RUN rm -r node_modules src config Dockerfile

EXPOSE 80

CMD ["nginx"]