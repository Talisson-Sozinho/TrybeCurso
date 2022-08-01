FROM nginx:1.21-alpine AS primeiro-estagio

COPY . /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]