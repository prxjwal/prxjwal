---
layout: null
title: prxjwal | Windows 98
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prxjwal - Windows 98</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    
    <style>
        /* --- SYSTEM VARIABLES --- */
        :root {
            --bg-teal: #008080;
            --win-gray: #c0c0c0;
            --win-blue: #000080;
            --win-blue-grad: #1084d0;
            --win-light: #ffffff;
            --win-dark: #808080;
            --win-black: #000000;
        }

        * { box-sizing: border-box; }
        
        body {
            margin: 0; padding: 0;
            background-color: black; /* Starts Black for BIOS */
            font-family: 'Segoe UI', Tahoma, sans-serif;
            overflow: hidden;
            height: 100vh;
            user-select: none;
            cursor: default; /* Arrow cursor */
        }

        /* --- 1. BIOS BOOT SCREEN --- */
        #bios-screen {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: black; color: #c0c0c0;
            font-family: 'VT323', monospace;
            padding: 40px;
            font-size: 20px;
            z-index: 99999;
            display: block;
        }

        /* --- 2. DESKTOP ENVIRONMENT --- */
        #desktop-environment {
            display: none; /* Hidden until boot finishes */
            width: 100%; height: 100%;
            background-color: var(--bg-teal);
            position: relative;
        }

        /* UTILS: Bevels */
        .outset { box-shadow: inset -1px -1px #000, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf; background: var(--win-gray); }
        .inset  { box-shadow: inset -1px -1px #fff, inset 1px 1px #000, inset -2px -2px #dfdfdf, inset 2px 2px #808080; background: #fff; }

        /* --- 3. ICONS --- */
        .icon {
            position: absolute; /* Absolute for dragging */
            width: 75px;
            display: flex; flex-direction: column; align-items: center;
            text-align: center; color: white;
            font-size: 13px; margin: 10px;
            cursor: pointer;
            border: 1px solid transparent;
        }
        .icon:active { border: 1px dotted yellow; background: rgba(0,0,128,0.5); }
        .icon img { width: 32px; height: 32px; margin-bottom: 5px; image-rendering: pixelated; }
        .icon span { padding: 2px; text-shadow: 1px 1px 0 black; }

        /* --- 4. WINDOWS --- */
        .window {
            position: absolute;
            background: var(--win-gray);
            padding: 3px;
            display: none; flex-direction: column;
            box-shadow: 1px 1px 0 black;
            border-top: 2px solid #fff; border-left: 2px solid #fff;
            border-right: 2px solid #000; border-bottom: 2px solid #000;
        }

        .title-bar {
            background: linear-gradient(90deg, var(--win-blue), var(--win-blue-grad));
            padding: 3px 4px;
            display: flex; justify-content: space-between; align-items: center;
            color: white; font-weight: bold; font-size: 13px;
        }
        .title-bar.inactive { background: var(--win-dark); }

        .win-controls { display: flex; gap: 2px; }
        .win-btn {
            width: 16px; height: 14px;
            background: var(--win-gray);
            border: 1px solid #fff; border-right-color: #000; border-bottom-color: #000;
            font-size: 9px; font-weight: bold; line-height: 10px; text-align: center;
            cursor: pointer;
        }
        .win-btn:active { border: 1px solid #000; border-right-color: #fff; border-bottom-color: #fff; transform: translate(1px, 1px); }

        .win-body { flex: 1; overflow: auto; background: var(--win-light); color: black; margin-top: 2px; }

        /* --- 5. TASKBAR --- */
        .taskbar {
            position: fixed; bottom: 0; left: 0; width: 100%; height: 28px;
            background: var(--win-gray);
            border-top: 2px solid #fff;
            display: flex; align-items: center; padding: 2px;
            z-index: 10000;
        }

        .start-btn {
            display: flex; align-items: center; gap: 4px;
            padding: 2px 6px; height: 22px; margin-right: 4px;
            font-weight: bold; font-size: 13px; cursor: pointer;
        }
        .start-btn img { height: 16px; }

        .task-list { flex-grow: 1; display: flex; gap: 3px; padding-left: 4px; }
        .task-item {
            width: 140px; height: 22px;
            padding: 3px 5px; font-size: 12px;
            display: flex; align-items: center; gap: 5px;
            cursor: pointer;
            white-space: nowrap; overflow: hidden;
        }
        .task-item.active { background: #e0e0e0; border: 2px solid #000; border-top-color: #808080; border-left-color: #808080; border-right-color: #fff; border-bottom-color: #fff; font-weight: bold; }
        
        .tray {
            width: 70px; height: 22px;
            border: 1px solid #808080; border-right-color: #fff; border-bottom-color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12px; margin-left: 4px;
        }

        /* --- 6. START MENU --- */
        .start-menu {
            position: fixed; bottom: 28px; left: 2px;
            width: 180px; background: var(--win-gray);
            border: 2px solid #fff; border-right-color: #000; border-bottom-color: #000;
            display: none; z-index: 10001;
        }
        .start-side { width: 25px; background: #000080; color: white; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 10px; }
        .start-side span { transform: rotate(-90deg); white-space: nowrap; font-weight: bold; font-size: 16px; }
        
        .menu-items { flex: 1; display: flex; flex-direction: column; }
        .menu-item { padding: 8px 10px; font-size: 12px; display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .menu-item:hover { background: #000080; color: white; }

        /* --- MOBILE OVERRIDES --- */
        @media (max-width: 768px) {
            .icon { position: relative; float: left; margin: 10px; }
            .window { width: 96% !important; left: 2% !important; top: 5% !important; height: 80% !important; }
            .task-item { width: 50px; }
        }

    </style>
</head>
<body>

    <div id="bios-screen">
        <div>AMIBIOS (C) 1996 American Megatrends Inc.,</div>
        <div>Prxjwal-PC BIOS Version 1.0</div>
        <br>
        <div>CPU: Intel Pentium III 800 MHz</div>
        <div>Memory Test: <span id="mem-test">0</span> KB OK</div>
        <br>
        <div id="bios-details" style="display:none;">
            <div>Detecting Primary Master ... ZaryaOS_Drive (C:)</div>
            <div>Detecting Primary Slave ... CD-ROM</div>
            <br>
            <div>Booting from C:\>_</div>
        </div>
    </div>

    <div id="desktop-environment">
        
        <div class="icon" id="icon-pc" style="top: 10px; left: 10px;" ondblclick="openWindow('win-pc', 'My Computer', 'computer')">
            <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png">
            <span>My Computer</span>
        </div>
        <div class="icon" id="icon-trash" style="top: 100px; left: 10px;">
            <img src="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png">
            <span>Recycle Bin</span>
        </div>
        <div class="icon" id="icon-docs" style="top: 190px; left: 10px;" ondblclick="openWindow('win-docs', 'My Documents', 'folder')">
            <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png">
            <span>My Documents</span>
        </div>

        <div id="win-pc" class="window" style="top: 50px; left: 150px; width: 400px; height: 300px;">
            <div class="title-bar">
                <span class="win-title"><img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" width="12" style="vertical-align:middle; margin-right:4px;">My Computer</span>
                <div class="win-controls">
                    <div class="win-btn" onclick="minimizeWindow('win-pc')">_</div>
                    <div class="win-btn" onclick="maximizeWindow('win-pc')">□</div>
                    <div class="win-btn" onclick="closeWindow('win-pc')">X</div>
                </div>
            </div>
            <div class="win-body inset" style="background:white; padding: 10px;">
                <p>System Root (C:)</p>
            </div>
        </div>

        <div id="win-docs" class="window" style="top: 80px; left: 200px; width: 400px; height: 300px;">
            <div class="title-bar">
                <span class="win-title"><img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" width="12" style="vertical-align:middle; margin-right:4px;">My Documents</span>
                <div class="win-controls">
                    <div class="win-btn" onclick="minimizeWindow('win-docs')">_</div>
                    <div class="win-btn" onclick="maximizeWindow('win-docs')">□</div>
                    <div class="win-btn" onclick="closeWindow('win-docs')">X</div>
                </div>
            </div>
            <div class="win-body inset" style="background:white; padding: 10px;">
                <p>User Documents</p>
            </div>
        </div>

        <div class="start-menu" id="start-menu">
            <div style="display:flex;">
                <div class="start-side"><span><b>Windows</b>98</span></div>
                <div class="menu-items">
                    <div class="menu-item">
                        <img src="https://win98icons.alexmeub.com/icons/png/update-0.png" width="24"> Windows Update
                    </div>
                    <div style="height:1px; background:gray; margin:2px;"></div>
                    <div class="menu-item" onclick="location.reload()">
                        <img src="https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png" width="24"> Shut Down...
                    </div>
                </div>
            </div>
        </div>

        <div class="taskbar">
            <div class="start-btn outset" onclick="toggleStart()">
                <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png"> Start
            </div>
            <div style="width:2px; height:20px; border-left:1px solid gray; border-right:1px solid white; margin:0 4px;"></div>
            <div class="task-list" id="task-list">
                </div>
            <div class="tray inset" id="clock">
                12:00 PM
            </div>
        </div>

    </div>

    <script>
        // --- 1. BIOS SEQUENCE ---
        const memTest = document.getElementById('mem-test');
        let mem = 0;
        const totalMem = 262144; // 256MB

        const bootInterval = setInterval(() => {
            mem += 4096;
            if(mem >= totalMem) {
                mem = totalMem;
                clearInterval(bootInterval);
                memTest.innerText = mem;
                document.getElementById('bios-details').style.display = 'block';
                
                // Finish Boot
                setTimeout(() => {
                    document.getElementById('bios-screen').style.display = 'none';
                    document.getElementById('desktop-environment').style.display = 'block';
                    // Play startup sound if possible (browsers block this usually, so we skip logic)
                }, 2000);
            } else {
                memTest.innerText = mem;
            }
        }, 10);


        // --- 2. WINDOW MANAGER ENGINE ---
        let zIndex = 100;
        let activeWindow = null;
        let isMobile = window.innerWidth <= 768;

        function bringToFront(id) {
            zIndex++;
            const win = document.getElementById(id);
            win.style.zIndex = zIndex;
            
            // Visuals: Active Title Bar
            document.querySelectorAll('.title-bar').forEach(tb => tb.classList.add('inactive'));
            win.querySelector('.title-bar').classList.remove('inactive');
            
            // Visuals: Active Taskbar Tab
            document.querySelectorAll('.task-item').forEach(ti => ti.classList.remove('active'));
            const tab = document.getElementById('tab-' + id);
            if(tab) tab.classList.add('active');

            activeWindow = id;
        }

        function openWindow(id, title, iconName) {
            const win = document.getElementById(id);
            if(win.style.display !== 'flex') {
                win.style.display = 'flex';
                // Reset Minimize state
                win.dataset.minimized = "false"; 
                addToTaskbar(id, title, iconName);
            }
            bringToFront(id);
        }

        function closeWindow(id) {
            document.getElementById(id).style.display = 'none';
            document.getElementById('tab-' + id)?.remove();
        }

        function minimizeWindow(id) {
            const win = document.getElementById(id);
            win.style.display = 'none';
            win.dataset.minimized = "true";
            
            // Deactivate tab visual
            const tab = document.getElementById('tab-' + id);
            if(tab) tab.classList.remove('active');
        }

        function maximizeWindow(id) {
            const win = document.getElementById(id);
            if(win.dataset.maximized === "true") {
                // Restore
                win.style.top = win.dataset.oldTop;
                win.style.left = win.dataset.oldLeft;
                win.style.width = win.dataset.oldWidth;
                win.style.height = win.dataset.oldHeight;
                win.dataset.maximized = "false";
            } else {
                // Maximize
                win.dataset.oldTop = win.style.top;
                win.dataset.oldLeft = win.style.left;
                win.dataset.oldWidth = win.style.width;
                win.dataset.oldHeight = win.style.height;
                
                win.style.top = "0px";
                win.style.left = "0px";
                win.style.width = "100%";
                win.style.height = "calc(100% - 28px)"; // Minus taskbar
                win.dataset.maximized = "true";
            }
            bringToFront(id);
        }

        // --- 3. TASKBAR ENGINE ---
        function addToTaskbar(id, title, iconName) {
            if(document.getElementById('tab-' + id)) return;

            const list = document.getElementById('task-list');
            const tab = document.createElement('div');
            tab.className = 'task-item outset';
            tab.id = 'tab-' + id;
            
            // Map icon name to url (simplified)
            let iconUrl = "https://win98icons.alexmeub.com/icons/png/application-0.png"; // Default
            if(iconName === 'computer') iconUrl = "https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png";
            if(iconName === 'folder') iconUrl = "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png";

            tab.innerHTML = `<img src="${iconUrl}" width="16"> ${title}`;
            
            tab.onclick = () => {
                const win = document.getElementById(id);
                if(win.dataset.minimized === "true" || win.style.display === 'none') {
                    win.style.display = 'flex';
                    win.dataset.minimized = "false";
                    bringToFront(id);
                } else if(activeWindow === id) {
                    minimizeWindow(id);
                } else {
                    bringToFront(id);
                }
            };
            list.appendChild(tab);
        }

        // --- 4. START MENU LOGIC ---
        function toggleStart() {
            const menu = document.getElementById('start-menu');
            menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
        }
        
        // Click outside to close start menu
        window.onclick = function(e) {
            if (!e.target.closest('.start-menu') && !e.target.closest('.start-btn')) {
                document.getElementById('start-menu').style.display = 'none';
            }
        }

        // --- 5. DRAG ENGINE (Windows & Icons) ---
        function makeDraggable(el, handle) {
            if(isMobile) return; 
            
            handle.onmousedown = function(e) {
                e.preventDefault();
                // If it's a window, bring to front
                if(el.classList.contains('window')) bringToFront(el.id);

                let startX = e.clientX;
                let startY = e.clientY;
                let startLeft = el.offsetLeft;
                let startTop = el.offsetTop;

                document.onmousemove = function(e) {
                    let dx = e.clientX - startX;
                    let dy = e.clientY - startY;
                    el.style.left = (startLeft + dx) + "px";
                    el.style.top = (startTop + dy) + "px";
                }

                document.onmouseup = function() {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            };
        }

        // Initialize Draggables
        document.querySelectorAll('.window').forEach(win => {
            makeDraggable(win, win.querySelector('.title-bar'));
            // Window Click brings to front
            win.addEventListener('mousedown', () => bringToFront(win.id));
        });

        document.querySelectorAll('.icon').forEach(icon => {
            makeDraggable(icon, icon);
        });

        // --- 6. CLOCK ---
        setInterval(() => {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }, 1000);

    </script>
</body>
</html>
