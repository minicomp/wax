# check=skip=InvalidDefaultArgInFrom
ARG RUBY_VERSION
FROM ruby:${RUBY_VERSION}

LABEL maintainer="Andrew Woods <awoods01@gmail.com>"

# Install apt dependencies
RUN apt-get update -y
RUN apt-get install -y --no-install-recommends \
                       build-essential \
                       git \
                       ghostscript \
                       imagemagick \
                       libvips \
                       locales \
    && rm -rf /var/lib/apt/lists/*

# Add imagemagick PDF fix
RUN sed -i '/disable ghostscript format types/,+6d' /etc/ImageMagick-7/policy.xml

# Set up locales
RUN localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG=en_US.utf8

RUN mkdir /wax
COPY Gemfile* *.gemspec /wax/
WORKDIR /wax
RUN bundle

EXPOSE 4000
