---
layout: "default"
title: "Home"
---
{% assign generic_posts = site.doc | where: "categories","generic" %}
{% assign linux_admin_posts = site.doc | where: "categories","admin" | where: "categories","linux" %}
{% assign linux_user_posts = site.doc | where: "categories","user" | where: "categories","linux" %}
{% assign windows_admin_posts = site.doc | where: "categories","admin" | where: "categories","windows" %}
{% assign windows_user_posts = site.doc | where: "categories","user" | where: "categories","windows" %}
{% assign nectar_posts = site.doc | where: "categories","nectar" %}

{% assign research_drive_posts = site.doc | where: "categories","drive" %}
{% assign dropbox_posts = site.doc | where: "categories","dropbox" %}


## Welcome to the {{ site.title }}.

<div id="outer">
<section id="generic">
  <h3 class="open"><u> Generic FAQs </u></h3>
  <div>
    <ul>
    {% for item in generic_posts %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>
  </section>

  <h2 id="vm"><u>Virtual Machine</u></h2>
  <div class="accordion">
    <h3>I'm using a <b>Linux</b> Research VM</h3>
    <div class="nested_accordion" id="doclinux">
        <h4>I'm an administrator</h4>
        <div class="re_nested_accordion">
            {% for item in linux_admin_posts %}
                <h5> {{ item.title}}</h5>
                <section>{{ item.content| markdownify }}</section>
            {% endfor %}
        </div>
        <h4 >I'm a normal user</h4>
        <div class="re_nested_accordion">
            {% for item in linux_user_posts %}
                <h5> {{ item.title }} </h5>
                <section>{{ item.content| markdownify }}</section>
            {% endfor %}
        </div>
      </div>

  <h3>I'm using a <b>Windows</b> Research VM</h3>
  <div id="docwindows" class="nested_accordion">
      <h4>I'm an administrator</h4>
      <div class="re_nested_accordion">
            {% for item in windows_admin_posts %}
                <h5> {{ item.title}}</h5>
                <section>{{ item.content| markdownify }}</section>
            {% endfor %}
      </div>
      <h4>I'm a normal user</h4>
      <div class="re_nested_accordion">
            {% for item in windows_user_posts %}
                <h5> {{ item.title}}</h5>
                <section>{{ item.content| markdownify }}</section>
            {% endfor %}
      </div>
    </div>

  <h3>I'm using a <b>Nectar</b> VM</h3>
  <div id="docnectar" class="nested_accordion">
      <div class="re_nested_accordion">
        {% for item in nectar_posts %}
            <h5> {{ item.title}}</h5>
            <section>{{ item.content| markdownify }}</section>
        {% endfor %}
     </div>
  </div>
  </div>

  <h2 id="data"><u>Data </u></h2>
  <div class="accordion">
      <h3>I'm using a <b>Research Drive</b> </h3>
      <div id="docdrive" class="re_nested_accordion">
          {% for item in research_drive_posts %}
            <h5> {{ item.title}}</h5>
            <section>{{ item.content| markdownify }}</section>
          {% endfor %}
     </div>

  <h3>I'm using <b>Dropbox</b></h3>
  <div id="docdropbox" class="re_nested_accordion">
    {% for item in dropbox_posts %}
            <h5> {{ item.title}}</h5>
            <section>{{ item.content| markdownify }}</section>
    {% endfor %}
  </div>
  </div>

  </div>



<script src="{{ "/assets/jquery.collapse.js" | absolute_url }}"></script>

<script>

/*
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

  new jQueryCollapse($("#linux"), {
    open: div_open,
    close: div_close,
    query: 'div h4'
  });

  new jQueryCollapse($("#windows"), {
    open: div_open,
    close: div_close,
    query: 'div h4'
  });
  */
$(".accordion").accordion({ collapsible: true, active: false});
</script>
