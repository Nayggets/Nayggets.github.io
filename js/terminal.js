// BACKGROUND CODE – scénario étendu
const comms = [
  // Beaucoup d’échanges MCU <-> ROM (fetch d’instructions)
  { from:'rom', to:'mcu' },
  { from:'mcu', to:'rom' },
  { from:'rom', to:'mcu' },
  { from:'rom', to:'mcu' },
  { from:'mcu', to:'rom' },
  { from:'rom', to:'mcu' },
  { from:'rom', to:'mcu' },
  { from:'mcu', to:'rom' },
  { from:'rom', to:'mcu' },
  { from:'rom', to:'mcu' },

  // Timer déclenche interruptions vers MCU
  { from:'timer', to:'mcu' },
  { from:'mcu', to:'mem' },   // MCU sauvegarde un état
  { from:'mcu', to:'cap1' },  // MCU lit le capteur 1
  { from:'cap1', to:'mcu' },  // Retour valeur capteur 1
  { from:'mcu', to:'act' },   // MCU commande l’actionneur

  // Nouveau fetch d’instructions
  { from:'rom', to:'mcu' },
  { from:'mcu', to:'rom' },
  { from:'rom', to:'mcu' },

  // Capteur 2 envoie au DMA
  { from:'cap2', to:'dma' },
  { from:'dma', to:'mem' },

  // Nouveau cycle : Timer -> MCU -> Capteur 1 -> Act
  { from:'timer', to:'mcu' },
  { from:'mcu', to:'cap1' },
  { from:'cap1', to:'mcu' },
  { from:'mcu', to:'act' },

  // Plusieurs échanges MCU <-> ROM pour boucles
  { from:'rom', to:'mcu' },
  { from:'rom', to:'mcu' },

  // DMA transfert mémoire en arrière-plan
  { from:'cap2', to:'dma' },
  { from:'dma', to:'mem' },

  { from:'rom', to:'mcu' },
  { from:'rom', to:'mcu' },

  // Nouveau cycle : Timer -> MCU -> Capteur 1 -> Act
  { from:'timer', to:'mcu' },
  { from:'mcu', to:'cap1' },
  { from:'cap1', to:'mcu' },
  { from:'mcu', to:'act' },

  { from:'mcu', to:'act' },
  { from:'mcu', to:'mem' },

  // Plus de lecture ROM
  { from:'rom', to:'mcu' },
  { from:'mcu', to:'rom' },
  { from:'rom', to:'mcu' },
  { from:'rom', to:'mcu' },

  // Lecture mémoire finale
  { from:'mcu', to:'mem' },
  { from:'mem', to:'mcu' }
];

    const svg = document.getElementById('background-diagram');
    let index = 0;

    function flashLine(x1,y1,x2,y2,color,time){
      const l = document.createElementNS('http://www.w3.org/2000/svg','line');
      l.setAttribute('x1',x1);
      l.setAttribute('y1',y1);
      l.setAttribute('x2',x2);
      l.setAttribute('y2',y2);
      l.setAttribute('stroke',color);
      l.setAttribute('stroke-width','4');
      svg.appendChild(l);
      setTimeout(()=>l.remove(),time);
    }

    function animateComm(){
      const msg = comms[index];
      const f = document.getElementById(msg.from);
      const t = document.getElementById(msg.to);
      if(!f || !t){ index=(index+1)%comms.length; return; }

      const fx = +f.getAttribute('x') + (+f.getAttribute('width'))/2;
      const fy = +f.getAttribute('y') + (+f.getAttribute('height'))/2;
      const tx = +t.getAttribute('x') + (+t.getAttribute('width'))/2;
      const ty = +t.getAttribute('y') + (+t.getAttribute('height'))/2;
      const by = 300;

      flashLine(fx,fy,fx,by,'#0f0',500);
      setTimeout(()=>flashLine(fx,by,tx,by,'#0f0',500),200);
      setTimeout(()=>flashLine(tx,by,tx,ty,'#0f0',500),400);

      index = (index+1)%comms.length;
      setTimeout(animateComm,1000);
    }



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
      console.log("the size is : " + text.size);
      img.style.width = text.size;
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


    animateComm();
