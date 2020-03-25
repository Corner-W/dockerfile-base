FROM ccr.ccs.tencentyun.com/deepblue/alpine-nginx-base

MAINTAINER  Rieguass <wangdf@deepblueai.com>


RUN mkdir /workspace

ADD aiplatform /workspace/aiplatform

COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /workspace

EXPOSE 9000:80

CMD ["nginx", "-g", "daemon off;"]
