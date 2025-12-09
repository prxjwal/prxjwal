---
layout: default
title: prxjwal
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">

<style>
    /* --- THEME: WINDOWS 95/98 --- */
    :root {
        --bg-color: #008080;       /* Classic Teal */
        --win-gray: #c0c0c0;       /* The "Windows" Gray */
        --win-blue: #000080;       /* Title Bar Blue */
        --win-text: #000000;
        --border-light: #ffffff;
        --border-dark: #000000;
        --border-mid: #808080;
    }

    * { box-sizing: border-box; }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--bg-color);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fallback to standard sans */
        overflow: hidden; /* Prevent scrolling on desktop */
        height: 100vh;
        user-select: none; /* Make it feel like an OS, not a doc */
    }

    /* --- DESKTOP ICONS --- */
    .icon-grid {
        position: absolute;
        top: 20px;
        left: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        z-index: 0;
    }

    .desktop-icon {
        width: 70px;
        text-align: center;
        cursor: pointer;
        color: white;
        text-shadow: 1px 1px 0px black;
    }

    .desktop-icon img {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
        image-rendering: pixelated;
    }

    /* --- WINDOW SYSTEM --- */
    .window {
        position: absolute;
        background: var(--win-gray);
        border-top: 2px solid var(--border-light);
        border-left: 2px solid var(--border-light);
        border-right: 2px solid var(--border-dark);
        border-bottom: 2px solid var(--border-dark);
        box-shadow: 1px 1px 0px black;
        width: 400px;
        display: flex; /* Flex column for title/content */
        flex-direction: column;
    }

    .title-bar {
        background: var(--win-blue);
        color: white;
        padding: 4px 8px;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: default;
    }

    .title-bar-controls button {
        background: var(--win-gray);
        border-top: 1px solid var(--border-light);
        border-left: 1px solid var(--border-light);
        border-right: 1px solid var(--border-dark);
        border-bottom: 1px solid var(--border-dark);
        font-weight: bold;
        width: 20px;
        height: 18px;
        line-height: 14px;
        font-size: 10px;
        cursor: pointer;
    }
    
    .window-body {
        padding: 15px;
        font-size: 14px;
        color: black;
        overflow-y: auto; /* Allow scrolling inside window */
        max-height: 400px;
    }

    /* Content styling inside windows */
    .window-body p { margin-top: 0; }
    .window-body a { color: blue; text-decoration: underline; cursor: pointer; }
    
    .field-row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .avatar {
        width: 80px; height: 80px; 
        border: 2px solid gray; 
        margin-right: 15px;
        float: left;
    }

    /* --- TASKBAR --- */
    .taskbar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background: var(--win-gray);
        border-top: 2px solid var(--border-light);
        display: flex;
        align-items: center;
        padding: 0 4px;
        z-index: 9999;
    }

    .start-btn {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 4px 8px;
        background: var(--win-gray);
        border-top: 2px solid var(--border-light);
        border-left: 2px solid var(--border-light);
        border-right: 2px solid var(--border-dark);
        border-bottom: 2px solid var(--border-dark);
        font-weight: bold;
        font-style: italic;
        margin-right: 10px;
        box-shadow: 1px 1px 0 black;
        cursor: pointer;
    }
    
    .start-btn:active {
        border-top: 2px solid var(--border-dark);
        border-left: 2px solid var(--border-dark);
        border-right: 2px solid var(--border-light);
        border-bottom: 2px solid var(--border-light);
        transform: translateY(1px);
    }

    .tray-clock {
        margin-left: auto;
        border: 2px solid gray;
        border-style: inset;
        padding: 3px 10px;
        font-family: monospace;
        background: white;
    }

    /* --- MOBILE OVERRIDES --- */
    @media (max-width: 768px) {
        body {
            overflow: auto; /* Enable scroll on body */
            height: auto;
            padding-bottom: 50px;
            background: #008080;
        }

        .icon-grid {
            position: relative;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 20px;
            top: 0; left: 0;
        }

        /* Disable dragging styling on mobile */
        .window {
            position: relative !important; /* Stack them */
            width: 90% !important;
            margin: 20px auto;
            top: auto !important;
            left: auto !important;
            transform: none !important;
        }
        
        .title-bar { cursor: default; } /* No drag cursor */
        
        .taskbar {
            position: fixed;
            bottom: 0;
        }
    }
