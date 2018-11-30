FROM centos:7.5.1804
MAINTAINER Neo.W

RUN yum install -y  epel-release \
    wget which make openssl-devel mod_ssl \
    gcc-c++ python-devel ibffi-devel \
    unixODBC-devel cracklib-dicts  \
    blac-devel lapack-devel \
    python-pip \
    java-1.8.0-openjdk java-1.8.0-openjdk-devel \
    readline-devel  net-tools && \
    yum clean all && \
    localedef -i en_US -f UTF-8 en_US.UTF-8 && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime


ENV SHELL=/bin/bash \
    NB_USER=admin \
    NB_GROUP=admin \
    NB_UID=1000 \
    NB_GID=1000 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.191.b12-0.el7_5.x86_64

ENV PATH=$PATH:$JAVA_HOME/bin
ENV CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

ENV HOME=/home/$NB_USER

RUN groupadd -g $NB_GID $NB_GROUP && \
    useradd -m -s /bin/bash -N -u $NB_UID -g $NB_GID $NB_USER

# USER $NB_UID
