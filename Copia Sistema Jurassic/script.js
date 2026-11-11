const pauseDialog = document.querySelector('#pauseDialog');
const activityPanel = document.querySelector('#activityPanel');
const activityContent = document.querySelector('#activityContent');

const activities = {
  observar: {
    title: 'Conoce el cifrado César',
    body: `
      <div class="exercise"><h2>La idea principal</h2><p>El cifrado César mueve cada letra el mismo número de posiciones en el alfabeto. A ese número le llamamos <strong>desplazamiento</strong>.</p>
      <p class="cipher-example">A + 3 → D</p><p>Con un desplazamiento de 3, B se convierte en E y C se convierte en F. Para descifrar, se recorre el mismo número de lugares hacia atrás.</p>
      <p><strong>Selecciona las relaciones que siguen la regla +3.</strong></p>
      <div class="choice-row" data-kind="choice"><button class="choice" type="button" aria-pressed="false">J → M</button><button class="choice" type="button" aria-pressed="false">R → U</button><button class="choice" type="button" aria-pressed="false">S → U</button></div><p class="feedback">Puedes seleccionar una, varias o ninguna. No hay límite de tiempo.</p></div>`
  },
  ordenar: {
    title: 'Descifra un mensaje',
    body: `
      <div class="exercise"><h2>Mensaje con clave 3</h2><p>Para descifrar, mueve cada letra <strong>tres lugares hacia atrás</strong>.</p><p class="cipher-example">MXUDVVLF</p>
      <div class="field-row"><label class="field-group" for="decodedMessage">Mensaje descifrado<input class="field-input" id="decodedMessage" type="text" autocomplete="off" spellcheck="false" placeholder="Escribe tu respuesta"></label><button class="small-action" id="checkDecode" type="button">Comprobar</button></div><p class="feedback" id="decodeFeedback">Puedes intentarlo las veces que quieras.</p></div>`
  },
  escribir: {
    title: 'Cifra tu mensaje',
    body: `
      <div class="exercise"><h2>Prueba tu propia clave</h2><p>Escribe un mensaje con letras de A a Z, elige un desplazamiento y observa el resultado. Los espacios y signos se conservan.</p><div class="field-row"><label class="field-group" for="messageToEncode">Tu mensaje<input class="field-input" id="messageToEncode" type="text" autocomplete="off" spellcheck="false" placeholder="Por ejemplo: CLAVE"></label><label class="field-group" for="shiftValue">Desplazamiento<select class="shift-select" id="shiftValue"><option value="1">1 lugar</option><option value="2">2 lugares</option><option value="3" selected>3 lugares</option><option value="4">4 lugares</option><option value="5">5 lugares</option></select></label><button class="small-action" id="encodeMessage" type="button">Cifrar</button></div><div class="result-box" id="encodedResult">El mensaje cifrado aparecerá aquí.</div></div>`
  }
};

function openActivity(key) {
  const activity = activities[key];
  activityContent.innerHTML = `<div class="exercise"><p class="section-label">${activity.title}</p></div>${activity.body}`;
  activityPanel.hidden = false;
  activityPanel.querySelector('h2')?.focus?.();
  activityPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('[data-activity]').forEach((button) => button.addEventListener('click', () => openActivity(button.dataset.activity)));
document.querySelector('#closeActivity').addEventListener('click', () => { activityPanel.hidden = true; document.querySelector('#actividad').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#showPause').addEventListener('click', () => pauseDialog.showModal());
document.querySelector('#closePause').addEventListener('click', () => pauseDialog.close());
document.querySelector('#contrastButton').addEventListener('click', (event) => { const on = document.body.classList.toggle('high-contrast'); event.currentTarget.setAttribute('aria-pressed', String(on)); event.currentTarget.textContent = on ? 'Contraste normal' : 'Más contraste'; });
function caesarCipher(message, shift) {
  return [...message.toUpperCase()].map((character) => {
    const code = character.charCodeAt(0);
    if (code < 65 || code > 90) return character;
    return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
  }).join('');
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.choice')) {
    event.target.setAttribute('aria-pressed', String(event.target.getAttribute('aria-pressed') !== 'true'));
  }
  if (event.target.matches('#checkDecode')) {
    const answer = document.querySelector('#decodedMessage').value.trim().toUpperCase();
    document.querySelector('#decodeFeedback').textContent = answer === 'JURASSIC' ? 'Correcto: MXUDVVLF con clave 3 se descifra como JURASSIC.' : 'Aún no coincide. Prueba mover cada letra tres lugares hacia atrás.';
  }
  if (event.target.matches('#encodeMessage')) {
    const message = document.querySelector('#messageToEncode').value;
    const shift = Number(document.querySelector('#shiftValue').value);
    const result = document.querySelector('#encodedResult');
    result.textContent = message ? `Resultado: ${caesarCipher(message, shift)}` : 'Escribe un mensaje para cifrarlo.';
  }
});
