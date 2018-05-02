# [minicomp/wax](https://github.com/minicomp/wax/)
### jekyll for minimal exhibitions with iiif

<https://minicomp.github.io/wax/>

[![Build Status](https://travis-ci.org/mnyrop/wax.svg?branch=master)](https://travis-ci.org/mnyrop/wax) [![Dependency Status](https://gemnasium.com/badges/github.com/mnyrop/wax.svg)](https://gemnasium.com/github.com/mnyrop/wax)

<img src="https://raw.githubusercontent.com/mnyrop/minicomp-wiki/master/docs/wax_screen.gif" width="500"/>

#### Welcome to the demo repository for the [Minicomp/Wax](https://github.com/minicomp/wax/) minimal exhibition workflow.

The easiest way to **get started** with your own Wax exhibition is **by cloning this repository** and swapping out content, media, styles, and components **to make it your your own**.

Advanced users can check back to find a **Ruby gem / Jekyll theme** with the layouts, includes, and scripts from this demo.

### Issues / Contributing

The canonical source for Wax is the [Minicomp](https://github.com/minicomp/wax/) fork of the project. Please submit issues (bugs, feature requests, questions, etc.) as well as pull requests only to the Minicomp/Wax repository.

### Primary tooling

Wax is a flexible workflow and not a platform. As such, its tooling is more of a dynamic roster than a stack. At its center are __[jekyll](http://jekyllrb.com)__ and __[wax_tasks](https://github.com/minicomp/wax_tasks/)__ (which are both Ruby gems), but the rest of the components
are purely optional depending on what you'd like to do and how you'd like to do it. The following list is by no means exhaustive, but gives an outline of Wax's open source super group:

__For searching/indexing:__
- [elasticlunr.js](http://elasticlunr.com/)

__For IIIF generation/presentation:__
- [wax_iiif gem](https://github.com/minicomp/wax_iiif/) (fork of [iiif_s3]()https://github.com/cmoa/iiif_s3)
- [leaflet.js](http://leafletjs.com/) and [leaflet-iiif.js](https://github.com/mejackreed/Leaflet-IIIF)
- [imagemagick](https://www.imagemagick.org/script/index.php)

__For theming:__
- [jquery](http://jquery.com/)
- [bootstrap4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

__For testing:__
- [rspec gem](http://rspec.info/)
- [html-proofer gem](https://github.com/gjtorikian/html-proofer)
- [capybara gem](http://teamcapybara.github.io/capybara/)
- [travis-ci](https://travis-ci.org/)


### Quick Start

Make sure your system is ready with modern Ruby (>=2.2), git, and ImageMagick installed.

Install Bundler
```sh
$ gem install bundler
```
Clone the repository and change directory into it
```sh
$ git clone https://github.com/minicomp/wax.git && cd wax
```
Install the Ruby Dependencies
```sh
$ bundle install
```
Serve the site locally
```sh
$ bundle exec jekyll serve
```
Check out the [Minicomp Wiki](https://minicomp.github.io/wiki/) to learn how to use and customize the demo components.
