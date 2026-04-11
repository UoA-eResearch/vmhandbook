# AGENTS.md — Repository Overview

## What is this repository?

**vmhandbook** is a Jekyll-based static website that serves as the user manual for research computing services provided by the [Centre for eResearch (CeR)](https://www.eresearch.auckland.ac.nz/) at the University of Auckland.

The live site is published via GitHub Pages at:  
**https://uoa-eresearch.github.io/vmhandbook/**

The handbook covers:
- Research Virtual Machines (VMs) — Linux, Windows, and Nectar cloud VMs
- Research Drive (network storage) — mounting, mapping, sharing, and off-campus access
- Dropbox for research — licensing, setup, and collaboration
- NeSI (New Zealand eScience Infrastructure) — SSH login and file transfer from a VM
- AI Transcription tooling (TranscribeDesktop with Vibe and Buzz)
- Generic FAQs and announcements

---

## Technology Stack

| Component | Details |
|-----------|---------|
| Static site generator | [Jekyll](https://jekyllrb.com/) ~3.9 |
| Theme | [Minima](https://github.com/jekyll/minima) (default Jekyll theme, lightly customised) |
| Template language | [Liquid](https://shopify.github.io/liquid/) |
| Markdown renderer | [kramdown](https://kramdown.gettalong.org/) |
| Search | [Tipue Search](https://github.com/jekylltools/jekyll-tipue-search) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| Dependency management | Bundler (`Gemfile`) |

---

## Repository Structure

```
vmhandbook/
├── AGENTS.md              # This file — repo overview for AI agents and contributors
├── README.md              # Developer setup instructions
├── Gemfile                # Ruby gem dependencies (Jekyll, github-pages, etc.)
├── _config.yml            # Jekyll site configuration (title, baseurl, collections, theme, search)
├── index.md               # Home page — lists all articles grouped by category
├── contact.md             # Contact page (email for VM and data queries)
├── search.html            # Tipue search page
├── filter.html            # Experimental article filter page (currently hidden from nav)
├── categories.xml         # Category definitions
├── _doc/                  # Jekyll collection — all handbook articles (Markdown + HTML)
├── _includes/             # Theme overrides (head.html, header.html, footer.html)
└── assets/                # Static files
    ├── main.scss          # Custom CSS overrides for the Minima theme
    ├── jquery.collapse.js # Collapsible section JS used on the home page
    └── logo_long.jpg      # CeR logo
```

---

## Articles (`_doc/` collection)

Every file in `_doc/` is a standalone handbook article. Jekyll processes each file and publishes it as a page.

### Front Matter

Every article **must** begin with a YAML front matter block:

```yaml
---
layout: post
title: "How to do X"
categories: linux admin howto
tags: optional keyword tags
---
```

Only `title` and `categories` are actively used by the site templates. The `layout` defaults to `page` (set in `_config.yml`) so it can be omitted.

### Category System

Articles are tagged with categories drawn from **three orthogonal dimensions**, plus several special-purpose categories:

| Dimension | Allowed values |
|-----------|---------------|
| **VM OS** | `windows` \| `linux` \| `generic` \| `nectar` |
| **User role** | `admin` \| `user` |
| **Article type** | `howto` \| `tshoot` |
| **Special** | `drive` \| `dropbox` \| `announcement` \| `transcribedesktop` \| `mac` |

Multiple categories are space-separated on a single line:

```yaml
categories: linux admin user howto
```

The home page (`index.md`) uses Liquid `where` filters on these categories to group and display articles in collapsible sections.

### Adding a New Article

1. Create a new `.md` file in `_doc/`.
2. Add the required YAML front matter (see above).
3. Write content using [kramdown](https://kramdown.gettalong.org/syntax.html) (a superset of standard Markdown, also supports HTML).
4. For images, place them under `assets/_doc/<article-slug>/` and reference them with:
   ```markdown
   ![alt text]({{ "/assets" | append: page.id | append: "/image.png" | absolute_url }})
   ```
   This avoids hard-coding the `baseurl`.

---

## Local Development

### Prerequisites

- Ruby (do **not** use the system Ruby on macOS; install via Homebrew)
- Bundler

### Setup

```bash
gem install bundler
cd vmhandbook
bundle install
```

### Run Locally

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/vmhandbook/`.

### Notes

- On Ubuntu, you may need to symlink the Jekyll executable — see `README.md` for details.
- Check [https://pages.github.com/versions/](https://pages.github.com/versions/) for the Ruby/gem versions used by GitHub Pages to avoid compatibility issues.

---

## Deployment

The site is deployed automatically by GitHub Pages on every push to the default branch. No CI/CD pipeline configuration is required — GitHub Pages detects the Jekyll project and builds it.

---

## Contact

| Purpose | Contact |
|---------|---------|
| Research VM queries | research-vm@auckland.ac.nz |
| Research data queries | researchdata@auckland.ac.nz |
| Nectar VM support | https://support.ehelp.edu.au/ |
| Physical location | Centre for eResearch, Building 302, Level 5, Room 585, 23 Symonds Street, Auckland |
