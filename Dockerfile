FROM node:12.16.1-alpine3.11 as builder
ENV NODE_ENV="production"

# copy app's source to the /app directory
COPY . /app
WORKDIR /app

# install dependencies and build
RUN yarn add react-scripts
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/include_in_build/* /usr/share/nginx/html
EXPOSE 5000
