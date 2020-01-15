FROM 10.16.32.59:1180/cuda/ubuntu:16.04
MAINTAINER  Rieguass <wangdf@deepblueai.com>

COPY sources.list /etc/apt/
COPY pip.conf /etc/

RUN apt-get update && \
    apt-get install -y --no-install-recommends sudo \
    ca-certificates \
    git \
    bzip2 \
    libx11-6 \
    curl  && \
    rm -rf /var/lib/apt/lists/*


RUN mkdir /app && adduser --disabled-password --gecos '' --shell /bin/bash user && \
    echo "user ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/90-user && \
    chown -R user:user /app

WORKDIR /app
USER user

ENV PATH=/home/user/miniconda/bin:$PATH

RUN curl -so ~/miniconda.sh https://repo.continuum.io/miniconda/Miniconda3-4.5.11-Linux-x86_64.sh \
 && chmod +x ~/miniconda.sh \
 && ~/miniconda.sh -b -p ~/miniconda \
 && rm ~/miniconda.sh \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/ \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/ \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/ \
 && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/


RUN pip install --no-cache-dir opencv-python