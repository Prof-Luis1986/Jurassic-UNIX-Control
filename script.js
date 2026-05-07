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
const alertEventText = byId("alertEventText");
const alertObjectiveText = byId("alertObjectiveText");
const alertCommandText = byId("alertCommandText");
const alertFailureText = byId("alertFailureText");
const alertTimerText = byId("alertTimerText");
const missionActivePhase = byId("missionActivePhase");
const missionActiveObjective = byId("missionActiveObjective");
const missionActiveAction = byId("missionActiveAction");
const missionActiveFailure = byId("missionActiveFailure");
const bioRiskState = byId("bioRiskState");
const containmentSummaryState = byId("containmentSummaryState");
const missionCriticalTimer = byId("missionCriticalTimer");
const missionPriorityState = byId("missionPriorityState");
const missionActionButton = byId("missionActionButton");
const primaryBarrierState = byId("primaryBarrierState");
const secondaryBarrierState = byId("secondaryBarrierState");
const criticalContainmentState = byId("criticalContainmentState");
const reservePowerState = byId("reservePowerState");
const activeEventState = byId("activeEventState");
const metricContainmentValue = byId("metricContainmentValue");
const metricContainmentBar = byId("metricContainmentBar");
const metricDamageValue = byId("metricDamageValue");
const metricDamageBar = byId("metricDamageBar");
const metricBioValue = byId("metricBioValue");
const metricBioBar = byId("metricBioBar");
const metricEnergyValue = byId("metricEnergyValue");
const metricEnergyBar = byId("metricEnergyBar");
const metricStabilityValue = byId("metricStabilityValue");
const metricStabilityBar = byId("metricStabilityBar");
const damageSummaryText = byId("damageSummaryText");

const missionPower = byId("missionPower");
const missionGenerator = byId("missionGenerator");
const missionRaptor = byId("missionRaptor");
const missionTrex = byId("missionTrex");
const missionDilo = byId("missionDilo");
const missionBarrier = byId("missionBarrier");
const missionHerd = byId("missionHerd");
const missionAnky = byId("missionAnky");
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
const restartScenarioButton = byId("restartScenario");
const escapeOverlay = byId("escapeOverlay");
const escapeVideo = byId("escapeVideo");
const escapeVideoSource = byId("escapeVideoSource");
const escapeOverlayLabel = byId("escapeOverlayLabel");
const escapeOverlayTitle = byId("escapeOverlayTitle");
const escapeOverlayText = byId("escapeOverlayText");
const escapeOverlayTime = byId("escapeOverlayTime");
const crisisFilter = byId("crisisFilter");
const terminalDamageWarning = byId("terminalDamageWarning");
const terminalDamageWarningText = byId("terminalDamageWarningText");

const actionButtons = Array.from(document.querySelectorAll(".action-button[data-command]"));

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
};

for (const sound of Object.values(dinoSounds)) {
  sound.preload = "auto";
}

const RISK_LEVELS = ["ESTABLE", "MODERADO", "ALTO", "CRITICO"];
const MAX_DAMAGE = 100;

const THREAT_STAGE_LABELS = {
  raptor: [
    "Raptor detectado en barrera 1.",
    "Raptor rompe barrera 1 y arranca paneles.",
    "Raptor destruye camaras y bloquea corredor.",
    "Raptor invade corredor interno y amenaza el nucleo.",
  ],
  dilo: [
    "Dilophosaurus genera interferencia en sector humedo.",
    "Dilophosaurus contamina paneles y distorsiona la terminal.",
    "Dilophosaurus corrompe camaras y compuertas.",
    "Dilophosaurus propaga contaminacion biologica hacia el acceso central.",
  ],
  trex: [
    "T-Rex golpea el sector exterior.",
    "T-Rex destruye camaras y derriba soportes.",
    "T-Rex provoca apagones parciales y vibracion estructural.",
    "T-Rex abre un colapso parcial en el corredor principal.",
  ],
  herb: [
    "Herbivoros bloquean una ruta secundaria.",
    "Herbivoros dañan compuertas del valle sur.",
    "Herbivoros cierran accesos logistico y norte.",
    "Herbivoros destruyen rutas de salida y obligan desvio total.",
  ],
};

const gamePhases = [
  {
    id: "phase1",
    startAt: 900,
    title: "FASE 1 // ARRANQUE",
    objective: "Ingresar al sistema, revisar protocolo y activar monitoreo general.",
    requiredActions: [
      { id: "monitoring_general", label: "ACTIVAR MONITOREO GENERAL", command: "activate monitoring general" },
    ],
    minRisk: 0,
  },
  {
    id: "phase2",
    startAt: 780,
    title: "FASE 2 // PRIMERA CRISIS",
    objective: "Raptor en ruptura de defensa. Escanea el sector y activa cierre perimetral.",
    requiredActions: [
      { id: "scan_sector", label: "ESCANEAR SECTOR", command: "scan sector" },
      { id: "perimeter_lockdown", label: "ACTIVAR CIERRE PERIMETRAL", command: "activate perimeter lockdown" },
    ],
    consequence: "Si tardas, el raptor rompe la segunda defensa.",
    minRisk: 1,
  },
  {
    id: "phase3",
    startAt: 630,
    title: "FASE 3 // FALLA DE ENERGIA",
    objective: "Generador principal inhabilitado. Redirige energia y activa el generador de reserva.",
    requiredActions: [
      { id: "redirect_power", label: "REDIRIGIR ENERGIA", command: "redirect power" },
      { id: "backup_generator", label: "ACTIVAR GENERADOR DE RESERVA", command: "activate backup generator" },
    ],
    consequence: "Si ignoras la falla, módulos clave quedan inactivos temporalmente.",
    minRisk: 2,
  },
  {
    id: "phase4",
    startAt: 480,
    title: "FASE 4 // AMENAZA DILOPHOSAURUS",
    objective: "Dilophosaurus infiltrado. Ingresa el código de contención y confirma bloqueo de compuertas.",
    requiredActions: [
      { id: "containment_code", label: "INGRESAR CODIGO DE CONTENCION", command: "enter containment code" },
      { id: "dilo_lockdown", label: "CONFIRMAR BLOQUEO DE COMPUERTAS", command: "lock dilo GATE-DILO-19" },
    ],
    consequence: "Si fallas, el riesgo biológico sube a crítico.",
    minRisk: 2,
  },
  {
    id: "phase5",
    startAt: 330,
    title: "FASE 5 // CONFLICTO MAYOR",
    objective: "Separar sectores, estabilizar herbívoros y reforzar la contención antes del colapso del núcleo.",
    requiredActions: [
      { id: "stabilize_herd", label: "ESTABILIZAR HERBIVOROS", command: "separate herd HERD-SPLIT-41" },
      { id: "redirect_anky_action", label: "REDIRIGIR ANKYLOSAURUS", command: "redirect anky ANKY-PORT-55" },
      { id: "reinforce_containment", label: "REFORZAR CONTENCION", command: "restore barrier BARRIER-RESTORE-31" },
    ],
    consequence: "Si no respondes, la contención crítica se activa.",
    minRisk: 3,
  },
  {
    id: "phase6",
    startAt: 180,
    title: "FASE 6 // ESCAPE FINAL",
    objective: "Confirmar ruta de evacuación y ejecutar el escape antes de 00:00.",
    requiredActions: [
      { id: "confirm_route", label: "CONFIRMAR RUTA DE EVACUACION", command: "confirm route" },
      { id: "activate_escape", label: "ACTIVAR ESCAPE", command: "escape" },
    ],
    consequence: "Si no completas la secuencia, la sesión termina en falla.",
    minRisk: 3,
  },
];

