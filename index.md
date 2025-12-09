<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Windows 98 Mobile</title>
  
  <link rel="stylesheet" href="https://unpkg.com/98.css">
  
  <style>
    /* =========================================
       CUSTOM STYLES (Previously assets/css/main.css)
       ========================================= */
    body {
      background-color: #008080; /* Teal */
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: 'Pixelated MS Sans Serif', Arial;
      height: 100vh;
      width: 100vw;
      user-select: none; /* Prevent text selection while dragging */
    }

    /* THE DESKTOP SURFACE */
    #desktop {
      height: calc(100vh - 35px);
      width: 100%;
      position: relative;
      padding: 10px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      gap: 15px;
      box-sizing: border-box;
    }

    /* DESKTOP ICONS */
    .desktop-icon {
      width: 75px;
      text-align: center;
      color: white;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-shadow: 1px 1px 0 #000;
    }

    .desktop-icon img {
      width: 32px;
      height: 32px;
      margin-bottom: 5px;
    }

    .desktop-icon span {
      background: transparent;
      padding: 2px;
      font-size: 14px;
    }

    .desktop-icon:active span, .desktop-icon.selected span {
      background: #000080;
      border: 1px dotted yellow;
    }

    /* WINDOW STYLING */
    .window {
      position: absolute;
      top: 50px;
      left: 50px;
      width: 300px; /* Default Desktop Width */
      min-width: 200px;
      display: flex;
      flex-direction: column;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
      z-index: 100;
    }

    .window-body {
      margin: 0;
      flex-grow: 1;
      overflow: auto;
      background: silver;
      padding: 10px;
      height: 200px; /* Default height */
    }

    /* TASKBAR STYLING */
    #taskbar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 35px;
      background: silver;
      border-top: 2px solid #fff;
      display: flex;
      align-items: center;
      padding: 2px;
      z-index: 9999;
      box-shadow: inset 0 1px 0 #dfdfdf;
    }

    #start-button {
      font-weight: bold;
      height: 28px;
      margin-right: 5px;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0 6px;
    }

    /* TASKBAR ITEMS */
    .taskbar-item {
      width: 140px;
      height: 28px;
      margin-left: 2px;
      text-align: left;
      padding-left: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: inherit;
      display: flex;
      align-items: center;
      font-size: 13px;
    }

    /* Active Window State in Taskbar */
    .taskbar-item.active {
      background: repeating-conic-gradient(#fff 0 25%, #000 0 50%) 50% / 2px 2px;
      font-weight: bold;
      box-shadow: inset 1px 1px #000, inset -1px -1px #fff;
      background-color: #e0e0e0;
    }

    /* START MENU POPUP */
    #start-menu {
      position: absolute;
      bottom: 38px;
      left: 2px;
      width: 180px;
      background: silver;
      border: 2px solid;
      border-color: #fff #000 #000 #fff; /* Bevel */
      display: none;
      z-index: 10000;
      padding: 2px;
    }

    .start-item {
      display: block;
      padding: 8px 10px;
      color: black;
      text-decoration: none;
      font-size: 14px;
    }
    .start-item:hover {
      background: #000080;
      color: white;
    }

    /* =========================================
       MOBILE OPTIMIZATIONS
       ========================================= */
    @media (max-width: 600px) {
      /* On mobile, windows go FULL SCREEN automatically */
      .window {
        width: 100% !important;
        height: calc(100% - 35px) !important; /* Minus taskbar */
        top: 0 !important;
        left: 0 !important;
        margin: 0 !important;
        border: none;
        box-shadow: none;
      }
      
      .window-body {
        height: 100% !important;
      }

      .title-bar-controls button {
        min-width: 25px; 
        min-height: 20px;
      }
    }
  </style>
