FROM nginx:1.19

RUN mkdir /app
COPY /home/circleci/jsalv/dist/ /app
COPY nginx.conf /etc/nginx/nginx.conf