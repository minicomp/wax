---
layout: page
title: What is Wax?
permalink: /about/
---

**Wax is an extensible workflow for producing scholarly exhibitions with minimal computing principles.**  
It is comprised of a few Ruby gems, some customizable UI components, and (hopefully soon!) a lot of documentation and recipes for creating, deploying, and maintaining digital exhibitions.

**The exhibition sites created by Wax are static.**  
This means they consist of flat HTML, CSS, and JavaScript files that don't need to communicate in a complex way back to a server. This makes them cheaper, safer, and generally easier to maintain—as long as you're willing to learn some new skills.

**The skills needed to create Wax sites are agnostic.**  
This means they are largely transferable for use in other digital projects. 'Learning Wax' does not mean learning how to use a platform. It involves learning the fundamentals of web development, data management, and [plain text editing](https://zapier.com/blog/beginner-ultimate-guide-markdown/) while leveraging a few great open source libraries and frameworks along the way.

**Wax keeps the collection presentation separate from the collection data.**  
The Wax workflow starts with making standardized image files and metadata records and builds around them, handling canonical information, scholarly content, and site styling differently and deliberately. This makes it easier for you or others to reuse and reimagine your collection data in other contexts.

## Who is Wax for?

Wax was created for individuals and groups who either don't have or don't want to use a lot of resources to create their scholarly exhibitions. It's best suited for folks who are willing to take on some technical responsibility in exchange for a lot of flexibility.

For beginners, Wax has a relatively high, but general-purpose learning curve. To get the most out of Wax, you should have some familiarity with:

- Using an interactive shell (e.g., Bash/Terminal) to install and interact with programs, files, and directories on your local computer.
- Using Git and GitHub to version control and collaborate on projects.
- Using Jekyll to generate static sites.
- Creating and normalizing data files (e.g., CSVs, JSOM, YAML)
- Using file-naming conventions and best practices.
- Editing HTML, CSS, and some JavaScript.

**However, Wax is also great for teaching the skills above!** For examples of digital humanities pedagogy via the creation of Wax exhibitions, check out [this workshop](https://library.columbia.edu/news/events/event.html?guid=CAL-00bb9e25-6667531c-0166-695e8946-00001777events%40columbia.edu&returnlinkurl=/content/libraryweb/research/workshops&returnlinktext=Workshops), [this GitHub repository](https://github.com/stylerevolution/stylerevolution.github.io), or [this custom Wax site](https://stylerevolution.github.io/).


## So what does Wax *look like?*

Below is a diagram to give you a zoomed-out view. In summary, you create a file of metadata records for your collection (in CSV, YAML, or JSON format), organize your collection image files, and put both in a Jekyll site folder. After updating your configuration, you run a few command line task to prepare the data and metadata for use by the Jekyll site. Then Jekyll uses special layouts and Wax components to build the exhibition and spits them out as static pages ready to host.

From there, you can run tests on your site to catch errors and decide where and how to put it online with greater flexibility.

<a href="{{ '/img/wax_workflow.jpg' | absolute_url }}">
  <img src="{{ '/img/wax_workflow.jpg' | absolute_url }}"/>
</a>
