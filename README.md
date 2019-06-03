# minicomp/wax 🐝
[![Gem Version](https://badge.fury.io/rb/wax_theme.svg)](https://badge.fury.io/rb/wax_tasks) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Build Status](https://travis-ci.org/mnyrop/wax.svg?branch=master)](https://travis-ci.org/minicomp/wax) [![Join the chat at https://gitter.im/minicomp/wax](https://badges.gitter.im/minicomp/wax.svg)](https://gitter.im/minicomp/wax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) ![License](https://img.shields.io/github/license/minicomp/wax_tasks.svg?color=c6a1e0) 





__Wax is an extensible workflow for producing scholarly exhibitions with minimal computing principles.__<br>
It's comprised of: __a few Ruby gems__ for processing image data and associated metadata ([wax_tasks](https://github.com/minicomp/wax_tasks/), [wax_iiif](https://github.com/minicomp/wax_iiif/)), __a Jekyll theme__ ([wax_theme](https://github.com/minicomp/wax/)), and (hopefully soon!) a lot of __documentation and recipes__ for creating, deploying, and maintaining digital exhibitions.


- [Prerequisites](#Prerequisites)
- [Getting Started](#Getting-Started)

<br>

<a href="https://minicomp.github.io/wax/">
  <img src="https://raw.githubusercontent.com/minicomp/wiki/master/assets/wax_screen.gif"/>
</a>

<br>

# Prerequisites


You'll need `Ruby >= 2.4` with `bundler` installed. Check your versions with:

```bash
$ ruby -v
  ruby 2.4.5p335 (2018-10-18 revision 65137) [x86_64-darwin18]

$ bundler -v
  Bundler version 2.0.1
```

To process images, you will also need to have ImageMagick and Ghostscript installed and functional. You can check to see if you have ImageMagick by running:

```bash
$ convert -version
  Version: ImageMagick 6.9.9-20 Q16 x86_64 2017-10-15 http://www.imagemagick.org
  Copyright: (c) 1999-2017 ImageMagick Studio LLC
```

... and check Ghostscript with:
```bash
$ gs -version
  GPL Ghostscript 9.21 (2017-03-16)
  Copyright (C) 2017 Artifex Software, Inc.  All rights reserved.
```


# Getting Started

__There are a few ways to get started with Wax, depending on your needs.__ Cloning the demo is suggested for new users so you can see how a full Wax site would work. __Advanced Jekyllers__ can start from a clean Jekyll install.

### Option 1: Clone the demo

1. Change directory into where you'd like your site, e.g., your Desktop:
    ```sh
    cd ~/Desktop
    ```
2. Clone this repository
    ```sh
    git clone https://github.com/minicomp/wax.git
    ```
3. Change directory into the site repository and install the dependencies:
    ```sh
    cd wax
    bundle install
    ```
4. Serve the site locally
    ```sh
    bundle exec jekyll serve
    ```
#### Option 2: Start from scratch (Advanced)

1. Make a new Jekyll site and cd into it:
  ```sh
  jekyll new ~/Desktop/wax_site
  cd ~/Desktop/wax_site
  ```
2. Add this line to your Jekyll site's Gemfile:
  ```sh
  gem "wax_theme"
  ```
3. And add this line to your Jekyll site's \_config.yml:
  ```sh
  theme: wax_theme
  ```
4. Install the dependencies:
  ```sh
  bundle install
  ```
5. Serve the site locally
  ```sh
  bundle exec jekyll serve
  ```

 When the demo site is serving correctly you're ready to swap in your own content and configuration to make your own exhibition site.
