---
layout: default
title: prxjwal
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=VT323&display=swap" rel="stylesheet">

<style>
  /* --- 1. CONFIGURATION (The Rice) --- */
  :root {
    --bg-color: #050505;
    --term-green: #33ff00;      /* Matrix/Phosphor Green */
    --term-glow: rgba(51, 255, 0, 0.5);
    --accent: #bd93f9;          /* Dracula Purple (for contrast) */
    --text-dim: #666;
    --font-main: 'Fira Code', monospace;
    --font-header: 'VT323', monospace;
  }

  /* --- 2. BASE STYLES --- */
  body {
    background-color: var(--bg-color);
    color: var(--term-green);
    font-family: var(--font-main);
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  /* --- 3. CRT OVERLAY EFFECTS --- */
  body::after {
    content: " ";
    display: block;
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 100;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  /* Text Bloom/Glow */
  .glow {
    text-shadow: 0 0 5px var(--term-glow);
  }

  /* --- 4. THE TERMINAL WINDOW --- */
  .terminal-window {
    width: 100%;
    max-width: 700px;
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid #333;
    box-shadow: 0 0 20px rgba(51, 255, 0, 0.15); /* Green ambient glow */
    position: relative;
    padding-bottom: 20px;
  }

  /* Window Title Bar */
  .title-bar {
    background: #1a1a1a;
    border-bottom: 1px solid #333;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: #888;
  }

  .window-controls {
    display: flex;
    gap: 8px;
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; background: #333; }
  .dot.red { background: #ff5555; }
  .dot.yellow { background: #f1fa8c; }
  .dot.green { background: #50fa7b; }

  /* --- 5. CONTENT LAYOUT --- */
  .terminal-content {
    padding: 25px;
  }

  /* The "Neofetch" Area */
  .fetch-container {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border: 2px solid var(--term-green);
    object-fit: cover;
    /* Pixelate slightly for retro feel */
    image-rendering: pixelated; 
    box-shadow: 0 0 10px var(--term-glow);
  }

  .info-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .info-item { display: flex; gap: 10px; }
  .key { color: var(--accent); font-weight: bold; }
  .val { color: var(--term-green); }

  /* --- 6. COMMAND GRID (Links) --- */
  .cmd-prompt {
    margin-bottom: 15px;
    border-top: 1px dashed #333;
    padding-top: 20px;
    color: #888;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 15px;
  }

  a.grid-item {
    border: 1px solid #333;
    padding: 15px;
    text-align: center;
    color: var(--text-dim);
    text-decoration: none;
    transition: all 0.2s;
    background: rgba(255,255,255,0.02);
  }

  a.grid-item:hover {
    border-color: var(--term-green);
    color: var(--term-green);
    box-shadow: 0 0 10px var(--term-glow);
    background: rgba(51, 255, 0, 0.05);
    transform: translateY(-2px);
  }

  /* --- 7. MOBILE OPTIMIZATION --- */
  @media screen and (max-width: 650px) {
    body { padding: 10px; align-items: flex-start; }
    
    .fetch-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .avatar { width: 120px; height: 120px; }
    
    .info-item { 
      justify-content: center; /* Center text on mobile */
    }
    
    .grid-container {
      grid-template-columns: 1fr; /* Full width buttons on phone */
    }
  }

</style>

<div class="terminal-window">
  
  <div class="title-bar">
    <div class="window-controls">
      <div class="dot red"></div>
      <div class="dot yellow"></div>
      <div class="dot green"></div>
    </div>
    <div id="realtime-clock">--:--:--</div>
  </div>

  <div class="terminal-content">
    
    <div class="fetch-container">
      <img src="/assets/prx.jpg" alt="prx" class="avatar" />
      
      <div class="info-list">
        <div style="font-size: 1.5rem; margin-bottom: 10px;" class="glow">prxjwal</div>
        
        <div class="info-item">
          <span class="key">os</span>
          <span class="val">Arch Linux</span>
        </div>
        <div class="info-item">
          <span class="key">host</span>
          <span class="val">live@github-pages</span>
        </div>
        <div class="info-item">
          <span class="key">focus</span>
          <span class="val"><a href="https://github.com/Pwnb0x/ZaryaOS" style="color:white; text-decoration: underline;">ZaryaOS</a> <span id="spinner">⠋</span></span>
        </div>
        <div class="info-item">
          <span class="key">fuel</span>
          <span class="val">Coffee</span>
        </div>
      </div>
    </div>

    <div class="cmd-prompt">
      <span style="color: var(--term-green);">➜</span> <span style="color: cyan;">~</span> select_module:
    </div>

    <div class="grid-container">
      <a href="/ctf/" class="grid-item">[ CTF Writeups ]</a>
      <a href="/blog/" class="grid-item">[ Blog Posts ]</a>
      <a href="/shitpost/" class="grid-item">[ Shitposts ]</a>
      <a href="assets/Resume.pdf" class="grid-item" style="color: var(--accent);">[ View Resume ]</a>
    </div>

    <div class="cmd-prompt" style="margin-top: 30px;">
        <span style="color: var(--term-green);">➜</span> <span style="color: cyan;">~</span> external_links:
    </div>
    
    <div style="display: flex; gap: 15px; justify-content: center; opacity: 0.8;">
        <a href="https://github.com/prxjwal" style="color:inherit; text-decoration: none;">github</a>
        <span>/</span>
        <a href="#" style="color:inherit; text-decoration: none;">linkedin</a>
        <span>/</span>
        <a href="#" style="color:inherit; text-decoration: none;">x.com</a>
    </div>

  </div>
</div>

<script>
  // 1. Real Time Clock (Top Right)
  function updateTime() {
    const now = new Date();
    document.getElementById('realtime-clock').innerText = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime();

  // 2. Simple Spinner for ZaryaOS
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  setInterval(() => {
    document.getElementById('spinner').innerText = frames[i];
    i = (i + 1) % frames.length;
  }, 100);
</script>
