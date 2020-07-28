FROM ubuntu:20.04

MAINTAINER Andrew Woods <awoods01@gmail.com>

ARG DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update
RUN apt-get install build-essential -y
RUN apt-get install software-properties-common -y
RUN apt-get install git -y
RUN apt-get install ghostscript -y
RUN apt-get install imagemagick -y
RUN apt-get install locales -y

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-add-repository -y ppa:rael-gc/rvm
RUN apt-get update

RUN apt-get install rvm -y

# Install Ruby and Gems
RUN /bin/bash -l rvm install ruby-2.6.3
RUN /bin/bash -l -c ". ~/.profile && rvm --default use ruby-2.6.3"

RUN /bin/bash -l -c ". ~/.profile && gem update --system"
RUN /bin/bash -l -c ". ~/.profile && gem install bundler -v 2.0.2"
RUN /bin/bash -l -c ". ~/.profile && gem install rake -v 12.3.3"

# Working directory
RUN mkdir /app
WORKDIR /app

# Prepare for Wax build
COPY  ./ .
RUN /bin/bash -l -c ". ~/.profile && bundle install"

# Pass through commands from start terminal
ENTRYPOINT ["/bin/bash", "-l", "-c"]

# Make port available
EXPOSE 4000
