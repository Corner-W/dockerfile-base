FROM harbor-cz.deepblueai.com/osbase/alpine:latest

MAINTAINER  Rieguass <wangdf@deepblueai.com>

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
ARG GLIBC_VERSION="2.27-r0"
RUN  apk --update add --no-cache \
    gcc\
    curl \
    bzip2 \
    sudo \
    libstdc++ \
    glib \
    linux-headers \
    && curl -L "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/sgerrand.rsa.pub" -o /etc/apk/keys/sgerrand.rsa.pub \
    && curl -L "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk" -o glibc.apk \
    && curl -L "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-bin-${GLIBC_VERSION}.apk" -o glibc-bin.apk \
    && apk add glibc.apk \
    && apk add glibc-bin.apk \
    && /usr/glibc-compat/sbin/ldconfig /lib /usr/glibc/usr/lib \
    && rm -rf glibc*

ENV PATH=/root/miniconda/bin:$PATH

RUN curl -so ~/miniconda.sh https://repo.continuum.io/miniconda/Miniconda3-4.5.11-Linux-x86_64.sh \
 && chmod +x ~/miniconda.sh \
 && ~/miniconda.sh -b -p ~/miniconda \
 && rm ~/miniconda.sh \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/ \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/ \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/ \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/

