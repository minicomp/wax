# [wax](https://minicomp.github.io/wax/) [![Build Status](https://travis-ci.org/mnyrop/wax.svg?branch=master)](https://travis-ci.org/mnyrop/wax)


##### A gem-packaged Jekyll theme for creating minimal exhibitions with [Jekyll](http://jekyllrb.com), [IIIF](http://iiif.io), and [ElasticLunr.js](http://elasticlunr.com).

> __Note: Wax is currently unreleased!__ <br> Check back soon for better documentation, more features, and a beta Gem.


Looking for the full functionality of Wax but want to use/make your own theme? Check out [minicomp/wax_tasks](https://github.com/minicomp/wax_tasks).

<br>

![wax_screen](https://github.com/mnyrop/wax_tasks/raw/master/docs/wax_screen.gif?raw=true)

<br>

#### Getting Started
- [Prerequisites](#prerequisites)
- [Installing](#installing)

#### What you get
- [With wax_theme](#what-you-get-with-wax_theme)
- [With wax_tasks](#what-you-get-with-wax_tasks)

#### Guides
- [Coming Soon](#guides)


# Getting Started

## Prerequisites

You will need Ruby 2.2 or higher and [Bundler](https://rubygems.org/gems/bundler) installed.

You can check your Ruby version with `$ ruby --version` and can install Bundler with `$ gem install bundler`. Having trouble? Check out these guides for configuring your machine to use Jekyll for [Mac](https://learn.cloudcannon.com/jekyll/install-jekyll-on-os-x/), [Linux](https://learn.cloudcannon.com/jekyll/install-jekyll-on-linux/), and [Windows](https://jekyllrb.com/docs/windows/).

## Installing

Install `wax_theme` globally with `$ gem install wax_theme` or add it to your site's `Gemfile`:

```ruby
source 'https://rubygems.org'

gem 'jekyll', '~> 3.7'
gem 'wax_theme'

group :development, :test do
 gem 'wax_tasks' # optional
end

```

and run `$ bundle install`. If you want to use custom Rake tasks for generating pages, IIIF derivatives, a search index, and more, you should add `wax_tasks` to your `Gemfile` as well.

> __Hint:__ The best way to get started is to clone the site demo:
>
> `$ git clone https://github.com/minicomp/wax.git -b gh-pages`

# What you get with wax_theme

#### Sass styles
Based on [Ed. Theme](https://github.com/minicomp/ed).
- [\_ed.scss](https://github.com/mnyrop/wax/blob/master/_sass/_ed.scss)
- [\_syntax.scss](https://github.com/mnyrop/wax/blob/master/_sass/_synatx.scss)
- [\_wax.scss](https://github.com/mnyrop/wax/blob/master/_sass/_wax.scss)

#### Basic layouts
- [default.html](https://github.com/mnyrop/wax/blob/master/_layouts/default.html)
- [page.html](https://github.com/mnyrop/wax/blob/master/_layouts/page.html)

#### Includes (i.e. reusable components)
- [iiif_image.html](https://github.com/mnyrop/wax/blob/master/_includes/iiif_image.html)
- [search.html](https://github.com/mnyrop/wax/blob/master/_includes/search.html)
- [sidebar.html](https://github.com/mnyrop/wax/blob/master/_includes/sidebar.html)
- [header.html](https://github.com/mnyrop/wax/blob/master/_includes/header.html)
- [pagination.html](https://github.com/mnyrop/wax/blob/master/_includes/pagination.html)


# What you get with wax_tasks

- A task for generating collection pages from a CSV or JSON file: [`wax:pagemaster`](https://github.com/mnyrop/wax_tasks#waxpagemaster)
- A task for generating an [ElasticLunr](http://elasticlunr.com) search index: [`wax:lunr`](https://github.com/mnyrop/wax_tasks#waxlunr)
- A task for generating [IIIF](http://iiif.io/) derivatives and json data from a local directory of images: [`wax:iiif`](https://github.com/mnyrop/wax_tasks#waxiiif)
- A task for running [html-proofer](https://github.com/gjtorikian/html-proofer) and any [rspec](http://rspec.info/) tests: [`wax:test`](https://github.com/mnyrop/wax_tasks#waxtest)

# Guides
> __Note:__ A full guide for using `wax_theme` is on its way!
