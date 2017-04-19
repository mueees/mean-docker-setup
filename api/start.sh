#!/usr/bin/env bash

docker rm -f b-server
docker run -d --name b-server -p 7002:7002 b-server