FROM alpine:latest
MAINTAINER Neo.W

# args

ARG GLIBC_VERSION="2.27-r0"

# Install glibc and useful packages 
RUN echo "@testing http://nl.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
    && apk --update add --no-cache \
    bash \
    gcc\
    curl \
    wget \
    ca-certificates \
    bzip2 \
    unzip \
    sudo \
    libstdc++ \
    glib \
    libxext \
    libxrender \
    linux-headers \
    musl-dev \
    tini@testing tzdata \
    && curl -L "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/sgerrand.rsa.pub" -o /etc/apk/keys/sgerrand.rsa.pub \
    && curl -L "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk" -o glibc.apk \
    && curl -L "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-bin-${GLIBC_VERSION}.apk" -o glibc-bin.apk \
    && apk add glibc.apk \
    && apk add glibc-bin.apk \
    && apk add openjdk8-jre-base \
    && /usr/glibc-compat/sbin/ldconfig /lib /usr/glibc/usr/lib \
    && rm -rf glibc*

ENV SHELL=/bin/bash \
    NB_USER=admin \
    NB_GROUP=admin \
    NB_UID=1000 \
    NB_GID=1000 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8

ENV HOME=/home/$NB_USER
ENV JAVA_HOME=/usr/lib/jvm/default-jvm
ENV PATH=${PATH}:${JAVA_HOME}/bin

RUN addgroup -g $NB_GID  $NB_GROUP && \
    adduser -h $HOME -s /bin/bash  -u $NB_UID -G $NB_GROUP -D $NB_USER && \
    cp  /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# USER $NB_USER
