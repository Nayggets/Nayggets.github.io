let cursor = document.querySelector(".blinking-cursor");
const terminal = document.getElementById("terminal");

let currentTyping = null; // Référence à l'écriture en cours

function clearTerminal() {
  terminal.innerHTML = '<span class="blinking-cursor"></span>';
  cursor = document.querySelector(".blinking-cursor");
}

// Fonction pour écrire une ligne ou insérer une image
function typeLine(text, delay = 15, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject('aborted');

    if (typeof text === "string") {
      let i = 0;
      const line = document.createElement("span");
      terminal.insertBefore(line, cursor);

      const interval = setInterval(() => {
        if (signal?.aborted) {
          clearInterval(interval);
          return reject('aborted');
        }

        line.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          terminal.insertBefore(document.createElement("br"), cursor);
          resolve();
        }
      }, delay);
    } else if (text.image) {
      const img = document.createElement("img");
      img.src = text.image;
      img.className = "terminal-image";
      terminal.insertBefore(img, cursor);
      setTimeout(() => img.classList.add("show"), 100);
      terminal.insertBefore(document.createElement("br"), cursor);
      resolve();
    }
  });
}

async function showSection(sectionName) {
  // Annule l'écriture précédente s'il y en a une
  if (currentTyping) {
    currentTyping.abort();
  }

  const controller = new AbortController();
  currentTyping = controller;

  clearTerminal();

  const response = await fetch("data/content.json");
  const content = await response.json();
  const lines = content[sectionName.toLowerCase()];

  try {
    for (const line of lines) {
      await typeLine(line, 15, controller.signal);
    }
  } catch (err) {
    // Si l'utilisateur a changé de section avant la fin
    if (err !== 'aborted') console.error(err);
  }
}



  const messages = [
    { from: 'cpu1', to: 'cpu7', path: ['l1', 'l2', 'l3', 'l6'] },
    { from: 'cpu7', to: 'cpu3', path: ['l6', 'l3', 'l2'] },
    { from: 'cpu3', to: 'cpu4', path: ['l3', 'l4'] },
    { from: 'cpu4', to: 'cpu6', path: ['l4', 'l3', 'l5'] },
  ];

  let msgIndex = 0;

  async function animateMessage() {
    const msg = messages[msgIndex];
    const links = msg.path;
    const fromCPU = document.getElementById(msg.from);
    const toCPU = document.getElementById(msg.to);

    // Reset all styles
    document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.cpu').forEach(c => c.classList.remove('active'));

    fromCPU.classList.add('active');

    for (const linkId of links) {
      const link = document.getElementById(linkId);
      link.classList.add('active');
      await new Promise(res => setTimeout(res, 250)); // animation delay
    }

    toCPU.classList.add('active');

    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(animateMessage, 2000);
  }

  animateMessage();
