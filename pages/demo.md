---
layout: wax/page
title: How was this Wax site made?
permalink: /demo/
---

1. Items were curated into a collection.
2. Collection metadata was catalogued and normalized into a CSV file.
3. Collection image data was organized and renamed.
4. The demo Wax Jekyll site was downloaded from GitHub.
5. Collection metadata and image data were put into the site's `_data` folder.
6. The `_config.yml` file was updated to fit the needs of the site and the collection.
7. Ruby was configured on the computer.
8. `bundle install` was run to download the dependencies, including `wax_tasks`.
9. `bundle exec rake wax:derivatives:iiif qatar` was run to create the IIIF image derivatives.
10. `bundle exec rake wax:pagemaster qatar` was run to create pages for each collection item from the metadata records.
11. `bundle exec rake wax:lunr` was run to create a search index for the site. It was run with the option `UI=true` after it to create a default search UI for the site to use as well.
12. The site was built and served locally with the command `bundle exec jekyll serve`.
13. Changes were made to the style and content of the site (adding banners, galleries, information pages, etc.)
14. The site was pushed to GitHub.
15. GitHub was set up to host the site for free on GitHub pages.
