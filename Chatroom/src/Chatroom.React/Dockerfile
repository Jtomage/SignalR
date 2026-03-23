FROM node:25.0.0-alpine AS build
WORKDIR /app
COPY ["Chatroom.React/", "."]
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

#copy the replaceConfig
COPY ["Chatroom.React/replaceConfig.sh", "/replaceConfig.sh"]
RUN chmod +x /replaceConfig.sh

ENTRYPOINT ["/replaceConfig.sh"]

CMD ["nginx", "-g", "daemon off;"] 
