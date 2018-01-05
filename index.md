---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

Welcome to our reasearch virtual machine handbook.

### Linux VM

{% for item in site.doclinux %}
  -[{{ item.title | escape }}]({{ item.url | relative_url}})
{% endfor %}

### Windows VM

{% for item in site.docwindows %}
  -[{{ item.title | escape }}]({{ item.url | relative_url}})
{% endfor %}


### Generic FAQs

{% for item in site.docgeneric %}
  -[{{ item.title | escape }}]({{ item.url | relative_url}})
{% endfor %}