const state = {
  protocolStarted: false,
  introStarted: false,
  introFinished: false,
  bootStarted: false,
  ambientMuted: false,
  ambientPaused: false,
  powerOnline: false,
  monitoringOnline: false,
  generatorDamaged: false,
  generatorRepaired: false,
  reserveGeneratorOnline: false,
  raptorContained: false,
  trexContained: false,
  diloNeutralized: false,
  barriersRestored: false,
  primaryBarrierDown: false,
  secondaryBarrierDown: false,
  criticalContainmentActive: false,
  defenseModeActive: false,
  accessBlocked: false,
  darkModeActive: false,
  diloCountdown: null,
  activeEvent: "MONITOREO ESTABLE",
  trexCollisionActive: false,
  herdCalmed: false,
  ankyRedirected: false,
  doorUnlocked: false,
  escaped: false,
  cinematicStarted: false,
  gameOver: false,
  finalOutcome: null,
  finalVideoCompleted: false,
  bioRiskLevel: 0,
  currentPhaseId: "phase1",
  phaseActionState: {},
  directorStarted: false,
  lastDirectiveTick: 900,
  alertsSilencedUntil: 0,
  currentDinoSound: null,
  alertPanelTimer: null,
  activeZone: "raptor",
  attempts: 0,
  countdownSeconds: 900,
  threatPulseTick: 0,
  lastImpactSoundAt: 0,
  timerId: null,
  deterioration: {
    nivelContencion: 100,
    dañoInstalacion: 0,
    riesgoBiologico: 0,
    energiaSistema: 100,
    estabilidadLaboratorio: 100,
  },
  threatProgress: {
    raptor: 0,
    dilo: 0,
    trex: 0,
    herb: 0,
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
    collision: false,
    secondaryBarrier: false,
    collapse: false,
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
  lastRotorInteraction: {
    time: 0,
    action: "",
    index: -1,
  },
};

function randomDigit(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
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
  };

  const audio = library[nombre];
  if (!audio) return Promise.resolve(false);
  if (nombre === "alerta" && Date.now() < state.alertsSilencedUntil) return Promise.resolve(false);

  const defaultVolume =
    nombre === "ambiente" ? 0.08 :
    nombre === "intro" ? 0.6 :
    nombre === "alerta" ? 0.7 :
    0.8;

  if (["raptor", "trex", "herb", "anky", "brachio", "dilo", "stego"].includes(nombre)) {
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

function detenerTodosLosSonidos() {
  for (const soundName of ["intro", "alerta", "ambiente", "raptor", "trex", "herb", "anky", "brachio", "dilo", "stego"]) {
    detenerSonido(soundName);
  }
  state.currentDinoSound = null;
}

function pulseCrisisFilter(mode = "warning", durationMs = 700) {
  if (!crisisFilter) return;
  crisisFilter.classList.remove("is-warning", "is-critical");
  void crisisFilter.offsetWidth;
  crisisFilter.classList.add(mode === "critical" ? "is-critical" : "is-warning");
  window.setTimeout(() => {
    crisisFilter.classList.remove("is-warning", "is-critical");
  }, durationMs);
}

function setActiveEvent(text) {
  state.activeEvent = text;
  if (activeEventState) {
    activeEventState.textContent = text;
  }
}

function hasOperationalPower() {
  return state.powerOnline || state.reserveGeneratorOnline;
}

function getCurrentPhase() {
  return gamePhases.find((phase) => phase.id === state.currentPhaseId) ?? gamePhases[0];
}

function getPhaseActionState(phaseId) {
  if (!state.phaseActionState[phaseId]) {
    state.phaseActionState[phaseId] = {};
  }
  return state.phaseActionState[phaseId];
}

function getPendingActionsForPhase(phase = getCurrentPhase()) {
  const actionState = getPhaseActionState(phase.id);
  return phase.requiredActions.filter((action) => !actionState[action.id]);
}

function getContainmentSummaryText() {
  if (state.criticalContainmentActive) return "CONTENCION CRITICA";
  if (state.secondaryBarrierDown) return "SEGUNDA BARRERA ABIERTA";
  if (state.primaryBarrierDown) return "PRIMERA BARRERA COMPROMETIDA";
  if (!state.barriersRestored) return "CONTENCION PARCIAL";
  return "ESTABLE";
}

function getPriorityLabel() {
  if (state.criticalContainmentActive || state.bioRiskLevel >= 3) return "MAXIMA";
  if (state.bioRiskLevel >= 2 || state.secondaryBarrierDown) return "ALTA";
  if (state.bioRiskLevel >= 1 || state.primaryBarrierDown) return "MEDIA";
  return "OPERATIVA";
}

function getCriticalTimerForDirective() {
  if (state.diloCountdown !== null && !state.diloNeutralized) return formatCountdown(state.diloCountdown);
  if (state.criticalContainmentActive && state.countdownSeconds <= 180) return formatCountdown(state.countdownSeconds);
  return formatCountdown(state.countdownSeconds);
}

function getDirectiveForCurrentState(overrideEvent) {
  const phase = getCurrentPhase();
  const pendingActions = getPendingActionsForPhase(phase);
  const nextAction = pendingActions[0];
  const fallbackCommand = nextAction?.command ?? "stand by";
  const fallbackObjective = nextAction?.label ?? "MANTEN CONTENCION Y ESPERA NUEVA ORDEN";
  const phaseFailure = phase.consequence ?? "La amenaza escala, aumenta el daño y se pierde contención.";

  const directive = {
    title: phase.title,
    event: overrideEvent || state.activeEvent,
    objective: fallbackObjective,
    command: fallbackCommand,
    executeCommand: fallbackCommand,
    failure: phaseFailure,
    timer: getCriticalTimerForDirective(),
    risk: RISK_LEVELS[state.bioRiskLevel],
  };

  if (state.gameOver) {
    return {
      title: "FALLO DE MISION",
      event: overrideEvent || "LABORATORIO COMPROMETIDO",
      objective: "REINICIA EL ESCENARIO",
      command: "restart",
      executeCommand: "restart",
      failure: "La instalacion ya colapso.",
      timer: "00:00",
      risk: "COLAPSO",
    };
  }

  if (state.escaped) {
    return {
      title: "EVACUACION COMPLETA",
      event: overrideEvent || "SALIDA CONFIRMADA",
      objective: "MANTEN RUTA DE ESCAPE",
      command: "escape",
      executeCommand: "escape",
      failure: "Sin riesgo inmediato.",
      timer: "00:00",
      risk: "CONTROLADO",
    };
  }

  if (state.diloCountdown !== null && !state.diloNeutralized) {
    return {
      title: "ALERTA CRITICA // DILOPHOSAURUS",
      event: overrideEvent || "DILOPHOSAURUS INFILTRADO EN ACCESO PRINCIPAL",
      objective: "CIERRA COMPUERTA DE CONTENCION",
      command: "lock dilo GATE-DILO-19",
      executeCommand: "lock dilo GATE-DILO-19",
      failure: "Si falla: contaminacion, paneles corruptos y barrera 2 comprometida.",
      timer: formatCountdown(state.diloCountdown),
      risk: "CRITICO",
    };
  }

  if (state.criticalContainmentActive) {
    return {
      title: "ALERTA CRITICA // NUCLEO",
      event: overrideEvent || "CONTENCION CRITICA ACTIVA",
      objective: "REINICIA CONTENCION Y RESTAURA BARRERAS",
      command: state.barriersRestored ? "restart containment" : "restore barrier BARRIER-RESTORE-31",
      executeCommand: state.barriersRestored ? "restart containment" : "restore barrier BARRIER-RESTORE-31",
      failure: "Si falla: sectores offline, daño masivo y colapso operativo.",
      timer: formatCountdown(state.countdownSeconds),
      risk: "CRITICO",
    };
  }

  if (!hasOperationalPower()) {
    return {
      title: "ALERTA OPERATIVA // ENERGIA",
      event: overrideEvent || (state.generatorDamaged ? "GENERADOR PRINCIPAL OFFLINE" : "SUBESTACION FUERA DE LINEA"),
      objective: state.generatorDamaged ? "ACTIVA RESPALDO O REPARA GENERADOR" : "RESTAURA ENERGIA PRINCIPAL",
      command: state.generatorDamaged ? (state.reserveGeneratorOnline ? "repair generator GEN-RESTART-84" : "activate backup generator") : "restore power RST-POWER-73",
      executeCommand: state.generatorDamaged ? (state.reserveGeneratorOnline ? "repair generator GEN-RESTART-84" : "activate backup generator") : "restore power RST-POWER-73",
      failure: state.generatorDamaged ? "Si falla: apagones parciales y defensa inactiva." : "Si falla: el sistema no podra contener amenazas.",
      timer: formatCountdown(state.countdownSeconds),
      risk: state.generatorDamaged ? "ALTO" : "MODERADO",
    };
  }

  if (!state.raptorContained) {
    return {
      title: "ALERTA CRITICA // VELOCIRAPTOR",
      event: overrideEvent || (state.threatProgress.raptor >= 2 ? "RAPTOR EN CORREDOR INTERNO" : "RAPTOR CERCA DEL NUCLEO"),
      objective: "EJECUTA PROTOCOLO DE CONTENCION RAPTOR",
      command: nextAction?.command ?? "cat RAPTOR.KEY",
      executeCommand: nextAction?.command ?? "cat RAPTOR.KEY",
      failure: "Si falla: barrera 2 destruida y nucleo comprometido.",
      timer: formatCountdown(state.countdownSeconds),
      risk: state.threatProgress.raptor >= 2 ? "CRITICO" : "ALTO",
    };
  }

  if (!state.trexContained) {
    return {
      title: "ALERTA CRITICA // T-REX",
      event: overrideEvent || (state.threatProgress.trex >= 2 ? "T-REX GENERANDO IMPACTOS MASIVOS" : "T-REX EN APROXIMACION C-07"),
      objective: "EJECUTA PROTOCOLO DE CONTENCION T-REX",
      command: nextAction?.command ?? "cat TREX.KEY",
      executeCommand: nextAction?.command ?? "cat TREX.KEY",
      failure: "Si falla: camaras destruidas, apagones y colapso parcial.",
      timer: formatCountdown(state.countdownSeconds),
      risk: "CRITICO",
    };
  }

  if (!state.barriersRestored) {
    return {
      title: "ALERTA OPERATIVA // BARRERAS",
      event: overrideEvent || "MALLA DE CONTENCION INCOMPLETA",
      objective: "RESTAURA BARRERAS",
      command: "restore barrier BARRIER-RESTORE-31",
      executeCommand: "restore barrier BARRIER-RESTORE-31",
      failure: "Si falla: reapertura de sectores y escalamiento de amenazas.",
      timer: formatCountdown(state.countdownSeconds),
      risk: "ALTO",
    };
  }

  if (!state.herdCalmed) {
    return {
      title: "ALERTA TACTICA // HERBIVOROS",
      event: overrideEvent || "CONFLICTO DE MANADA EN VALLE SUR",
      objective: "SEPARA HERBIVOROS",
      command: "separate herd HERD-SPLIT-41",
      executeCommand: "separate herd HERD-SPLIT-41",
      failure: "Si falla: compuertas dañadas y rutas bloqueadas.",
      timer: formatCountdown(state.countdownSeconds),
      risk: "ALTO",
    };
  }

  if (!state.ankyRedirected) {
    return {
      title: "ALERTA TACTICA // ANKYLOSAURUS",
      event: overrideEvent || "CORREDOR L-05 BLOQUEADO",
      objective: "REDIRIGE ANKYLOSAURUS",
      command: "redirect anky ANKY-PORT-55",
      executeCommand: "redirect anky ANKY-PORT-55",
      failure: "Si falla: acceso logistico destruido y salida retrasada.",
      timer: formatCountdown(state.countdownSeconds),
      risk: "ALTO",
    };
  }

  if (!state.doorUnlocked) {
    return {
      title: "PROTOCOLO FINAL // SALIDA",
      event: overrideEvent || "RUTA DE EVACUACION AUN BLOQUEADA",
      objective: "ABRE COMPUERTA NORTE",
      command: "unlock door DOOR-LOCK-42",
      executeCommand: "unlock door DOOR-LOCK-42",
      failure: "Si falla: quedas atrapado durante el colapso final.",
      timer: formatCountdown(state.countdownSeconds),
      risk: "ALTO",
    };
  }

  return {
    title: "PROTOCOLO FINAL // EVACUACION",
    event: overrideEvent || "RUTA EXTERIOR DESPEJADA",
    objective: "EJECUTA EVACUACION",
    command: "escape",
    executeCommand: "escape",
    failure: "Si fallas: el laboratorio colapsa antes de salir.",
    timer: formatCountdown(state.countdownSeconds),
    risk: "ALTO",
  };
}

function getDeteriorationTier() {
  const damage = state.deterioration;
  const criticalScore = Math.max(
    MAX_DAMAGE - damage.nivelContencion,
    damage.dañoInstalacion,
    damage.riesgoBiologico,
    MAX_DAMAGE - damage.energiaSistema,
    MAX_DAMAGE - damage.estabilidadLaboratorio,
  );
  if (criticalScore >= 85) return 3;
  if (criticalScore >= 60) return 2;
  if (criticalScore >= 30) return 1;
  return 0;
}

function syncGlobalDamageState() {
  const unresolvedThreats = [
    !state.raptorContained,
    !state.trexContained,
    !state.diloNeutralized,
    !state.herdCalmed,
    !state.ankyRedirected,
  ].filter(Boolean).length;

  const containmentPenalty =
    (state.primaryBarrierDown ? 12 : 0) +
    (state.secondaryBarrierDown ? 18 : 0) +
    (state.criticalContainmentActive ? 22 : 0) +
    (Math.max(state.threatProgress.raptor, state.threatProgress.dilo) * 6);
  state.deterioration.nivelContencion = clamp(100 - containmentPenalty, 4, 100);

  const installationBase =
    (state.generatorDamaged ? 16 : 0) +
    (state.trexCollisionActive ? 18 : 0) +
    (state.secondaryBarrierDown ? 14 : 0) +
    (state.criticalContainmentActive ? 18 : 0) +
    (state.threatProgress.trex * 9) +
    (state.threatProgress.herb * 6) +
    (state.threatProgress.raptor * 5);
  state.deterioration.dañoInstalacion = clamp(Math.max(state.deterioration.dañoInstalacion, installationBase), 0, 100);

  const bioBase =
    (state.diloNeutralized ? 6 : 18) +
    (state.diloCountdown !== null ? 12 : 0) +
    (state.criticalContainmentActive ? 18 : 0) +
    unresolvedThreats * 7 +
    (state.threatProgress.dilo * 11) +
    (state.threatProgress.raptor * 5);
  state.deterioration.riesgoBiologico = clamp(Math.max(state.deterioration.riesgoBiologico, bioBase), 0, 100);

  const energyPenalty =
    (hasOperationalPower() ? 0 : 30) +
    (state.generatorDamaged ? 22 : 0) +
    (state.reserveGeneratorOnline ? 12 : 0) +
    (state.darkModeActive ? 16 : 0) +
    (state.threatProgress.trex * 8);
  state.deterioration.energiaSistema = clamp(100 - energyPenalty, 0, 100);

  const stabilityPenalty =
    Math.round(state.deterioration.dañoInstalacion * 0.32) +
    Math.round(state.deterioration.riesgoBiologico * 0.28) +
    Math.round((100 - state.deterioration.energiaSistema) * 0.22) +
    (state.criticalContainmentActive ? 10 : 0);
  state.deterioration.estabilidadLaboratorio = clamp(100 - stabilityPenalty, 0, 100);

  const derivedRisk = Math.max(
    Math.floor(state.deterioration.riesgoBiologico / 26),
    Math.floor((100 - state.deterioration.nivelContencion) / 30),
    Math.floor((100 - state.deterioration.estabilidadLaboratorio) / 34),
  );
  setBiologicalRisk(derivedRisk);
}

function applyGlobalDamage(reason, impact = {}) {
  const damage = state.deterioration;
  damage.nivelContencion = clamp(damage.nivelContencion - (impact.nivelContencion ?? 0), 0, 100);
  damage.dañoInstalacion = clamp(damage.dañoInstalacion + (impact.dañoInstalacion ?? 0), 0, 100);
  damage.riesgoBiologico = clamp(damage.riesgoBiologico + (impact.riesgoBiologico ?? 0), 0, 100);
  damage.energiaSistema = clamp(damage.energiaSistema - (impact.energiaSistema ?? 0), 0, 100);
  damage.estabilidadLaboratorio = clamp(damage.estabilidadLaboratorio - (impact.estabilidadLaboratorio ?? 0), 0, 100);
  syncGlobalDamageState();
  if (reason) {
    damageSummaryText.textContent = reason;
  }
}

function relieveGlobalDamage(recovery = {}) {
  const damage = state.deterioration;
  damage.nivelContencion = clamp(damage.nivelContencion + (recovery.nivelContencion ?? 0), 0, 100);
  damage.dañoInstalacion = clamp(damage.dañoInstalacion - (recovery.dañoInstalacion ?? 0), 0, 100);
  damage.riesgoBiologico = clamp(damage.riesgoBiologico - (recovery.riesgoBiologico ?? 0), 0, 100);
  damage.energiaSistema = clamp(damage.energiaSistema + (recovery.energiaSistema ?? 0), 0, 100);
  damage.estabilidadLaboratorio = clamp(damage.estabilidadLaboratorio + (recovery.estabilidadLaboratorio ?? 0), 0, 100);
  syncGlobalDamageState();
}

function setMeter(valueNode, barNode, value, inverse = false) {
  if (!valueNode || !barNode) return;
  valueNode.textContent = `${Math.round(value)}%`;
  const fill = inverse ? 100 - value : value;
  barNode.style.width = `${clamp(fill, 0, 100)}%`;
  barNode.style.filter = fill >= 75 ? "saturate(1.18)" : fill >= 45 ? "saturate(1)" : "saturate(0.84)";
}

function getDamageSummary() {
  const tier = getDeteriorationTier();
  if (tier === 3) {
    return "Modo critico. Sectores offline, paneles corruptos y fallas estructurales en cadena.";
  }
  if (tier === 2) {
    return "La instalacion ya muestra daños visibles: camaras fuera de servicio, energia irregular y contencion degradada.";
  }
  if (tier === 1) {
    return "El laboratorio entra en deterioro progresivo. Empiezan fallos de panel, ruido metalico e interferencia.";
  }
  return "Instalacion operando en margen estable. Sin daños mayores visibles.";
}

function updateDeteriorationHud() {
  syncGlobalDamageState();
  setMeter(metricContainmentValue, metricContainmentBar, state.deterioration.nivelContencion);
  setMeter(metricDamageValue, metricDamageBar, state.deterioration.dañoInstalacion);
  setMeter(metricBioValue, metricBioBar, state.deterioration.riesgoBiologico);
  setMeter(metricEnergyValue, metricEnergyBar, state.deterioration.energiaSistema);
  setMeter(metricStabilityValue, metricStabilityBar, state.deterioration.estabilidadLaboratorio);
  if (damageSummaryText) {
    damageSummaryText.textContent = getDamageSummary();
  }
}

function escalateThreatProgress(threatKey, impact = {}) {
  state.threatProgress[threatKey] = clamp((state.threatProgress[threatKey] ?? 0) + 1, 0, 3);
  const stage = state.threatProgress[threatKey];
  const label = THREAT_STAGE_LABELS[threatKey]?.[stage] ?? "Amenaza escalando.";
  applyGlobalDamage(label, impact);
  setActiveEvent(label.toUpperCase());
  if (threatKey === "raptor") {
    state.primaryBarrierDown = true;
    if (stage >= 2) state.secondaryBarrierDown = true;
    if (stage >= 3) state.criticalContainmentActive = true;
    pulseCrisisFilter(stage >= 2 ? "critical" : "warning", 1000);
  }
  if (threatKey === "dilo") {
    if (stage >= 1) state.accessBlocked = true;
    if (stage >= 2) state.secondaryBarrierDown = true;
    if (stage >= 3) state.criticalContainmentActive = true;
    pulseCrisisFilter("critical", 950);
  }
  if (threatKey === "trex") {
    state.darkModeActive = stage >= 2 || state.darkModeActive;
    state.generatorDamaged = stage >= 2 || state.generatorDamaged;
    state.trexCollisionActive = stage >= 1 || state.trexCollisionActive;
    if (stage >= 3) state.criticalContainmentActive = true;
    pulseCrisisFilter("critical", 1200);
  }
  if (threatKey === "herb") {
    if (stage >= 1) state.accessBlocked = true;
    if (stage >= 2) state.secondaryBarrierDown = true;
    if (stage >= 3) state.doorUnlocked = false;
    pulseCrisisFilter(stage >= 2 ? "critical" : "warning", 850);
  }
  setCurrentAlert(label, stage >= 2 ? "error" : "warning");
}

function setBiologicalRisk(level) {
  state.bioRiskLevel = Math.max(0, Math.min(RISK_LEVELS.length - 1, level));
}

function activarFase(phaseIdOrObject) {
  const phase = typeof phaseIdOrObject === "string"
    ? gamePhases.find((entry) => entry.id === phaseIdOrObject)
    : phaseIdOrObject;
  if (!phase || state.currentPhaseId === phase.id) return;

  const previousPhase = getCurrentPhase();
  if (previousPhase && getPendingActionsForPhase(previousPhase).length > 0) {
    escalarAmenaza(previousPhase.consequence ?? `La amenaza de ${previousPhase.title} escaló por falta de respuesta.`);
  }

  state.currentPhaseId = phase.id;
  state.lastDirectiveTick = state.countdownSeconds;
  setBiologicalRisk(Math.max(state.bioRiskLevel, phase.minRisk));
  setActiveEvent(phase.title);
  actualizarMisionActiva();
  setCurrentAlert(`${phase.title}. ${phase.objective}`, phase.minRisk >= 2 ? "error" : "warning");
}

function completarAccion(actionId) {
  const phase = getCurrentPhase();
  const action = phase.requiredActions.find((entry) => entry.id === actionId);
  if (!action) return;
  const actionState = getPhaseActionState(phase.id);
  if (actionState[actionId]) return;
  actionState[actionId] = true;
  state.lastDirectiveTick = state.countdownSeconds;

  if (getPendingActionsForPhase(phase).length === 0) {
    setCurrentAlert(`${phase.title} asegurada. Preparando siguiente intervención.`, "success");
  } else {
    setCurrentAlert(`Acción completada: ${action.label}. Continúa con la siguiente intervención.`, "success");
  }
  actualizarMisionActiva();
}

function escalarAmenaza(reason = "La amenaza escala por falta de respuesta.") {
  setBiologicalRisk(state.bioRiskLevel + 1);
  state.lastDirectiveTick = state.countdownSeconds;
  applyGlobalDamage(reason, {
    nivelContencion: 8,
    dañoInstalacion: 5,
    riesgoBiologico: 8,
    energiaSistema: 3,
    estabilidadLaboratorio: 6,
  });
  pulseCrisisFilter(state.bioRiskLevel >= 2 ? "critical" : "warning", state.bioRiskLevel >= 2 ? 1100 : 700);
  setCurrentAlert(reason, "error");
  actualizarMisionActiva();
}

function actualizarMisionActiva() {
  const directive = getDirectiveForCurrentState();
  if (missionActivePhase) missionActivePhase.textContent = directive.event;
  if (missionActiveObjective) missionActiveObjective.textContent = directive.objective;
  if (missionActiveAction) missionActiveAction.textContent = directive.command;
  if (missionActiveFailure) missionActiveFailure.textContent = directive.failure;
  if (bioRiskState) bioRiskState.textContent = directive.risk;
  if (containmentSummaryState) containmentSummaryState.textContent = getContainmentSummaryText();
  if (missionCriticalTimer) missionCriticalTimer.textContent = directive.timer;
  if (missionPriorityState) missionPriorityState.textContent = getPriorityLabel();
  if (missionActionButton) {
    missionActionButton.disabled = !directive.executeCommand || directive.executeCommand === "stand by";
    missionActionButton.textContent = directive.executeCommand ? `EJECUTAR: ${directive.executeCommand}` : "EN ESPERA";
    missionActionButton.dataset.command = directive.executeCommand ?? "";
  }
}

function refreshAlertDirectivePanel() {
  const directive = getDirectiveForCurrentState();
  if (currentAlertText) currentAlertText.textContent = `${directive.title}: ${directive.event}`;
  if (alertEventText) alertEventText.textContent = directive.event;
  if (alertObjectiveText) alertObjectiveText.textContent = directive.objective;
  if (alertCommandText) alertCommandText.textContent = directive.command;
  if (alertFailureText) alertFailureText.textContent = directive.failure;
  if (alertTimerText) alertTimerText.textContent = directive.timer;
}

function iniciarDirectorEventos() {
  if (state.directorStarted) return;
  state.directorStarted = true;
  state.currentPhaseId = "phase1";
  state.lastDirectiveTick = state.countdownSeconds;
  setBiologicalRisk(0);
  actualizarMisionActiva();
  setCurrentAlert("FASE 1 // ARRANQUE. Activa monitoreo general para habilitar la respuesta del sistema.", "warning");
}

function verificarCondicionesDeVictoria() {
  const finalPhase = gamePhases[gamePhases.length - 1];
  return getPendingActionsForPhase(finalPhase).length === 0 && state.escaped;
}

function verificarCondicionesDeDerrota() {
  return (
    state.countdownSeconds === 0 ||
    state.deterioration.estabilidadLaboratorio <= 0 ||
    state.deterioration.nivelContencion <= 0 ||
    (state.criticalContainmentActive && state.bioRiskLevel >= 3 && state.countdownSeconds <= 30 && !state.escaped)
  );
}

function degradeContainment(level, message, mode = "error") {
  if (level === 1) {
    state.primaryBarrierDown = true;
  }
  if (level === 2) {
    state.secondaryBarrierDown = true;
  }
  if (level >= 3) {
    state.criticalContainmentActive = true;
  }
  state.barriersRestored = false;
  applyGlobalDamage(message, {
    nivelContencion: level * 10,
    dañoInstalacion: level * 6,
    riesgoBiologico: level * 8,
    estabilidadLaboratorio: level * 7,
  });
  setActiveEvent(message);
  pulseCrisisFilter(level >= 2 ? "critical" : "warning", level >= 2 ? 1200 : 700);
  setCurrentAlert(message, mode);
}

function reproducirColisionBiologica() {
  clonePlay(audioAlerta, 0.42);
  clonePlay(dinoSounds.trex, 0.55);
  clonePlay(dinoSounds.brachio, 0.48);
}

function updateFacilityMood() {
  const severity = getDeteriorationTier();
  document.body.classList.toggle("state-power-failure", state.darkModeActive);
  document.body.classList.toggle("state-danger", state.primaryBarrierDown || state.secondaryBarrierDown || state.trexCollisionActive);
  document.body.classList.toggle("state-critical", state.criticalContainmentActive || state.countdownSeconds <= 180 || state.gameOver);
  document.body.classList.toggle("state-red-alert", severity >= 2 || state.criticalContainmentActive);
  document.body.classList.toggle("state-severity-1", severity === 1);
  document.body.classList.toggle("state-severity-2", severity === 2);
  document.body.classList.toggle("state-severity-3", severity >= 3);
  document.body.classList.toggle("effect-raptor", state.threatProgress.raptor >= 1 && !state.raptorContained);
  document.body.classList.toggle("effect-dilo", state.threatProgress.dilo >= 1 && !state.diloNeutralized);
  document.body.classList.toggle("effect-trex", state.threatProgress.trex >= 1 && !state.trexContained);
  document.body.classList.toggle("effect-herb", state.threatProgress.herb >= 1 && (!state.herdCalmed || !state.ankyRedirected));
  if (terminalDamageWarning && terminalDamageWarningText) {
    const visible = severity >= 2 || state.criticalContainmentActive;
    terminalDamageWarning.classList.toggle("hidden", !visible);
    terminalDamageWarningText.textContent =
      state.criticalContainmentActive ? "NUCLEO INESTABLE // MULTIPLES SECTORES OFFLINE" :
      severity >= 3 ? "COLAPSO ESTRUCTURAL INMINENTE" :
      "DAÑO VISIBLE // CONTENCION DEGRADADA";
  }
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

function initializeScenario() {
  state.protocolStarted = false;
  state.introStarted = false;
  state.introFinished = false;
  state.bootStarted = false;
  state.ambientMuted = false;
  state.ambientPaused = false;
  state.powerOnline = false;
  state.monitoringOnline = false;
  state.generatorDamaged = false;
  state.generatorRepaired = false;
  state.reserveGeneratorOnline = false;
  state.raptorContained = false;
  state.trexContained = false;
  state.diloNeutralized = false;
  state.barriersRestored = false;
  state.primaryBarrierDown = false;
  state.secondaryBarrierDown = false;
  state.criticalContainmentActive = false;
  state.defenseModeActive = false;
  state.accessBlocked = false;
  state.darkModeActive = false;
  state.diloCountdown = null;
  state.activeEvent = "MONITOREO ESTABLE";
  state.trexCollisionActive = false;
  state.herdCalmed = false;
  state.ankyRedirected = false;
  state.doorUnlocked = false;
  state.escaped = false;
  state.cinematicStarted = false;
  state.gameOver = false;
  state.finalOutcome = null;
  state.finalVideoCompleted = false;
  state.bioRiskLevel = 0;
  state.currentPhaseId = "phase1";
  state.phaseActionState = {};
  state.directorStarted = false;
  state.lastDirectiveTick = 900;
  state.alertsSilencedUntil = 0;
  state.currentDinoSound = null;
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  if (state.alertPanelTimer) {
    window.clearTimeout(state.alertPanelTimer);
    state.alertPanelTimer = null;
  }
  state.attempts = 0;
  state.activeZone = "raptor";
  state.countdownSeconds = 900;
  state.threatPulseTick = 0;
  state.lastImpactSoundAt = 0;
  state.deterioration = {
    nivelContencion: 100,
    dañoInstalacion: 0,
    riesgoBiologico: 0,
    energiaSistema: 100,
    estabilidadLaboratorio: 100,
  };
  state.threatProgress = {
    raptor: 0,
    dilo: 0,
    trex: 0,
    herb: 0,
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
    collision: false,
    secondaryBarrier: false,
    collapse: false,
  };
  state.raptorCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.trexCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.raptorRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  state.trexRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  setCipherTarget("raptor");
  detenerTodosLosSonidos();
  hideAlertPanel();
  focusLock.classList.add("hidden");
  focusLock.setAttribute("aria-hidden", "true");
  mapModal.classList.add("hidden");
  mapModal.setAttribute("aria-hidden", "true");
  input.value = "";
  if (escapeOverlay) {
    escapeOverlay.className = "escape-overlay hidden";
    escapeOverlay.setAttribute("aria-hidden", "true");
  }
  if (escapeVideo) {
    escapeVideo.pause();
    escapeVideo.currentTime = 0;
  }
  if (escapeVideoSource) {
    escapeVideoSource.src = "assets/video/ESCAPE.MP4";
    escapeVideo.load();
  }
  if (escapeOverlayLabel) {
    escapeOverlayLabel.textContent = "PROTOCOLO FINAL";
  }
  if (escapeOverlayTitle) {
    escapeOverlayTitle.textContent = "ES MOMENTO DE SALIR";
  }
  if (escapeOverlayText) {
    escapeOverlayText.textContent = "La ruta exterior esta abierta. Abandona el laboratorio antes del cierre total.";
  }
  if (escapeOverlayTime) {
    escapeOverlayTime.textContent = "Lograste escapar en 00:00";
    escapeOverlayTime.classList.add("hidden");
  }
  if (restartScenarioButton) {
    restartScenarioButton.classList.add("hidden");
  }
  bootOverlay.classList.add("hidden");
  bootOverlay.setAttribute("aria-hidden", "true");
  updateFacilityMood();
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

  return {
    "README.TXT": [
      "JURASSIC UNIX CONTROL // PROTOCOLO DE EMERGENCIA",
      "1. Reactiva la energia principal.",
      "2. Repara el generador si vuelve a caer la red.",
      "3. Conten al Velociraptor mediante rotores.",
      "4. Conten al Tyrannosaurus rex mediante rotores.",
      "5. Estabiliza el conflicto entre herbivoros.",
      "6. Redirige al Ankylosaurus fuera del corredor logistico.",
      "7. Abre la salida y evacua antes del colapso total.",
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
    "BACKUP.LOG": [
      "GENERADOR DE RESERVA // MANUAL DE EMERGENCIA",
      "Activacion rapida: activate backup generator",
      "Estado: entrega energia parcial para defensa, terminal y compuertas.",
      "Nota: no sustituye la reparacion estructural del generador principal.",
    ],
    "DEFENSE.SYS": [
      "DEFENSA INTERNA // MODULO REACTIVO",
      "Comando: activate defense",
      "Comando auxiliar: restart containment",
      "Uso: frena avance de especies cuando una barrera cae o el nucleo entra en riesgo.",
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
      "Comando final: contain raptor ###",
    ],
    "TREX.KEY": [
      "PROTOCOLO ENIGMA C-07 // TYRANNOSAURUS REX",
      `ROTOR I: ${encodeRotorLetter(t1, tr1)} = ${letterIndex(encodeRotorLetter(t1, tr1))} // gira ${tr1}`,
      `ROTOR II: ${encodeRotorLetter(t2, tr2)} = ${letterIndex(encodeRotorLetter(t2, tr2))} // gira ${tr2}`,
      `ROTOR III: ${encodeRotorLetter(t3, tr3)} = ${letterIndex(encodeRotorLetter(t3, tr3))} // gira ${tr3}`,
      "Comando final: contain trex ###",
    ],
    "DILO.LOG": [
      "ACCESO PRINCIPAL // DILOPHOSAURUS",
      "Compuerta de bloqueo rápido: GATE-DILO-19",
      "Comando: lock dilo GATE-DILO-19",
      "Evento de riesgo veloz: neutraliza la amenaza antes de que alcance el vestíbulo.",
      "Si la infiltracion esta activa, ingresa el codigo antes de la propagacion del sector.",
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
    "CONTAINMENT.SYS": [
      "ESTADOS DE CONTENCION",
      "1. Primera barrera: frena contacto inicial.",
      "2. Segunda barrera: protege el nucleo.",
      "3. Contencion critica: ultima capa antes del colapso operativo.",
      "Acciones: activate defense / restart containment / restore barrier BARRIER-RESTORE-31",
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
    status: () => state.generatorDamaged ? state.reserveGeneratorOnline ? "RESPALDO ACTIVO" : "GENERADOR DAÑADO" : hasOperationalPower() ? "ENERGIA ESTABLE" : "OFFLINE",
    risk: () => state.criticalContainmentActive ? "EXTREMO" : state.generatorDamaged ? "CRITICO" : hasOperationalPower() ? "MODERADO" : "ALTO",
    activity: () => state.generatorDamaged ? state.reserveGeneratorOnline ? "POTENCIA PARCIAL" : "LINEA DE RESPALDO INTERRUMPIDA" : hasOperationalPower() ? "RED ESTABLE" : "CIRCUITO CAIDO",
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
    status: () => state.raptorContained ? "CONTENIDO" : state.threatProgress.raptor >= 3 ? "NUCLEO AMENAZADO" : state.threatProgress.raptor >= 2 ? "CORREDOR INVADIDO" : state.primaryBarrierDown ? "CERCA DEL NUCLEO" : "ACTIVIDAD HOSTIL",
    risk: () => state.raptorContained ? "MEDIO" : state.secondaryBarrierDown || state.threatProgress.raptor >= 2 ? "EXTREMO" : "CRITICO",
    activity: () => state.raptorContained ? "RUTA CANCELADA" : state.threatProgress.raptor >= 2 ? "CAMARAS DESTRUIDAS" : state.primaryBarrierDown ? "PRIMERA LINEA ROTA" : "MOVIMIENTO NO AUTORIZADO",
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
    status: () => state.trexContained ? "REDIRIGIDO" : state.threatProgress.trex >= 3 ? "COLAPSO PARCIAL" : "APROXIMACION DIRECTA",
    risk: () => state.trexContained ? "ALTO" : state.threatProgress.trex >= 2 ? "MAXIMO" : "EXTREMO",
    activity: () => state.trexContained ? "COMPUERTAS SUR CERRADAS" : state.threatProgress.trex >= 2 ? "APAGONES Y VIBRACION" : "VIBRACION DE SUELO DETECTADA",
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
    status: () => state.diloNeutralized ? "BLOQUEADO" : state.threatProgress.dilo >= 3 ? "PROPAGACION CONFIRMADA" : "LECTURA IRREGULAR",
    risk: () => state.diloNeutralized ? "MODERADO" : state.threatProgress.dilo >= 2 ? "CRITICO" : "ALTO",
    activity: () => state.diloNeutralized ? "CORREDOR SELLADO" : state.threatProgress.dilo >= 2 ? "PANELES CORRUPTOS" : "INTERFERENCIA VISUAL",
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
    status: () => state.herdCalmed ? "MANADA ESTABLE" : state.threatProgress.herb >= 3 ? "RUTAS DESTRUIDAS" : "CONFLICTO TERRITORIAL",
    risk: () => state.herdCalmed ? "MEDIO" : state.threatProgress.herb >= 2 ? "CRITICO" : "ALTO",
    activity: () => state.herdCalmed ? "RUTA REABRIERTA" : state.threatProgress.herb >= 2 ? "COMPUERTAS IMPACTADAS" : "ESTAMPIDA PARCIAL",
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
  dock: {
    sector: "MUELLE DE CARGA",
    name: "Salida marítima",
    image: "Señales/Maritima.jpg",
    status: () => state.escaped ? "RUTA UTILIZADA" : state.criticalContainmentActive ? "NUCLEO INSEGURO" : "RUTA INSEGURA",
    risk: () => state.escaped ? "CONTROLADO" : state.criticalContainmentActive ? "EXTREMO" : "ALTO",
    activity: () => state.escaped ? "EVACUACION COMPLETADA" : state.doorUnlocked ? "RUTA ABIERTA" : "ACCESO RESTRINGIDO",
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

function updateObjective() {
  const directive = getDirectiveForCurrentState();
  objectiveText.textContent = `${directive.objective} // ${directive.command}`;
}

function formatCountdown(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function calcularTiempoEscape() {
  const elapsedSeconds = Math.max(0, 900 - state.countdownSeconds);
  return formatCountdown(elapsedSeconds);
}

function setCurrentAlert(text, className = "warning") {
  const directive = getDirectiveForCurrentState(text);
  const header = className === "error" ? "ALERTA CRITICA" : className === "success" ? "SITUACION CONTROLADA" : "ALERTA OPERATIVA";
  currentAlertText.textContent = `${header}: ${directive.event}`;
  if (alertEventText) alertEventText.textContent = directive.event;
  if (alertObjectiveText) alertObjectiveText.textContent = directive.objective;
  if (alertCommandText) alertCommandText.textContent = directive.command;
  if (alertFailureText) alertFailureText.textContent = directive.failure;
  if (alertTimerText) alertTimerText.textContent = directive.timer;
  addLine(`${header}: ${directive.event}`, className);
  addLine(`OBJETIVO: ${directive.objective}`, className === "success" ? "success" : "warning");
  addLine(`COMANDO: ${directive.command}`, "success");
  addLine(`RIESGO: ${directive.failure}`, className === "success" ? "success" : "error");
  addLine(`TIEMPO: ${directive.timer}`, className === "error" ? "error" : "warning");
  const mode = className === "error" ? "critical" : className === "success" ? "controlled" : "active";
  showAlertPanel(`${directive.event} // ${directive.command}`, mode);
  if (mode === "controlled") {
    detenerAlerta(directive.event);
  }
}

function updateMissionStates() {
  setMissionState(missionPower, hasOperationalPower() ? "COMPLETA" : "ACTIVA", hasOperationalPower() ? "is-done" : "is-active");
  setMissionState(missionGenerator, state.generatorRepaired ? "COMPLETA" : state.generatorDamaged ? state.reserveGeneratorOnline ? "RESPALDO ACTIVO" : "ACTIVA" : "MONITOREO", state.generatorRepaired ? "is-done" : state.generatorDamaged ? "is-active" : "is-locked");
  setMissionState(missionRaptor, !hasOperationalPower() ? "BLOQUEADA" : state.raptorContained ? "COMPLETA" : state.primaryBarrierDown ? "CRITICA" : "ACTIVA", !hasOperationalPower() ? "is-locked" : state.raptorContained ? "is-done" : "is-active");
  setMissionState(missionTrex, !state.raptorContained ? "BLOQUEADA" : state.trexContained ? "COMPLETA" : "ACTIVA", !state.raptorContained ? "is-locked" : state.trexContained ? "is-done" : "is-active");
  setMissionState(missionDilo, !state.trexContained ? "BLOQUEADA" : state.diloNeutralized ? "COMPLETA" : "ACTIVA", !state.trexContained ? "is-locked" : state.diloNeutralized ? "is-done" : "is-active");
  setMissionState(missionBarrier, !state.diloNeutralized ? "BLOQUEADA" : state.criticalContainmentActive ? "CRITICA" : state.barriersRestored && !state.primaryBarrierDown && !state.secondaryBarrierDown ? "COMPLETA" : "ACTIVA", !state.diloNeutralized ? "is-locked" : state.barriersRestored && !state.primaryBarrierDown && !state.secondaryBarrierDown && !state.criticalContainmentActive ? "is-done" : "is-active");
  setMissionState(missionHerd, !state.barriersRestored ? "BLOQUEADA" : state.herdCalmed ? "COMPLETA" : "ACTIVA", !state.barriersRestored ? "is-locked" : state.herdCalmed ? "is-done" : "is-active");
  setMissionState(missionAnky, !state.herdCalmed ? "BLOQUEADA" : state.ankyRedirected ? "COMPLETA" : "ACTIVA", !state.herdCalmed ? "is-locked" : state.ankyRedirected ? "is-done" : "is-active");
  setMissionState(missionDoor, !state.ankyRedirected ? "BLOQUEADA" : state.doorUnlocked ? "COMPLETA" : "ACTIVA", !state.ankyRedirected ? "is-locked" : state.doorUnlocked ? "is-done" : "is-active");
  setMissionState(missionEscape, !state.doorUnlocked ? "BLOQUEADA" : state.escaped ? "COMPLETA" : "ACTIVA", !state.doorUnlocked ? "is-locked" : state.escaped ? "is-done" : "is-active");
}

function updateThreatMap() {
  threatRaptor.classList.toggle("is-contained", state.raptorContained);
  threatTrex.classList.toggle("is-contained", state.trexContained);
  threatDilo.classList.toggle("is-contained", state.diloNeutralized || state.escaped);

  if (state.criticalContainmentActive) {
    labThreatState.textContent = "NUCLEO EN CONTENCION CRITICA";
  } else if (state.secondaryBarrierDown) {
    labThreatState.textContent = "SEGUNDA BARRERA COMPROMETIDA";
  } else if (state.trexCollisionActive) {
    labThreatState.textContent = "COLISION BIOLOGICA MASIVA DETECTADA";
  } else if (state.generatorDamaged) {
    labThreatState.textContent = "GENERADOR DAÑADO // RIESGO ESTRUCTURAL";
  } else if (state.primaryBarrierDown && !state.raptorContained) {
    labThreatState.textContent = "RAPTOR CERCA DEL NUCLEO";
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
    if (command === "restore power RST-POWER-73" && state.powerOnline && !state.generatorDamaged) disabled = true;
    if (command === "repair generator GEN-RESTART-84" && (!state.generatorDamaged || state.generatorRepaired)) disabled = true;
    if (command === "activate backup generator" && (state.reserveGeneratorOnline || !state.generatorDamaged)) disabled = true;
    if (command === "lock dilo GATE-DILO-19" && state.diloNeutralized) disabled = true;
    if (command === "restore barrier BARRIER-RESTORE-31" && (!state.diloNeutralized || (state.barriersRestored && !state.primaryBarrierDown && !state.secondaryBarrierDown && !state.criticalContainmentActive))) disabled = true;
    if (command === "activate defense" && (!state.primaryBarrierDown && !state.secondaryBarrierDown && !state.criticalContainmentActive)) disabled = true;
    if (command === "redirect power" && !state.generatorDamaged) disabled = true;
    if (command === "block access" && state.diloNeutralized && state.accessBlocked) disabled = true;
    if (command === "restart containment" && !state.criticalContainmentActive && !state.secondaryBarrierDown) disabled = true;
    if (command === "separate herd HERD-SPLIT-41" && (!state.barriersRestored || state.herdCalmed)) disabled = true;
    if (command === "redirect anky ANKY-PORT-55" && (!state.herdCalmed || state.ankyRedirected)) disabled = true;
    if (command === "unlock door DOOR-LOCK-42" && (!state.raptorContained || !state.trexContained || !state.diloNeutralized || !state.barriersRestored || !state.herdCalmed || !state.ankyRedirected || state.generatorDamaged || state.primaryBarrierDown || state.secondaryBarrierDown || state.criticalContainmentActive || state.doorUnlocked)) disabled = true;
    if (command === "escape" && (!state.doorUnlocked || state.escaped)) disabled = true;
    button.disabled = disabled;
  }
}

function updateHud() {
  powerState.textContent = hasOperationalPower() ? (state.generatorDamaged ? "RESERVA" : "ONLINE") : "OFFLINE";
  powerState.style.color = hasOperationalPower() ? "#9cff57" : "";
  raptorState.textContent = state.raptorContained ? "INACTIVA" : "ACTIVA";
  raptorState.style.color = state.raptorContained ? "#9cff57" : "";
  doorState.textContent = state.doorUnlocked ? "ABIERTA" : "BLOQUEADA";
  doorState.style.color = state.doorUnlocked ? "#9cff57" : "";
  escapeState.textContent = state.escaped ? "COMPLETA" : "PENDIENTE";
  escapeState.style.color = state.escaped ? "#9cff57" : "";
  threatLevelState.textContent = state.gameOver ? "COLAPSO" : RISK_LEVELS[state.bioRiskLevel];
  countdownState.textContent = formatCountdown(state.countdownSeconds);
  countdownState.style.color = state.countdownSeconds <= 120 ? "#ff5a4f" : state.countdownSeconds <= 300 ? "#ffd166" : "";
  if (primaryBarrierState) primaryBarrierState.textContent = state.primaryBarrierDown ? "COMPROMETIDA" : "ESTABLE";
  if (secondaryBarrierState) secondaryBarrierState.textContent = state.secondaryBarrierDown ? "COMPROMETIDA" : "ESTABLE";
  if (criticalContainmentState) criticalContainmentState.textContent = state.criticalContainmentActive ? "ACTIVA" : "CONTROLADA";
  if (reservePowerState) reservePowerState.textContent = state.reserveGeneratorOnline ? "ACTIVO" : "STANDBY";
  if (activeEventState) activeEventState.textContent = state.activeEvent;

  setZoneState(zonePowerState, hasOperationalPower() ? (state.generatorDamaged ? "RESERVA" : "ONLINE") : "OFFLINE", hasOperationalPower() ? "online" : "offline");
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
  updateAmbientButtons();
  refreshAlertDirectivePanel();
  updateDeteriorationHud();
  updateFacilityMood();
  actualizarMisionActiva();
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
      if (index % 3 === 0 && text[index] && text[index] !== " ") clonePlay(typingSound, 0.18);
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
  bootOverlay.setAttribute("aria-hidden", "true");
  for (const message of bootMessages) {
    await typeLine(message, "success");
  }
  await typeLine("Objetivo: estabilizar la instalación o escapar antes del colapso total.", "warning");
  setActiveEvent("OPERADOR ENLAZADO // CONTINGENCIA ABIERTA");
  iniciarDirectorEventos();
  setCurrentAlert("Operador enlazado. Todos los sistemas de emergencia quedan bajo tu control.", "success");
  input.focus();
}

function parseCommand(rawCommand) {
  return rawCommand.trim().split(/\s+/).filter(Boolean);
}

function showStatus() {
  return printLines([
    `Nivel contencion: ${Math.round(state.deterioration.nivelContencion)}%`,
    `Daño instalacion: ${Math.round(state.deterioration.dañoInstalacion)}%`,
    `Riesgo biologico global: ${Math.round(state.deterioration.riesgoBiologico)}%`,
    `Energia sistema: ${Math.round(state.deterioration.energiaSistema)}%`,
    `Estabilidad laboratorio: ${Math.round(state.deterioration.estabilidadLaboratorio)}%`,
    `Energia: ${hasOperationalPower() ? "ONLINE" : "OFFLINE"}`,
    `Generador principal: ${state.generatorDamaged ? "DAÑADO" : state.generatorRepaired ? "REPARADO" : "ESTABLE"}`,
    `Generador reserva: ${state.reserveGeneratorOnline ? "ACTIVO" : "STANDBY"}`,
    `Primera barrera: ${state.primaryBarrierDown ? "COMPROMETIDA" : "ESTABLE"}`,
    `Segunda barrera: ${state.secondaryBarrierDown ? "COMPROMETIDA" : "ESTABLE"}`,
    `Contencion critica: ${state.criticalContainmentActive ? "ACTIVA" : "CONTROLADA"}`,
    `Raptor: ${state.raptorContained ? "CONTENIDO" : "ACTIVO"}`,
    `T-Rex: ${state.trexContained ? "CONTENIDO" : "ACTIVO"}`,
    `Dilophosaurus: ${state.diloNeutralized ? "NEUTRALIZADO" : "ACTIVO"}`,
    `Barreras: ${state.barriersRestored ? "RESTAURADAS" : "COMPROMETIDAS"}`,
    `Herbivoros: ${state.herdCalmed ? "SEPARADOS" : "EN CONFLICTO"}`,
    `Ankylosaurus: ${state.ankyRedirected ? "REDIRIGIDO" : "BLOQUEANDO RUTA"}`,
    `Puerta: ${state.doorUnlocked ? "ABIERTA" : "BLOQUEADA"}`,
    `Evento activo: ${state.activeEvent}`,
    `Evacuacion: ${state.escaped ? "COMPLETADA" : "PENDIENTE"}`,
  ], "success");
}

function reproducirVideoFinal(path) {
  if (!escapeVideo || !escapeVideoSource) return Promise.resolve(false);
  escapeVideo.pause();
  escapeVideoSource.src = path;
  escapeVideo.load();
  escapeVideo.currentTime = 0;
  return escapeVideo.play().then(() => true).catch(() => false);
}

function mostrarPantallaFinal({ mode, label, title, text, videoPath }) {
  if (!escapeOverlay || !escapeOverlayTitle || !escapeOverlayText) return;
  state.cinematicStarted = true;
  state.finalOutcome = mode;
  state.finalVideoCompleted = false;
  escapeOverlay.className = `escape-overlay escape-overlay--${mode}`;
  escapeOverlay.setAttribute("aria-hidden", "false");
  if (escapeOverlayLabel) {
    escapeOverlayLabel.textContent = label;
  }
  escapeOverlayTitle.textContent = title;
  escapeOverlayText.textContent = text;
  escapeOverlayTime?.classList.add("hidden");
  restartScenarioButton?.classList.add("hidden");
  reproducirVideoFinal(videoPath).then((played) => {
    if (!played) {
      escapeOverlayText.textContent = `No fue posible reproducir ${videoPath}.`;
      if (mode === "success") {
        finalizarEscapeExitoso(true);
      } else {
        finalizarEscapeFallido(true);
      }
    }
  });
}

function finalizarEscapeExitoso(skipVideoEnd = false) {
  if (state.finalOutcome === "success" && state.finalVideoCompleted && !skipVideoEnd) return;
  state.finalOutcome = "success";
  state.finalVideoCompleted = true;
  if (escapeOverlayLabel) {
    escapeOverlayLabel.textContent = "MISION COMPLETADA";
  }
  if (escapeOverlayTitle) {
    escapeOverlayTitle.textContent = "LOGRASTE ESCAPAR";
  }
  if (escapeOverlayText) {
    escapeOverlayText.textContent = "La evacuacion fue confirmada. Jurassic UNIX Control registra salida exitosa.";
  }
  if (escapeOverlayTime) {
    escapeOverlayTime.textContent = `Lograste escapar en ${calcularTiempoEscape()}`;
    escapeOverlayTime.classList.remove("hidden");
  }
  restartScenarioButton?.classList.remove("hidden");
}

function finalizarEscapeFallido(skipVideoEnd = false) {
  if (state.finalOutcome === "failure" && state.finalVideoCompleted && !skipVideoEnd) return;
  state.finalOutcome = "failure";
  state.finalVideoCompleted = true;
  if (escapeOverlayLabel) {
    escapeOverlayLabel.textContent = "MISION FALLIDA";
  }
  if (escapeOverlayTitle) {
    escapeOverlayTitle.textContent = "NO LOGRASTE ESCAPAR";
  }
  if (escapeOverlayText) {
    escapeOverlayText.textContent = "El laboratorio ha sido comprometido. La evacuacion fallo y la instalacion quedo perdida.";
  }
  escapeOverlayTime?.classList.add("hidden");
  restartScenarioButton?.classList.remove("hidden");
}

function triggerGameOver() {
  if (state.gameOver || state.escaped) return;
  state.gameOver = true;
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  detenerTodosLosSonidos();
  hideAlertPanel();
  setCurrentAlert("Ataque masivo no contenido. El laboratorio ha sido comprometido.", "error");
  mostrarPantallaFinal({
    mode: "failure",
    label: "SISTEMA COLAPSADO",
    title: "FALLO DE EVACUACION",
    text: "El laboratorio ha sido comprometido. Mantente en cubierta mientras se reproduce el cierre final.",
    videoPath: "assets/video/Falla.mp4",
  });
  updateHud();
}

function applyPassiveDeterioration() {
  const unresolved = {
    raptor: !state.raptorContained && state.timelineFlags.raptor,
    dilo: !state.diloNeutralized && (state.timelineFlags.dilo || state.diloCountdown !== null),
    trex: !state.trexContained && state.timelineFlags.trex,
    herb: (!state.herdCalmed && state.timelineFlags.herd) || (!state.ankyRedirected && state.timelineFlags.anky),
  };

  let pressure = 0;
  Object.values(unresolved).forEach((flag) => {
    if (flag) pressure += 1;
  });

  if (!pressure) return;

  applyGlobalDamage("Las amenazas activas siguen deteriorando la instalacion.", {
    nivelContencion: pressure >= 3 ? 2 : 1,
    dañoInstalacion: pressure >= 2 ? 2 : 1,
    riesgoBiologico: pressure,
    energiaSistema: state.generatorDamaged ? 2 : 1,
    estabilidadLaboratorio: pressure >= 3 ? 2 : 1,
  });

  if (state.threatPulseTick % 14 === 0 && unresolved.raptor) {
    escalateThreatProgress("raptor", { nivelContencion: 6, dañoInstalacion: 4, riesgoBiologico: 5, estabilidadLaboratorio: 5 });
  }
  if (state.threatPulseTick % 18 === 0 && unresolved.dilo) {
    escalateThreatProgress("dilo", { nivelContencion: 5, dañoInstalacion: 3, riesgoBiologico: 8, estabilidadLaboratorio: 4 });
  }
  if (state.threatPulseTick % 20 === 0 && unresolved.trex) {
    escalateThreatProgress("trex", { nivelContencion: 5, dañoInstalacion: 9, energiaSistema: 7, estabilidadLaboratorio: 8 });
  }
  if (state.threatPulseTick % 22 === 0 && unresolved.herb) {
    escalateThreatProgress("herb", { nivelContencion: 3, dañoInstalacion: 6, riesgoBiologico: 2, estabilidadLaboratorio: 5 });
  }
}

function playDynamicDamageSound() {
  const severity = getDeteriorationTier();
  if (severity === 0) return;
  if (state.threatPulseTick - state.lastImpactSoundAt < (severity >= 3 ? 5 : 9)) return;
  state.lastImpactSoundAt = state.threatPulseTick;

  if (state.threatProgress.trex >= 2 && !state.trexContained) {
    clonePlay(audioRex, severity >= 3 ? 0.46 : 0.3);
    clonePlay(audioAlerta, 0.28);
    return;
  }
  if (state.threatProgress.raptor >= 2 && !state.raptorContained) {
    clonePlay(audioRaptor, 0.24);
    clonePlay(audioAlerta, 0.22);
    return;
  }
  if (state.threatProgress.dilo >= 1 && !state.diloNeutralized) {
    clonePlay(audioAlerta, 0.18);
    clonePlay(typingSound, 0.12);
    return;
  }
  clonePlay(audioAlerta, severity >= 3 ? 0.3 : 0.18);
}

function processTimedThreats() {
  if (!state.bootStarted || state.gameOver || state.escaped) return;

  state.countdownSeconds = Math.max(0, state.countdownSeconds - 1);
  state.threatPulseTick += 1;

  const targetPhase =
    gamePhases.find((phase) => state.countdownSeconds <= phase.startAt) ?? gamePhases[0];
  if (targetPhase.id !== state.currentPhaseId) {
    activarFase(targetPhase);
  }

  if (state.lastDirectiveTick - state.countdownSeconds >= 35) {
    const phase = getCurrentPhase();
    const pendingAction = getPendingActionsForPhase(phase)[0];
    state.lastDirectiveTick = state.countdownSeconds;
    if (pendingAction) {
      applyGlobalDamage(`Alerta ignorada: ${pendingAction.label}.`, {
        nivelContencion: 4,
        dañoInstalacion: 3,
        riesgoBiologico: 4,
        energiaSistema: 2,
        estabilidadLaboratorio: 4,
      });
      setCurrentAlert(`Acción requerida: ${pendingAction.label}.`, state.bioRiskLevel >= 2 ? "error" : "warning");
    } else {
      const nextPhase = gamePhases.find((entry) => entry.startAt < phase.startAt);
      if (nextPhase) {
        setCurrentAlert(`Fase asegurada. Prepárate para ${nextPhase.title.toLowerCase()}.`, "warning");
      }
    }
  }

  if (state.diloCountdown !== null && !state.diloNeutralized) {
    state.diloCountdown = Math.max(0, state.diloCountdown - 1);
    if ([60, 30, 10].includes(state.diloCountdown)) {
      pulseCrisisFilter("critical", 900);
      playAlert(0.72);
      setCurrentAlert(`Dilophosaurus infiltrado. Codigo requerido antes de propagacion (${formatCountdown(state.diloCountdown)}).`, "error");
    }
    if (state.diloCountdown === 0) {
      state.diloCountdown = null;
      state.accessBlocked = false;
      degradeContainment(2, "Propagacion de Dilophosaurus confirmada. Segunda barrera comprometida.", "error");
      state.criticalContainmentActive = true;
    }
  }

  if (state.countdownSeconds <= 840 && !state.timelineFlags.sensors) {
    state.timelineFlags.sensors = true;
    playAlert(0.55);
    setActiveEvent("ANOMALIA ACUSTICA EN SECTORES E-03 Y R-01");
    setCurrentAlert("Frecuencia acustica no identificada. Sensores alterados en sectores E-03 y R-01.", "warning");
  }

  if (state.countdownSeconds <= 780 && !state.timelineFlags.raptor) {
    state.timelineFlags.raptor = true;
    state.primaryBarrierDown = true;
    state.barriersRestored = false;
    state.threatProgress.raptor = Math.max(state.threatProgress.raptor, 1);
    applyGlobalDamage("Velociraptor rompe la primera barrera y deja daños visibles en el paddock.", {
      nivelContencion: 12,
      dañoInstalacion: 8,
      riesgoBiologico: 10,
      estabilidadLaboratorio: 9,
    });
    playAlert();
    playDinoSound("raptor");
    setActiveEvent("PRIMERA BARRERA COMPROMETIDA");
    pulseCrisisFilter("critical", 850);
    setCurrentAlert("Primera barrera comprometida. Velociraptor acercándose al núcleo.", "error");
  }

  if (state.countdownSeconds <= 720 && !state.timelineFlags.trex) {
    state.timelineFlags.trex = true;
    state.threatProgress.trex = Math.max(state.threatProgress.trex, 1);
    applyGlobalDamage("T-Rex detectado. Primer impacto de masa sobre el corredor exterior.", {
      nivelContencion: 6,
      dañoInstalacion: 12,
      energiaSistema: 5,
      estabilidadLaboratorio: 11,
    });
    playAlert(0.58);
    playDinoSound("trex", 0.5);
    setActiveEvent("T-REX EN APROXIMACION AL CORREDOR C-07");
    setCurrentAlert("Huella de gran masa confirmada. Tyrannosaurus rex aproximándose al corredor C-07.", "error");
  }

  if (state.countdownSeconds <= 660 && !state.timelineFlags.herd) {
    state.timelineFlags.herd = true;
    state.threatProgress.herb = Math.max(state.threatProgress.herb, 1);
    applyGlobalDamage("Los herbivoros empiezan a dañar compuertas y a bloquear rutas secundarias.", {
      nivelContencion: 4,
      dañoInstalacion: 7,
      riesgoBiologico: 3,
      estabilidadLaboratorio: 6,
    });
    playAlert(0.6);
    playDinoSound("herb", 0.55);
    setActiveEvent("CONFLICTO ENTRE HERBIVOROS");
    setCurrentAlert("Conflicto entre herbívoros en curso. Triceratops y Ankylosaurus están dañando compuertas.", "warning");
  }

  if (state.countdownSeconds <= 540 && !state.timelineFlags.generator) {
    state.timelineFlags.generator = true;
    state.generatorDamaged = true;
    state.powerOnline = false;
    state.darkModeActive = true;
    applyGlobalDamage("Impacto estructural sobre el generador principal. La energia cae y el laboratorio se degrada.", {
      dañoInstalacion: 14,
      energiaSistema: 22,
      estabilidadLaboratorio: 12,
    });
    playAlert();
    playDinoSound("brachio", 0.55);
    setActiveEvent("ENERGIA CRITICA // GENERADOR PRINCIPAL OFFLINE");
    pulseCrisisFilter("critical", 1200);
    setCurrentAlert("ENERGÍA CRÍTICA. GENERADOR PRINCIPAL OFFLINE.", "error");
  }

  if (state.countdownSeconds <= 420 && !state.timelineFlags.dilo) {
    state.timelineFlags.dilo = true;
    state.diloCountdown = 90;
    state.accessBlocked = false;
    state.threatProgress.dilo = Math.max(state.threatProgress.dilo, 1);
    applyGlobalDamage("Dilophosaurus infiltra sectores humedos y contamina paneles de control.", {
      nivelContencion: 8,
      dañoInstalacion: 5,
      riesgoBiologico: 14,
      estabilidadLaboratorio: 8,
    });
    playAlert(0.65);
    playDinoSound("dilo", 0.6);
    setActiveEvent("DILOPHOSAURUS INFILTRADO");
    pulseCrisisFilter("critical", 1000);
    setCurrentAlert("Dilophosaurus infiltrado. Ingresar código de contención antes de propagación.", "error");
  }

  if (state.countdownSeconds <= 300 && !state.timelineFlags.collision) {
    state.timelineFlags.collision = true;
    state.trexCollisionActive = true;
    state.generatorDamaged = true;
    state.darkModeActive = true;
    state.threatProgress.trex = Math.max(state.threatProgress.trex, 2);
    applyGlobalDamage("Colision biologica masiva. Se pierden camaras y sectores completos entran en daño severo.", {
      nivelContencion: 12,
      dañoInstalacion: 18,
      energiaSistema: 16,
      estabilidadLaboratorio: 18,
    });
    reproducirColisionBiologica();
    setActiveEvent("COLISION BIOLOGICA MASIVA DETECTADA");
    pulseCrisisFilter("critical", 1400);
    setCurrentAlert("Colisión biológica masiva detectada. Estabiliza sectores afectados.", "error");
  }

  if (state.countdownSeconds <= 240 && !state.timelineFlags.anky) {
    state.timelineFlags.anky = true;
    state.threatProgress.herb = Math.max(state.threatProgress.herb, 2);
    applyGlobalDamage("Ankylosaurus bloquea el corredor logistico y destruye accesos de servicio.", {
      nivelContencion: 4,
      dañoInstalacion: 10,
      estabilidadLaboratorio: 8,
    });
    playAlert(0.6);
    playDinoSound("anky", 0.55);
    setActiveEvent("ANKYLOSAURUS BLOQUEANDO CORREDOR L-05");
    setCurrentAlert("Ankylosaurus detectado en perímetro logístico. Corredor L-05 bloqueado.", "warning");
  }

  if (state.countdownSeconds <= 180 && !state.timelineFlags.secondaryBarrier) {
    state.timelineFlags.secondaryBarrier = true;
    if (!state.raptorContained || !state.diloNeutralized || state.trexCollisionActive) {
      state.secondaryBarrierDown = true;
      state.criticalContainmentActive = true;
      state.barriersRestored = false;
      state.threatProgress.raptor = Math.max(state.threatProgress.raptor, 3);
      applyGlobalDamage("Segunda barrera perdida. El laboratorio entra en modo critico.", {
        nivelContencion: 20,
        dañoInstalacion: 14,
        riesgoBiologico: 12,
        estabilidadLaboratorio: 18,
      });
      setActiveEvent("SEGUNDA BARRERA COMPROMETIDA");
      pulseCrisisFilter("critical", 1200);
      playAlert(0.75);
      setCurrentAlert("Segunda barrera comprometida. Velociraptor acercándose al núcleo.", "error");
    }
  }

  if (state.countdownSeconds <= 60 && !state.timelineFlags.collapse) {
    state.timelineFlags.collapse = true;
    state.criticalContainmentActive = true;
    applyGlobalDamage("Colapso total inminente. Multiples sistemas comienzan a caer a la vez.", {
      nivelContencion: 18,
      dañoInstalacion: 18,
      riesgoBiologico: 14,
      energiaSistema: 12,
      estabilidadLaboratorio: 20,
    });
    playAlert();
    setActiveEvent("COLAPSO TOTAL INMINENTE");
    pulseCrisisFilter("critical", 1600);
    setCurrentAlert("Alerta crítica. Colapso total inminente. Evacúe o estabilice el núcleo de inmediato.", "error");
  }

  if (verificarCondicionesDeDerrota()) {
    triggerGameOver();
    return;
  }
  if (state.threatPulseTick % 6 === 0) {
    applyPassiveDeterioration();
    playDynamicDamageSound();
  }
  updateHud();
}

function startThreatTimer() {
  if (state.timerId) return;
  state.timerId = window.setInterval(processTimedThreats, 1000);
}

function reiniciarExperiencia() {
  initializeScenario();
  output.innerHTML = "";
  introStatus.textContent = "Pulsa INICIAR PROTOCOLO DE EMERGENCIA para activar el audio de introducción, el video y el protocolo visual.";
  startIntroButton.disabled = false;
  startIntroButton.textContent = "INICIAR PROTOCOLO DE EMERGENCIA";
  introOverlay.classList.remove("hidden");
  introOverlay.setAttribute("aria-hidden", "false");
  bootOverlay.classList.add("hidden");
  bootOverlay.setAttribute("aria-hidden", "true");
  introVideo.currentTime = 0;
  updateHud();
}

function restartScenario() {
  reiniciarExperiencia();
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
    <div
      class="cipher-rotor ${index === activeRotorIndex ? "is-active" : ""}"
      data-rotor-index="${index}"
      role="button"
      tabindex="0"
      aria-label="${rotor.label}, valor actual ${rotor.currentValue}"
    >
      <span>${rotor.label}</span>
      <div class="cipher-rotor__dial"><div class="cipher-rotor__window">${rotor.currentValue}</div></div>
      <strong>${rotor.letter} = ${rotor.baseValue}</strong>
      <em>gira ${rotor.shift}</em>
      <div class="cipher-rotor__controls">
        <button type="button" class="cipher-rotor__button" data-rotate="-1" data-rotor-index="${index}">GIRAR</button>
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

function shouldIgnoreRotorInteraction(action, index) {
  const now = performance.now();
  const duplicate =
    state.lastRotorInteraction.action === action &&
    state.lastRotorInteraction.index === index &&
    now - state.lastRotorInteraction.time < 220;

  if (!duplicate) {
    state.lastRotorInteraction = {
      time: now,
      action,
      index,
    };
  }

  return duplicate;
}

function rotateCipherRotor(index) {
  const rotor = state.cipherHelper.rotors[index];
  if (!rotor) return;
  rotor.currentValue = (rotor.currentValue + 9) % 10;
  state.cipherHelper.activeRotorIndex = index;
  updateCipherHelper();
}

function resetCipherRotor(index) {
  const rotor = state.cipherHelper.rotors[index];
  if (!rotor) return;
  rotor.currentValue = rotor.baseValue;
  state.cipherHelper.activeRotorIndex = index;
  updateCipherHelper();
}

function selectCipherRotor(index) {
  if (!state.cipherHelper.rotors[index]) return;
  state.cipherHelper.activeRotorIndex = index;
  updateCipherHelper();
}

function handleCipherRotorInteraction(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const rotateButton = target.closest("[data-rotate]");
  if (rotateButton instanceof HTMLElement) {
    const index = Number(rotateButton.dataset.rotorIndex);
    if (shouldIgnoreRotorInteraction("rotate", index)) return;
    event.preventDefault();
    rotateCipherRotor(index);
    return;
  }

  const resetButton = target.closest("[data-reset-rotor]");
  if (resetButton instanceof HTMLElement) {
    const index = Number(resetButton.dataset.resetRotor);
    if (shouldIgnoreRotorInteraction("reset", index)) return;
    event.preventDefault();
    resetCipherRotor(index);
    return;
  }

  const rotorButton = target.closest("[data-rotor-index]");
  if (rotorButton instanceof HTMLElement) {
    const index = Number(rotorButton.dataset.rotorIndex);
    if (shouldIgnoreRotorInteraction("select", index)) return;
    selectCipherRotor(index);
  }
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
  if (state.criticalContainmentActive || state.secondaryBarrierDown) return "power";
  if (state.generatorDamaged || !hasOperationalPower()) return "power";
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
    raptor: "raptor",
    trex: "trex",
    herb: "herb",
    anky: "anky",
    power: "brachio",
  };
  if (soundMap[zoneKey]) {
    playDinoSound(soundMap[zoneKey], 0.45);
  }
  if (getCurrentPhase().requiredActions.some((action) => action.id === "scan_sector")) {
    completarAccion("scan_sector");
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
    power: state.criticalContainmentActive ? "restart containment" : state.generatorDamaged ? (state.reserveGeneratorOnline ? "repair generator GEN-RESTART-84" : "activate backup generator") : (!state.barriersRestored && state.diloNeutralized ? "restore barrier BARRIER-RESTORE-31" : "restore power RST-POWER-73"),
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
        "activate backup generator",
        "activate defense",
        "redirect power",
        "block access",
        "restart containment",
        "scan dna",
        "enter containment code",
        "restore power RST-POWER-73",
        "repair generator GEN-RESTART-84",
        "contain raptor ###",
        "contain trex ###",
        "lock dilo GATE-DILO-19",
        "restore barrier BARRIER-RESTORE-31",
        "separate herd HERD-SPLIT-41",
        "redirect anky ANKY-PORT-55",
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
      updateCipherHelper();
      await printLines(files[fileName]);
      return;
    }

    case "status":
      await showStatus();
      return;

    case "missions":
      await printLines([
        `1. Energia: ${hasOperationalPower() ? "COMPLETA" : "PENDIENTE"}`,
        `2. Generador: ${state.generatorRepaired ? "COMPLETA" : state.generatorDamaged ? state.reserveGeneratorOnline ? "RESPALDO ACTIVO" : "ACTIVA" : "EN ESPERA"}`,
        `3. Primera barrera: ${state.primaryBarrierDown ? "COMPROMETIDA" : "ESTABLE"}`,
        `4. Segunda barrera: ${state.secondaryBarrierDown ? "COMPROMETIDA" : "ESTABLE"}`,
        `5. Contencion critica: ${state.criticalContainmentActive ? "ACTIVA" : "CONTROLADA"}`,
        `6. Velociraptor: ${state.raptorContained ? "COMPLETA" : "ACTIVA"}`,
        `7. T-Rex: ${state.trexContained ? "COMPLETA" : "ACTIVA"}`,
        `8. Dilophosaurus: ${state.diloNeutralized ? "COMPLETA" : "ACTIVA"}`,
        `9. Barreras: ${state.barriersRestored ? "COMPLETA" : "ACTIVA"}`,
        `10. Herbivoros: ${state.herdCalmed ? "COMPLETA" : "ACTIVA"}`,
        `11. Ankylosaurus: ${state.ankyRedirected ? "COMPLETA" : "ACTIVA"}`,
        `12. Puerta: ${state.doorUnlocked ? "COMPLETA" : "BLOQUEADA"}`,
        `13. Evacuacion: ${state.escaped ? "COMPLETA" : "PENDIENTE"}`,
      ], "success");
      return;

    case "hint":
      if (!hasOperationalPower()) {
        await typeLine(state.generatorDamaged ? "Pista: activa primero el generador de reserva y luego revisa GENERATOR.LOG." : "Pista: revisa POWER.LOG.", "warning");
        return;
      }
      if (state.diloCountdown !== null && !state.diloNeutralized) {
        await typeLine("Pista: el Dilophosaurus ya infiltró el acceso. Revisa DILO.LOG y ejecuta lock dilo GATE-DILO-19.", "warning");
        return;
      }
      if (state.criticalContainmentActive) {
        await typeLine("Pista: activa defensa, reinicia contención y restaura barreras antes de abrir la salida.", "warning");
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
      if (!state.barriersRestored || state.secondaryBarrierDown) {
        await typeLine("Pista: revisa BARRIER.SYS y CONTAINMENT.SYS para restaurar la contención.", "warning");
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

    case "activate":
      if (argsLower[0] === "monitoring" && argsLower[1] === "general") {
        if (state.monitoringOnline) {
          await typeLine("El monitoreo general ya está activo.", "warning");
          return;
        }
        state.monitoringOnline = true;
        setActiveEvent("MONITOREO GENERAL ACTIVO");
        completarAccion("monitoring_general");
        relieveGlobalDamage({ energiaSistema: 4, estabilidadLaboratorio: 3 });
        updateHud();
        await printLines(["Activando monitoreo general...", "Sensores del laboratorio sincronizados.", "MONITOREO GENERAL ONLINE."], "success");
        return;
      }
      if (argsLower[0] === "perimeter" && argsLower[1] === "lockdown") {
        state.accessBlocked = true;
        state.defenseModeActive = true;
        setActiveEvent("CIERRE PERIMETRAL ACTIVADO");
        completarAccion("perimeter_lockdown");
        relieveGlobalDamage({ nivelContencion: 6, estabilidadLaboratorio: 4 });
        updateHud();
        await printLines(["Activando cierre perimetral...", "Compuertas del anillo exterior bajando...", "PERIMETRO BLOQUEADO."], "success");
        return;
      }
      if (argsLower[0] === "backup" && argsLower[1] === "generator") {
        if (!state.generatorDamaged) {
          await typeLine("El generador principal sigue estable. No es necesario activar respaldo.", "warning");
          return;
        }
        if (state.reserveGeneratorOnline) {
          await typeLine("El generador de reserva ya está activo.", "warning");
          return;
        }
        state.reserveGeneratorOnline = true;
        state.powerOnline = true;
        state.darkModeActive = false;
        setActiveEvent("GENERADOR DE RESERVA ACTIVO");
        detenerAlerta("SITUACION CONTROLADA // Respaldo energetico activo");
        setCurrentAlert("Generador de reserva activo. El sistema vuelve con potencia parcial.", "success");
        completarAccion("backup_generator");
        relieveGlobalDamage({ energiaSistema: 18, estabilidadLaboratorio: 8 });
        updateHud();
        await printLines(["Activando generador de reserva...", "Celdas auxiliares sincronizadas.", "RESPALDO ENERGETICO ONLINE."], "success");
        return;
      }
      if (argsLower[0] === "defense") {
        if (!hasOperationalPower()) {
          playAlert();
          addLine("ERROR: se requiere energia operativa para activar defensa.", "error");
          return;
        }
        state.defenseModeActive = true;
        state.trexCollisionActive = false;
        setActiveEvent("DEFENSA REACTIVA ACTIVADA");
        pulseCrisisFilter("warning", 850);
        relieveGlobalDamage({ nivelContencion: 5, estabilidadLaboratorio: 4 });
        updateHud();
        await printLines(["Activando defensa interna...", "Compuertas reactivas desplegadas.", "DEFENSA REACTIVA ONLINE."], "success");
        return;
      }
      break;

    case "block":
      if (argsLower[0] === "access") {
        state.accessBlocked = true;
        if (state.diloCountdown !== null && !state.diloNeutralized) {
          state.diloCountdown = Math.min(120, state.diloCountdown + 20);
        }
        setActiveEvent("ACCESOS SECUNDARIOS BLOQUEADOS");
        relieveGlobalDamage({ riesgoBiologico: 5, estabilidadLaboratorio: 2 });
        updateHud();
        await printLines(["Bloqueando accesos secundarios...", "Compuertas internas reordenadas.", "Acceso restringido."], "success");
        return;
      }
      break;

    case "scan":
      if (argsLower[0] === "sector") {
        await scanSector();
        completarAccion("scan_sector");
        return;
      }
      if (argsLower[0] === "dna") {
        await printLines([
          "ESCANEO DE ADN EN CURSO...",
          `Objetivo primario: ${!state.raptorContained ? "Velociraptor" : !state.trexContained ? "T-Rex" : !state.diloNeutralized ? "Dilophosaurus" : "Sin amenaza dominante"}`,
          `Evento activo: ${state.activeEvent}`,
          `Riesgo biologico: ${threatLevelState.textContent}`,
        ], "success");
        return;
      }
      break;

    case "enter":
      if (argsLower[0] === "containment" && argsLower[1] === "code") {
        completarAccion("containment_code");
        if (!state.raptorContained) {
          setCipherTarget("raptor");
          updateCipherHelper();
          await typeLine("Interfaz enfocada en RAPTOR.KEY. Resuelve los rotores e ingresa contain raptor ###.", "warning");
          return;
        }
        if (!state.trexContained) {
          setCipherTarget("trex");
          updateCipherHelper();
          await typeLine("Interfaz enfocada en TREX.KEY. Resuelve los rotores e ingresa contain trex ###.", "warning");
          return;
        }
        if (!state.diloNeutralized) {
          input.value = "lock dilo GATE-DILO-19";
          input.focus();
          await typeLine("Código de contención Dilophosaurus precargado en terminal.", "warning");
          return;
        }
        await typeLine("No hay un código de contención pendiente en este momento.", "warning");
        return;
      }
      break;

    case "restore":
      if (argsLower[0] === "power" && argsUpper.slice(1).join("-") === "RST-POWER-73") {
        if (state.generatorDamaged) {
          playAlert();
          addLine("ERROR: el generador de respaldo está dañado. Repara la línea antes de restaurar la red.", "error");
          return;
        }
        if (state.powerOnline) {
          await typeLine("Energia ya restaurada.", "warning");
          return;
        }
        state.powerOnline = true;
        state.darkModeActive = false;
        detenerAlerta("SITUACION CONTROLADA // Energia principal restaurada");
        relieveGlobalDamage({ energiaSistema: 26, estabilidadLaboratorio: 7 });
        updateHud();
        setCurrentAlert("Energía principal restaurada.", "success");
        await printLines(["Restaurando suministro electrico...", "Subestacion oeste en linea.", "Energia principal ONLINE."], "success");
        return;
      }
      if (argsLower[0] === "barrier" && argsUpper.slice(1).join("-") === "BARRIER-RESTORE-31") {
        if (!state.diloNeutralized) {
          playAlert();
          addLine("ERROR: neutraliza primero la amenaza del acceso principal.", "error");
          return;
        }
        state.barriersRestored = true;
        state.primaryBarrierDown = false;
        state.secondaryBarrierDown = false;
        state.criticalContainmentActive = false;
        state.threatProgress.raptor = Math.max(0, state.threatProgress.raptor - 1);
        state.threatProgress.dilo = Math.max(0, state.threatProgress.dilo - 1);
        setActiveEvent("MALLA DE CONTENCION REESTABILIZADA");
        detenerAlerta("SITUACION CONTROLADA // Barreras restauradas");
        completarAccion("reinforce_containment");
        relieveGlobalDamage({ nivelContencion: 18, dañoInstalacion: 8, riesgoBiologico: 8, estabilidadLaboratorio: 14 });
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
        state.reserveGeneratorOnline = false;
        state.darkModeActive = false;
        state.trexCollisionActive = false;
        state.threatProgress.trex = Math.max(0, state.threatProgress.trex - 1);
        detenerAlerta("SITUACION CONTROLADA // Generador reparado");
        setActiveEvent("GENERADOR PRINCIPAL ESTABILIZADO");
        completarAccion("redirect_power");
        relieveGlobalDamage({ dañoInstalacion: 10, energiaSistema: 24, estabilidadLaboratorio: 12 });
        updateHud();
        setCurrentAlert("Generador reparado. La instalación recupera estabilidad energética.", "success");
        await printLines(["Reparando acometida del generador...", "Linea de respaldo estabilizada.", "Generador ONLINE."], "success");
        return;
      }
      break;

    case "lock":
      if (argsLower[0] === "dilo" && argsUpper.slice(1).join("-") === "GATE-DILO-19") {
        state.diloNeutralized = true;
        state.diloCountdown = null;
        state.accessBlocked = false;
        state.threatProgress.dilo = 0;
        setActiveEvent("DILOPHOSAURUS CONTENIDO");
        detenerAlerta("SITUACION CONTROLADA // Dilophosaurus neutralizado");
        detenerSonido("dilo");
        completarAccion("dilo_lockdown");
        relieveGlobalDamage({ nivelContencion: 8, riesgoBiologico: 18, estabilidadLaboratorio: 8 });
        updateHud();
        await printLines(["Cerrando compuertas del acceso principal...", "Lectura de Dilophosaurus desviada...", "Amenaza DILO NEUTRALIZADA."], "success");
        return;
      }
      break;

    case "contain":
      if (!hasOperationalPower()) {
        playAlert();
        addLine("ERROR: no hay energia suficiente para ejecutar protocolos de contencion.", "error");
        return;
      }
      if (argsLower[0] === "raptor") {
        if (tokens[2] === state.raptorCode) {
          state.raptorContained = true;
          state.primaryBarrierDown = false;
          if (!state.secondaryBarrierDown) state.criticalContainmentActive = false;
          state.threatProgress.raptor = 0;
          setActiveEvent("RAPTOR RESELLADO");
          detenerAlerta("SITUACION CONTROLADA // Velociraptor contenido");
          relieveGlobalDamage({ nivelContencion: 16, dañoInstalacion: 6, riesgoBiologico: 10, estabilidadLaboratorio: 10 });
          updateHud();
          detenerSonido("raptor");
          playDinoSound("raptor", 0.35);
          await printLines(["Validando protocolo R-01...", "Cerco secundario reactivado.", "Velociraptor CONTENIDO."], "success");
          return;
        }
        playAlert();
        applyGlobalDamage("Protocolo raptor fallido. El depredador gana terreno dentro del laboratorio.", {
          nivelContencion: 8,
          dañoInstalacion: 5,
          riesgoBiologico: 8,
          estabilidadLaboratorio: 7,
        });
        addLine("ERROR: clave de contencion raptor invalida.", "error");
        return;
      }
      if (argsLower[0] === "trex") {
        if (tokens[2] === state.trexCode) {
          state.trexContained = true;
          state.trexCollisionActive = false;
          state.threatProgress.trex = 0;
          setActiveEvent("T-REX REDIRIGIDO");
          detenerAlerta("SITUACION CONTROLADA // T-Rex contenido");
          relieveGlobalDamage({ dañoInstalacion: 14, energiaSistema: 8, estabilidadLaboratorio: 14 });
          updateHud();
          detenerSonido("trex");
          playDinoSound("trex", 0.35);
          await printLines(["Validando protocolo C-07...", "Compuertas del corredor sur cerradas.", "Tyrannosaurus rex CONTENIDO."], "success");
          return;
        }
        playAlert();
        applyGlobalDamage("Fallo en contencion T-Rex. Nuevo impacto estructural detectado.", {
          dañoInstalacion: 10,
          energiaSistema: 6,
          estabilidadLaboratorio: 10,
        });
        addLine("ERROR: clave de contencion T-Rex invalida.", "error");
        return;
      }
      break;

    case "separate":
      if (argsLower[0] === "herd" && argsUpper.slice(1).join("-") === "HERD-SPLIT-41") {
        if (!state.barriersRestored) {
          playAlert();
          addLine("ERROR: restaura primero las barreras de contención.", "error");
          return;
        }
        state.herdCalmed = true;
        state.threatProgress.herb = Math.max(0, state.threatProgress.herb - 1);
        setActiveEvent("HERBIVOROS REDIRIGIDOS");
        detenerAlerta("SITUACION CONTROLADA // Protocolo de separación ejecutado");
        completarAccion("stabilize_herd");
        relieveGlobalDamage({ dañoInstalacion: 8, estabilidadLaboratorio: 10 });
        updateHud();
        detenerSonido("herb");
        playDinoSound("herb", 0.35);
        await printLines(["Activando protocolo de separación...", "Triceratops y Ankylosaurus alejándose del Sector C...", "CONFLICTO DE HERBIVOROS CONTROLADO."], "success");
        return;
      }
      break;

    case "redirect":
      if (argsLower[0] === "power") {
        completarAccion("redirect_power");
        await handleCommand(state.reserveGeneratorOnline ? "repair generator GEN-RESTART-84" : "activate backup generator");
        return;
      }
      if (argsLower[0] === "anky" && argsUpper.slice(1).join("-") === "ANKY-PORT-55") {
        if (!state.herdCalmed) {
          playAlert();
          addLine("ERROR: el valle sur sigue inestable; la ruta de desvio no está segura.", "error");
          return;
        }
        state.ankyRedirected = true;
        state.threatProgress.herb = 0;
        setActiveEvent("CORREDOR L-05 DESPEJADO");
        detenerAlerta("SITUACION CONTROLADA // Ankylosaurus redirigido");
        completarAccion("redirect_anky_action");
        relieveGlobalDamage({ dañoInstalacion: 9, estabilidadLaboratorio: 10, nivelContencion: 4 });
        updateHud();
        detenerSonido("anky");
        playDinoSound("anky", 0.35);
        await printLines(["Activando balizas de desvio...", "Ankylosaurus alejandose del corredor L-05...", "Corredor logístico liberado."], "success");
        return;
      }
      break;

    case "restart":
      if (argsLower[0] === "containment") {
        if (!hasOperationalPower()) {
          playAlert();
          addLine("ERROR: sin energía operativa no se puede reiniciar la contención.", "error");
          return;
        }
        state.criticalContainmentActive = false;
        state.secondaryBarrierDown = false;
        state.trexCollisionActive = false;
        state.barriersRestored = state.diloNeutralized;
        if (state.raptorContained) {
          state.primaryBarrierDown = false;
        }
        state.defenseModeActive = true;
        setActiveEvent("CONTENCION REINICIADA");
        relieveGlobalDamage({ nivelContencion: 10, estabilidadLaboratorio: 8 });
        updateHud();
        await printLines(["Reiniciando malla de contención...", "Recalibrando nodos del núcleo...", "CONTENCION REINICIADA."], "success");
        return;
      }
      restartScenario();
      return;

    case "unlock":
      if (argsLower[0] === "route") {
        await handleCommand("confirm route");
        return;
      }
      if (argsLower[0] === "door" && argsUpper.slice(1).join("-") === "DOOR-LOCK-42") {
        if (!state.raptorContained || !state.trexContained || !state.diloNeutralized || !state.barriersRestored || !state.herdCalmed || !state.ankyRedirected || state.generatorDamaged || state.primaryBarrierDown || state.secondaryBarrierDown || state.criticalContainmentActive) {
          playAlert();
          addLine("ERROR: existen amenazas activas o fallas de infraestructura. La puerta no puede liberarse.", "error");
          return;
        }
        state.doorUnlocked = true;
        detenerAlerta("SITUACION CONTROLADA // Ruta de evacuacion liberada");
        completarAccion("confirm_route");
        relieveGlobalDamage({ estabilidadLaboratorio: 4 });
        updateHud();
        await printLines(["Validando acceso de emergencia...", "Sellos magneticos liberados.", "Puerta de evacuacion ABIERTA."], "success");
        return;
      }
      break;

    case "confirm":
      if (argsLower[0] === "route") {
        await handleCommand("unlock door DOOR-LOCK-42");
        return;
      }
      break;

    case "escape":
      if (!state.doorUnlocked) {
        playAlert();
        addLine("ERROR: la ruta de evacuacion sigue bloqueada.", "error");
        return;
      }
      completarAccion("activate_escape");
      state.escaped = true;
      if (state.timerId) {
        window.clearInterval(state.timerId);
        state.timerId = null;
      }
      detenerTodosLosSonidos();
      hideAlertPanel();
      currentAlertText.textContent = "Evacuacion completada. Ejecutando cierre cinematico.";
      updateHud();
      await printLines(["Iniciando protocolo de escape...", "Puertas externas liberadas.", "EVACUACION COMPLETADA. Has escapado del laboratorio."], "success");
      verificarCondicionesDeVictoria();
      mostrarPantallaFinal({
        mode: "success",
        label: "PROTOCOLO FINAL",
        title: "ES MOMENTO DE SALIR",
        text: "La ruta exterior esta abierta. Corre hacia la salida antes del cierre total.",
        videoPath: "assets/video/ESCAPE.MP4",
      });
      return;

    case "clear":
      output.innerHTML = "";
      return;
  }

  state.attempts += 1;
  playAlert();
  applyGlobalDamage(`Comando no reconocido o protocolo invalido: ${rawCommand}.`, {
    nivelContencion: 2,
    dañoInstalacion: 1,
    riesgoBiologico: 2,
    estabilidadLaboratorio: 2,
  });
  addLine(`Comando no reconocido: ${rawCommand}`, "error");
  if (state.attempts >= 3) {
    addLine("ALERTA: intento no autorizado detectado.", "error");
    addLine("ALERTA: brecha de seguridad en laboratorio B.", "error");
    applyGlobalDamage("Intentos no autorizados saturan la consola y degradan la sesion.", {
      nivelContencion: 5,
      dañoInstalacion: 2,
      riesgoBiologico: 4,
      energiaSistema: 2,
      estabilidadLaboratorio: 5,
    });
    state.attempts = 0;
  }
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
  startSystemButton.focus();
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
  introStatus.textContent = "Protocolo activado. INTRO_AUDIO.MP3, video, temporizador y ambiente en ejecución.";
  startThreatTimer();
  startAmbient();
  introVideo.loop = true;
  introVideo.currentTime = 0;
  introVideo.play().catch(() => {
    introStatus.textContent = "No fue posible reproducir el video de apertura. El sistema continuará con INTRO_AUDIO.MP3 y el briefing visual.";
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
    finalizarEscapeFallido();
    return;
  }
  finalizarEscapeExitoso();
});
escapeVideo?.addEventListener("error", () => {
  if (escapeOverlayText) {
    escapeOverlayText.textContent = `No fue posible reproducir ${state.finalOutcome === "failure" ? "assets/video/Falla.mp4" : "assets/video/ESCAPE.MP4"}.`;
  }
  if (state.finalOutcome === "failure") {
    finalizarEscapeFallido(true);
  } else {
    finalizarEscapeExitoso(true);
  }
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
    if (["raptor", "trex", "anky", "brachio", "dilo", "stego"].includes(marker.dataset.zone)) {
      playDinoSound(marker.dataset.zone === "trex" ? "trex" : marker.dataset.zone, 0.3);
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

missionActionButton?.addEventListener("click", async () => {
  const command = missionActionButton.dataset.command;
  if (!command) return;
  if (!state.bootStarted) await runBootSequence();
  await handleCommand(command);
  input.focus();
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

cipherRotorCards.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  handleCipherRotorInteraction(event);
});

cipherRotorCards.addEventListener("click", handleCipherRotorInteraction);

cipherRotorCards.addEventListener("keydown", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  const rotorButton = target.closest(".cipher-rotor[data-rotor-index]");
  if (!(rotorButton instanceof HTMLElement)) return;
  event.preventDefault();
  const index = Number(rotorButton.dataset.rotorIndex);
  selectCipherRotor(index);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) focusLockIfNeeded();
});
window.addEventListener("blur", focusLockIfNeeded);

initializeScenario();
updateHud();
