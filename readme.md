A website collating various pieces of writing from the last few years, including writing about physics and programming, and livereads of various works of fiction.

## Structure
The splash page presently indexes content that may be of interest to employers.

Most of the site's content is in `_posts`, using excerpts to contain short descriptions for listing pages. Since a lot of the content was originally published on Tumblr, there is facility for 'originally posted' links. Categories are considered a higher-level grouping than tags, which are used to make it easy to read a series of articles in sequence.

Jekyll has no native concept of a hierarchy of categories, so subcategories are implemented by using the name of the category as an index into a list of category paths in `_data/categories.yml`. This means that, for example, the `uj` category corresponds to `livereads/uj`.

Outside of `_posts`, the `physics` and `livereads` folders (and their subfolders) contain automatically generated category index pages, usually containing only frontmatter for the `category` template. The exception is the `livereads` index, which draws its data from `_data/livereads.yml`.

All pages on the site except the front page support MathJax. The `page` template is a common header, from which `article` and `category` descend.

## Testing locally
Running Jekyll requires [Ruby](https://ruby-doc.org/). No modules are used except the `github-pages` [gem](https://github.com/github/pages-gem).

To set up, clone the repository and run `bundle install` (assuming you already have Ruby and Bundler installed).

To run a local server, run `bundle exec jekyll serve`.

# Third party resources

The [Lato](http://www.latofonts.com/) font is used for headers, and [Linux Libertine](http://linuxlibertine.org/) for body text. Both are provided as webfonts in `fonts`. Some articles include attributed images from other sites.

A set of favicons were generated with [RealFaviconGenerator](https://realfavicongenerator.net/).