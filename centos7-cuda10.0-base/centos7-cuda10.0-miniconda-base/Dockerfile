# FROM 10.16.32.59:1180/cuda/cuda10.2-cudnn7-runtime-ubuntu16.04:latest
# FROM 10.16.32.59:1180/cuda/cuda10.0-runtime-ubuntu16.04:latest
FROM 10.16.32.59:1180/cuda/centos7-cuda10.0-base

MAINTAINER Rieguass <wangdf@deepblueai.com>


RUN mkdir /app && adduser  --shell /bin/bash user && \
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

# CUDA 10.0-specific steps
RUN conda install -y \
    "pytorch=1.2.0=py3.7_cuda10.0.130_cudnn7.6.2_0" \
    "torchvision=0.4.0=py37_cu100" \
 && conda clean -ya

RUN pip install --no-cache-dir opencv-python
