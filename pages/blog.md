---
layout: default
title: Blog
permalink: /blog/
---

<div style="display: flex; justify-content: space-between; align-items: center;">
  <a href="/blog/" class="terminal-btn-title">[Blogs]</a>
  <a href="/" class="terminal-btn">[Home]</a>
</div><div class="terminal-divider"></div>



<ul>
  {% for post in site.blog %}
    <li>
      <a style="font-size: 1.2rem;" class="terminal-btn" href="{{ post.url }}">{{ post.title }}</a> 
      <span style="color: #888; font-size: 1rem;">  - - {{ post.date | date: "%b %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>


<div class="terminal-divider"></div>

