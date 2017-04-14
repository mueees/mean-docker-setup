#!/usr/bin/env bash

docker rm -f b-client
docker run -d --name b-client -p 7001:80 b-client