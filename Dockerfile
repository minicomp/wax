FROM ruby:2.7.2

MAINTAINER Andrew Woods <awoods01@gmail.com>

# Install apt dependencies
RUN apt-get update -y
RUN apt-get install -y build-essential
RUN apt-get install -y software-properties-common
RUN apt-get install -y git
RUN apt-get install -y ghostscript
RUN apt-get install -y imagemagick
RUN apt-get install -y libvips

# Add imagemagick PDF fix
RUN sed -i '/disable ghostscript format types/,+6d' /etc/ImageMagick-6/policy.xml

# Install locales
RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.utf8

RUN mkdir /wax
COPY Gemfile* *.gemspec ./wax
WORKDIR /wax
RUN bundle

EXPOSE 4000
