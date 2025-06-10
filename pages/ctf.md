---
layout: default
title: CTF Writeups
permalink: /ctf/
---

<div style="display: flex; justify-content: space-between; align-items: center;">
  <a href="/ctf/" class="terminal-btn-title">[Ctf Writeups]</a>
  <a href="/" class="terminal-btn">[Home]</a>
</div><div class="terminal-divider"></div>



<ul>
  {% for post in site.ctf %}
    <li>
      <a style="font-size: 1.2rem;" class="terminal-btn" href="{{ post.url }}">{{ post.title }}</a> 
      <span style="color: #888; font-size: 1rem;">  - - {{ post.date | date: "%b %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>


<div class="terminal-divider"></div>

