---
layout: default
title: prxjwal
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=VT323&display=swap" rel="stylesheet">

<style>
  /* --- 1. CORE VARIABLES & RESET --- */
  :root {
    --bg-color: #0a0a0a;
    --term-green: #4af626; /* Classic Hacker Green */
    --term-dim: #2e6b23;
    --accent: #ffb86c; /* Orange/Amber for highlights */
    --font-main: 'Fira Code', monospace;
    --font-retro: 'VT323', monospace;
  }

  body {
    background-color: var(--bg-color);
    color: var(--term-green);
    font-family: var(--font-main);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* --- 2. CRT SCREEN EFFECT (The "Vibe" Layer) --- */
  body::before {
    content: " ";
    display: block;
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 999;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none; /* Let clicks pass through */
  }

  /* Text Glow */
  .glow-text {
    text-shadow: 0 0 4px rgba(74, 246, 38, 0.6);
  }

  /* --- 3. STATUS BAR (Like i3wm/Polybar) --- */
  .status-bar {
    width: 100%;
    background: #111;
    border-bottom: 1px solid var(--term-dim);
    padding: 5px 10px;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    font-family: var(--font-main);
    color: #888;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  /* --- 4. MAIN CONTAINER (The Terminal Window) --- */
  .terminal-window {
    margin-top: 60px; /* Space for status bar */
    width: 90%;
    max-width: 600px;
    border: 2px solid var(--term-dim);
    background: rgba(0,0,0,0.8);
    padding: 20px;
    box-shadow: 0 0 20px rgba(74, 246, 38, 0.1);
    position: relative;
    margin-bottom: 50px;
  }

  /* Window Title Decoration */
  .terminal-window::before {
    content: " root@prxjwal: ~ ";
    position: absolute;
    top: -12px;
    left: 20px;
    background: var(--bg-color);
    padding: 0 10px;
    color: var(--accent);
    font-weight: bold;
    font-size: 0.9rem;
  }

  /* --- 5. AVATAR & HEADER --- */
  .header-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
    text-align: center;
  }

  .avatar-frame {
    width: 140px;
    height: 140px;
    border: 2px dashed var(--term-green);
    padding: 5px;
    border-radius: 50%;
  }

  .neofetch-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(80%) contrast(1.2); /* Make image look older */
  }

  .username {
    font-family: var(--font-retro);
    font-size: 2.5rem;
    margin: 0;
    line-height: 1;
    color: var(--term-green);
  }

  /* --- 6. INFO SECTION --- */
  .info-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px 15px;
    font-size: 0.9rem;
    margin-bottom: 30px;
    border-left: 2px solid var(--term-dim);
    padding-left: 15px;
  }
  
  .label { color: var(--accent); font-weight: bold; }
  .value { color: #ccc; }

  /* --- 7. LINKS AS "FILES" --- */
  .file-browser {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .folder-title {
    border-bottom: 1px dashed var(--term-dim);
    padding-bottom: 5px;
    margin-bottom: 10px;
    color: #666;
  }

  a.cmd-link {
    display: block;
    color: var(--term-green);
    text-decoration: none;
    font-family: var(--font-main);
    padding: 8px;
    border: 1px solid transparent;
    transition: all 0.2s;
  }

  a.cmd-link:hover {
    background: rgba(74, 246, 38, 0.1);
    border: 1px solid var(--term-green);
    text-shadow: 0 0 5px var(--term-green);
  }

  a.cmd-link::before { content: "./"; color: var(--term-dim); }

  /* --- 8. FOOTER --- */
  .social-dock {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 1.2rem;
  }
  
  .social-dock a {
    color: var(--accent);
    text-decoration: none;
  }
</style>

<div class="status-bar">
    <span>ws1: terminal</span>
    <span><span id="mem-usage">RAM: 40%</span> | <span id="clock">--:--</span></span>
</div>

<div class="terminal-window">

  <div class="header-section">
    <div class="avatar-frame">
       <img src="/assets/prx.jpg" alt="prx" class="neofetch-img" />
    </div>
    <h1 class="username glow-text">PRXJWAL</h1>
    <div style="font-size: 0.8rem; color: #666;">ID: UID-001 | EST 2024</div>
  </div>

  <div class="info-grid">
    <div class="label">OS</div>       <div class="value">Arch Linux x86_64</div>
    <div class="label">Kernel</div>   <div class="value">6.8.9-arch1-1</div>
    <div class="label">Uptime</div>   <div class="value" id="uptime">Loading...</div>
    <div class="label">Fuel</div>     <div class="value">Black Coffee</div>
    <div class="label">Project</div>  <div class="value"><a href="https://github.com/Pwnb0x/ZaryaOS" style="color:white;">[ZaryaOS]</a> <span id="spinner">⠋</span></div>
  </div>

  <div class="file-browser">
    <div class="folder-title">~/navigation/</div>
    
    <a href="/ctf/" class="cmd-link">ctf_writeups.sh</a>
    <a href="/blog/" class="cmd-link">read_blog.py</a>
    <a href="/shitpost/" class="cmd-link">shitpost.txt</a>
    <a href="assets/Resume.pdf" class="cmd-link">execute_resume.bin</a>
  </div>

  <div class="social-dock">
    <a href="https://github.com/prxjwal">[GITHUB]</a>
    <a href="#">[X]</a>
    <a href="#">[LINKEDIN]</a>
  </div>

</div>

<script>
    // 1. Clock
    function updateClock() {
        const now = new Date();
        document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Fake Uptime Counter
    let seconds = 0;
    function updateUptime() {
        seconds++;
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        document.getElementById('uptime').innerText = `${h}h ${m}m (session)`;
    }
    setInterval(updateUptime, 60000); // update every min
    document.getElementById('uptime').innerText = "0h 1m (session)";

    // 3. Random RAM fluctuation
    setInterval(() => {
        const ram = Math.floor(Math.random() * (45 - 30 + 1) + 30);
        document.getElementById('mem-usage').innerText = `RAM: ${ram}%`;
    }, 3000);

    // 4. Spinner
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    setInterval(() => {
        document.getElementById('spinner').innerText = frames[i];
        i = (i + 1) % frames.length;
    }, 100);
</script>
