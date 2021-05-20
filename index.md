---
layout: "default"
title: "Home"
---
{% assign generic_posts = site.doc | where: "categories","generic" %}
{% assign linux_admin_posts = site.doc | where: "categories","admin" | where: "categories","linux" | where: "categories","vmware"%}
{% assign linux_user_posts = site.doc | where: "categories","user" | where: "categories","linux" | where: "categories","vmware"%}
{% assign windows_admin_posts = site.doc | where: "categories","vmware" | where: "categories","windows" | where: "categories","admin"%}
{% assign windows_user_posts = site.doc | where: "categories","user" | where: "categories","windows" | where: "categories","vmware"%}
{% assign nectar_posts = site.doc | where: "categories","nectar" %}

{% assign research_drive_posts = site.doc | where: "categories","drive"| where: "categories","drive"  %}
{% assign dropbox_posts = site.doc | where: "categories","dropbox"| where: "categories","storage"  %}
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

  <h1><u>Virtual Machine Handbook</u></h1>
  <div class="accordion">
    <h3>I'm using a <b>Linux</b> Research VM</h3>
    <div id="doclinux">
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

  <h3>I'm using a <b>Windows</b> Research VM</h3>
  <div id="docwindows">
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

  <h3>I'm using a <b>Nectar</b> VM</h3>
  <div id="docnectar">
    <ul>
    {% for item in nectar_posts %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>
  </div>
    
  <h2><u>Data Handbook</u></h2>
  <div class="accordion">
      <h3>I'm using a <b>Research Drive</b> </h3>
      <div id="docdrive">
          <ul>
          {% for item in research_drive_posts %}
            <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
          {% endfor %}
          </ul>
        </div>

  <h3>I'm using <b>Dropbox</b></h3>
  <div id="docdropbox">
    <ul>
    {% for item in dropbox_posts %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>
  </div>

  </div>



<script>
 $( function() {
    $( ".accordion" ).accordion();
  } );
  </script>

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