</style>

<div class="icon-grid">
    <div class="desktop-icon" onclick="openWindow('win-about')">
        <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" alt="My PC">
        <br>My PC
    </div>
    <div class="desktop-icon" onclick="openWindow('win-projects')">
        <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" alt="Projects">
        <br>ZaryaOS
    </div>
    <div class="desktop-icon">
        <img src="https://win98icons.alexmeub.com/icons/png/recycle_bin_full-4.png" alt="Trash">
        <br>Trash
    </div>
</div>

<div id="win-about" class="window" style="top: 50px; left: 120px;">
    <div class="title-bar" id="drag-about">
        <div class="title-text">Welcome to Prxjwal OS</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize">_</button>
            <button aria-label="Maximize">□</button>
            <button aria-label="Close" onclick="closeWindow('win-about')">X</button>
        </div>
    </div>
    <div class="window-body">
        <img src="/assets/prx.jpg" alt="prx" class="avatar">
        <p><strong>User:</strong> prxjwal</p>
        <p><strong>Role:</strong> CyberSec Student / Linux Enthusiast</p>
        <p><strong>Status:</strong> "btw i use arch"</p>
        <hr>
        <p>Welcome to my digital garden. Feel free to drag these windows around.</p>
        <p>
            <a href="https://github.com/prxjwal">[GitHub]</a> 
            <a href="/assets/Resume.pdf">[Resume]</a>
        </p>
    </div>
</div>

<div id="win-projects" class="window" style="top: 150px; left: 200px;">
    <div class="title-bar" id="drag-projects">
        <div class="title-text">C:\Users\prx\Links</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize">_</button>
            <button aria-label="Maximize">□</button>
            <button aria-label="Close" onclick="closeWindow('win-projects')">X</button>
        </div>
    </div>
    <div class="window-body">
        <p>Select a destination:</p>
        <ul style="padding-left: 20px;">
            <li><a href="/ctf/">📂 CTF_Writeups</a></li>
            <li><a href="/blog/">📂 Blog_Posts</a></li>
            <li><a href="/shitpost/">📄 shitpost.txt</a></li>
            <li><a href="https://github.com/Pwnb0x/ZaryaOS">💿 ZaryaOS (Building...)</a></li>
        </ul>
    </div>
</div>

<div class="taskbar">
    <div class="start-btn">
        <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" style="height:20px;">
        Start
    </div>
    <div style="border-left: 2px solid gray; height: 25px; margin-left: 10px;"></div>
    <div class="tray-clock" id="clock">12:00 PM</div>
</div>


<script>
    // --- 1. WINDOW MANAGEMENT (Z-Index) ---
    let zIndex = 10;
    
    function bringToFront(element) {
        zIndex++;
        element.style.zIndex = zIndex;
    }

    function closeWindow(id) {
        document.getElementById(id).style.display = 'none';
    }

    function openWindow(id) {
        const win = document.getElementById(id);
        win.style.display = 'flex';
        bringToFront(win);
    }

    // Attach click events to windows to bring them to front
    document.querySelectorAll('.window').forEach(win => {
        win.addEventListener('mousedown', () => bringToFront(win));
    });

    // --- 2. DRAG FUNCTIONALITY (Desktop Only) ---
    function makeDraggable(elementId, handleId) {
        const elmnt = document.getElementById(elementId);
        const handle = document.getElementById(handleId);
        
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        if (window.innerWidth <= 768) return; // Disable on mobile

        handle.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // Get mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            bringToFront(elmnt); // Active window to front
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // Calculate new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // Set the element's new position
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // Stop moving when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // Initialize Draggable Windows
    makeDraggable("win-about", "drag-about");
    makeDraggable("win-projects", "drag-projects");

    // --- 3. CLOCK ---
    function updateClock() {
        const now = new Date();
        document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
    setInterval(updateClock, 1000);
    updateClock();

</script>
