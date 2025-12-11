
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
  if (menu && !menu.contains(e.target) && btn && !btn.contains(e.target)) {
    menu.style.display = 'none';
    if(btn) btn.classList.remove('active');
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
      if(area) {
        area.value = localStorage.getItem('win98-notes') || "Welcome to Windows 98 Mobile!\n\nType here and I will save it automatically.";
        area.addEventListener('input', (e) => localStorage.setItem('win98-notes', e.target.value));
      }
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
