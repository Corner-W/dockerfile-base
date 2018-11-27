FROM ubuntu:14.04
MAINTAINER Neo.W

USER root

RUN apt-get update && apt-get -yq dist-upgrade \
 && apt-get install -yq --no-install-recommends \
    build-essential \
    wget \
    bzip2 \
    tzdata \
    gcc \
    ca-certificates \
    sudo \
    locales \
    fonts-liberation \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen

ENV SHELL=/bin/bash \
    NB_USER=admin \
    NB_GROUP=admin \
    NB_UID=1000 \
    NB_GID=1000 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8

ENV HOME=/home/$NB_USER

RUN groupadd -g $NB_GID $NB_GROUP

RUN useradd -m -s /bin/bash -N -u $NB_UID -g $NB_GID $NB_USER

USER $NB_UID
