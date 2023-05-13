A website collating my writing. It covers a lot of different subjects! Animation, physics, programming, short stories, commentary on fiction - new categories spinning up as needed. It's built on Jekyll, but everything on top is completely custom. The site can be viewed at [canmom.art](https://canmom.art).

## Structure
The splash page acts as an index into all the different articles on the site, displaying the most recent few articles in each category.

Most of the site's content is in `_posts`, using excerpts to contain short descriptions for listing pages. Since a lot of the content was originally published on Tumblr, there is facility for 'originally posted' links. I use [this hacky Python script](https://github.com/canmom/tumblr2jekyll) to extract articles from Tumblr and reformat them in a Jekyll-friendly way. The categories determine the final URL of the page.

Category names are identified in categories.yml. Category pages use the full path to select pages, so for example /crit/comics (critical writing about comics) is a distinct category from /comics (comics I've made).

Tags are used to organise pages into series. It's not currently possible to get a full listing of pages with a tag, but within articles you can navigate through the series in chronological order.

The `page` template is a common header, from which `article` and `category` descend. There are also a couple of layouts used for things like fiction. And a whole bunch of includes for convenience in making figures or inserting Youtube videos.

The pages are designed to be responsive and transition between mobile and desktop layouts at two width breakpoints.

Comments are provided by [Staticman](https://staticman.net/). The comments form submits an HTTP POST request to the Staticman program running on a free [Fly.io](https://fly.io/) service which performs minimal but effective spam filtering (the bots cannot resist that honeypot!) and then submits a pull request to this repository so I can choose to accept or reject the comment. Comments are stored as YAML data files in `_data/comments`, organised by the slugified path to the post. When the site is built, the `comments.md` include collects these data files and formats them. There is no accounts system, but comments can provide a tripcode which will be MD5-hashed and displayed by their name.

I try to keep pages clean with minimal clutter and fairly large font sizes, and as much as possible I've tried to make the site's formatting correct, semantic HTML5. For example, I try to use `<cite>` and `<i>` tags as appropriate instead of just `<em>`, and properly use `<article>`, `<main>`, `<section>` etc. I've also given alt text to nearly every image on the site, so it should be very friendly to screen readers. The only exception is the <cite>Animation Night</cite> series, where I have not yet been able to find the time and energy to describe all the hundreds of gifs used to illustrate the series.

## Testing locally
Running Jekyll requires [Ruby](https://ruby-doc.org/).

To set up, clone the repository and run `bundle install` (assuming you already have Ruby and Bundler installed).

To run a local server, run `bundle exec jekyll serve`.

# Third party resources

[Mathjax](https://www.mathjax.org/) is used to format LaTeX equations.

The [Lato](http://www.latofonts.com/) font is used for headers, and [Linux Libertine](http://linuxlibertine.org/) for body text. Both are provided as webfonts in `fonts`. There are many images from various works which I believe to be fair use (criticism and commentary). Google web fonts are used for Japanese text. Images are hosted in the repo, with the exception of the gifs in 'Animation Night', which are hotlinked from Tumblr because of space limits.

A set of favicons were generated with [RealFaviconGenerator](https://realfavicongenerator.net/).
