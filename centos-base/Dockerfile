FROM centos:7.5.1804
MAINTAINER Neo.W

RUN yum  install -yq  \
    build-essential \
    wget \
    bzip2 \
    tzdata \
    gcc \
    ca-certificates \
    sudo \
    locales \
    fonts-liberation \
 && yum clean all

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
