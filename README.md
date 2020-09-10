# minicomp/wax 🐝

[![Gem Version](https://badge.fury.io/rb/wax_theme.svg)](https://badge.fury.io/rb/wax_tasks)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.com/minicomp/wax.svg?branch=main)](https://travis-ci.com/minicomp/wax)
[![Depfu](https://badges.depfu.com/badges/9d4da973f2cd2680c11ca34738c2dfb2/overview.svg)](https://depfu.com/github/minicomp/wax?project_id=10550)
[![Gem Downloads](https://img.shields.io/gem/dt/wax_theme.svg?color=046d0b)](https://badge.fury.io/rb/wax_theme)
[![Join the chat at https://gitter.im/minicomp/wax](https://badges.gitter.im/minicomp/wax.svg)](https://gitter.im/minicomp/wax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![License](https://img.shields.io/github/license/minicomp/wax_tasks.svg?color=c6a1e0)





__Wax is an extensible workflow for producing scholarly exhibitions with minimal computing principles.__<br>
It's comprised of: __a few Ruby gems__ for processing image data and associated metadata ([wax_tasks](https://github.com/minicomp/wax_tasks/), [wax_iiif](https://github.com/minicomp/wax_iiif/)), __a Jekyll theme__ ([wax_theme](https://github.com/minicomp/wax/)), and (hopefully soon!) a lot of __documentation and recipes__ for creating, deploying, and maintaining digital exhibitions.


- [Prerequisites](#Prerequisites)
- [Getting Started](#Getting-Started)
- [Using Docker](#Using-Docker)
- [Contributing](#Contributing)

<br>

<a href="https://minicomp.github.io/wax/">
  <img src="https://github.com/minicomp/wiki/raw/main/assets/wax_screen.gif?raw=true"/>
</a>

<br>

# Prerequisites


You'll need `git` and `ruby >= 2.4` with `bundler` installed.
These dependencies can either be installed natively on your system or within a [Docker environment](#Using-Docker). For instructions, check the Wiki's [Installation Guide](https://minicomp.github.io/wiki/wax/system-requirements/installation-guide/).

Check your versions with:

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

__There are a few ways to get started with Wax, depending on your needs.__ Downloading the demo is suggested for new users so you can see how a full Wax site would work. __Advanced Jekyllers__ can start from a clean Jekyll install. To start with the demo:

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

6. Install the gems (not required if using Docker):
    ```sh
    bundle install
    ```

7. Run the demo site:
    ```sh
    bundle exec jekyll serve
    ```

After the last step, the terminal will provide you with a localhost URL for you to see your local copy of the site on your browser. This is the template site you will make changes to in order to make your own exhibition. For more, check out the [Minicomp/Wax Wiki](https://minicomp.github.io/wiki/wax/).


# Using Docker

To use Wax in a container, make sure you are familiar with Docker and have [Docker installed](https://docs.docker.com/get-docker/).

Run the "Getting Started" steps 1-5 above to copy and `cd` into the repo.  

Next, build the `wax_image` base image:
```
$ docker build -t ubuntu/wax .
```

You will run all of the Wax tasks and commands within an interactive bash container, which you can create and access by running:
```
$ docker run -it --rm -v "$PWD":/wax --name wax -p 4000:4000 ubuntu/wax bash
```

To serve the site, you can run the following command in the guest container and view it in your host browser:
```
$ bundle exec jekyll serve --host 0.0.0.0 --incremental --force-polling
```

You can exit the container at any time with `$ exit`, which will automatically stop and remove the container.

# Contributing

We welcome contributions to Wax, including bug reports and feature requests (submitted as [Issues](https://github.com/minicomp/wax/issues)), code contributions (submitted as [Pull Requests](https://github.com/minicomp/wax/pulls)), and documentation updates (submitted however!) Not sure where to start? Feel free to get in touch via [GitHub issue](https://github.com/minicomp/wax/issues) or [Gitter chat](https://gitter.im/minicomp/wax).
