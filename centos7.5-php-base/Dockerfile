FROM  centos:7.5.1804

MAINTAINER Danfeng.W "danfeng@umu.com"

RUN rm -rf /etc/yum.repos.d/*
COPY epel.repo /etc/yum.repos.d/epel.repo
COPY centos7.repo /etc/yum.repos.d/centos7.repo

RUN yum install -y sudo 

RUN  adduser  --shell /bin/bash work && \
    echo "user ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/90-user && \
    chown -R work:work /home/work

WORKDIR /home/work
# USER work

RUN yum -y install wget \
                    vim \
                    pcre \
                    pcre-devel \
                    openssl \
                    openssl-devel \
                    libicu-devel \
                    gcc \
                    gcc-c++ \
                    autoconf \
                    libjpeg \
                    libjpeg-devel \
                    libpng \
                    libpng-devel \
                    freetype \
                    freetype-devel \
                    libxml2 \
                    libxml2-devel \
                    zlib \
                    zlib-devel \
                    glibc \
                    glibc-devel \
                    glib2 \
                    glib2-devel \
                    ncurses \
                    ncurses-devel \
                    curl \
                    curl-devel \
                    krb5-devel \
                    libidn \
                    libidn-devel \
                    openldap \
                    openldap-devel \
                    nss_ldap \
                    jemalloc-devel \
                    cmake \
                    boost-devel \
                    bison \
                    automake \
                    libevent \
                    libevent-devel \
                    gd \
                    gd-devel \
                    libtool \
                    libmcrypt \
                    libmcrypt-devel \
                    mcrypt \
                    mhash \
                    libxslt \
                    libxslt-devel \
                    readline \
                    readline-devel \
                    gmp \
                    gmp-devel \
                    libcurl \
                    libcurl-devel \
                    openjpeg-devel && \
    yum clean all


ARG  PHP_VERSION=7.0.27

ADD php-${PHP_VERSION}.tar.gz  /root/

RUN cp -frp /usr/lib64/libldap* /usr/lib/

RUN yum install -y bzip2  bzip2-devel

RUN cd /root/php-${PHP_VERSION} && \
    ./configure    --prefix=/home/work/php  \
                   --with-config-file-path=/home/work/php/etc   \
                   --enable-fpm \
                   --with-fpm-user=work \
                   --with-fpm-group=work  \
                   --with-mysqli=mysqlnd \
                   --with-pdo-mysql=mysqlnd \
                   --enable-opcache   \
                   --enable-static \
                   --enable-inline-optimization \
                   --enable-sockets \
                   --enable-wddx   \
                   --enable-zip \
                   --enable-calendar \
                   --enable-bcmath \
                   --enable-soap \
                   --with-zlib \
                   --with-iconv   \
                   --with-gd --with-xmlrpc \
                   --enable-mbstring --with-curl \
                   --enable-ftp --with-mcrypt \
                   --with-bz2   --enable-pcntl \
                   --enable-shmop --enable-exif \
                   --with-gettext --with-gmp \
                   --with-mhash --with-readline   \
                   --with-openssl --with-pear \
                   --enable-phar \
                   --with-freetype-dir=/usr \
                   --with-jpeg-dir=/usr \
                   --with-png-dir=/usr && \
    make -j2 && \
    make install && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN rm -rf /root/php-${PHP_VERSION} && \
    chown work:work -R /home/work

# 解决时区问题
ENV TZ "Asia/Shanghai"
ENV PATH=$PATH:/home/work/php/bin:/home/work/php/sbin

EXPOSE 9000
