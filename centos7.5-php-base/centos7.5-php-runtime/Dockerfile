FROM  ccr.ccs.tencentyun.com/umucloud/centos7.5-php-fpm-base:latest

MAINTAINER Danfeng.W "danfeng@umu.com"

# Install hiredis pkg
ARG HIREDIS_VERSION=0.13.3
RUN wget -c https://github.com/redis/hiredis/archive/v${HIREDIS_VERSION}.tar.gz -O - | \
      sudo tar -xz -C /root/ &&\
    cd /root/hiredis-${HIREDIS_VERSION} &&\
    make -j &&\
    make install &&\
    echo "/usr/local/lib" >> /etc/ld.so.conf.d/hiredis.conf &&\
    sudo ldconfig &&\
    rm -rf /root/hiredis-${HIREDIS_VERSION}
