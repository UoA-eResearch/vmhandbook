---
layout: "default"
title: "Home"
---
{% assign linux_admin_posts = site.doclinux | where: "categories","admin" %}
{% assign linux_user_posts = site.doclinux | where: "categories","user" %}
{% assign windows_admin_posts = site.docwindows | where: "categories","admin" %}
{% assign windows_user_posts = site.docwindows | where: "categories","user" %}

## Welcome to CeR {{ site.title }}.

<div id="outer">
  <h3 class="open"> Generic FAQs </h3>
  <div>
    <ul>
    {% for item in site.docgeneric %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>

  <h3>I'm using a <b>Linux</b> Research VM</h3>
  <div id="doclinux">
    <div>
      <h4>I'm an administrator</h4>
      <ul>
      {% for item in linux_admin_posts %}
        <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
      {% endfor %}
      </ul>
      <h4>I'm a normal user</h4>
      <ul>
      {% for item in linux_user_posts %}
        <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
      {% endfor %}
      </ul>
    </div>
  </div>

  <h3>I'm using a <b>Windows</b> Research VM</h3>
  <div id="docwindows">
    <div>
      <h4>I'm an administrator</h4>
      <ul>
      {% for item in windows_admin_posts %}
        <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
      {% endfor %}
      </ul>
      <h4>I'm a normal user</h4>
      <ul>
      {% for item in windows_user_posts %}
        <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
      {% endfor %}
      </ul>
    </div>
  </div>

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

<script src="{{ "/assets/jquery.collapse.js" | absolute_url }}"></script>

<script>

  function div_open() {
    this.slideDown(200);
  };
  function div_close() {
    this.slideUp(200);
  };

  new jQueryCollapse($("#outer"), {
    open: div_open,
    close: div_close,
    query: 'h3'
  });

  new jQueryCollapse($("#doclinux"), {
    open: div_open,
    close: div_close,
    query: 'div h4'
  });

  new jQueryCollapse($("#docwindows"), {
    open: div_open,
    close: div_close,
    query: 'div h4'
  });
</script>
