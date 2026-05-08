const byId = (id) => document.getElementById(id);

const introOverlay = byId("introOverlay");
const introVideo = byId("introVideo");
const introStatus = byId("introStatus");
const startIntroButton = byId("startIntro");
const skipIntroButton = byId("skipIntro");
const bootOverlay = byId("bootOverlay");
const startSystemButton = byId("startSystem");
const systemAlertPanel = byId("systemAlertPanel");
const systemAlertState = byId("systemAlertState");
const systemAlertMessage = byId("systemAlertMessage");

const output = byId("terminalOutput");
const form = byId("terminalForm");
const input = byId("commandInput");

const typingSound = byId("typingSound");
const audioIntro = byId("audioIntro");
const audioAlerta = byId("audioAlerta");
const audioAmbiente = byId("audioAmbiente");
const audioRaptor = byId("audioRaptor");
const audioRex = byId("audioRex");
const audioTriceratops = byId("audioTriceratops");
const audioAnkylosaurus = byId("audioAnkylosaurus");

const powerState = byId("powerState");
const doorState = byId("doorState");
const raptorState = byId("raptorState");
const escapeState = byId("escapeState");
const threatLevelState = byId("threatLevelState");
const countdownState = byId("countdownState");
const objectiveText = byId("objectiveText");
const currentAlertText = byId("currentAlertText");
const damageState = byId("damageState");
const biohazardState = byId("biohazardState");
const stabilityState = byId("stabilityState");
const energySystemState = byId("energySystemState");

const missionPower = byId("missionPower");
const missionGenerator = byId("missionGenerator");
const missionRaptor = byId("missionRaptor");
const missionTrex = byId("missionTrex");
const missionDilo = byId("missionDilo");
const missionBarrier = byId("missionBarrier");
const missionHerd = byId("missionHerd");
const missionAnky = byId("missionAnky");
const missionChimera = byId("missionChimera");
const missionDoor = byId("missionDoor");
const missionEscape = byId("missionEscape");

const zonePowerState = byId("zonePowerState");
const zoneRaptorState = byId("zoneRaptorState");
const zoneDoorState = byId("zoneDoorState");
const zoneEscapeState = byId("zoneEscapeState");

const openMapButton = byId("openMapButton");
const closeMapButton = byId("closeMapButton");
const mapBackdrop = byId("mapBackdrop");
const mapModal = byId("mapModal");
const labThreatState = byId("labThreatState");
const threatRaptor = byId("threatRaptor");
const threatTrex = byId("threatTrex");
const threatDilo = byId("threatDilo");

const speciesMarkers = Array.from(document.querySelectorAll(".species-marker"));
const speciesImage = byId("speciesImage");
const speciesSector = byId("speciesSector");
const speciesName = byId("speciesName");
const speciesStatus = byId("speciesStatus");
const speciesRisk = byId("speciesRisk");
const speciesActivity = byId("speciesActivity");
const speciesTraits = byId("speciesTraits");
const speciesRiskLevel = byId("speciesRiskLevel");
const speciesDescription = byId("speciesDescription");
const speciesIncidents = byId("speciesIncidents");
const speciesList = byId("speciesList");

const focusLock = byId("focusLock");
const resumeSession = byId("resumeSession");
const gameOverOverlay = byId("gameOverOverlay");
const restartScenarioButton = byId("restartScenario");
const escapeOverlay = byId("escapeOverlay");
const escapeVideo = byId("escapeVideo");
const escapeOverlayTitle = byId("escapeOverlayTitle");
const escapeOverlayText = byId("escapeOverlayText");
const omegaOverlay = byId("omegaOverlay");
const omegaVideo = byId("omegaVideo");
const omegaVideoSource = byId("omegaVideoSource");
const omegaOverlayLabel = byId("omegaOverlayLabel");
const omegaOverlayTitle = byId("omegaOverlayTitle");
const omegaOverlayText = byId("omegaOverlayText");

const actionButtons = Array.from(document.querySelectorAll(".action-button[data-command]"));

const cipherConsole = byId("cipherConsole");
const cipherConsoleTarget = byId("cipherConsoleTarget");
const cipherConsoleHint = byId("cipherConsoleHint");
const cipherEquationDisplay = byId("cipherEquationDisplay");
const cipherExplanation = byId("cipherExplanation");
const cipherConsoleBuffer = byId("cipherConsoleBuffer");
const cipherRotorCards = byId("cipherRotorCards");
const focusCipherRaptorButton = byId("focusCipherRaptor");
const focusCipherTrexButton = byId("focusCipherTrex");
const focusCipherAppendButton = byId("focusCipherAppend");
const focusCipherSendButton = byId("focusCipherSend");

const toggleAmbientMuteButton = byId("toggleAmbientMute");
const toggleAmbientPauseButton = byId("toggleAmbientPause");
const scanSectorButton = byId("scanSectorButton");
const identifySpeciesButton = byId("identifySpeciesButton");
const confirmContainmentButton = byId("confirmContainmentButton");
const silenceAlertButton = byId("silenceAlertButton");

const dinoSounds = {
  raptor: audioRaptor,
  trex: audioRex,
  herb: audioTriceratops,
  anky: audioAnkylosaurus,
  brachio: new Audio("assets/audio/brachio.mp3"),
  dilo: new Audio("assets/audio/dilo.mp3"),
  stego: new Audio("assets/audio/stego.mp3"),
  chimera: new Audio("assets/audio/Chimerasaurus.mp3"),
  garras: new Audio("assets/audio/Garras.mp3"),
};

for (const sound of Object.values(dinoSounds)) {
  sound.preload = "auto";
}

const narrationLines = {
  opening:
    "En las profundidades de nuestras instalaciones, más allá de los protocolos convencionales de investigación, opera GENETIC SYSTEMS, la unidad encargada de la manipulación, secuenciación y reactivación de material genético prehistórico. A través de algoritmos avanzados y sistemas de bioingeniería de alta precisión, hemos logrado lo que durante décadas fue considerado imposible: reconstruir organismos extintos a partir de fragmentos de ADN preservados en el tiempo. Cada espécimen es monitoreado en tiempo real mediante una red de sensores integrados, controlados por nuestro núcleo central basado en arquitectura UNIX, garantizando estabilidad, control y trazabilidad absoluta, hasta ahora. Recientes anomalías en el sistema han provocado inconsistencias en los módulos de contención. Registros indican actividad biológica no autorizada en múltiples sectores. El origen de estas variaciones aún es desconocido. Estado actual: inestable. Nivel de riesgo: elevado. Todo el personal autorizado deberá proceder con extrema precaución. GENETIC SYSTEMS ya no responde completamente a los protocolos establecidos.",
  briefing:
    "Atención. El núcleo de Jurassic Unix Control ha entrado en contingencia. Restablezca energía, recupere el generador, contenga fauna crítica y asegure la salida del laboratorio.",
  power: "Energía principal restaurada.",
  generator: "Alerta. El generador de respaldo ha sido dañado por impacto estructural.",
  raptor: "Velociraptor detectado en el paddock R cero uno.",
  trex: "Tyrannosaurus rex aproximándose al corredor C cero siete.",
  herd: "Conflicto territorial de herbívoros detectado en el valle sur.",
  anky: "Ankylosaurus bloqueando el corredor logístico L cero cinco.",
  door: "Ruta de evacuación liberada.",
  escape: "Evacuación autorizada. Personal restante, abandone la instalación.",
  omega: "Atención. Nivel Omega activado. Chimerasaurus Rex liberado. Cápsula de contención rota.",
  chimera: "Protocolo Omega disponible. Reúna los fragmentos y contenga al Chimerasaurus Rex antes del colapso total.",
};

const state = {
  protocolStarted: false,
  introStarted: false,
  introFinished: false,
  bootStarted: false,
  ambientMuted: false,
  ambientPaused: false,
  powerOnline: false,
  generatorDamaged: false,
  generatorRepaired: false,
  raptorContained: false,
  trexContained: false,
  diloNeutralized: false,
  barriersRestored: false,
  herdCalmed: false,
  ankyRedirected: false,
  doorUnlocked: false,
  escaped: false,
  cinematicStarted: false,
  gameOver: false,
  finalOutcome: null,
  alertsSilencedUntil: 0,
  currentDinoSound: null,
  alertPanelTimer: null,
  glitchBurstTimer: null,
  activeZone: "raptor",
  attempts: 0,
  countdownSeconds: 900,
  omegaReleased: false,
  omegaCinematicPlaying: false,
  omegaVideoSeen: false,
  timerId: null,
  damageInstalacion: 12,
  riesgoBiologico: 18,
  estabilidadLaboratorio: 88,
  energiaSistema: 62,
  chimeraContained: false,
  chimeraCode: "",
  chimeraBreakoutCount: 0,
  chimeraContainmentExpiresAt: null,
  chimeraFragmentsKnown: {
    omega: false,
    key: false,
    dna: false,
  },
  director: {
    lastEscalationAt: 900,
    lastPressureAt: 900,
    cooldown: 0,
    activePuzzle: "none",
  },
  timelineFlags: {
    generator: false,
    sensors: false,
    raptor: false,
    trex: false,
    dilo: false,
    barrier: false,
    herd: false,
    anky: false,
    omega: false,
    collapse: false,
    chimeraHint: false,
  },
  raptorCode: "",
  trexCode: "",
  raptorRotors: [],
  trexRotors: [],
  cipherHelper: {
    target: "raptor",
    letter: "A",
    shift: 1,
    rotors: [],
    activeRotorIndex: 0,
    buffer: "",
  },
};

