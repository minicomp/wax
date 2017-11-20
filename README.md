# wax [![Build Status](https://travis-ci.org/minicomp/wax.svg?branch=master)](https://travis-ci.org/minicomp/wax)


> __Note: Wax is currently unreleased!__ <br> Check back soon for better documentation, more features, and a beta Gem.

## current features
+ [x] Layouts for images and metadata (either IIIF or flat image)
+ [x] Masonry layout for image gallery
+ [x] Automated Markdown pages generation for our collection from CSV or YAML files
+ [x] Automated IIIF tiles and JSON data generation from local images
+ [x] Automated testing for dead links and html errors

## on the horizon
+ [ ] Tag/category extraction
+ [ ] Automated search index generation
+ [ ] Client-side elastic search
+ [ ] Automated testing on search index(es)
+ [ ] Automated d3 force-graph visualizations

## runtime dependencies
+ `bundler ~> 1.15`
+ `jekyll ~> 3.5`

## optional dev/test dependencies
#### for page generation:
+ `rake`
#### for iiif generation + display:
+ `rake`
+ `imagemagick ~> 6`
+ `iiif_s3`
+ `openseadragon`
#### for testing:
+ `htmlproofer`
#### for image galleries:
+ `jquery ~> 3`
+ `masonry ~> 2`
#### for elastic client-side search:
+ `jquery ~> 3`
+ `lunrjs`
#### for visualizations:
+ `jquery ~> 3`
+ `d3js ~> 4`

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
