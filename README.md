# minicomp/wax 🐝

[![Gem Version](https://badge.fury.io/rb/wax_theme.svg)](https://badge.fury.io/rb/wax_theme)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![CI:Test](https://github.com/minicomp/wax/workflows/ci:test/badge.svg)](https://github.com/minicomp/wax/actions?query=workflow%3Aci%3Atest)
[![Depfu](https://badges.depfu.com/badges/9d4da973f2cd2680c11ca34738c2dfb2/overview.svg)](https://depfu.com/github/minicomp/wax?project_id=10550)
[![Gem Downloads](https://img.shields.io/gem/dt/wax_theme.svg?color=046d0b)](https://badge.fury.io/rb/wax_theme)
[![Join the chat the minicomp-wax channel of the Code4Lib Slack](https://img.shields.io/badge/Slack-%23minicomp--wax-brightgreen.svg)](https://docs.google.com/forms/d/e/1FAIpQLSeD77mBp0Y13mFePF8UmDwFrlbxNx3VttEjz_3dgglJeK-Zbg/viewform?c=0&w=1)
![License](https://img.shields.io/github/license/minicomp/wax_tasks.svg?color=c6a1e0)





__Wax is an extensible workflow for producing scholarly exhibitions with minimal computing principles.__<br>
It's comprised of: __a few Ruby gems__ for processing image data and associated metadata ([wax_tasks](https://github.com/minicomp/wax_tasks/), [wax_iiif](https://github.com/minicomp/wax_iiif/)), __a Jekyll theme__ ([wax_theme](https://github.com/minicomp/wax/)), and (hopefully soon!) a lot of __documentation and recipes__ for creating, deploying, and maintaining digital exhibitions.


- [Prerequisites](#Prerequisites)
- [Getting Started](#Getting-Started)
- [Using Docker](#Using-Docker)
- [Contributing](#Contributing)

<br>

<a href="https://minicomp.github.io/wax/">
  <img src="https://raw.githubusercontent.com/minicomp/wiki/main/src/assets/wax_screen.gif?raw=true"/>
</a>

<br>

# Prerequisites


You'll need `git` and `ruby >= 3.2` with `bundler` installed.
These dependencies can either be installed natively on your system or within a [Docker environment](#Using-Docker). For instructions, check the Wiki's [Setting up your system page](https://minicomp.github.io/wiki/wax/setting-up-your-system/).

Check your versions with:

```sh
ruby -v
```

``` sh
bundler -v
```

To process images, you will also need to have ImageMagick and Ghostscript installed and functional. You can check to see if you have ImageMagick by running:

```sh
convert -version
```

... and check Ghostscript with:
``` sh
gs -version
```

Vips will soon replace ImageMagick for Wax's image processing. If you're ahead of the curve, you can check your version with

``` sh
vips -v
```

# Getting Started

__There are a few ways to get started with Wax, depending on your needs.__ Copyin the demo template is suggested for new users so you can see how a full Wax site would work. __Advanced Jekyllers__ can start from a clean Jekyll install. To start with the demo:

1. Log into your [GitHub account](https://github.com/). (Or sign up if you don't have one!)

2. Head to the [Wax demo page](https://github.com/) and click **"Use this Template"** button. It will prompt you to create a copy of the repository in your own account. You should name it after the collection or exhibition you'll make, since this name will inform your free URL for the project with GitHub. For this example, our repository is called **"my-wax-site"**.

3. On your own, new Wax repository page, click the Green **"Code"** button and copy the URL it provides to your clipboard, e.g,
  ```sh
  git@github.com:mnyrop/my-wax-site.git
  ```

4. Open your Terminal/Shell application and change directory into where you'd like to work on your project, e.g., your Desktop:
  ```sh
  cd ~/Desktop
  ```

5. Run the `git clone` command plus the link you copied on your clipboard in one line, e.g.,
  ```sh
  git clone git@github.com:mnyrop/my-wax-site.git
  ```

6. When the clone is complete, change directory into your newly cloned project folder, in our case:
  ```sh
  cd my-wax-site
  ```

7. Install the project-specific Ruby dependencies by running the command
  ```sh
  bundle install
  ```

8. Run the demo site:
  ```sh
  bundle exec jekyll serve
  ```

After the last step, the terminal will provide you with a localhost URL for you to see your local copy of the site on your browser. This is the template site you will make changes to in order to make your own exhibition. For more, check out the [Minicomp/Wax Wiki](https://minicomp.github.io/wiki/wax/).


# Using Docker

To use Wax in a container, make sure you are familiar with Docker and have [Docker installed](https://docs.docker.com/get-docker/).

Run the "Getting Started" steps 1-6 above to copy and `cd` into the repo.  

Next, build the `minicomp/wax` base image:
```
docker build -t minicomp/wax .
```

You will run all of the Wax tasks and commands within an interactive bash container, which you can create and access by running:
```
docker run -it --rm -v "$PWD":/wax --name wax -p 4000:4000 minicomp/wax bash
```

To serve the site, you can run the following command in the guest container and view it in your host browser:
```
bundle exec jekyll serve --host 0.0.0.0
```

You can exit the container at any time with `$ exit`, which will automatically stop and remove the container.

# Contributing

We welcome contributions to Wax, including bug reports and feature requests (submitted as [Issues](https://github.com/minicomp/wax/issues)), code contributions (submitted as [Pull Requests](https://github.com/minicomp/wax/pulls)), and documentation updates (submitted however!) Not sure where to start? Feel free to get in touch via [GitHub issue](https://github.com/minicomp/wax/issues) or grab an invite to join the conversation on the `#minicomp-wax` channel of the [Code4Lib Slack](https://docs.google.com/forms/d/e/1FAIpQLSeD77mBp0Y13mFePF8UmDwFrlbxNx3VttEjz_3dgglJeK-Zbg/viewform?c=0&w=1).
