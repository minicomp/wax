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
- [With wax_theme](#what-you-get-with-wax-them)
- [With wax_tasks](#what-you-get-with-wax-tasks)


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

## What you get with wax_theme

#### Sass styles
Based on [Ed. Theme](https://github.com/minicomp/ed).
- [\_ed.scss]()
- [\_syntax.scss]()
- [\_wax.scss]()

#### Basic layouts
- [default.html]()
- [page.html]()

#### Includes (i.e. reusable components)
- [iiif_image.html]()
- [search.html]()
- [sidebar.html]()
- [header.html]()
- [pagination.html]()


## What you get with wax_tasks

- A task for generating collection pages from a CSV or JSON file: [`wax:pagemaster`]()
- A task for generating an [ElasticLunr]() search index: [`wax:lunr`]()
- A task for generating [IIIF](http://iiif.io/) derivatives and json data from a local directory of images: [`wax:iiif`]()
- A task for running [html-proofer]() and any [rspec]() tests: [`wax:test`]()

> __Note:__ A full guide for using `wax_theme` is on its way!
