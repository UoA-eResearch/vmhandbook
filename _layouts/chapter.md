Here's the layout I used (in _layouts/chapter.html):

---
layout: default
---

<h1>Chapter {{ page.chapter }}</h1>

{% for section in site.sections %}
{% if section.chapter == page.chapter %}
{{ section.output }}
{% endif %}
{% endfor %}
