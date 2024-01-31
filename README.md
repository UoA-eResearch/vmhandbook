# vmhandbook

This repository contains the user manual for CeR research virtual machines, which is a Jekyll based static website. It can be hosted on either Github pages or any hosts with a HTTP server.
The site is currently hosted on [Github pages](https://uoa-eresearch.github.io/vmhandbook/).


## I. Setting up this site locally with Jekyll

Editing markdown files online using Github directly is possible, but it's recommended to setup a local copy to preview the changes before committing. 

### 1. Install ruby

#### macOS

On macOS, do **NOT** use the built-in ruby. Install via `brew` to avoid permission errors.

You might also want to check the version of packages used by Github. form [here](https://pages.github.com/versions/).

Do **NOT** use the latest version of ruby, which might have depedency issues.

#### Ubuntu

On Ubuntu, follow [Jekyll on Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)
You may need to set up the symbolic link:

```bash
    sudo ln -s /usr/bin/jekyll /usr/share/rubygems-integration/all/specifications/exe/jekyll
```

to get jekyll working.

### 2. Install Bundler

```bash
gem install bundler
```

### 3. Clone this repository

### 4. Install Jekyll and other dependencies

```bash
cd vmhandbook
bundle install
```

### 5. Build your local Jekyll site

```bash
bundle exec jekyll serve
```

## II. Content editing

### 1. Directory structures

```bash
├── Gemfile         # Ruby dependencies
├── Gemfile.lock    # Generated by bundler
├── README.md       # This file
├── _config.yml     # Jekyll configurations
├── _doc            # A Jekyll collection for all articles
├── _includes       # Customised parts of the theme 
├── _site           # Jekyll outputs
├── assets          # Static files like images, JS/CSS files.
│   └── main.scss   # Customised CSS of the theme
└── index.md        # Home page
```

Jekyll uses the [Liquid](https://shopify.github.io/liquid/) template language to process markdown files. Therefore, the markdown files in Jekyll don't purely follow markdown syntax, but are mixtures of:
- liquid templating language, 
- kramdown syntax
- YAML front matter block
- possible nested HTML

Jekyll organises content with posts, pages and collections. This website mainly uses **collections** to organise articles. The decision is made based according to this article: [When to use a post, a page, or a collection](https://ben.balter.com/2015/02/20/jekyll-collections/#when-to-use-a-post-a-page-or-a-collection)


### 2. Adding a new article

To add a new article, create a new `*.md` file under `_doc` collection. articles under this folder will be automatically listed on the home page.

Jekyll requires every file that need to be processed begin with a [front matter](https://jekyllrb.com/docs/frontmatter/)

```
---
layout: post
title: Blogging Like a Hacker
categories: windows admin user tshoot
tags: login 2fa
---
```

The current template only uses `title` and `categories`. The default value of `layout` has been assigned to `page` in `_config.yml`.

Articles are grouped by categories. Inspired by [Microsoft MSDN Knowledge Base](https://support.microsoft.com/en-gb/help/242450/how-to-query-the-microsoft-knowledge-base-by-using-keywords-and-query) articles. The classification should be *complete*, and *orthogonal*. Hence we categorise all articles into three dimensions:

![useful image](categories.png)

For each of the dimension, choose from the following category:

- **VM OS**: windows | linux | generic
- **user role**: admin | user
- **article type**: howto | tshoot 

### 3. URLs in the article

To avoid hard coding, the URLs of resources(internal links, images, css/js files) must be represented with liquid template language. 

E.g., to include images in the article, firstly create a new folder `assets/<collection name>/<article name>` and put all images under this folder. Then, the image can be referenced in the corresponding article with:

```markdown
![useful image]({{ "/assets" | append: page.id | append: "/screenshot2.png" | absolute_url }})
```


### 4. kramdown Syntax

Jekyll uses [kramdown](https://kramdown.gettalong.org) as the markdown render engine, which is a superset of the standard Markdown.

### 5. Theme Customisation

This site uses [minima](https://github.com/jekyll/minima), which is the default theme of Jekyll, as the base theme with several minor customisations.

### 6. Search

[Tipue search](https://github.com/Tipue/Tipue-Search) is enabled on this site. By default, all articles in `_doc` folder will be indexed during Jekyll build time. To exclude articles from being indexed, please refer to [Jekyll Tipue Search](https://github.com/jekylltools/jekyll-tipue-search)


## III. Useful links

- [kramdown Syntax](https://kramdown.gettalong.org/syntax.html)
- [Using Jekyll as a static site generator with GitHub Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)

