# [wax.](https://minicomp.github.io/wax/) [![Build Status](https://travis-ci.org/minicomp/wax.svg?branch=master)](https://travis-ci.org/minicomp/wax)


> __Note: Wax is currently unreleased!__ <br> Check back soon for better documentation, more features, and a beta Gem.

## Current Features

- [x] has layouts for image and metadata pages (either IIIF or flat image)
- [x] has masonry layout for image gallery
- [x] can generate collection pages from CSV or YAML files
- [x] can generate IIIF tiles and JSON data from local images
- [x] can publish your compiled site to a `gh-pages` branch.
- [x] can test for dead links and html errors
- [x] can generate search index
- [x] has client-side elastic search
- [x] can test search index(es)

## dependencies
+ `jekyll` (gem)
+ `bundler` (gem)
+ `wax_tasks` (gem)
+ `rspec` (gem)
+ `html-proofer` (gem)
+ `ImageMagick` (system)


## to use

1. Clone this repository + cd into it.
```
$ git clone https://github.com/minicomp/wax.git && cd wax
```
2. Make sure you have [`bundler`]() installed, then install the project dependencies with
```
$ bundle install
```
3. Replace the sample data ([`objects.csv`](https://github.com/minicomp/wax/blob/master/_data/objects.csv)) in the `_data` folder with your own collection data.
4. Replace the sample collection info in the `_config.yaml` file with your own info:
```yaml
collections:
  objects:
    output: true # must be true for the pages to get compiled as html
    source: objects.csv # name of the file in _data
    key: id # name of the primary key
    directory: objects # what folder you want the pages generated into
    layout: iiif-image-page # what layout you want the pages to use
```
5. Generate the pages for your collection:
```
$ bundle exec rake wax:pagemaster objects
```
6. Replace the images in [`_iiif/objects/`](https://github.com/minicomp/wax/tree/master/_iiif/objects) with your own full size images.
7. Generate the IIIF image tiles and JSON metadata for your collection images:
```
$ bundle exec rake wax:iiif objects
```
