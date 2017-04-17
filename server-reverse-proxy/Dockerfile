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

EXPOSE 80

CMD ["nginx"]