#!/bin/sh
# Use envsubst to replace variables in the template and output to public config
envsubst < /usr/share/nginx/html/config.json.template > /usr/share/nginx/html/config.json

exec "$@"