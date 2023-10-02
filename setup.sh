#!/bin/bash

container_name="user-service"
port=3004

#pull git project
git pull

#start/restart routing
docker kill $container_name
docker build -t $container_name .
docker run -d -p port:port --name $container_name $container_name