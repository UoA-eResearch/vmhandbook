---
layout: "default"
title: "Home"
---

Welcome to our reasearch virtual machine handbook.

### Generic FAQs

{% for item in site.docgeneric %}
  - [{{ item.title | escape }}]({{ item.url | relative_url}})
{% endfor %}

### I'm using a Linux Research VM

{% for item in site.doclinux %}
  - [{{ item.title | escape }}]({{ item.url | relative_url}})
{% endfor %}

### I'm using a Windows Research VM

{% for item in site.docwindows %}
  - [{{ item.title | escape }}]({{ item.url | relative_url}})
{% endfor %}

