---
layout: default
title: prxjwal
---

<style>
  /* --- CONFIGURATION --- */
  :root {
    --bg-color: #0d1117;       /* Github Dark Dimmed / Arch Black */
    --text-main: #c9d1d9;      /* Soft White */
    --text-muted: #8b949e;     /* Grey */
    --accent: #58a6ff;         /* Blue (Links) */
    --prompt: #7ee787;         /* Green (User Prompt) */
    --error: #ff7b72;          /* Red */
  }

  /* --- GLOBAL SETUP --- */
  body {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: 'Fira Code', 'Consolas', monospace; /* Monospace is non-negotiable */
    line-height: 1.5;
    margin: 0;
    padding: 20px;
    font-size: 14px; /* Standard terminal size */
  }

  /* --- LAYOUT UTILS --- */
  .terminal-session {
    max-width: 650px;
    margin: 0 auto;
  }

  /* The Prompt Line: prx@arch:~$ */
  .prompt-line {
    display: flex;
    flex-wrap: wrap; /* Wraps on tiny screens */
    gap: 8px;
    margin-bottom: 10px;
    margin-top: 25px;
  }

  .user-host { color: var(--prompt); font-weight: bold; }
  .directory { color: var(--accent); font-weight: bold; }
  .command { color: var(--text-main); }

  /* --- SECTION 1: NEOFETCH (Avatar + Info) --- */
  .neofetch-output {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    align-items: center;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #30363d;
  }

  .info-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info-line {
    display: flex; 
    gap: 10px;
  }
  
  .info-key { color: var(--text-muted); min-width: 60px; }
  .info-val { color: var(--text-main); }

  /* --- SECTION 2: LINKS (The "ls" output) --- */
  .ls-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); /* Auto-grid */
    gap: 15px;
    padding-left: 10px;
    border-left: 2px solid #30363d; /* Visual guide */
  }

  a.file-link {
    color: var(--accent);
    text-decoration: none;
    display: block;
    padding: 5px 0;
  }
  
  a.file-link:hover {
    text-decoration: underline;
    color: #fff;
  }

  /* --- MOBILE ADJUSTMENTS --- */
  @media screen and (max-width: 600px) {
    body { padding: 15px; }

    /* Stack Neofetch vertically on phone */
    .neofetch-output {
      flex-direction: column; 
      align-items: flex-start; /* Left align looks more "terminal" */
      gap: 15px;
    }

    .avatar {
      width: 100px;
      height: 100px;
      margin-bottom: 5px;
    }

    /* Make links bigger touch targets */
    .ls-grid {
      grid-template-columns: 1fr; /* Single column list */
      gap: 10px;
    }
  }

  /* Blinking Block Cursor */
  .cursor {
    display: inline-block;
    width: 8px;
    height: 15px;
    background: var(--text-muted);
    animation: blink 1s step-end infinite;
    vertical-align: middle;
  }
  @keyframes blink { 50% { opacity: 0; } }

</style>

<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet">

<div class="terminal-session">

  <div class="prompt-line">
    <span class="user-host">prx@arch</span>
    <span class="directory">:~</span>
    <span class="command">$ neofetch</span>
  </div>

  <div class="neofetch-output">
    <img src="/assets/prx.jpg" alt="avatar" class="avatar" />
    
    <div class="info-block">
      <div class="info-line"><span class="info-key">User</span> <span class="info-val">prxjwal</span></div>
      <div class="info-line"><span class="info-key">OS</span>   <span class="info-val">Arch Linux</span></div>
      <div class="info-line"><span class="info-key">Host</span> <span class="info-val">Localhost</span></div>
      <div class="info-line"><span class="info-key">State</span><span class="info-val">Building <a href="https://github.com/Pwnb0x/ZaryaOS" style="color:white; text-decoration:underline;">ZaryaOS</a></span></div>
      <br>
      <div class="info-line" style="color: #58a6ff;">"btw i use arch"</div>
    </div>
  </div>

  <div class="prompt-line">
    <span class="user-host">prx@arch</span>
    <span class="directory">:~</span>
    <span class="command">$ ls -1 ./pages</span>
  </div>

  <div class="ls-grid">
    <a href="/ctf/" class="file-link">> CTF_Writeups</a>
    <a href="/blog/" class="file-link">> Blog</a>
    <a href="/shitpost/" class="file-link">> Shitpost</a>
    <a href="/assets/Resume.pdf" class="file-link" style="color: #ff7b72;">> Resume.pdf</a>
  </div>

  <div class="prompt-line">
    <span class="user-host">prx@arch</span>
    <span class="directory">:~</span>
    <span class="command">$ cat socials.txt</span>
  </div>

  <div style="padding-left: 10px; color: var(--text-muted);">
    [<a href="https://github.com/prxjwal" style="color:inherit;">GitHub</a>] 
    [<a href="#" style="color:inherit;">Twitter</a>] 
    [<a href="#" style="color:inherit;">LinkedIn</a>]
  </div>

  <div class="prompt-line">
    <span class="user-host">prx@arch</span>
    <span class="directory">:~</span>
    <span class="command">$ <span class="cursor"></span></span>
  </div>

</div>
