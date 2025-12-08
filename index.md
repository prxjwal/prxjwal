---
layout: default
title: prxjwal
---

<style>
  /* Import Fira Code for proper terminal font rendering */
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');

  /* Wrapper to ensure styles don't bleed into the rest of the Jekyll theme too much */
  .terminal-wrapper {
    font-family: 'Fira Code', 'Courier New', monospace;
    color: #c5c8c6; /* Standard terminal text color */
    line-height: 1.6;
  }

  /* --- DESKTOP LAYOUT --- */
  .neofetch-container {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin: 2rem 0;
  }

  .neofetch-img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #373b41;
  }

  .neofetch-text pre {
    margin: 0;
    background: transparent;
    border: none;
    font-size: 1rem;
    overflow: visible;
    font-family: 'Fira Code', monospace;
  }

  /* Blinking Cursor */
  .blinking-cursor {
    color: #b5bd68; /* Green */
    font-weight: bold;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }

  /* Links */
  a.terminal-btn {
    color: #81a2be; /* Blue */
    text-decoration: none;
  }
  a.terminal-btn:hover {
    color: #b5bd68; /* Green */
    text-decoration: underline;
  }

  /* Divider */
  .terminal-divider {
    border-bottom: 1px dashed #373b41;
    margin: 2rem 0;
    width: 100%;
  }

  /* --- MOBILE ONLY OVERRIDES --- */
  @media screen and (max-width: 768px) {
    .neofetch-container {
      flex-direction: column; /* Stack image on top */
      align-items: center;    /* Center everything */
      gap: 1.5rem;
    }

    .neofetch-img {
      width: 150px; /* Smaller image for phone */
      height: 150px;
    }

    .neofetch-text {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .neofetch-text pre {
      /* Magic fix for mobile text overflow */
      white-space: pre-wrap;  
      word-break: break-word;
      font-size: 0.85rem;     /* Slightly smaller font */
      text-align: left;       /* Keep text aligned left inside the block */
      
      /* Optional: Dark box behind text for readability on mobile */
      background: rgba(0, 0, 0, 0.2);
      padding: 15px;
      border-radius: 8px;
    }
    
    .terminal-links {
      text-align: center;
    }
  }
</style>

<div class="terminal-wrapper">
  
  <div class="neofetch-container">
    <img id="dynamic-img" src="/assets/prx.jpg" alt="prx avatar" class="neofetch-img" />
    
    <div class="neofetch-text">
<pre>
<span class="blinking-cursor">█</span> prxjwal 
<span id="localtime" style="color: #969896;">initializing...</span>

btw i use arch 
machine runs on coffee 

currently working on <a href="https://github.com/Pwnb0x/ZaryaOS" class="terminal-btn" target="_blank">[Zarya OS]</a> <span id="ascii-spinner" style="color: #b5bd68;">⠋</span>

prx@localhost:~$ <a href="https://github.com/prxjwal" class="terminal-btn" target="_blank">[GitHub]</a> <a href="/_blog/" class="terminal-btn" target="_blank">[Blog]</a> <a href="assets/Resume.pdf" class="terminal-btn" target="_blank">[Resume]</a>
</pre>
    </div>
  </div>

  <div class="terminal-divider"></div>

  <div class="terminal-links">
    > <a href="/ctf/" class="terminal-btn">[Ctf Writeups]</a><br>
    > <a href="/blog/" class="terminal-btn">[Blog]</a><br>
    > <a href="/shitpost/" class="terminal-btn">[Shitpost]</a>
  </div>

  <div class="terminal-divider"></div>

</div>

<script>
  // --- 1. Dynamic Local Time ---
  function updateTime() {
    const now = new Date();
    // Formats: "Mon Dec 08 07:15:22 PM"
    const timeString = now.toString().split(' ').slice(0, 5).join(' ') + ' ' + now.toLocaleTimeString();
    document.getElementById('localtime').textContent = timeString;
  }
  setInterval(updateTime, 1000);
  updateTime();

  // --- 2. Tiny ASCII Braille Spinner ---
  const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let spinnerIndex = 0;

  function animateSpinner() {
    const spinner = document.getElementById('ascii-spinner');
    if (spinner) {
      spinner.textContent = spinnerFrames[spinnerIndex];
      spinnerIndex = (spinnerIndex + 1) % spinnerFrames.length;
    }
  }
  // Updates every 100ms for smooth rotation
  setInterval(animateSpinner, 100);
</script>
