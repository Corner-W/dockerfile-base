# FROM 10.16.32.59:1180/cuda/cuda10.2-cudnn7-runtime-ubuntu16.04:latest
# FROM 10.16.32.59:1180/cuda/cuda10.0-runtime-ubuntu16.04:latest
FROM ccr.ccs.tencentyun.com/deepblue/cuda:10.2-cudnn7-devel-ubuntu16.04

MAINTAINER Rieguass <wangdf@deepblueai.com>

RUN rm -rf /etc/apt/sources.list.d/* && \
    apt-get update && \
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
 && rm ~/miniconda.sh 

# CUDA 10.0-specific steps
RUN conda install -y \
    "pytorch=1.2.0" \
    "torchvision=0.4.0" \
 && conda clean -ya

# RUN pip install --no-cache-dir opencv-python
