A website collating various pieces of writing from the last few years, including writing about physics and programming, and livereads of various works of fiction.

## Structure
The splash page presently indexes content that may be of interest to employers.

Jekyll posts are used in the standard way. Categories are considered a higher-level grouping than tags, which are used to make it easy to read a series of articles in sequence.

All pages on the site except the front page support MathJax. The `page` template is a common header, from which `article` and `category` descend.

## Testing locally
Running Jekyll requires [Ruby](https://ruby-doc.org/). No modules are used except the `github-pages` [gem](https://github.com/github/pages-gem).

To set up, clone the repository and run `bundle install` (assuming you already have Ruby and Bundler installed).

To run a local server, run `bundle exec jekyll serve`.

Developed using the Ubuntu Subsystem for Windows.