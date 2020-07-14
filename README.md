# minicomp/wax 🐝
[![Gem Version](https://badge.fury.io/rb/wax_theme.svg)](https://badge.fury.io/rb/wax_tasks)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.com/minicomp/wax.svg?branch=master)](https://travis-ci.com/minicomp/wax)
[![Depfu](https://badges.depfu.com/badges/9d4da973f2cd2680c11ca34738c2dfb2/overview.svg)](https://depfu.com/github/minicomp/wax?project_id=10550)
[![Gem Downloads](https://img.shields.io/gem/dt/wax_theme.svg?color=046d0b)](https://badge.fury.io/rb/wax_theme)
[![Join the chat at https://gitter.im/minicomp/wax](https://badges.gitter.im/minicomp/wax.svg)](https://gitter.im/minicomp/wax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![License](https://img.shields.io/github/license/minicomp/wax_tasks.svg?color=c6a1e0) 





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

__There are a few ways to get started with Wax, depending on your needs.__ Downloading the demo is suggested for new users so you can see how a full Wax site would work. __Advanced Jekyllers__ can start from a clean Jekyll install.

### Downloading the demo

1. Change directory into where you'd like your site, e.g., your Desktop:
    ```sh
    cd ~/Desktop
    ```
2. Download the zip file from the [wax github repository](https://github.com/minicomp/wax/). The option to download the zip file should be on the button labeled "Clone or download." Your browser will save the file where it normally saves downloads.

3. Move the zip file to the location you will use. In our example, to the Desktop.

4. Unzip the file. This can be done through your operating system graphic user interface, or in the terminal:
    ```sh
    unzip wax-master.zip
    ```
    You can delete the zip file once you're done.

5. Rename the directory and go inside the project folder:
    ```sh
    mv wax-master my-project
    cd wax-master
    ```

6. Install the gems:
    ```sh
    bundle install
    ```
7. Run the demo site:
    ```sh
    bundle exec jekyll serve
    ```
After the last step the terminal will provide you with a localhost URL for you to see your local copy of the site on your browser. This is the site you will make changes to in order to make your own.

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
