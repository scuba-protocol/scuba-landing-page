FROM node:16 AS builder

WORKDIR /app
ADD . .

RUN yarn
RUN yarn build

FROM busybox:latest

EXPOSE 3000
COPY --from=builder /app/dist /dist
RUN echo "E404:index.html" > /etc/httpd.conf
ENTRYPOINT ["httpd", "-f", "-p", "0.0.0.0:3000", "-h", "/dist", "-c", "/etc/httpd.conf"]