function randomDigit(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function encodeRotorLetter(digit, shift) {
  return "ABCDEFGHIJ"[(Number(digit) + shift) % 10];
}

function letterIndex(letter) {
  return "ABCDEFGHIJ".indexOf(letter);
}

function decodeRotorValue(letter, shift) {
  return (letterIndex(letter) - Number(shift) + 10) % 10;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getChimeraCodeParts() {
  const parts = state.chimeraCode.split("-");
  return {
    prefix: `${parts[0]}-${parts[1]}`,
    digits: parts[2],
    suffix: parts[3],
  };
}

function generateChimeraCode() {
  generateChimeraCode();
}

function getChimeraContainmentWindow() {
  return Math.max(22, 52 - state.chimeraBreakoutCount * 6);
}

function resetChimeraFragments() {
  state.chimeraFragmentsKnown = {
    omega: false,
    key: false,
    dna: false,
  };
  state.timelineFlags.chimeraHint = false;
}

function prepareNextChimeraCycle() {
  generateChimeraCode();
  resetChimeraFragments();
}

function clonePlay(audioElement, volume = 0.45) {
  const sound = audioElement.cloneNode();
  sound.volume = volume;
  sound.play().catch(() => {});
}

function reproducirSonido(nombre, overrides = {}) {
  const library = {
    intro: audioIntro,
    alerta: audioAlerta,
    ambiente: audioAmbiente,
    raptor: dinoSounds.raptor,
    trex: dinoSounds.trex,
    herb: dinoSounds.herb,
    anky: dinoSounds.anky,
    brachio: dinoSounds.brachio,
    dilo: dinoSounds.dilo,
    stego: dinoSounds.stego,
    chimera: dinoSounds.chimera,
  };

  const audio = library[nombre];
  if (!audio) return Promise.resolve(false);
  if (nombre === "alerta" && Date.now() < state.alertsSilencedUntil) return Promise.resolve(false);

  const defaultVolume =
    nombre === "ambiente" ? 0.08 :
    nombre === "intro" ? 0.6 :
    nombre === "alerta" ? 0.7 :
    0.8;

  if (["raptor", "trex", "herb", "anky", "brachio", "dilo", "stego", "chimera"].includes(nombre)) {
    if (state.currentDinoSound && state.currentDinoSound !== audio) {
      state.currentDinoSound.pause();
      state.currentDinoSound.currentTime = 0;
    }
    state.currentDinoSound = audio;
  }

  if (overrides.reset !== false) {
    audio.currentTime = 0;
  }
  if (typeof overrides.loop === "boolean") {
    audio.loop = overrides.loop;
  }
  audio.volume = overrides.volume ?? defaultVolume;
  return audio.play().then(() => true).catch(() => false);
}

function detenerSonido(nombre) {
  const library = {
    intro: audioIntro,
    alerta: audioAlerta,
    ambiente: audioAmbiente,
    raptor: dinoSounds.raptor,
    trex: dinoSounds.trex,
    herb: dinoSounds.herb,
    anky: dinoSounds.anky,
    brachio: dinoSounds.brachio,
    dilo: dinoSounds.dilo,
    stego: dinoSounds.stego,
    chimera: dinoSounds.chimera,
  };
  const audio = library[nombre];
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  if (state.currentDinoSound === audio) {
    state.currentDinoSound = null;
  }
}

function playAlert(volume = 0.7) {
  return reproducirSonido("alerta", { volume });
}

function playDinoSound(key, volume = 0.8) {
  return reproducirSonido(key, { volume });
}

function reproducirGarrasAleatorio(force = false) {
  if ((!state.omegaReleased && !force) || state.escaped || state.gameOver) return false;
  if (!force && Math.random() < 0.45) return false;
  clonePlay(dinoSounds.garras, state.omegaReleased ? 0.34 : 0.24);
  return true;
}

function startAmbient() {
  if (state.ambientPaused) return Promise.resolve(false);
  return reproducirSonido("ambiente", {
    volume: state.ambientMuted ? 0 : 0.08,
    loop: true,
    reset: false,
  });
}

function stopAmbient() {
  audioAmbiente.pause();
}

function showAlertPanel(message, mode = "active") {
  if (!systemAlertPanel || !systemAlertState || !systemAlertMessage) return;
  if (state.alertPanelTimer) {
    window.clearTimeout(state.alertPanelTimer);
    state.alertPanelTimer = null;
  }
  systemAlertPanel.classList.remove("hidden", "system-alert--active", "system-alert--critical", "system-alert--controlled", "system-alert--off");
  systemAlertPanel.classList.add(`system-alert--${mode}`);
  const labels = {
    active: "ALERTA ACTIVA",
    critical: "ALERTA CRITICA",
    controlled: "SITUACION CONTROLADA",
    off: "ALERTA APAGADA",
  };
  systemAlertState.textContent = labels[mode] ?? labels.active;
  systemAlertMessage.textContent = message;
  if (mode === "off") {
    systemAlertPanel.classList.add("hidden");
  }
}

function hideAlertPanel() {
  if (!systemAlertPanel || !systemAlertState || !systemAlertMessage) return;
  systemAlertPanel.classList.remove("system-alert--active", "system-alert--critical", "system-alert--controlled");
  systemAlertPanel.classList.add("system-alert--off", "hidden");
  systemAlertState.textContent = "ALERTA APAGADA";
  systemAlertMessage.textContent = "Sistema estable.";
}

function detenerAlerta(message = "SITUACION CONTROLADA") {
  detenerSonido("alerta");
  showAlertPanel(message, "controlled");
  state.alertPanelTimer = window.setTimeout(() => {
    hideAlertPanel();
    state.alertPanelTimer = null;
  }, 2400);
}

function updateAmbientButtons() {
  if (toggleAmbientMuteButton) {
    toggleAmbientMuteButton.textContent = state.ambientMuted ? "Activar ambiente" : "Silenciar ambiente";
  }
  if (toggleAmbientPauseButton) {
    toggleAmbientPauseButton.textContent = state.ambientPaused ? "Reanudar ambiente" : "Pausar ambiente";
  }
}

function toggleAmbientMute() {
  state.ambientMuted = !state.ambientMuted;
  audioAmbiente.volume = state.ambientMuted ? 0 : 0.08;
  updateAmbientButtons();
}

function toggleAmbientPause() {
  state.ambientPaused = !state.ambientPaused;
  if (state.ambientPaused) {
    audioAmbiente.pause();
  } else if (state.protocolStarted && !state.gameOver && !state.escaped) {
    startAmbient();
  }
  updateAmbientButtons();
}

function setAlertSilence(durationMs = 20000) {
  state.alertsSilencedUntil = Date.now() + durationMs;
  silenceAlertButton.textContent = "ALERTA SILENCIADA";
  window.setTimeout(() => {
    if (Date.now() >= state.alertsSilencedUntil) {
      silenceAlertButton.textContent = "SILENCIAR ALERTA";
    }
  }, durationMs + 50);
}

function speak(text, onend) {
  if (onend) onend();
}

function initializeScenario() {
  state.protocolStarted = false;
  state.ambientMuted = false;
  state.ambientPaused = false;
  state.powerOnline = false;
  state.generatorDamaged = false;
  state.generatorRepaired = false;
  state.raptorContained = false;
  state.trexContained = false;
  state.diloNeutralized = false;
  state.barriersRestored = false;
  state.herdCalmed = false;
  state.ankyRedirected = false;
  state.doorUnlocked = false;
  state.escaped = false;
  state.cinematicStarted = false;
  state.gameOver = false;
  state.finalOutcome = null;
  state.alertsSilencedUntil = 0;
  state.currentDinoSound = null;
  if (state.alertPanelTimer) {
    window.clearTimeout(state.alertPanelTimer);
    state.alertPanelTimer = null;
  }
  if (state.glitchBurstTimer) {
    window.clearTimeout(state.glitchBurstTimer);
    state.glitchBurstTimer = null;
  }
  state.attempts = 0;
  state.activeZone = "raptor";
  state.countdownSeconds = 900;
  state.omegaReleased = false;
  state.omegaCinematicPlaying = false;
  state.omegaVideoSeen = false;
  state.damageInstalacion = 12;
  state.riesgoBiologico = 18;
  state.estabilidadLaboratorio = 88;
  state.energiaSistema = 62;
  state.chimeraContained = false;
  state.chimeraCode = "";
  state.chimeraBreakoutCount = 0;
  state.chimeraContainmentExpiresAt = null;
  state.chimeraFragmentsKnown = {
    omega: false,
    key: false,
    dna: false,
  };
  state.director = {
    lastEscalationAt: 900,
    lastPressureAt: 900,
    cooldown: 0,
    activePuzzle: "none",
  };
  state.timelineFlags = {
    generator: false,
    sensors: false,
    raptor: false,
    trex: false,
    dilo: false,
    barrier: false,
    herd: false,
    anky: false,
    omega: false,
    collapse: false,
    chimeraHint: false,
  };
  state.raptorCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.trexCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.chimeraCode = `CHM-${randomDigit()}${randomDigit()}${randomDigit()}-OMEGA`;
  state.raptorRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  state.trexRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  setCipherTarget("raptor");
  stopAmbient();
  hideAlertPanel();
  if (escapeOverlay) {
    escapeOverlay.className = "escape-overlay hidden";
    escapeOverlay.setAttribute("aria-hidden", "true");
  }
  if (escapeVideo) {
    const source = escapeVideo.querySelector("source");
    if (source) source.src = "assets/video/ESCAPE.MP4";
    escapeVideo.load();
    escapeVideo.pause();
    escapeVideo.currentTime = 0;
  }
  if (restartScenarioButton) {
    restartScenarioButton.classList.add("hidden");
  }
  if (omegaOverlay) {
    omegaOverlay.classList.add("hidden");
    omegaOverlay.setAttribute("aria-hidden", "true");
  }
  if (omegaVideo) {
    if (omegaVideoSource) omegaVideoSource.src = "assets/video/Chimerasaurus Escape.MP4";
    omegaVideo.load();
    omegaVideo.pause();
    omegaVideo.currentTime = 0;
  }
  document.body.classList.remove("state-omega");
  document.body.classList.remove("state-damage-medium", "state-damage-high", "glitch-burst", "glitch-severe");
}

function getCipherRotorsForTarget(target) {
  const code = target === "raptor" ? state.raptorCode : state.trexCode;
  const shifts = target === "raptor" ? state.raptorRotors : state.trexRotors;
  return code.split("").map((digit, index) => {
    const letter = encodeRotorLetter(digit, shifts[index]);
    return {
      label: `ROTOR ${["I", "II", "III"][index]}`,
      letter,
      shift: shifts[index],
      baseValue: letterIndex(letter),
      currentValue: letterIndex(letter),
    };
  });
}

function getFiles() {
  const [r1, r2, r3] = state.raptorCode.split("");
  const [t1, t2, t3] = state.trexCode.split("");
  const [rr1, rr2, rr3] = state.raptorRotors;
  const [tr1, tr2, tr3] = state.trexRotors;
  const chimera = getChimeraCodeParts();

  return {
    "README.TXT": [
      "JURASSIC UNIX CONTROL // PROTOCOLO DE EMERGENCIA",
      "1. Reactiva la energia principal.",
      "2. Repara el generador si vuelve a caer la red.",
      "3. Conten al Velociraptor mediante rotores.",
      "4. Conten al Tyrannosaurus rex mediante rotores.",
      "5. Estabiliza el conflicto entre herbivoros.",
      "6. Redirige al Ankylosaurus fuera del corredor logistico.",
      "7. Sobrevive a la activacion OMEGA.",
      "8. Reconstruye la clave del Chimerasaurus y contén al híbrido.",
      "9. Abre la salida y evacua antes del colapso total.",
    ],
    "POWER.LOG": [
      "SUBESTACION OESTE: codigo de restauracion -> RST-POWER-73",
      "Comando: restore power RST-POWER-73",
    ],
    "GENERATOR.LOG": [
      "GENERADOR DE RESPALDO // ESTADO DE EMERGENCIA",
      "Codigo de reparacion manual: GEN-RESTART-84",
      "Comando: repair generator GEN-RESTART-84",
      "Nota: si el generador cae, la red de contencion volvera a inestabilizarse.",
    ],
    "BARRIER.SYS": [
      "CONTENCION // BARRERAS PARCIALES",
      "Codigo de restauracion: BARRIER-RESTORE-31",
      "Comando: restore barrier BARRIER-RESTORE-31",
      "Nota: restaura cercos y barreras antes de abrir la compuerta norte.",
    ],
    "ENIGMA.MANUAL": [
      "MANUAL DE DESCIFRADO // SISTEMA DE ROTORES",
      "Cada letra equivale a un numero: A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9",
      "El rotor inicia en el numero de la letra.",
      "Cada giro hacia atras resta 1.",
      "Si el rotor baja de 0, vuelve a 9.",
    ],
    "RAPTOR.KEY": [
      "PROTOCOLO ENIGMA R-01 // VELOCIRAPTOR",
      `ROTOR I: ${encodeRotorLetter(r1, rr1)} = ${letterIndex(encodeRotorLetter(r1, rr1))} // gira ${rr1}`,
      `ROTOR II: ${encodeRotorLetter(r2, rr2)} = ${letterIndex(encodeRotorLetter(r2, rr2))} // gira ${rr2}`,
      `ROTOR III: ${encodeRotorLetter(r3, rr3)} = ${letterIndex(encodeRotorLetter(r3, rr3))} // gira ${rr3}`,
      "Protocolo final: contain raptor ###",
    ],
    "TREX.KEY": [
      "PROTOCOLO ENIGMA C-07 // TYRANNOSAURUS REX",
      `ROTOR I: ${encodeRotorLetter(t1, tr1)} = ${letterIndex(encodeRotorLetter(t1, tr1))} // gira ${tr1}`,
      `ROTOR II: ${encodeRotorLetter(t2, tr2)} = ${letterIndex(encodeRotorLetter(t2, tr2))} // gira ${tr2}`,
      `ROTOR III: ${encodeRotorLetter(t3, tr3)} = ${letterIndex(encodeRotorLetter(t3, tr3))} // gira ${tr3}`,
      "Protocolo final: contain trex ###",
    ],
    "DILO.LOG": [
      "ACCESO PRINCIPAL // DILOPHOSAURUS",
      "Compuerta de bloqueo rápido: GATE-DILO-19",
      "Comando: lock dilo GATE-DILO-19",
      "Evento de riesgo veloz: neutraliza la amenaza antes de que alcance el vestíbulo.",
    ],
    "HERD.LOG": [
      "SECTOR C // CONFLICTO ENTRE HERBIVOROS",
      "Especies implicadas: Triceratops adulto y Ankylosaurus subadulto.",
      "Protocolo de separación: HERD-SPLIT-41",
      "Comando: separate herd HERD-SPLIT-41",
    ],
    "ANKY.KEY": [
      "CORREDOR L-05 // REDIRECCION DE ANKYLOSAURUS",
      "Ruta de desvio: ANKY-PORT-55",
      "Comando: redirect anky ANKY-PORT-55",
    ],
    "OMEGA.LOG": [
      "PROTOCOLO OMEGA // ACCESO RESTRINGIDO",
      state.omegaReleased ? "ADVERTENCIA: el híbrido no responde a contención estándar." : "Archivo sellado hasta activación de nivel OMEGA.",
      state.omegaReleased ? `Fragmento de prefijo recuperado: ${chimera.prefix}` : "Fragmento oculto por protocolo negro.",
      state.omegaReleased ? `Contenciones fallidas acumuladas: ${state.chimeraBreakoutCount}` : "Sin datos de ruptura.",
      state.omegaReleased ? "Referencia de comando: contain chimerasaurus <clave>" : "Referencia no disponible.",
    ],
    "CHIMERA.KEY": [
      "CHIMERASAURUS REX // LLAVE DE CIERRE",
      state.omegaReleased ? "El sufijo del protocolo permanece estable bajo palabra de cierre OMEGA." : "Archivo sin permisos hasta incidente híbrido.",
      state.omegaReleased ? `Sufijo confirmado: ${chimera.suffix}` : "Sufijo oculto.",
      state.omegaReleased ? "La secuencia completa requiere unir prefijo, bloque numérico y sufijo." : "La secuencia completa permanece bloqueada.",
    ],
    "DNA-MIX.LOG": [
      "DNA MIX // HIBRIDO EXPERIMENTAL",
      state.omegaReleased ? "Base genética: T-REX / RAPTOR / TRICERATOPS / STEGOSAURUS" : "Registro híbrido clasificado.",
      state.omegaReleased ? `Lectura numérica inestable: ${chimera.digits}` : "Bloque numérico inaccesible.",
      state.omegaReleased ? "El bloque numérico está incrustado entre el prefijo y la palabra final." : "Se requiere activación OMEGA.",
    ],
    "RAPTOR.DAT": [
      "VELOCIRAPTOR // EXPEDIENTE BIOLOGICO",
      "Carnivoro, cazador social, aprendizaje rapido, patron de emboscada.",
      "Riesgo: NIVEL V",
    ],
    "TREX.DAT": [
      "TYRANNOSAURUS REX // EXPEDIENTE BIOLOGICO",
      "Carnivoro apex, gran fuerza estructural, dominancia territorial.",
      "Riesgo: NIVEL V",
    ],
    "DILO.DAT": [
      "DILOPHOSAURUS // EXPEDIENTE BIOLOGICO",
      "Carnivoro ligero, movilidad elevada, interferencia en corredores humedos.",
      "Riesgo: NIVEL IV",
    ],
    "HERB.DAT": [
      "TRICERATOPS / PARASAUROLOPHUS // EXPEDIENTE BIOLOGICO",
      "Herbivoros de gran tamaño, riesgo de carga defensiva, estampida y bloqueo de rutas.",
      "Riesgo: NIVEL III",
    ],
    "ANKY.DAT": [
      "ANKYLOSAURUS // EXPEDIENTE BIOLOGICO",
      "Herbivoro blindado, cola de impacto, riesgo logistico severo por bloqueo de corredor.",
      "Riesgo: NIVEL IV",
    ],
    "BRACHIO.DAT": [
      "BRACHIOSAURUS // EXPEDIENTE BIOLOGICO",
      "Sauropodo de gran masa, daño accidental a torres y acometidas.",
      "Riesgo: NIVEL III",
    ],
    "STEGO.DAT": [
      "STEGOSAURUS // EXPEDIENTE BIOLOGICO",
      "Herbivoro con respuesta caudal defensiva y reactividad alta a corta distancia.",
      "Riesgo: NIVEL III",
    ],
    "DOOR.SYS": [
      "PUERTA DE EVACUACION LAB-B",
      "Codigo maestro: DOOR-LOCK-42",
      "Comando: unlock door DOOR-LOCK-42",
    ],
    "CREW.LOG": [
      "BITACORA // 2024-2026",
      "14 FEB 2024 // mantenimiento reporta oscilaciones de energia en subestacion oeste.",
      "09 AGO 2025 // cuidador del paddock R-01 prohíbe entrar solo a la zona de raptores.",
      "18 JUL 2026 // conflicto de herbivoros cierra temporalmente valle sur.",
      "08 SEP 2026 // Ankylosaurus adulto golpea barrera movil en corredor logístico.",
    ],
    "NEDRY.MSG": [
      "Ah ah ah, no dijiste la palabra magica.",
      "Pista real: las soluciones estan escondidas en los archivos del sistema.",
    ],
  };
}

const speciesZones = {
  power: {
    sector: "SUBESTACION OESTE",
    name: "Sistema electrico",
    image: "Señales/Señal.jpg",
    status: () => state.generatorDamaged ? "GENERADOR DAÑADO" : state.powerOnline ? "ENERGIA ESTABLE" : "OFFLINE",
    risk: () => state.generatorDamaged ? "CRITICO" : state.powerOnline ? "MODERADO" : "ALTO",
    activity: () => state.generatorDamaged ? "LINEA DE RESPALDO INTERRUMPIDA" : state.powerOnline ? "RED ESTABLE" : "CIRCUITO CAIDO",
    traits: () => "Nodo central, distribucion a cercos electricos y sistemas de compuerta.",
    riskLevel: () => state.generatorDamaged ? "Nivel IV: daño estructural en infraestructura." : "Nivel III: dependencia critica del sistema.",
    description: () => state.generatorDamaged ? "El generador fue dañado por un impacto de gran masa en el sector B-02." : "La subestacion sostiene la contencion de la instalacion.",
    incidents: () => [
      "12 JUN 2024 // Sobrecarga en transformador B-12.",
      "18 ENE 2026 // Pérdida de iluminación en corredor de servicio.",
    ],
  },
  raptor: {
    sector: "PADDOCK R-01",
    name: "Velociraptor",
    image: "Dinosaurios/Creatacico/Velociraptor.jpeg",
    status: () => state.raptorContained ? "CONTENIDO" : "ACTIVIDAD HOSTIL",
    risk: () => state.raptorContained ? "MEDIO" : "CRITICO",
    activity: () => state.raptorContained ? "RUTA CANCELADA" : "MOVIMIENTO NO AUTORIZADO",
    traits: () => "Cazador social, velocidad elevada, respuesta coordinada.",
    riskLevel: () => "Nivel V: depredador letal en entorno de laboratorio.",
    description: () => state.raptorContained ? "El paddock fue aislado con cerco secundario." : "Sensores térmicos confirman patrullaje cerca del cerco interno.",
    incidents: () => [
      "07 SEP 2025 // Intento de emboscada durante alimentación.",
      "11 ENE 2026 // Pérdida de radio junto al cerco interior.",
    ],
  },
  trex: {
    sector: "CORREDOR C-07",
    name: "Tyrannosaurus rex",
    image: "Dinosaurios/Creatacico/Tyrannosaurus rex.webp",
    status: () => state.trexContained ? "REDIRIGIDO" : "APROXIMACION DIRECTA",
    risk: () => state.trexContained ? "ALTO" : "EXTREMO",
    activity: () => state.trexContained ? "COMPUERTAS SUR CERRADAS" : "VIBRACION DE SUELO DETECTADA",
    traits: () => "Depredador apex, impacto estructural, intimidacion visual extrema.",
    riskLevel: () => "Nivel V: capacidad de colapso estructural.",
    description: () => state.trexContained ? "El corredor sur ha sido aislado." : "Huella masiva acercandose al laboratorio.",
    incidents: () => [
      "03 OCT 2024 // Vehiculo retirado tras golpe en barrera externa.",
      "09 NOV 2026 // Huellas fuera del sendero asignado.",
    ],
  },
  dilo: {
    sector: "SECTOR E-03",
    name: "Dilophosaurus",
    image: "Dinosaurios/Jurasico/Dilophosaurus.webp",
    status: () => "LECTURA IRREGULAR",
    risk: () => "ALTO",
    activity: () => "INTERFERENCIA VISUAL",
    traits: () => "Carnivoro ligero, cobertura vegetal, movilidad silenciosa.",
    riskLevel: () => "Nivel IV: contacto visual reducido.",
    description: () => "Los sensores del sector este siguen registrando movimientos incompletos.",
    incidents: () => [
      "22 AGO 2024 // Técnico abandona sendero tras sombra rápida.",
      "27 MAY 2025 // Cámara pierde enfoque en corredor húmedo.",
    ],
  },
  herb: {
    sector: "VALLE SUR",
    name: "Triceratops y Parasaurolophus",
    image: "Dinosaurios/Creatacico/Triceratops.jpeg",
    status: () => state.herdCalmed ? "MANADA ESTABLE" : "CONFLICTO TERRITORIAL",
    risk: () => state.herdCalmed ? "MEDIO" : "ALTO",
    activity: () => state.herdCalmed ? "RUTA REABRIERTA" : "ESTAMPIDA PARCIAL",
    traits: () => "Herbivoros de manada, defensa por carga y bloqueo de corredor.",
    riskLevel: () => "Nivel III: riesgo defensivo y logístico.",
    description: () => state.herdCalmed ? "El valle sur vuelve a ser transitable." : "El conflicto entre herbivoros compromete la evacuacion.",
    incidents: () => [
      "14 JUL 2024 // Carga defensiva durante revisión veterinaria.",
      "19 MAR 2026 // Estampida parcial en el valle sur.",
    ],
  },
  anky: {
    sector: "CORREDOR L-05",
    name: "Ankylosaurus",
    image: "Dinosaurios/Creatacico/Ankylosaurus.jpeg",
    status: () => state.ankyRedirected ? "REDIRIGIDO" : "BLOQUEANDO RUTA",
    risk: () => state.ankyRedirected ? "MEDIO" : "ALTO",
    activity: () => state.ankyRedirected ? "CORREDOR DESPEJADO" : "COLA DE IMPACTO EN BARRERA",
    traits: () => "Blindaje dorsal, masa compacta, bloqueo físico de corredor.",
    riskLevel: () => "Nivel IV: daño severo a vehículos y compuertas.",
    description: () => state.ankyRedirected ? "El corredor logístico vuelve a operar." : "El paso logístico se encuentra comprometido.",
    incidents: () => [
      "08 SEP 2026 // Golpe a barrera móvil del corredor.",
      "10 SEP 2026 // Sensor de puerta detecta impactos repetidos.",
    ],
  },
  brachio: {
    sector: "SECTOR B-02",
    name: "Brachiosaurus",
    image: "Dinosaurios/Jurasico/Brachiosaurus.jpg",
    status: () => "DESPLAZAMIENTO LENTO",
    risk: () => "MEDIO",
    activity: () => "TORRE DE ACOMETIDA EN RIESGO",
    traits: () => "Sauropodo de gran masa, alcance vertical y daño accidental.",
    riskLevel: () => "Nivel III: impacto estructural accidental.",
    description: () => "El ejemplar de Brachiosaurus se movió cerca de la línea del generador.",
    incidents: () => [
      "05 JUL 2024 // Daño a plataforma de alimentacion.",
      "12 AGO 2025 // Bloqueo prolongado de la ruta norte.",
    ],
  },
  stego: {
    sector: "SECTOR S-04",
    name: "Stegosaurus",
    image: "Dinosaurios/Jurasico/Stegosaurus.jpeg",
    status: () => "RESPUESTA DEFENSIVA",
    risk: () => "MEDIO",
    activity: () => "MOVIMIENTO DE COLA DETECTADO",
    traits: () => "Herbivoro acorazado, defensa caudal, reactividad de proximidad.",
    riskLevel: () => "Nivel III: lesión grave por respuesta territorial.",
    description: () => "Un ejemplar juvenil participa en el conflicto del valle sur.",
    incidents: () => [
      "21 JUL 2025 // Golpe de cola contra barrera lateral.",
      "28 FEB 2026 // Cerca deformada durante maniobra defensiva.",
    ],
  },
  chimera: {
    sector: "CAPSULA OMEGA // NUCLEO CENTRAL",
    name: "Chimerasaurus Rex",
    image: "Dinosaurios/Chimerasaurus.PNG",
    status: () => state.omegaReleased ? "LIBERADO" : "LATENTE",
    risk: () => state.omegaReleased ? "OMEGA" : "EXTREMO",
    activity: () => state.omegaReleased ? "COLAPSO MULTISECTORIAL" : "LECTURA SUPRIMIDA",
    traits: () => "Hibrido experimental con rasgos de T-Rex, Velociraptor, Triceratops y Stegosaurus.",
    riskLevel: () => "Nivel OMEGA: amenaza terminal para toda la instalacion.",
    description: () => state.omegaReleased ? "El hibrido ya esta suelto. Cada segundo aumenta la presion sobre la evacuacion." : "El expediente fue bloqueado por protocolo negro.",
    incidents: () => [
      "REGISTRO CLASIFICADO // No divulgar al personal base.",
      "PROTOCOLO NEGRO // Capsula sellada por riesgo de extincion local.",
    ],
  },
  dock: {
    sector: "MUELLE DE CARGA",
    name: "Salida marítima",
    image: "Señales/Maritima.jpg",
    status: () => state.escaped ? "RUTA UTILIZADA" : "RUTA INSEGURA",
    risk: () => state.escaped ? "CONTROLADO" : "ALTO",
    activity: () => state.escaped ? "EVACUACION COMPLETADA" : "ACCESO RESTRINGIDO",
    traits: () => "Punto logístico costero y última vía de salida segura.",
    riskLevel: () => "Nivel III: punto crítico de evacuación.",
    description: () => state.escaped ? "La instalación fue abandonada con éxito." : "La ruta exterior aún no está liberada.",
    incidents: () => [
      "02 SEP 2024 // Cajas volcadas junto a plataforma dos.",
      "15 SEP 2026 // Vocalización no identificada cerca del rompeolas.",
    ],
  },
};

const bootMessages = [
  "Iniciando Jurassic Unix Control v4.1.7",
  "Montando volumen /lab/control",
  "Sincronizando sensores biológicos",
  "Cargando protocolos de contención y mapa táctico",
  "Sistema listo. Operador autorizado, proceda.",
];

function setZoneState(element, text, variant) {
  element.textContent = text;
  element.className = "zone-state";
  element.classList.add(`zone-state--${variant}`);
}

function setMissionState(element, label, mode) {
  const badge = element.querySelector(".mission-item__state");
  badge.textContent = label;
  element.classList.remove("is-active", "is-done", "is-locked");
  element.classList.add(mode);
}

function getDirectorPhase() {
  if (state.omegaReleased) return 5;
  if (state.countdownSeconds <= 360 || state.damageInstalacion >= 55) return 4;
  if (state.countdownSeconds <= 540 || state.damageInstalacion >= 40) return 3;
  if (state.countdownSeconds <= 720 || state.riesgoBiologico >= 38) return 2;
  return 1;
}

function setPuzzleVisibility(mode) {
  state.director.activePuzzle = mode;
  if (!cipherConsole) return;
  const shouldShow = mode === "raptor" || mode === "trex";
  cipherConsole.classList.toggle("hidden", !shouldShow);
}

function triggerVisualGlitchBurst(severity = "normal") {
  document.body.classList.add("glitch-burst");
  document.body.classList.toggle("glitch-severe", severity === "severe");
  if (state.glitchBurstTimer) {
    window.clearTimeout(state.glitchBurstTimer);
  }
  state.glitchBurstTimer = window.setTimeout(() => {
    document.body.classList.remove("glitch-burst", "glitch-severe");
    state.glitchBurstTimer = null;
  }, severity === "severe" ? 480 : 260);
}

function triggerChimeraBreakout(reason = "RUPTURA OMEGA DETECTADA") {
  state.omegaReleased = true;
  state.chimeraContained = false;
  state.chimeraContainmentExpiresAt = null;
  state.chimeraBreakoutCount += 1;
  state.activeZone = "chimera";
  state.doorUnlocked = false;
  state.omegaVideoSeen = false;
  prepareNextChimeraCycle();
  const escalation = state.chimeraBreakoutCount;
  applyDeterioration({
    damage: 10 + escalation * 4,
    bio: 12 + escalation * 4,
    stability: -(12 + escalation * 5),
    energy: -(8 + escalation * 2),
  });
  playAlert(0.82);
  clonePlay(dinoSounds.chimera, 0.68);
  reproducirGarrasAleatorio(true);
  triggerVisualGlitchBurst("severe");
  setPuzzleVisibility("none");
  addLine(`OMEGA REACTIVADO // ${reason} // RUPTURA ${state.chimeraBreakoutCount}`, "error");
  addLine(`NUEVO PROTOCOLO: revisa OMEGA.LOG, CHIMERA.KEY y DNA-MIX.LOG para reconstruir la nueva clave.`, "warning");
  setCurrentAlert(`CHIMERASAURUS REX LIBERADO OTRA VEZ. RUPTURA ${state.chimeraBreakoutCount}.`, "error");
  mostrarEventoOmega();
}

function applyDeterioration(delta = {}) {
  state.damageInstalacion = clamp(state.damageInstalacion + (delta.damage ?? 0), 0, 100);
  state.riesgoBiologico = clamp(state.riesgoBiologico + (delta.bio ?? 0), 0, 100);
  state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + (delta.stability ?? 0), 0, 100);
  state.energiaSistema = clamp(state.energiaSistema + (delta.energy ?? 0), 0, 100);
}

function applyCommandPenalty(level = "standard", reason = "Error operativo.") {
  const presets = {
    standard: { time: 4, damage: 4, bio: 3, stability: -4, energy: -2 },
    severe: { time: 7, damage: 7, bio: 6, stability: -6, energy: -4 },
    omega: { time: 10, damage: 10, bio: 10, stability: -10, energy: -6 },
  };
  const penalty = presets[level] ?? presets.standard;
  state.countdownSeconds = Math.max(0, state.countdownSeconds - penalty.time);
  applyDeterioration({
    damage: penalty.damage,
    bio: penalty.bio,
    stability: penalty.stability,
    energy: penalty.energy,
  });
  playAlert(level === "omega" ? 0.82 : 0.68);
  addLine(`ERROR CRITICO: ${reason}`, "error");
  addLine(`PENALIZACION: -${penalty.time}s | daño +${penalty.damage}% | riesgo +${penalty.bio}%`, "warning");
  if (state.omegaReleased) {
    clonePlay(dinoSounds.chimera, 0.45);
    reproducirGarrasAleatorio(true);
  }
  triggerVisualGlitchBurst(level === "omega" || level === "severe" ? "severe" : "normal");
  maybeTriggerCollapse();
}

function applyPassivePressure() {
  const phase = getDirectorPhase();
  const unresolvedThreats = [
    !state.powerOnline || state.generatorDamaged,
    !state.raptorContained,
    !state.trexContained,
    !state.diloNeutralized,
    !state.barriersRestored,
    !state.herdCalmed,
    !state.ankyRedirected,
    state.omegaReleased && !state.chimeraContained,
  ].filter(Boolean).length;
  const baseDamage = phase >= 5 ? 2 : phase >= 4 ? 1.5 : phase >= 3 ? 1.2 : 0.8;
  const baseBio = phase >= 5 ? 2 : phase >= 3 ? 1.2 : 0.8;
  applyDeterioration({
    damage: Math.ceil(baseDamage + unresolvedThreats * 0.22),
    bio: Math.ceil(baseBio + unresolvedThreats * 0.18),
    stability: -Math.ceil(baseDamage + unresolvedThreats * 0.3),
    energy: state.powerOnline ? -Math.max(1, Math.floor(phase / 2)) : 0,
  });
  if (phase >= 3 && Math.random() < (phase >= 5 ? 0.65 : phase >= 4 ? 0.4 : 0.22)) {
    triggerVisualGlitchBurst(phase >= 5 ? "severe" : "normal");
  }
}

function maybeTriggerCollapse() {
  if (state.gameOver || state.escaped) return;
  if (state.damageInstalacion >= 100) {
    setCurrentAlert("Daño estructural total. La instalación ha colapsado.", "error");
    triggerGameOver();
    return true;
  }
  if (state.riesgoBiologico >= 100 && (!state.omegaReleased || !state.chimeraContained)) {
    setCurrentAlert("Riesgo biológico fuera de control. Contención perdida.", "error");
    triggerGameOver();
    return true;
  }
  return false;
}

function updateObjective() {
  if (state.gameOver) {
    objectiveText.textContent = "Escenario perdido. El laboratorio ha colapsado bajo ataque masivo.";
    return;
  }
  if (state.omegaReleased && !state.escaped) {
    objectiveText.textContent = state.chimeraContained
      ? state.doorUnlocked
        ? "OMEGA estabilizado temporalmente. La salida sigue abierta: ejecuta escape antes de la siguiente ruptura."
        : "Chimerasaurus contenido temporalmente. Libera la salida norte y evacua antes de que vuelva a romperse."
      : "NIVEL OMEGA ACTIVO. Revisa OMEGA.LOG, CHIMERA.KEY y DNA-MIX.LOG para reconstruir la clave final.";
    return;
  }
  if (!state.powerOnline) {
    objectiveText.textContent = state.generatorDamaged
      ? "El generador fue dañado. Revisa GENERATOR.LOG y repara la línea de respaldo."
      : "Restaura la energía principal para recuperar el control de la instalación.";
    return;
  }
  if (!state.raptorContained) {
    objectiveText.textContent = "Abre RAPTOR.KEY y contiene al Velociraptor con los rotores.";
    return;
  }
  if (!state.trexContained) {
    objectiveText.textContent = "Abre TREX.KEY y contiene al T-Rex antes de que alcance el laboratorio.";
    return;
  }
  if (!state.diloNeutralized) {
    objectiveText.textContent = "Dilophosaurus detectado cerca del acceso principal. Revisa DILO.LOG y bloquea compuertas.";
    return;
  }
  if (!state.barriersRestored) {
    objectiveText.textContent = "El sistema de contención está parcialmente desactivado. Restaura las barreras.";
    return;
  }
  if (!state.herdCalmed) {
    objectiveText.textContent = "ALERTA: conflicto entre herbívoros detectado en Sector C. Activa el protocolo de separación.";
    return;
  }
  if (!state.ankyRedirected) {
    objectiveText.textContent = "Un Ankylosaurus bloquea la ruta logística. Revisa ANKY.KEY y redirígelo.";
    return;
  }
  if (!state.omegaReleased) {
    objectiveText.textContent = "Todas las amenazas previas fueron contenidas. Mantente operativo: el Director prepara el protocolo OMEGA.";
    return;
  }
  if (!state.doorUnlocked) {
    objectiveText.textContent = "Con todas las amenazas controladas, abre la salida norte.";
    return;
  }
  if (!state.escaped) {
    objectiveText.textContent = "Todo listo. Ejecuta escape para completar la evacuación.";
    return;
  }
  objectiveText.textContent = "Sistema estabilizado. Escape exitoso.";
}

function formatCountdown(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function setCurrentAlert(text, className = "warning") {
  currentAlertText.textContent = text;
  addLine(`ALERTA DE SISTEMA: ${text}`, className);
  const mode = className === "error" ? "critical" : className === "success" ? "controlled" : "active";
  showAlertPanel(text, mode);
  if (mode === "controlled") {
    detenerAlerta(text);
  }
}

function updateMissionStates() {
  setMissionState(missionPower, state.powerOnline ? "COMPLETA" : "ACTIVA", state.powerOnline ? "is-done" : "is-active");
  setMissionState(missionGenerator, state.generatorRepaired ? "COMPLETA" : state.generatorDamaged ? "ACTIVA" : "MONITOREO", state.generatorRepaired ? "is-done" : state.generatorDamaged ? "is-active" : "is-locked");
  setMissionState(missionRaptor, !state.powerOnline ? "BLOQUEADA" : state.raptorContained ? "COMPLETA" : "ACTIVA", !state.powerOnline ? "is-locked" : state.raptorContained ? "is-done" : "is-active");
  setMissionState(missionTrex, !state.raptorContained ? "BLOQUEADA" : state.trexContained ? "COMPLETA" : "ACTIVA", !state.raptorContained ? "is-locked" : state.trexContained ? "is-done" : "is-active");
  setMissionState(missionDilo, !state.trexContained ? "BLOQUEADA" : state.diloNeutralized ? "COMPLETA" : "ACTIVA", !state.trexContained ? "is-locked" : state.diloNeutralized ? "is-done" : "is-active");
  setMissionState(missionBarrier, !state.diloNeutralized ? "BLOQUEADA" : state.barriersRestored ? "COMPLETA" : "ACTIVA", !state.diloNeutralized ? "is-locked" : state.barriersRestored ? "is-done" : "is-active");
  setMissionState(missionHerd, !state.barriersRestored ? "BLOQUEADA" : state.herdCalmed ? "COMPLETA" : "ACTIVA", !state.barriersRestored ? "is-locked" : state.herdCalmed ? "is-done" : "is-active");
  setMissionState(missionAnky, !state.herdCalmed ? "BLOQUEADA" : state.ankyRedirected ? "COMPLETA" : "ACTIVA", !state.herdCalmed ? "is-locked" : state.ankyRedirected ? "is-done" : "is-active");
  setMissionState(missionChimera, !state.omegaReleased ? "LATENTE" : state.chimeraContained ? "TEMPORAL" : "ACTIVA", !state.omegaReleased ? "is-locked" : state.chimeraContained ? "is-done" : "is-active");
  setMissionState(missionDoor, !state.ankyRedirected || !state.omegaReleased || !state.chimeraContained ? "BLOQUEADA" : state.doorUnlocked ? "COMPLETA" : "ACTIVA", !state.ankyRedirected || !state.omegaReleased || !state.chimeraContained ? "is-locked" : state.doorUnlocked ? "is-done" : "is-active");
  setMissionState(missionEscape, !state.doorUnlocked || !state.omegaReleased || !state.chimeraContained ? "BLOQUEADA" : state.escaped ? "COMPLETA" : "ACTIVA", !state.doorUnlocked || !state.omegaReleased || !state.chimeraContained ? "is-locked" : state.escaped ? "is-done" : "is-active");
}

function updateThreatMap() {
  threatRaptor.classList.toggle("is-contained", state.raptorContained);
  threatTrex.classList.toggle("is-contained", state.trexContained);
  threatDilo.classList.toggle("is-contained", state.diloNeutralized);

  if (state.omegaReleased) {
    labThreatState.textContent = state.chimeraContained
      ? "CHIMERASAURUS CONTENIDO TEMPORALMENTE // OMEGA INESTABLE"
      : "CHIMERASAURUS REX LIBERADO // NIVEL OMEGA";
  } else if (state.generatorDamaged) {
    labThreatState.textContent = "GENERADOR DAÑADO // RIESGO ESTRUCTURAL";
  } else if (!state.diloNeutralized) {
    labThreatState.textContent = "DILOPHOSAURUS CERCA DEL ACCESO PRINCIPAL";
  } else if (!state.barriersRestored) {
    labThreatState.textContent = "CONTENCION PARCIALMENTE DESACTIVADA";
  } else if (!state.herdCalmed) {
    labThreatState.textContent = "CONFLICTO DE HERBIVOROS EN SECTOR C";
  } else if (!state.ankyRedirected) {
    labThreatState.textContent = "ANKYLOSAURUS BLOQUEA CORREDOR";
  } else if (!state.raptorContained || !state.trexContained) {
    labThreatState.textContent = "AMENAZAS CARNIVORAS ACTIVAS";
  } else if (!state.doorUnlocked) {
    labThreatState.textContent = "LABORATORIO ASEGURADO";
  } else {
    labThreatState.textContent = state.escaped ? "EVACUACION COMPLETADA" : "SALIDA LISTA";
  }
}

function renderSpeciesList() {
  const entries = [
    ["Velociraptor", speciesZones.raptor.risk(), "Nivel V, cazador social"],
    ["Tyrannosaurus rex", speciesZones.trex.risk(), "Nivel V, apex estructural"],
    ["Dilophosaurus", speciesZones.dilo.risk(), "Nivel IV, selva humeda"],
    ["Triceratops / Parasaurolophus", speciesZones.herb.risk(), "Nivel III, conflicto de manada"],
    ["Ankylosaurus", speciesZones.anky.risk(), "Nivel IV, bloqueo logistico"],
    ["Brachiosaurus", speciesZones.brachio.risk(), "Nivel III, gran masa corporal"],
    ["Stegosaurus", speciesZones.stego.risk(), "Nivel III, defensa caudal"],
  ];
  if (state.omegaReleased) {
    entries.unshift(["Chimerasaurus Rex", speciesZones.chimera.risk(), "Nivel OMEGA, hibrido terminal"]);
  }

  speciesList.innerHTML = entries.map(([name, risk, text]) => `
    <div class="species-item">
      <div><strong>${name}</strong><span>${text}</span></div>
      <em>${risk}</em>
    </div>
  `).join("");
}

function setActiveSpecies(zoneKey) {
  const zone = speciesZones[zoneKey];
  if (!zone) return;
  state.activeZone = zoneKey;
  speciesImage.src = zone.image;
  speciesImage.alt = zone.name;
  speciesSector.textContent = zone.sector;
  speciesName.textContent = zone.name;
  speciesStatus.textContent = zone.status();
  speciesRisk.textContent = zone.risk();
  speciesActivity.textContent = zone.activity();
  speciesTraits.textContent = zone.traits();
  speciesRiskLevel.textContent = zone.riskLevel();
  speciesDescription.textContent = zone.description();
  speciesIncidents.innerHTML = zone.incidents().map((item) => `
    <div class="incident-item"><strong>Registro</strong><span>${item}</span></div>
  `).join("");
  speciesMarkers.forEach((marker) => marker.classList.toggle("is-active", marker.dataset.zone === zoneKey));
}

function updateActionButtons() {
  for (const button of actionButtons) {
    const command = button.dataset.command;
    let disabled = false;
    if (command === "restore power RST-POWER-73" && state.powerOnline) disabled = true;
    if (command === "repair generator GEN-RESTART-84" && (!state.generatorDamaged || state.generatorRepaired)) disabled = true;
    if (command === "lock dilo GATE-DILO-19" && (!state.trexContained || state.diloNeutralized)) disabled = true;
    if (command === "restore barrier BARRIER-RESTORE-31" && (!state.diloNeutralized || state.barriersRestored)) disabled = true;
    if (command === "separate herd HERD-SPLIT-41" && (!state.barriersRestored || state.herdCalmed)) disabled = true;
    if (command === "redirect anky ANKY-PORT-55" && (!state.herdCalmed || state.ankyRedirected)) disabled = true;
    if (command === "unlock door DOOR-LOCK-42" && (!state.raptorContained || !state.trexContained || !state.diloNeutralized || !state.barriersRestored || !state.herdCalmed || !state.ankyRedirected || state.generatorDamaged || state.doorUnlocked)) disabled = true;
    if (command === "escape" && (!state.doorUnlocked || state.escaped)) disabled = true;
    button.disabled = disabled;
  }
}

function updateHud() {
  powerState.textContent = state.powerOnline ? "ONLINE" : "OFFLINE";
  powerState.style.color = state.powerOnline ? "#9cff57" : "";
  raptorState.textContent = state.raptorContained ? "INACTIVA" : "ACTIVA";
  raptorState.style.color = state.raptorContained ? "#9cff57" : "";
  doorState.textContent = state.doorUnlocked ? "ABIERTA" : "BLOQUEADA";
  doorState.style.color = state.doorUnlocked ? "#9cff57" : "";
  escapeState.textContent = state.escaped ? "COMPLETA" : "PENDIENTE";
  escapeState.style.color = state.escaped ? "#9cff57" : "";
  threatLevelState.textContent = state.gameOver ? "COLAPSO" : state.omegaReleased && !state.chimeraContained ? "OMEGA" : state.damageInstalacion >= 70 || state.riesgoBiologico >= 70 ? "CRITICO" : state.damageInstalacion >= 40 || !state.diloNeutralized || !state.barriersRestored ? "ALTO" : state.doorUnlocked ? "CONTROLADO" : "MEDIO";
  countdownState.textContent = formatCountdown(state.countdownSeconds);
  countdownState.style.color = state.countdownSeconds <= 120 ? "#ff5a4f" : state.countdownSeconds <= 300 ? "#ffd166" : "";
  damageState.textContent = `${Math.round(state.damageInstalacion)}%`;
  biohazardState.textContent = `${Math.round(state.riesgoBiologico)}%`;
  stabilityState.textContent = `${Math.round(state.estabilidadLaboratorio)}%`;
  energySystemState.textContent = `${Math.round(state.energiaSistema)}%`;
  document.body.classList.toggle("state-omega", state.omegaReleased && !state.chimeraContained);
  document.body.classList.toggle("state-damage-medium", state.damageInstalacion >= 40 && state.damageInstalacion < 70);
  document.body.classList.toggle("state-damage-high", state.damageInstalacion >= 70);
  if (state.damageInstalacion >= 85 || state.energiaSistema <= 18 || (state.omegaReleased && !state.chimeraContained)) {
    if (Math.random() < 0.14) triggerVisualGlitchBurst(state.damageInstalacion >= 85 ? "severe" : "normal");
  }

  setZoneState(zonePowerState, state.powerOnline ? "ONLINE" : "OFFLINE", state.powerOnline ? "online" : "offline");
  setZoneState(zoneRaptorState, state.raptorContained ? "ASEGURADA" : "ACTIVA", state.raptorContained ? "safe" : "danger");
  setZoneState(zoneDoorState, state.doorUnlocked ? "ABIERTA" : "BLOQUEADA", state.doorUnlocked ? "open" : "locked");
  setZoneState(zoneEscapeState, state.escaped ? "COMPLETA" : "PENDIENTE", state.escaped ? "done" : "pending");

  updateObjective();
  updateMissionStates();
  updateThreatMap();
  renderSpeciesList();
  setActiveSpecies(state.activeZone);
  updateActionButtons();
  updateCipherHelper();
  setPuzzleVisibility(state.director.activePuzzle);
  updateAmbientButtons();
}

function scrollToBottom() {
  output.scrollTop = output.scrollHeight;
}

function addLine(text = "", className = "") {
  const line = document.createElement("div");
  line.className = `line ${className}`.trim();
  line.textContent = text;
  output.appendChild(line);
  scrollToBottom();
}

function addFileLine(fileName) {
  const line = document.createElement("div");
  line.className = "line file-row";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "file-link";
  button.textContent = fileName;
  button.dataset.command = `cat ${fileName}`;
  line.appendChild(button);
  output.appendChild(line);
  scrollToBottom();
}

function typeLine(text, className = "") {
  return new Promise((resolve) => {
    const line = document.createElement("div");
    line.className = `line ${className} cursor`.trim();
    output.appendChild(line);
    let index = 0;
    const timer = window.setInterval(() => {
      line.textContent = text.slice(0, index + 1);
      index += 1;
      scrollToBottom();
      if (index >= text.length) {
        window.clearInterval(timer);
        line.classList.remove("cursor");
        resolve();
      }
    }, 16);
  });
}

async function printLines(lines, className = "") {
  for (const line of lines) await typeLine(line, className);
}

function listFilesInTerminal() {
  Object.keys(getFiles()).forEach(addFileLine);
}

async function runBootSequence() {
  if (state.bootStarted) return;
  state.bootStarted = true;
  bootOverlay.classList.add("hidden");
  for (const message of bootMessages) {
    await typeLine(message, "success");
  }
  await typeLine("Objetivo: estabilizar la instalación o escapar antes del colapso total.", "warning");
  setCurrentAlert("Operador enlazado. Todos los sistemas de emergencia quedan bajo tu control.", "success");
  speak(narrationLines.briefing);
  input.focus();
}

function parseCommand(rawCommand) {
  return rawCommand.trim().split(/\s+/).filter(Boolean);
}

function showStatus() {
  return printLines([
    `Energia: ${state.powerOnline ? "ONLINE" : "OFFLINE"}`,
    `Generador: ${state.generatorDamaged ? "DAÑADO" : state.generatorRepaired ? "REPARADO" : "ESTABLE"}`,
    `Raptor: ${state.raptorContained ? "CONTENIDO" : "ACTIVO"}`,
    `T-Rex: ${state.trexContained ? "CONTENIDO" : "ACTIVO"}`,
    `Dilophosaurus: ${state.diloNeutralized ? "NEUTRALIZADO" : "ACTIVO"}`,
    `Chimerasaurus: ${state.omegaReleased ? state.chimeraContained ? "CONTENIDO TEMPORAL" : "LIBERADO" : "NO DETECTADO"}`,
    `Barreras: ${state.barriersRestored ? "RESTAURADAS" : "COMPROMETIDAS"}`,
    `Herbivoros: ${state.herdCalmed ? "SEPARADOS" : "EN CONFLICTO"}`,
    `Ankylosaurus: ${state.ankyRedirected ? "REDIRIGIDO" : "BLOQUEANDO RUTA"}`,
    `Puerta: ${state.doorUnlocked ? "ABIERTA" : "BLOQUEADA"}`,
    `Evacuacion: ${state.escaped ? "COMPLETADA" : "PENDIENTE"}`,
    `Daño instalación: ${Math.round(state.damageInstalacion)}%`,
    `Riesgo biológico: ${Math.round(state.riesgoBiologico)}%`,
    `Estabilidad: ${Math.round(state.estabilidadLaboratorio)}%`,
    `Energía sistema: ${Math.round(state.energiaSistema)}%`,
  ], "success");
}

function triggerGameOver() {
  if (state.gameOver || state.escaped) return;
  state.gameOver = true;
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  stopAmbient();
  if (state.currentDinoSound) {
    state.currentDinoSound.pause();
    state.currentDinoSound.currentTime = 0;
  }
  playAlert();
  if (state.omegaReleased) {
    clonePlay(dinoSounds.chimera, 0.68);
    reproducirGarrasAleatorio(true);
  }
  setCurrentAlert("Ataque masivo no contenido. El laboratorio ha sido comprometido.", "error");
  startFailureCinematic();
  updateHud();
}

function startEscapeCinematic() {
  if (state.cinematicStarted || !escapeOverlay || !escapeVideo) return;
  state.cinematicStarted = true;
  state.finalOutcome = "success";
  detenerSonido("alerta");
  hideAlertPanel();
  stopAmbient();
  if (state.currentDinoSound) {
    state.currentDinoSound.pause();
    state.currentDinoSound.currentTime = 0;
    state.currentDinoSound = null;
  }
  escapeOverlay.className = "escape-overlay";
  escapeOverlay.classList.remove("hidden");
  escapeOverlay.setAttribute("aria-hidden", "false");
  escapeOverlayTitle.textContent = "ES MOMENTO DE SALIR";
  escapeOverlayText.textContent = "La ruta exterior está abierta. Corre hacia la salida antes del cierre total.";
  restartScenarioButton?.classList.add("hidden");
  const source = escapeVideo.querySelector("source");
  if (source) {
    source.src = "assets/video/ESCAPE.MP4";
    escapeVideo.load();
  }
  escapeVideo.currentTime = 0;
  escapeVideo.play().catch(() => {
    escapeOverlayText.textContent = "No fue posible reproducir ESCAPE.MP4. La misión se considera completada.";
    finishEscapeCinematic();
  });
}

function finishEscapeCinematic() {
  if (!escapeOverlayTitle || !escapeOverlayText) return;
  escapeOverlayTitle.textContent = "LOGRASTE ESCAPAR";
  escapeOverlayText.textContent = "Misión completada. Jurassic UNIX Control registra evacuación exitosa.";
}

function startFailureCinematic() {
  if (state.cinematicStarted || !escapeOverlay || !escapeVideo) return;
  state.cinematicStarted = true;
  state.finalOutcome = "failure";
  hideAlertPanel();
  stopAmbient();
  if (state.currentDinoSound) {
    state.currentDinoSound.pause();
    state.currentDinoSound.currentTime = 0;
    state.currentDinoSound = null;
  }
  escapeOverlay.className = "escape-overlay escape-overlay--failure";
  escapeOverlay.classList.remove("hidden");
  escapeOverlay.setAttribute("aria-hidden", "false");
  escapeOverlayTitle.textContent = "NO LOGRASTE ESCAPAR";
  escapeOverlayText.textContent = "El laboratorio ha sido comprometido. La evacuación falló y la instalación quedó perdida.";
  restartScenarioButton?.classList.add("hidden");
  const source = escapeVideo.querySelector("source");
  if (source) {
    source.src = "assets/video/Falla.mp4";
    escapeVideo.load();
  }
  escapeVideo.currentTime = 0;
  escapeVideo.play().catch(() => {
    escapeOverlayText.textContent = "No fue posible reproducir assets/video/Falla.mp4.";
    finishFailureCinematic();
  });
}

function finishFailureCinematic() {
  if (!escapeOverlayTitle || !escapeOverlayText) return;
  escapeOverlayTitle.textContent = "MISION FALLIDA";
  escapeOverlayText.textContent = "El laboratorio quedó perdido. Reinicia el escenario para intentarlo de nuevo.";
  restartScenarioButton?.classList.remove("hidden");
}

function reproducirVideoOmega() {
  if (!omegaVideo || !omegaVideoSource) return Promise.resolve(false);
  omegaVideo.pause();
  omegaVideoSource.src = "assets/video/Chimerasaurus Escape.MP4";
  omegaVideo.load();
  omegaVideo.currentTime = 0;
  return omegaVideo.play().then(() => true).catch(() => false);
}

function mostrarEventoOmega() {
  if (!omegaOverlay || state.omegaCinematicPlaying) return;
  state.omegaCinematicPlaying = true;
  omegaOverlay.classList.remove("hidden");
  omegaOverlay.setAttribute("aria-hidden", "false");
  omegaOverlayLabel.textContent = "NIVEL OMEGA ACTIVADO";
  omegaOverlayTitle.textContent = `CHIMERASAURUS REX LIBERADO // RUPTURA ${state.chimeraBreakoutCount || 1}`;
  omegaOverlayText.textContent = "CAPSULA DE CONTENCION ROTA. El evento es intermedio y el temporizador sigue corriendo.";
  playAlert(0.8);
  clonePlay(dinoSounds.chimera, 0.62);
  reproducirGarrasAleatorio(true);
  speak(narrationLines.omega);
  reproducirVideoOmega().then((played) => {
    if (!played) {
      omegaOverlayText.textContent = "No fue posible reproducir assets/video/Chimerasaurus Escape.MP4.";
      cerrarEventoOmega();
    }
  });
}

function cerrarEventoOmega() {
  state.omegaCinematicPlaying = false;
  state.omegaVideoSeen = true;
  omegaOverlay?.classList.add("hidden");
  omegaOverlay?.setAttribute("aria-hidden", "true");
  if (omegaVideo) {
    omegaVideo.pause();
    omegaVideo.currentTime = 0;
  }
  addLine("CHIMERASAURUS REX HA ROTO LA CAPSULA DE CONTENCION. Regresando a la consola para continuar el protocolo OMEGA.", "warning");
  setCurrentAlert("NIVEL OMEGA ACTIVADO. CHIMERASAURUS REX LIBERADO. CAPSULA DE CONTENCION ROTA.", "error");
  input.focus();
}

function activateDirectorEvent(key) {
  switch (key) {
    case "sensors":
      playAlert(0.55);
      setCurrentAlert("Frecuencia acustica no identificada. Sensores alterados en sectores E-03 y R-01.", "warning");
      break;
    case "raptor":
      playAlert();
      playDinoSound("raptor");
      speak(narrationLines.raptor);
      state.activeZone = "raptor";
      setPuzzleVisibility("raptor");
      setCurrentAlert("Movimiento detectado en Sector B. Velociraptor en perímetro interno.", "error");
      break;
    case "trex":
      playAlert();
      playDinoSound("trex", 0.65);
      speak(narrationLines.trex);
      state.activeZone = "trex";
      setPuzzleVisibility("trex");
      setCurrentAlert("Huella de gran masa confirmada. Tyrannosaurus rex aproximándose al corredor C-07.", "error");
      break;
    case "generator":
      state.generatorDamaged = true;
      state.powerOnline = false;
      applyDeterioration({ damage: 8, bio: 2, stability: -8, energy: -18 });
      playAlert();
      playDinoSound("brachio", 0.55);
      speak(narrationLines.generator);
      state.activeZone = "power";
      setPuzzleVisibility("none");
      setCurrentAlert("Generador dañado. Impacto estructural en B-02 y caída de energía de respaldo.", "error");
      break;
    case "barrier":
      applyDeterioration({ damage: 6, bio: 5, stability: -6, energy: -4 });
      playAlert(0.65);
      state.activeZone = "power";
      setCurrentAlert("Sistema de contención parcialmente desactivado. Barreras del sector este sin respuesta.", "error");
      break;
    case "dilo":
      playAlert(0.6);
      playDinoSound("dilo", 0.6);
      state.activeZone = "dilo";
      setPuzzleVisibility("none");
      setCurrentAlert("Dilophosaurus detectado cerca del acceso principal.", "error");
      break;
    case "anky":
      playAlert(0.6);
      playDinoSound("anky", 0.55);
      speak(narrationLines.anky);
      state.activeZone = "anky";
      setCurrentAlert("Ankylosaurus detectado en perímetro logístico. Corredor L-05 bloqueado.", "warning");
      break;
    case "herd":
      playAlert(0.6);
      playDinoSound("herb", 0.55);
      speak(narrationLines.herd);
      state.activeZone = "herb";
      setCurrentAlert("Conflicto entre herbívoros en curso. Triceratops, Parasaurolophus y Stegosaurus fuera de pauta.", "warning");
      break;
    case "omega":
      triggerChimeraBreakout("CAPSULA DE CONTENCION ROTA");
      break;
    case "collapse":
      applyDeterioration({ damage: 10, bio: 8, stability: -12, energy: -8 });
      playAlert();
      reproducirGarrasAleatorio(true);
      setCurrentAlert("Alerta crítica. Ataque masivo inminente y falla multisectorial.", "error");
      break;
  }
}

function processTimedThreats() {
  if (!state.bootStarted || state.gameOver || state.escaped) return;

  state.countdownSeconds = Math.max(0, state.countdownSeconds - 1);

  const beats = [
    ["sensors", 840],
    ["raptor", 760],
    ["trex", 700],
    ["generator", 610],
    ["barrier", 540],
    ["anky", 480],
    ["dilo", 420],
    ["herd", 330],
    ["omega", 600],
    ["collapse", 120],
  ];
  for (const [key, threshold] of beats) {
    if (state.countdownSeconds <= threshold && !state.timelineFlags[key]) {
      state.timelineFlags[key] = true;
      activateDirectorEvent(key);
    }
  }

  if (state.countdownSeconds % 18 === 0) {
    applyPassivePressure();
  }

  if (state.omegaReleased && !state.chimeraContained && !state.timelineFlags.chimeraHint && state.countdownSeconds <= 540) {
    state.timelineFlags.chimeraHint = true;
    addLine(`PROTOCOLO OMEGA: revisa OMEGA.LOG, CHIMERA.KEY y DNA-MIX.LOG. La ruptura ${state.chimeraBreakoutCount} usa una clave nueva.`, "warning");
  }

  if (state.omegaReleased && state.chimeraContained && state.chimeraContainmentExpiresAt !== null && state.countdownSeconds <= state.chimeraContainmentExpiresAt) {
    triggerChimeraBreakout("LA CONTENCION TEMPORAL FALLÓ");
  }

  if (state.omegaReleased && !state.chimeraContained && state.countdownSeconds % 20 === 0) {
    clonePlay(dinoSounds.chimera, 0.38);
    reproducirGarrasAleatorio(true);
    applyDeterioration({
      damage: 2 + state.chimeraBreakoutCount,
      bio: 2 + state.chimeraBreakoutCount,
      stability: -(2 + state.chimeraBreakoutCount),
      energy: -(1 + Math.floor(state.chimeraBreakoutCount / 2)),
    });
  }

  if (state.countdownSeconds === 0) {
    triggerGameOver();
    return;
  }
  if (maybeTriggerCollapse()) return;
  updateHud();
}

function startThreatTimer() {
  if (state.timerId) return;
  state.timerId = window.setInterval(processTimedThreats, 1000);
}

function restartScenario() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  window.location.reload();
}

function updateCipherHelper() {
  const { target, rotors, activeRotorIndex, buffer } = state.cipherHelper;
  const activeRotor = rotors[activeRotorIndex] || { label: "ROTOR I", letter: "A", shift: 1, baseValue: 0, currentValue: 0 };
  const stepsDone = (activeRotor.baseValue - activeRotor.currentValue + 10) % 10;
  const stepsLeft = Math.max(activeRotor.shift - stepsDone, 0);

  cipherConsoleTarget.textContent = `OBJETIVO: ${target === "raptor" ? "RAPTOR" : "T-REX"}`;
  cipherConsoleHint.textContent = "Cada rotor inicia en el numero de su letra. Cada giro hacia atras resta 1. Si bajas de 0, vuelves a 9.";
  cipherEquationDisplay.textContent = `${activeRotor.label}: ${activeRotor.letter} = ${activeRotor.baseValue} | resta ${activeRotor.shift} | valor actual ${activeRotor.currentValue}`;
  cipherExplanation.textContent = stepsLeft > 0
    ? `Llevas ${stepsDone} giros de ${activeRotor.shift}. Sigue girando hacia atras.`
    : "Rotor alineado. Ya puedes guardar este dígito en la clave.";
  cipherConsoleBuffer.textContent = buffer ? buffer.split("").join(" ") : "_ _ _";

  cipherRotorCards.innerHTML = rotors.map((rotor, index) => `
    <div class="cipher-rotor ${index === activeRotorIndex ? "is-active" : ""}" data-rotor-index="${index}">
      <span>${rotor.label}</span>
      <button type="button" class="cipher-rotor__dial" data-rotate="-1" data-rotor-index="${index}" aria-label="Girar ${rotor.label}">
        <div class="cipher-rotor__window">${rotor.currentValue}</div>
      </button>
      <strong>${rotor.letter} = ${rotor.baseValue}</strong>
      <em>gira ${rotor.shift}</em>
      <div class="cipher-rotor__controls">
        <button type="button" class="cipher-rotor__button cipher-rotor__button--primary" data-rotate="-1" data-rotor-index="${index}">GIRAR</button>
        <button type="button" class="cipher-rotor__button" data-reset-rotor="${index}">RESET</button>
      </div>
    </div>
  `).join("");
}

function setCipherTarget(target) {
  state.cipherHelper.target = target;
  state.cipherHelper.rotors = getCipherRotorsForTarget(target);
  state.cipherHelper.activeRotorIndex = 0;
  state.cipherHelper.buffer = "";
}

function appendCipherResult() {
  const rotor = state.cipherHelper.rotors[state.cipherHelper.activeRotorIndex];
  if (!rotor) return;
  const expected = decodeRotorValue(rotor.letter, rotor.shift);
  if (rotor.currentValue !== expected) {
    setCurrentAlert("El rotor activo aún no está alineado. Sigue girando antes de guardar el dígito.", "warning");
    return;
  }
  if (state.cipherHelper.buffer.length >= 3) {
    setCurrentAlert("La clave ya tiene tres dígitos.", "warning");
    return;
  }
  state.cipherHelper.buffer += String(rotor.currentValue);
  if (state.cipherHelper.activeRotorIndex < state.cipherHelper.rotors.length - 1) {
    state.cipherHelper.activeRotorIndex += 1;
  }
  updateCipherHelper();
}

function prepareCipherCommand() {
  input.value = `contain ${state.cipherHelper.target} ${state.cipherHelper.buffer || ""}`.trimEnd();
  input.focus();
}

function focusLockIfNeeded() {
  if (!state.bootStarted || state.escaped || state.gameOver) return;
  focusLock.classList.remove("hidden");
  focusLock.setAttribute("aria-hidden", "false");
  playAlert(0.45);
}

function hideFocusLock() {
  focusLock.classList.add("hidden");
  focusLock.setAttribute("aria-hidden", "true");
  input.focus();
}

function getPriorityZone() {
  if (state.omegaReleased && !state.chimeraContained) return "chimera";
  if (state.generatorDamaged || !state.powerOnline) return "power";
  if (!state.raptorContained) return "raptor";
  if (!state.trexContained) return "trex";
  if (!state.diloNeutralized) return "dilo";
  if (!state.barriersRestored) return "power";
  if (!state.herdCalmed) return "herb";
  if (!state.ankyRedirected) return "anky";
  if (!state.doorUnlocked) return "dock";
  return "dock";
}

async function scanSector() {
  const zoneKey = getPriorityZone();
  state.activeZone = zoneKey;
  setActiveSpecies(zoneKey);
  mapModal.classList.remove("hidden");
  const messages = {
    chimera: "Lectura OMEGA detectada. El Chimerasaurus Rex avanza entre sectores comprometidos.",
    power: !state.barriersRestored && state.diloNeutralized
      ? "Sistema de contención parcialmente desactivado. Barreras del sector este sin respuesta."
      : "Escaneo de infraestructura: generador y red eléctrica muestran pérdida de estabilidad.",
    raptor: "Movimiento detectado en Sector B. Patrón de caza rápida asociado a Velociraptor.",
    trex: "Lectura sísmica elevada. Masa biológica extrema acercándose al corredor C-07.",
    dilo: "Dilophosaurus detectado cerca del acceso principal. Riesgo de intrusión rápida.",
    herb: "Conflicto entre herbívoros en curso. La manada está cerrando el valle sur.",
    anky: "Ankylosaurus detectado en perímetro logístico. La ruta de evacuación secundaria está bloqueada.",
    dock: "Ruta exterior bajo revisión. Compuerta norte y muelle esperando confirmación final.",
  };
  const soundMap = {
    chimera: "chimera",
    raptor: "raptor",
    trex: "trex",
    herb: "herb",
    anky: "anky",
    power: "brachio",
  };
  if (soundMap[zoneKey]) {
    playDinoSound(soundMap[zoneKey], 0.45);
  }
  setCurrentAlert(messages[zoneKey], zoneKey === "power" ? "warning" : "error");
  await typeLine(`ESCANEO COMPLETADO // ${speciesZones[zoneKey].sector}`, "success");
}

async function identifySpecies() {
  const zoneKey = state.activeZone || getPriorityZone();
  setActiveSpecies(zoneKey);
  const zone = speciesZones[zoneKey];
  if (!zone) return;
  if (["raptor", "trex", "herb", "anky", "brachio", "dilo", "stego"].includes(zoneKey)) {
    playDinoSound(zoneKey === "trex" ? "trex" : zoneKey === "herb" ? "herb" : zoneKey, 0.5);
  }
  if (zoneKey === "chimera") {
    playDinoSound("chimera", 0.5);
    reproducirGarrasAleatorio(true);
  }
  await printLines([
    `ESPECIE IDENTIFICADA: ${zone.name.toUpperCase()}`,
    `SECTOR: ${zone.sector}`,
    `RIESGO: ${zone.risk()}`,
    `ACTIVIDAD: ${zone.activity()}`,
  ], "success");
}

async function confirmContainmentFromActiveZone() {
  const zoneKey = state.activeZone || getPriorityZone();
  const commandByZone = {
    power: state.generatorDamaged ? "repair generator GEN-RESTART-84" : (!state.barriersRestored && state.diloNeutralized ? "restore barrier BARRIER-RESTORE-31" : "restore power RST-POWER-73"),
    dilo: "lock dilo GATE-DILO-19",
    herb: "separate herd HERD-SPLIT-41",
    anky: "redirect anky ANKY-PORT-55",
    dock: state.doorUnlocked ? "escape" : "unlock door DOOR-LOCK-42",
  };

  if (zoneKey === "raptor" && !state.raptorContained) {
    setCipherTarget("raptor");
    updateCipherHelper();
    setCurrentAlert("Contención de raptor requiere clave dinámica. Abre RAPTOR.KEY y resuelve los rotores.", "warning");
    return;
  }
  if (zoneKey === "trex" && !state.trexContained) {
    setCipherTarget("trex");
    updateCipherHelper();
    setCurrentAlert("Contención de T-Rex requiere clave dinámica. Abre TREX.KEY y resuelve los rotores.", "warning");
    return;
  }
  if (zoneKey === "chimera" && !state.chimeraContained) {
    setCurrentAlert("El protocolo OMEGA no es automático. Reúne fragmentos en OMEGA.LOG, CHIMERA.KEY y DNA-MIX.LOG.", "error");
    return;
  }
  if (!commandByZone[zoneKey]) {
    await typeLine("La zona activa no requiere confirmación manual en este momento.", "warning");
    return;
  }
  await handleCommand(commandByZone[zoneKey]);
}

async function handleCommand(rawCommand) {
  addLine(`root@jurassic-unix:~# ${rawCommand}`, "command");
  const tokens = parseCommand(rawCommand);
  if (!tokens.length) return;

  const command = tokens[0].toLowerCase();
  const argsUpper = tokens.slice(1).map((t) => t.toUpperCase());
  const argsLower = tokens.slice(1).map((t) => t.toLowerCase());

  if (state.gameOver && !["restart", "clear", "help"].includes(command)) {
    addLine("Sistema bloqueado. Reinicia el escenario para volver a intentarlo.", "error");
    return;
  }

  switch (command) {
    case "help":
      await printLines([
        "Comandos disponibles:",
        "help", "ls", "cat ARCHIVO", "open ARCHIVO", "status", "missions", "hint",
        "restore power RST-POWER-73",
        "repair generator GEN-RESTART-84",
        "contain raptor ###",
        "contain trex ###",
        "lock dilo GATE-DILO-19",
        "restore barrier BARRIER-RESTORE-31",
        "separate herd HERD-SPLIT-41",
        "redirect anky ANKY-PORT-55",
        "contain chimerasaurus CHM-###-OMEGA",
        "unlock door DOOR-LOCK-42",
        "escape", "restart", "clear",
      ]);
      return;

    case "ls":
      listFilesInTerminal();
      return;

    case "cat":
    case "open": {
      const fileName = argsUpper.join(" ");
      const files = getFiles();
      if (!files[fileName]) {
        playAlert();
        addLine(`${command}: ${tokens.slice(1).join(" ")}: archivo no encontrado`, "error");
        return;
      }
      if (fileName === "RAPTOR.KEY") setCipherTarget("raptor");
      if (fileName === "TREX.KEY") setCipherTarget("trex");
      if (fileName === "RAPTOR.KEY") setPuzzleVisibility("raptor");
      if (fileName === "TREX.KEY") setPuzzleVisibility("trex");
      if (state.omegaReleased && fileName === "OMEGA.LOG") state.chimeraFragmentsKnown.omega = true;
      if (state.omegaReleased && fileName === "CHIMERA.KEY") state.chimeraFragmentsKnown.key = true;
      if (state.omegaReleased && fileName === "DNA-MIX.LOG") state.chimeraFragmentsKnown.dna = true;
      updateCipherHelper();
      await printLines(files[fileName]);
      const fileFollowups = {
        "POWER.LOG": "Siguiente paso: restore power RST-POWER-73",
        "GENERATOR.LOG": "Siguiente paso: repair generator GEN-RESTART-84",
        "DILO.LOG": "Siguiente paso: lock dilo GATE-DILO-19",
        "BARRIER.SYS": "Siguiente paso: restore barrier BARRIER-RESTORE-31",
        "HERD.LOG": "Siguiente paso: separate herd HERD-SPLIT-41",
        "ANKY.KEY": "Siguiente paso: redirect anky ANKY-PORT-55",
        "DOOR.SYS": "Siguiente paso: unlock door DOOR-LOCK-42",
      };
      if (fileFollowups[fileName]) {
        await typeLine(fileFollowups[fileName], "success");
      }
      if (state.omegaReleased && (fileName === "OMEGA.LOG" || fileName === "CHIMERA.KEY" || fileName === "DNA-MIX.LOG")) {
        await typeLine("Fragmento OMEGA cargado. Une los tres bloques y ejecuta contain chimerasaurus <clave>.", "warning");
      }
      return;
    }

    case "status":
      await showStatus();
      return;

    case "missions":
      await printLines([
        `1. Energia: ${state.powerOnline ? "COMPLETA" : "PENDIENTE"}`,
        `2. Generador: ${state.generatorRepaired ? "COMPLETA" : state.generatorDamaged ? "ACTIVA" : "EN ESPERA"}`,
        `3. Velociraptor: ${state.raptorContained ? "COMPLETA" : "ACTIVA"}`,
        `4. T-Rex: ${state.trexContained ? "COMPLETA" : "ACTIVA"}`,
        `5. Dilophosaurus: ${state.diloNeutralized ? "COMPLETA" : "ACTIVA"}`,
        `6. Barreras: ${state.barriersRestored ? "COMPLETA" : "ACTIVA"}`,
        `7. Herbivoros: ${state.herdCalmed ? "COMPLETA" : "ACTIVA"}`,
        `8. Ankylosaurus: ${state.ankyRedirected ? "COMPLETA" : "ACTIVA"}`,
        `9. Chimerasaurus: ${state.omegaReleased ? state.chimeraContained ? "COMPLETA" : "ACTIVA" : "LATENTE"}`,
        `10. Puerta: ${state.doorUnlocked ? "COMPLETA" : "BLOQUEADA"}`,
        `11. Evacuacion: ${state.escaped ? "COMPLETA" : "PENDIENTE"}`,
      ], "success");
      return;

    case "hint":
      if (state.omegaReleased && !state.chimeraContained) {
        if (!state.chimeraFragmentsKnown.omega) {
          await typeLine("Pista: el prefijo del protocolo OMEGA está en OMEGA.LOG.", "warning");
          return;
        }
        if (!state.chimeraFragmentsKnown.key) {
          await typeLine("Pista: la palabra final del cierre híbrido está en CHIMERA.KEY.", "warning");
          return;
        }
        if (!state.chimeraFragmentsKnown.dna) {
          await typeLine("Pista: el bloque numérico del híbrido está en DNA-MIX.LOG.", "warning");
          return;
        }
        await typeLine("Pista: une prefijo, bloque numérico y sufijo. El comando empieza con contain chimerasaurus.", "warning");
        applyCommandPenalty("standard", "Consulta de pista en fase OMEGA.");
        updateHud();
        return;
      }
      if (!state.powerOnline) {
        await typeLine(state.generatorDamaged ? "Pista: el generador ya cayó. Revisa GENERATOR.LOG." : "Pista: revisa POWER.LOG.", "warning");
        return;
      }
      if (!state.raptorContained) {
        await typeLine("Pista: abre ENIGMA.MANUAL y luego RAPTOR.KEY.", "warning");
        return;
      }
      if (!state.trexContained) {
        await typeLine("Pista: el T-Rex usa el mismo sistema de rotores que Raptor.", "warning");
        return;
      }
      if (!state.diloNeutralized) {
        await typeLine("Pista: revisa DILO.LOG para bloquear el acceso principal.", "warning");
        return;
      }
      if (!state.barriersRestored) {
        await typeLine("Pista: revisa BARRIER.SYS para restaurar la contención.", "warning");
        return;
      }
      if (!state.herdCalmed) {
        await typeLine("Pista: revisa HERD.LOG para estabilizar el conflicto de manada.", "warning");
        return;
      }
      if (!state.ankyRedirected) {
        await typeLine("Pista: revisa ANKY.KEY para liberar el corredor logístico.", "warning");
        return;
      }
      if (!state.doorUnlocked) {
        await typeLine("Pista: revisa DOOR.SYS para abrir la salida.", "warning");
        return;
      }
      await typeLine("Pista: ya puedes ejecutar escape.", "warning");
      return;

    case "restore":
      if (argsLower[0] === "power" && argsUpper.slice(1).join("-") === "RST-POWER-73") {
        if (state.generatorDamaged) {
          applyCommandPenalty("severe", "Intentaste restaurar energia con el generador dañado.");
          return;
        }
        if (state.powerOnline) {
          await typeLine("Energia ya restaurada.", "warning");
          return;
        }
        state.powerOnline = true;
        state.energiaSistema = clamp(state.energiaSistema + 22, 0, 100);
        state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 10, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Energia principal restaurada");
        updateHud();
        setCurrentAlert("Energía principal restaurada.", "success");
        speak(narrationLines.power);
        await printLines(["Restaurando suministro electrico...", "Subestacion oeste en linea.", "Energia principal ONLINE."], "success");
        return;
      }
      if (argsLower[0] === "barrier" && argsUpper.slice(1).join("-") === "BARRIER-RESTORE-31") {
        if (!state.diloNeutralized) {
          applyCommandPenalty("standard", "Intentaste restaurar barreras con el acceso principal comprometido.");
          return;
        }
        state.barriersRestored = true;
        state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 8, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Barreras restauradas");
        updateHud();
        await printLines(["Reactivando barreras de contención...", "Sincronizando cercos del sector este...", "BARRERAS RESTAURADAS."], "success");
        return;
      }
      break;

    case "repair":
      if (argsLower[0] === "generator" && argsUpper.slice(1).join("-") === "GEN-RESTART-84") {
        if (!state.generatorDamaged) {
          await typeLine("El generador no requiere reparacion.", "warning");
          return;
        }
        state.generatorDamaged = false;
        state.generatorRepaired = true;
        state.powerOnline = true;
        state.energiaSistema = clamp(state.energiaSistema + 18, 0, 100);
        state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 8, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Generador reparado");
        updateHud();
        setCurrentAlert("Generador reparado. La instalación recupera estabilidad energética.", "success");
        await printLines(["Reparando acometida del generador...", "Linea de respaldo estabilizada.", "Generador ONLINE."], "success");
        return;
      }
      break;

    case "lock":
      if (argsLower[0] === "dilo" && argsUpper.slice(1).join("-") === "GATE-DILO-19") {
        if (!state.trexContained) {
          applyCommandPenalty("standard", "Intentaste bloquear a Dilophosaurus sin asegurar el corredor del T-Rex.");
          return;
        }
        state.diloNeutralized = true;
        state.riesgoBiologico = clamp(state.riesgoBiologico - 10, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Dilophosaurus neutralizado");
        detenerSonido("dilo");
        updateHud();
        await printLines(["Cerrando compuertas del acceso principal...", "Lectura de Dilophosaurus desviada...", "Amenaza DILO NEUTRALIZADA."], "success");
        return;
      }
      break;

    case "contain":
      if (!state.powerOnline) {
        applyCommandPenalty("severe", "No hay energia suficiente para ejecutar protocolos de contencion.");
        return;
      }
      if (argsLower[0] === "raptor") {
        if (tokens[2] === state.raptorCode) {
          state.raptorContained = true;
          state.riesgoBiologico = clamp(state.riesgoBiologico - 8, 0, 100);
          detenerAlerta("SITUACION CONTROLADA // Velociraptor contenido");
          updateHud();
          detenerSonido("raptor");
          setPuzzleVisibility("none");
          playDinoSound("raptor", 0.35);
          await printLines(["Validando protocolo R-01...", "Cerco secundario reactivado.", "Velociraptor CONTENIDO."], "success");
          return;
        }
        applyCommandPenalty("severe", "Clave de contencion raptor invalida.");
        return;
      }
      if (argsLower[0] === "trex") {
        if (tokens[2] === state.trexCode) {
          state.trexContained = true;
          state.riesgoBiologico = clamp(state.riesgoBiologico - 8, 0, 100);
          detenerAlerta("SITUACION CONTROLADA // T-Rex contenido");
          updateHud();
          detenerSonido("trex");
          setPuzzleVisibility("none");
          playDinoSound("trex", 0.35);
          await printLines(["Validando protocolo C-07...", "Compuertas del corredor sur cerradas.", "Tyrannosaurus rex CONTENIDO."], "success");
          return;
        }
        applyCommandPenalty("severe", "Clave de contencion T-Rex invalida.");
        return;
      }
      if (argsLower[0] === "chimerasaurus") {
        if (!state.omegaReleased) {
          await typeLine("No existe una amenaza OMEGA activa en este momento.", "warning");
          return;
        }
        if (!state.chimeraFragmentsKnown.omega || !state.chimeraFragmentsKnown.key || !state.chimeraFragmentsKnown.dna) {
          applyCommandPenalty("standard", "El protocolo OMEGA está incompleto. Faltan fragmentos por revisar.");
          return;
        }
        if (tokens[2] === state.chimeraCode) {
          state.chimeraContained = true;
          state.chimeraContainmentExpiresAt = state.countdownSeconds - getChimeraContainmentWindow();
          state.riesgoBiologico = clamp(state.riesgoBiologico - 18, 0, 100);
          state.damageInstalacion = clamp(state.damageInstalacion - 10, 0, 100);
          state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 14, 0, 100);
          detenerAlerta("SITUACION CONTROLADA // Chimerasaurus contenido");
          updateHud();
          await printLines([
            "Validando protocolo OMEGA...",
            "Cerrando campos híbridos del núcleo central...",
            `CHIMERASAURUS REX CONTENIDO // VENTANA TEMPORAL ${getChimeraContainmentWindow()}s`,
          ], "success");
          addLine("La contencion OMEGA es temporal. Aprovecha la ventana antes de la siguiente ruptura.", "warning");
          return;
        }
        applyCommandPenalty("omega", "Clave OMEGA inválida. El híbrido rechaza la contención.");
        return;
      }
      break;

    case "separate":
      if (argsLower[0] === "herd" && argsUpper.slice(1).join("-") === "HERD-SPLIT-41") {
        if (!state.barriersRestored) {
          applyCommandPenalty("standard", "Intentaste separar la manada sin restaurar barreras.");
          return;
        }
        state.herdCalmed = true;
        state.damageInstalacion = clamp(state.damageInstalacion - 6, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Protocolo de separación ejecutado");
        updateHud();
        detenerSonido("herb");
        playDinoSound("herb", 0.35);
        await printLines(["Activando protocolo de separación...", "Triceratops y Ankylosaurus alejándose del Sector C...", "CONFLICTO DE HERBIVOROS CONTROLADO."], "success");
        return;
      }
      break;

    case "redirect":
      if (argsLower[0] === "anky" && argsUpper.slice(1).join("-") === "ANKY-PORT-55") {
        if (!state.herdCalmed) {
          applyCommandPenalty("standard", "La ruta de desvío no es segura mientras el valle sur siga inestable.");
          return;
        }
        state.ankyRedirected = true;
        state.damageInstalacion = clamp(state.damageInstalacion - 5, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Ankylosaurus redirigido");
        updateHud();
        detenerSonido("anky");
        playDinoSound("anky", 0.35);
        await printLines(["Activando balizas de desvio...", "Ankylosaurus alejandose del corredor L-05...", "Corredor logístico liberado."], "success");
        return;
      }
      break;

    case "unlock":
      if (argsLower[0] === "door" && argsUpper.slice(1).join("-") === "DOOR-LOCK-42") {
        if (!state.raptorContained || !state.trexContained || !state.diloNeutralized || !state.barriersRestored || !state.herdCalmed || !state.ankyRedirected || state.generatorDamaged || !state.omegaReleased || !state.chimeraContained) {
          applyCommandPenalty("standard", "Existen amenazas activas, OMEGA no ha terminado o hay fallas de infraestructura. La puerta no puede liberarse.");
          return;
        }
        state.doorUnlocked = true;
        detenerAlerta("SITUACION CONTROLADA // Ruta de evacuacion liberada");
        updateHud();
        speak(narrationLines.door);
        await printLines(["Validando acceso de emergencia...", "Sellos magneticos liberados.", "Puerta de evacuacion ABIERTA."], "success");
        return;
      }
      break;

    case "escape":
      if (!state.doorUnlocked || !state.omegaReleased || !state.chimeraContained) {
        applyCommandPenalty("standard", "ESCAPE DENEGADO: protocolos incompletos.");
        return;
      }
      state.escaped = true;
      if (state.timerId) {
        window.clearInterval(state.timerId);
        state.timerId = null;
      }
      stopAmbient();
      detenerAlerta("SITUACION CONTROLADA // Evacuacion completada");
      updateHud();
      speak(narrationLines.escape);
      await printLines(["Iniciando protocolo de escape...", "Puertas externas liberadas.", "EVACUACION COMPLETADA. Has escapado del laboratorio."], "success");
      startEscapeCinematic();
      return;

    case "restart":
      restartScenario();
      return;

    case "clear":
      output.innerHTML = "";
      return;
  }

  state.attempts += 1;
  applyCommandPenalty(state.omegaReleased ? "omega" : "standard", `Comando no reconocido: ${rawCommand}`);
  if (state.attempts >= 3) {
    addLine("ALERTA: intento no autorizado detectado.", "error");
    addLine("ALERTA: brecha de seguridad en laboratorio B.", "error");
    applyDeterioration({ damage: 6, bio: 6, stability: -8, energy: -4 });
    state.attempts = 0;
  }
  updateHud();
}

function revealBootOverlay() {
  if (state.introFinished) return;
  state.introFinished = true;
  introVideo.pause();
  audioIntro.pause();
  introOverlay.classList.add("hidden");
  introOverlay.setAttribute("aria-hidden", "true");
  bootOverlay.classList.remove("hidden");
  bootOverlay.setAttribute("aria-hidden", "false");
  runBootSequence();
}

function finalizarIntroSiListo() {
  if (!state.introStarted || state.introFinished) return;
  revealBootOverlay();
}

function iniciarProtocolo() {
  if (state.protocolStarted) return;
  state.protocolStarted = true;
  state.introStarted = true;
  startIntroButton.disabled = true;
  startIntroButton.textContent = "PROTOCOLO EN CURSO...";
  introStatus.textContent = "Protocolo activado. Intro, temporizador, ambiente y alerta inicial en ejecución.";
  startThreatTimer();
  startAmbient();
  introVideo.loop = true;
  introVideo.currentTime = 0;
  introVideo.play().catch(() => {
    introStatus.textContent = "No fue posible reproducir el video de apertura. El sistema continuará con audio.";
  });
  reproducirSonido("intro", { volume: 0.6 }).then((played) => {
    if (!played) {
      console.warn("INTRO_AUDIO.MP3 no pudo reproducirse correctamente.");
      introStatus.textContent = "INTRO_AUDIO.MP3 no pudo reproducirse. Puedes continuar con OMITIR INTRO sin romper la sesión.";
    }
  });
}

startIntroButton.addEventListener("click", iniciarProtocolo);
skipIntroButton.addEventListener("click", () => {
  if (!state.protocolStarted) {
    iniciarProtocolo();
  }
  revealBootOverlay();
});
startSystemButton.addEventListener("click", runBootSequence);
audioIntro.addEventListener("ended", finalizarIntroSiListo);
audioIntro.addEventListener("error", () => {
  console.error("Error al cargar o reproducir assets/audio/INTRO_AUDIO.MP3");
  introStatus.textContent = "Error en INTRO_AUDIO.MP3. Usa OMITIR INTRO para continuar manualmente.";
});
escapeVideo?.addEventListener("ended", () => {
  if (state.finalOutcome === "failure") {
    finishFailureCinematic();
    return;
  }
  finishEscapeCinematic();
});
escapeVideo?.addEventListener("error", () => {
  if (escapeOverlayText) {
    escapeOverlayText.textContent = state.finalOutcome === "failure"
      ? "No fue posible reproducir assets/video/Falla.mp4."
      : "No fue posible reproducir assets/video/ESCAPE.MP4. La misión se considera completada.";
  }
  if (state.finalOutcome === "failure") {
    finishFailureCinematic();
    return;
  }
  finishEscapeCinematic();
});
omegaVideo?.addEventListener("ended", cerrarEventoOmega);
omegaVideo?.addEventListener("error", () => {
  if (omegaOverlayText) {
    omegaOverlayText.textContent = "No fue posible reproducir assets/video/Chimerasaurus Escape.MP4.";
  }
  cerrarEventoOmega();
});
resumeSession.addEventListener("click", hideFocusLock);
restartScenarioButton.addEventListener("click", restartScenario);
toggleAmbientMuteButton.addEventListener("click", toggleAmbientMute);
toggleAmbientPauseButton.addEventListener("click", toggleAmbientPause);
scanSectorButton.addEventListener("click", scanSector);
identifySpeciesButton.addEventListener("click", identifySpecies);
confirmContainmentButton.addEventListener("click", confirmContainmentFromActiveZone);
silenceAlertButton.addEventListener("click", () => {
  setAlertSilence();
  detenerSonido("alerta");
  showAlertPanel("Alerta sonora silenciada temporalmente.", "off");
  currentAlertText.textContent = "Alertas sonoras silenciadas durante veinte segundos. La sesión continúa activa.";
  addLine("ALERTA DE SISTEMA: Alertas sonoras silenciadas durante veinte segundos. La sesión continúa activa.", "warning");
});

openMapButton.addEventListener("click", () => mapModal.classList.remove("hidden"));
closeMapButton.addEventListener("click", () => mapModal.classList.add("hidden"));
mapBackdrop.addEventListener("click", () => mapModal.classList.add("hidden"));

speciesMarkers.forEach((marker) => {
  marker.addEventListener("click", () => {
    setActiveSpecies(marker.dataset.zone);
    if (["raptor", "trex", "anky", "brachio", "dilo", "stego", "chimera"].includes(marker.dataset.zone)) {
      playDinoSound(marker.dataset.zone === "trex" ? "trex" : marker.dataset.zone, 0.3);
      if (marker.dataset.zone === "chimera") {
        reproducirGarrasAleatorio(true);
      }
    }
  });
});

output.addEventListener("click", async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.classList.contains("file-link")) return;
  const command = target.dataset.command;
  if (!command) return;
  await handleCommand(command);
  input.focus();
});

actionButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    if (!state.bootStarted) await runBootSequence();
    await handleCommand(button.dataset.command);
    input.focus();
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const rawCommand = input.value;
  input.value = "";
  if (!state.bootStarted) await runBootSequence();
  await handleCommand(rawCommand);
  input.focus();
});
focusCipherRaptorButton.addEventListener("click", () => {
  setCipherTarget("raptor");
  updateCipherHelper();
});
focusCipherTrexButton.addEventListener("click", () => {
  setCipherTarget("trex");
  updateCipherHelper();
});
focusCipherAppendButton.addEventListener("click", appendCipherResult);
focusCipherSendButton.addEventListener("click", async () => {
  prepareCipherCommand();
  await handleCommand(input.value);
  input.value = "";
});

cipherRotorCards.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const rotateButton = target.closest("[data-rotate]");
  if (rotateButton instanceof HTMLElement) {
    const index = Number(rotateButton.dataset.rotorIndex);
    const rotor = state.cipherHelper.rotors[index];
    if (!rotor) return;
    rotor.currentValue = (rotor.currentValue + 9) % 10;
    state.cipherHelper.activeRotorIndex = index;
    updateCipherHelper();
    return;
  }

  const resetButton = target.closest("[data-reset-rotor]");
  if (resetButton instanceof HTMLElement) {
    const index = Number(resetButton.dataset.resetRotor);
    const rotor = state.cipherHelper.rotors[index];
    if (!rotor) return;
    rotor.currentValue = rotor.baseValue;
    state.cipherHelper.activeRotorIndex = index;
    updateCipherHelper();
    return;
  }

  const rotorButton = target.closest("[data-rotor-index]");
  if (rotorButton instanceof HTMLElement) {
    state.cipherHelper.activeRotorIndex = Number(rotorButton.dataset.rotorIndex);
    updateCipherHelper();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) focusLockIfNeeded();
});
window.addEventListener("blur", focusLockIfNeeded);

initializeScenario();
updateHud();