</head>
<body>

  <main id="desktop">
    
    <div class="desktop-icon" onclick="openApp('Notepad', 'app-notepad')">
      <img src="https://win98icons.alexmeub.com/icons/png/notepad-0.png" alt="Notepad">
      <span>Notepad</span>
    </div>

    <div class="desktop-icon" onclick="openApp('My Computer', 'app-computer')">
      <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" alt="Computer">
      <span>My Computer</span>
    </div>

    <div class="desktop-icon">
      <img src="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png" alt="Trash">
      <span>Recycle Bin</span>
    </div>

  </main>

  <div id="start-menu" class="window">
    <div class="sidebar" style="background: linear-gradient(to bottom, #000080, #1084d0); width: 25px; position: absolute; left: 0; top: 0; bottom: 0; color: white; writing-mode: vertical-rl; text-align: center; font-weight: bold; font-size: 16px; padding-top: 10px;">
      <span style="transform: rotate(180deg);">Windows 98</span>
    </div>
    <div style="margin-left: 28px;">
      <a href="#" class="start-item" onclick="openApp('Notepad', 'app-notepad'); toggleStartMenu()">Programs</a>
      <a href="#" class="start-item" onclick="alert('Searching...'); toggleStartMenu()">Find</a>
      <hr style="margin: 2px;">
      <a href="#" class="start-item" onclick="window.close()">Shut Down...</a>
    </div>
  </div>

  <div id="taskbar">
    <button id="start-button" onclick="toggleStartMenu()">
      <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" style="height: 18px;">
      Start
    </button>
    <div style="height: 20px; width: 2px; border-left: 1px solid gray; border-right: 1px solid white; margin: 0 5px;"></div>
    
    <div id="taskbar-list" style="display: flex; gap: 2px;"></div>
    
    <div class="window-body" style="margin-left: auto; padding: 2px 8px; border: 2px solid; border-color: gray white white gray; font-size: 12px;">
      <span id="clock">12:00 PM</span>
    </div>
  </div>

  <template id="app-notepad">
    <div style="display: flex; flex-direction: column; height: 100%;">
      <ul class="tree-view" style="margin-bottom: 5px; height: 20px; display: flex; gap: 10px; list-style: none; padding: 0;">
        <li><u>F</u>ile</li>
        <li><u>E</u>dit</li>
        <li><u>S</u>earch</li>
        <li><u>H</u>elp</li>
      </ul>
      <textarea id="notepad-area" style="flex: 1; resize: none; border: 2px solid; border-color: gray white white gray; font-family: 'Courier New', monospace; padding: 5px; outline: none;"></textarea>
    </div>
  </template>

  <template id="app-computer">
    <div style="background: white; height: 100%; padding: 10px; border: 2px inset white;">
      <p>3 Object(s)</p>
      <div style="display: flex; gap: 20px;">
        <div style="text-align: center;">
          <img src="https://win98icons.alexmeub.com/icons/png/drive_c-1.png" width="32"><br>
          <span>(C:)</span>
        </div>
        <div style="text-align: center;">
          <img src="https://win98icons.alexmeub.com/icons/png/cd_drive-1.png" width="32"><br>
          <span>(D:)</span>
        </div>
      </div>
    </div>
  </template>

  <template id="window-template">
    <div class="window" aria-label="window">
      <div class="title-bar">
        <div class="title-bar-text">Title</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" class="minimize-btn"></button>
          <button aria-label="Maximize" class="maximize-btn"></button>
          <button aria-label="Close" class="close-btn"></button>
        </div>
      </div>
      <div class="window-body"></div>
    </div>
  </template>

  <script>
    let zIndex = 100;

    // CLOCK LOGIC
    setInterval(() => {
      const now = new Date();
      document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }, 1000);

    // TOGGLE START MENU
    function toggleStartMenu() {
      const menu = document.getElementById('start-menu');
      const btn = document.getElementById('start-button');
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
        btn.classList.remove('active'); // mimic depressed button
      } else {
        menu.style.display = 'block';
        btn.classList.add('active'); // mimic depressed button
      }
    }

    // CLOSE START MENU WHEN CLICKING ELSEWHERE
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('start-menu');
      const btn = document.getElementById('start-button');
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.style.display = 'none';
      }
    });

    // OPEN APPLICATION LOGIC
    function openApp(title, templateId) {
      const desktop = document.getElementById('desktop');
      const template = document.getElementById('window-template');
      const clone = template.content.cloneNode(true);
      const win = clone.querySelector('.window');
      
      // Randomize position slightly
      const offset = document.querySelectorAll('.window').length * 20;
      win.style.top = (50 + offset) + 'px';
      win.style.left = (50 + offset) + 'px';

      // Set Title
      win.querySelector('.title-bar-text').textContent = title;

      // Inject Content
      const contentTemplate = document.getElementById(templateId);
      if (contentTemplate) {
        win.querySelector('.window-body').innerHTML = contentTemplate.innerHTML;
        
        // SPECIAL LOGIC FOR NOTEPAD (LocalStorage)
        if (templateId === 'app-notepad') {
          const area = win.querySelector('textarea');
          area.value = localStorage.getItem('win98-notes') || "Welcome to Windows 98 Mobile!\n\nType here and I will save it automatically.";
          area.addEventListener('input', (e) => localStorage.setItem('win98-notes', e.target.value));
        }
      }

      // Dragging & Focus
      win.addEventListener('mousedown', () => bringToFront(win));
      win.addEventListener('touchstart', () => bringToFront(win));
      makeDraggable(win);

      // Controls
      win.querySelector('.close-btn').onclick = () => { win.remove(); removeTaskbarItem(win); };
      win.querySelector('.minimize-btn').onclick = () => { win.style.display = 'none'; };
      
      // Maximize Logic
      win.querySelector('.maximize-btn').onclick = () => {
        if(win.dataset.maximized === "true") {
          win.style.width = win.dataset.oldWidth;
          win.style.height = win.dataset.oldHeight;
          win.style.top = win.dataset.oldTop;
          win.style.left = win.dataset.oldLeft;
          win.dataset.maximized = "false";
        } else {
          win.dataset.oldWidth = win.style.width || "300px";
          win.dataset.oldHeight = win.style.height || "auto";
          win.dataset.oldTop = win.style.top;
          win.dataset.oldLeft = win.style.left;
          
          win.style.width = "100%";
          win.style.height = "calc(100% - 35px)";
          win.style.top = "0";
          win.style.left = "0";
          win.dataset.maximized = "true";
        }
      };

      desktop.appendChild(win);
      bringToFront(win);
      addTaskbarItem(win, title);
    }

    function bringToFront(win) {
      zIndex++;
      win.style.zIndex = zIndex;
      // Also highlight taskbar item
      document.querySelectorAll('.taskbar-item').forEach(btn => btn.classList.remove('active'));
      if(win.taskbarBtn) win.taskbarBtn.classList.add('active');
    }

    // DRAG LOGIC (Works on Mobile Touch + Desktop Mouse)
    function makeDraggable(elmnt) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      const header = elmnt.querySelector('.title-bar');

      if (header) {
        header.onmousedown = dragMouseDown;
        header.ontouchstart = dragTouchStart;
      }

      function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        bringToFront(elmnt);
      }

      function dragTouchStart(e) {
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementTouchDrag;
        bringToFront(elmnt);
      }

      function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function elementTouchDrag(e) {
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
      }
    }

    // TASKBAR LOGIC
    function addTaskbarItem(win, title) {
      const list = document.getElementById('taskbar-list');
      const btn = document.createElement('button');
      btn.className = 'taskbar-item active';
      btn.innerHTML = `<img src="https://win98icons.alexmeub.com/icons/png/programs_program-0.png" height="16" style="margin-right:4px;"> <b>${title}</b>`;
      
      btn.onclick = () => {
        if (win.style.display === 'none') {
          win.style.display = 'flex';
          bringToFront(win);
        } else if (win.style.zIndex < zIndex) {
          bringToFront(win);
        } else {
          win.style.display = 'none';
          btn.classList.remove('active');
        }
      };

      win.taskbarBtn = btn; // Link button to window object
      list.appendChild(btn);
    }

    function removeTaskbarItem(win) {
      if(win.taskbarBtn) win.taskbarBtn.remove();
    }
  </script>
</body>
</html>
