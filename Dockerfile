FROM ubuntu:20.04

MAINTAINER Andrew Woods <awoods01@gmail.com>

ARG DEBIAN_FRONTEND=noninteractive

# Install apt dependencies
RUN apt-get update
RUN apt-get install build-essential -y
RUN apt-get install software-properties-common -y
RUN apt-get install git -y
RUN apt-get install ghostscript -y
RUN apt-get install imagemagick -y

# Add imagemagick PDF fix
RUN sed -i '/disable ghostscript format types/,+6d' /etc/ImageMagick-6/policy.xml

# Install locales
RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.utf8

# Install RVM
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
RUN mkdir /wax
WORKDIR /wax

# Prepare for Wax build
COPY Gemfile* *.gemspec ./
RUN ls
RUN /bin/bash -l -c ". ~/.profile && bundle install"

# Pass through commands from start terminal
ENTRYPOINT ["/bin/bash", "-l", "-c"]

# Make port available
EXPOSE 4000
