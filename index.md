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
{% assign transcribedesktop_posts = site.doc | where: "categories", "transcribedesktop" %}

{% assign research_drive_posts = site.doc | where: "categories","drive" %}
{% assign dropbox_posts = site.doc | where: "categories","dropbox" %}
{% assign announcement_posts = site.doc | where: "categories","announcement" %}


## Welcome to the {{ site.title }}.

<div id="outer">
  <h3><u> Generic FAQs </u></h3>
  <div id="generic">
    <ul>
    {% for item in generic_posts %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>
  <h3><u>Virtual Machine Handbook</u></h3>
  <div style="margin-left:20px;" id="vmhandbook">
    <h3>I'm using a <b>Linux</b> Research VM</h3>
    <div class="expandable" id="doclinux" style="margin-left:20px;">
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
  <div class="expandable" id="docwindows" style="margin-left:20px;">
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

  <h3>I'm using a <b>Nectar</b> VM</h3>
  <div class="expandable" id="docnectar">
    <ul>
    {% for item in nectar_posts %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>
  </div>



  <h3><u>Data Handbook</u></h3>
    <div style="margin-left:20px;" id="datahandbook">
      <h3>I'm using a <b>Research Drive</b> </h3>
      <div class="expandable" id="docdrive">
        <div>
          <ul>
          {% for item in research_drive_posts %}
            <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
          {% endfor %}
          </ul>
        </div>
      </div>

  <h3>I'm using <b>Dropbox</b></h3>
  <div class="expandable" id="docdropbox">
    <ul>
    {% for item in dropbox_posts %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>
  </div>

  <h3><u>Transcription using AI</u></h3>
    <div id="transcribedesktop">
      <ul>
      {% for item in transcribedesktop_posts %}
        <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
      {% endfor %}
      </ul>
    </div>

  <h3><u> Announcements </u></h3>
  <div id="generic">
    <ul>
    {% for item in announcement_posts %}
      <li> <a href="{{ item.url | relative_url}}">{{ item.title | escape }}</a></li>
    {% endfor %}
    </ul>
  </div>

  </div>

<aside style="font-size: 8pt;"> this document last updated <span id="last_updated"> </span></aside>



<script src="{{ "/assets/jquery.collapse.js" | absolute_url }}"></script>

<script>

  jQuery(document).ready(function($) {
    // find parent div of the current hash and open it
    $(location.hash).parent().slideDown(200);
    $(location.hash).slideDown(200);
  });

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

  $("#outer").bind("opened", function(e, section) {
    location.hash = section.$details[0].id;
  });

  // new jQueryCollapse($("#doclinux"), {
  //   open: div_open,
  //   close: div_close,
  //   query: 'div h4'
  // });

  // new jQueryCollapse($("#docwindows"), {
  //   open: div_open,
  //   close: div_close,
  //   query: 'div h4'
  // });
  document.getElementById("last_updated").textContent = new Date(document.lastModified).toLocaleDateString('en-nz');


</script>
