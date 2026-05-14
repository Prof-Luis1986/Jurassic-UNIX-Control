const byId = (id) => document.getElementById(id);

const introOverlay = byId("introOverlay");
const introVideo = byId("introVideo");
const introStatus = byId("introStatus");
const startIntroButton = byId("startIntro");
const skipIntroButton = byId("skipIntro");
const bootOverlay = byId("bootOverlay");
const startSystemButton = byId("startSystem");
const skipTrainingBootButton = byId("skipTrainingBoot");
const trainingOverlay = byId("trainingOverlay");
const trainingOutput = byId("trainingOutput");
const trainingForm = byId("trainingForm");
const trainingInput = byId("trainingInput");
const trainingPhaseBadge = byId("trainingPhaseBadge");
const trainingObjective = byId("trainingObjective");
const trainingSteps = byId("trainingSteps");
const trainingRotorPanel = byId("trainingRotorPanel");
const trainingRotorState = byId("trainingRotorState");
const trainingRotorHint = byId("trainingRotorHint");
const trainingRotorDial = byId("trainingRotorDial");
const trainingRotorValue = byId("trainingRotorValue");
const trainingRotorTurn = byId("trainingRotorTurn");
const trainingRotorSave = byId("trainingRotorSave");
const trainingCompletePanel = byId("trainingCompletePanel");
const skipTrainingButton = byId("skipTraining");
const startRealSimulationButton = byId("startRealSimulation");
const appShell = byId("appShell");
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
const evacuationRoutesPanel = byId("evacuationRoutesPanel");
const damageState = byId("damageState");
const damageMeter = byId("damageMeter");
const damageMeterValue = byId("damageMeterValue");
const damageMeterFill = byId("damageMeterFill");
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
const omegaCountdown = byId("omegaCountdown");

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
const focusCipherDiloButton = byId("focusCipherDilo");
const focusCipherChimeraButton = byId("focusCipherChimera");
const focusCipherAppendButton = byId("focusCipherAppend");
const focusCipherSendButton = byId("focusCipherSend");
const evacuationAction = byId("evacuationAction");

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

const ROTOR_DEBUG = false;
const CHIMERA_DEBUG = true;
const DEFAULT_ATTACK_GOALS = {
  raptor: 3,
  trex: 3,
  chimera: 5,
};

const DIRECTOR_PROFILES = [
  {
    key: "bio",
    label: "Caos biologico",
    requiredEvents: ["dilo", "stego"],
    optionalEvents: ["barrier", "herd", "anky"],
    optionalCount: [1, 2],
    weights: { dilo: 4, stego: 4, barrier: 2, herd: 1, anky: 1, raptor: 2, trex: 1, omega: 2 },
    attackGoals: { raptor: [2, 3], trex: [2, 3], chimera: [4, 5] },
    omegaWindow: [610, 520],
    pressure: { bio: 1.35, damage: 0.9, stability: 1.1, energy: 0.9 },
  },
  {
    key: "structural",
    label: "Destruccion estructural",
    requiredEvents: ["barrier", "herd"],
    optionalEvents: ["anky", "dilo", "stego"],
    optionalCount: [1, 2],
    weights: { trex: 4, herd: 4, anky: 3, barrier: 3, raptor: 1, dilo: 1, stego: 1, omega: 2 },
    attackGoals: { raptor: [2, 3], trex: [3, 4], chimera: [4, 5] },
    omegaWindow: [620, 500],
    pressure: { bio: 0.85, damage: 1.35, stability: 1.3, energy: 1.1 },
  },
  {
    key: "hybrid",
    label: "Crisis hibrida",
    requiredEvents: ["dilo"],
    optionalEvents: ["stego", "barrier", "herd", "anky"],
    optionalCount: [1, 3],
    weights: { omega: 5, raptor: 3, trex: 2, dilo: 2, stego: 2, barrier: 1, herd: 1, anky: 1 },
    attackGoals: { raptor: [3, 4], trex: [2, 3], chimera: [4, 5] },
    omegaWindow: [700, 590],
    pressure: { bio: 1.2, damage: 1.1, stability: 1.25, energy: 1 },
  },
  {
    key: "tactical",
    label: "Supervivencia tactica",
    requiredEvents: [],
    optionalEvents: ["dilo", "barrier", "herd", "anky", "stego"],
    optionalCount: [3, 4],
    weights: { raptor: 2, trex: 2, dilo: 2, barrier: 2, herd: 2, anky: 2, stego: 2, omega: 2 },
    attackGoals: { raptor: [3, 4], trex: [3, 4], chimera: [4, 5] },
    omegaWindow: [620, 480],
    pressure: { bio: 1, damage: 1, stability: 1, energy: 1 },
  },
];
let rotorContainmentListenerAttached = false;

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
  herd: "Pelea de Triceratops detectada en Sector C. Compuertas laterales bajo presión.",
  anky: "Ankylosaurus bloqueando el corredor logístico L cero cinco.",
  stego: "Estegosaurus enfermo detectado. Anomalía biológica en Sector Herbívoro.",
  door: "Ruta de evacuación liberada.",
  escape: "Evacuación autorizada. Personal restante, abandone la instalación.",
  omega: "Atención. Nivel Omega activado. Chimerasaurus Rex liberado. Cápsula de contención rota.",
  chimera: "Protocolo Omega disponible. Reúna los fragmentos y contenga al Chimerasaurus Rex antes del colapso total.",
};

const ambientNarrativeBank = [
  {
    id: "founders-01",
    theme: "founders",
    title: "FOUNDERS.LOG // FUNDACION",
    source: "IA CENTRAL / ARCHIVO RECUPERADO",
    minPhase: 1,
    triggers: ["ambient", "file"],
    files: ["README.TXT", "CREW.LOG", "FOUNDERS.LOG"],
    text: "GENETIC SYSTEMS fue fundada para reconstruir especies perdidas. Los primeros informes omitieron una palabra: obediencia.",
  },
  {
    id: "founders-02",
    theme: "founders",
    title: "FOUNDERS.LOG // EXPANSION",
    source: "INTERCOM ANTIGUO",
    minPhase: 1,
    triggers: ["ambient"],
    text: "La excavacion original no buscaba dinosaurios completos. Buscaba fragmentos. Lo demas fue ambicion con presupuesto suficiente.",
  },
  {
    id: "rex-01",
    theme: "trex",
    title: "TREX-INCIDENT.LOG // PRIMER ADN VIABLE",
    source: "GRABACION DE LABORATORIO",
    minPhase: 2,
    triggers: ["ambient", "file", "recovery"],
    files: ["TREX.KEY", "TREX.DAT"],
    text: "Primer tejido viable de Tyrannosaurus confirmado. El equipo celebro antes de leer el reporte de agresividad basal.",
  },
  {
    id: "rex-02",
    theme: "trex",
    title: "TREX-INCIDENT.LOG // CONTENCION",
    source: "MEMO DE SEGURIDAD",
    minPhase: 2,
    triggers: ["ambient", "recovery"],
    text: "El T-Rex no rompio la primera compuerta por fuerza. La golpeo tres veces en el mismo punto. Eso no era azar.",
  },
  {
    id: "raptor-01",
    theme: "raptor",
    title: "RAPTOR-TEST.LOG // APRENDIZAJE",
    source: "IA CENTRAL / ANALISIS CONDUCTUAL",
    minPhase: 1,
    triggers: ["ambient", "file", "recovery"],
    files: ["RAPTOR.KEY", "RAPTOR.DAT", "ENIGMA.MANUAL"],
    text: "Los raptores no solo aprendian rutas. Aprendian horarios, voces y la diferencia entre una puerta cerrada y una puerta confiada.",
  },
  {
    id: "raptor-02",
    theme: "raptor",
    title: "RAPTOR-TEST.LOG // COMUNICACION",
    source: "AUDIO PARCIAL",
    minPhase: 2,
    triggers: ["ambient", "recovery"],
    text: "Tres individuos emitieron vocalizaciones alternadas durante once minutos. Al final, el cerco norte recibio la primera prueba coordinada.",
  },
  {
    id: "herb-01",
    theme: "herbivore",
    title: "HERBIVORE-REPORT.LOG // SECTOR C",
    source: "BITACORA VETERINARIA",
    minPhase: 1,
    triggers: ["ambient", "file", "recovery"],
    files: ["TRICERATOPS.LOG", "HERB.DAT", "STEGO.LOG", "STEGO.DAT"],
    text: "Los herbivoros fueron pacificos al principio. Luego llegaron el confinamiento, las hormonas correctivas y los silencios en el reporte.",
  },
  {
    id: "herb-02",
    theme: "herbivore",
    title: "HERBIVORE-REPORT.LOG // METABOLISMO",
    source: "REGISTRO MEDICO",
    minPhase: 2,
    triggers: ["ambient", "file"],
    files: ["STEGO.LOG", "STEGO.DAT"],
    text: "El metabolismo del Estegosaurus no fallo de golpe. Fue una cascada lenta. Nadie quiso detener la exhibicion.",
  },
  {
    id: "ethics-01",
    theme: "ethics",
    title: "ETHICS-MEETING.LOG // TRANSCRIPCION",
    source: "COMITE INTERNO",
    minPhase: 2,
    triggers: ["ambient"],
    text: "La palabra extincion aparece diecisiete veces en la reunion. La palabra responsabilidad, ninguna.",
  },
  {
    id: "missing-01",
    theme: "missing",
    title: "PERSONNEL-MISSING.LOG // TURNO NOCTURNO",
    source: "ARCHIVO DE PERSONAL",
    minPhase: 3,
    triggers: ["ambient"],
    text: "Cuatro tecnicos no registraron salida del subnivel V-02. El informe final los reclasifico como traslado administrativo.",
  },
  {
    id: "chimera-01",
    theme: "chimera",
    title: "CHIMERA-ALPHA.LOG // REFERENCIA BORRADA",
    source: "IA CENTRAL / DATOS CORRUPTOS",
    minPhase: 2,
    triggers: ["ambient", "file"],
    files: ["OMEGA.LOG", "DNA-MIX.LOG"],
    text: "Se detecta una referencia tachada: sujeto compuesto. El nombre fue eliminado antes de la auditoria.",
  },
  {
    id: "chimera-02",
    theme: "chimera",
    title: "OMEGA-ORIGIN.LOG // MUESTRA COMPUESTA",
    source: "GRABACION RECUPERADA",
    minPhase: 3,
    triggers: ["ambient", "file"],
    files: ["CHIMERA.KEY", "DNA-MIX.LOG"],
    text: "El material genetico no era compatible. Por eso funciono. Ningun sistema de contencion fue disenado para algo que no debia existir.",
  },
  {
    id: "chimera-03",
    theme: "chimera",
    title: "OMEGA-ORIGIN.LOG // PROTOCOLO NEGRO",
    source: "IA CENTRAL / ACCESO OMEGA",
    minPhase: 5,
    requiresOmega: true,
    triggers: ["ambient", "file", "recovery"],
    files: ["OMEGA.LOG", "CHIMERA.KEY", "DNA-MIX.LOG"],
    text: "OMEGA no fue creado para salvar al personal. Fue creado para borrar evidencia antes de que el exterior escuchara los rugidos.",
  },
  {
    id: "ai-01",
    theme: "ai",
    title: "JURASSIC UNIX // SUBRUTINA DE MEMORIA",
    source: "IA CENTRAL",
    minPhase: 1,
    triggers: ["ambient"],
    text: "Mensaje automatico: los registros incompletos no indican ausencia de incidente. Indican intervencion humana.",
  },
  {
    id: "ai-02",
    theme: "ai",
    title: "JURASSIC UNIX // ANOMALIA",
    source: "IA CENTRAL",
    minPhase: 3,
    triggers: ["ambient"],
    text: "No puedo confirmar quien autorizo la mezcla genetica. Puedo confirmar quien borro la autorizacion.",
  },
];

const state = {
  protocolStarted: false,
  introStarted: false,
  introFinished: false,
  bootStarted: false,
  trainingActive: false,
  trainingCompleted: false,
  trainingStep: 0,
  trainingRotorActive: false,
  trainingRotorCurrent: 3,
  trainingRotorTarget: 2,
  trainingRotorSaved: false,
  trainingPowerRestored: false,
  ambientMuted: false,
  ambientPaused: false,
  powerOnline: false,
  generatorDamaged: false,
  generatorRepaired: false,
  raptorContained: false,
  trexContained: false,
  raptorAttackCount: 0,
  trexAttackCount: 0,
  predatorReattackAt: {
    raptor: null,
    trex: null,
  },
  diloNeutralized: false,
  barriersRestored: false,
  herdCalmed: false,
  ankyRedirected: false,
  stegoAnalyzed: false,
  doorUnlocked: false,
  evacuationRoute: null,
  escapeRoutes: {
    main: { planned: true, available: false, lost: false },
    helipad: { planned: false, available: false, lost: false },
    tunnel: { planned: false, available: false, lost: false },
    cargo: { planned: false, available: false, lost: false },
  },
  escaped: false,
  evacuationAvailable: false,
  evacuationAnnounced: false,
  cinematicStarted: false,
  gameOver: false,
  finalOutcome: null,
  alertsSilencedUntil: 0,
  continuousAlertActive: false,
  currentDinoSound: null,
  alertPanelTimer: null,
  glitchBurstTimer: null,
  activeZone: "raptor",
  attempts: 0,
  countdownSeconds: 900,
  elapsedSeconds: 0,
  omegaReleased: false,
  omegaActive: false,
  omegaCinematicPlaying: false,
  omegaVideoSeen: false,
  eventVideoSeen: {
    raptor: false,
    trex: false,
    dilo: false,
    herd: false,
    anky: false,
    stego: false,
  },
  activeThreatCinematic: null,
  currentProtocol: null,
  activeThreat: null,
  timerId: null,
  damageInstalacion: 12,
  riesgoBiologico: 18,
  estabilidadLaboratorio: 88,
  energiaSistema: 62,
  chimeraContained: false,
  chimeraActive: false,
  chimeraCode: "",
  diloCode: "",
  chimeraBreakoutCount: 0,
  chimeraSessionId: 0,
  chimeraContainmentExpiresAt: null,
  omegaRotorsSolved: false,
  chimeraFragmentsKnown: {
    omega: false,
    key: false,
    dna: false,
  },
  director: {
    lastEscalationAt: 900,
    lastPressureAt: 900,
    lastMajorEventAt: 900,
    nextRandomEventAt: 840,
    nextAmbientIncidentAt: 810,
    profile: null,
    plannedEvents: [],
    skippedEvents: [],
    eventWeights: {},
    attackGoals: { ...DEFAULT_ATTACK_GOALS },
    omegaEarliestAt: 600,
    omegaForceAt: 480,
    sectorsCollapsed: [],
    eventHistory: [],
    recentThreats: [],
    threatCooldownUntil: {
      raptor: 900,
      trex: 900,
      chimera: 900,
    },
    cooldown: 0,
    activePuzzle: "none",
  },
  guide: {
    objectiveKey: "power",
    lastProgressAt: 900,
    lastHintAt: 900,
    hintTier: 0,
  },
  rotorFeedback: {
    rotatedIndex: -1,
    correctIndex: -1,
  },
  rotorPointer: {
    active: false,
    index: -1,
    lastY: 0,
    remainder: 0,
    dragged: false,
    suppressClickUntil: 0,
    tapCandidate: false,
  },
  ui: {
    suppressTerminalScrollUntil: 0,
    lastViewportY: 0,
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
    stego: false,
    omega: false,
    collapse: false,
    chimeraHint: false,
  },
  deferredEvents: {},
  narrative: {
    nextAmbientAt: 780,
    lastPlayedAt: 900,
    seen: [],
    isSpeaking: false,
    queue: [],
    current: null,
    retryTimer: null,
  },
  activeThreats: {},
  unresolvedEvents: {},
  alertState: "off",
  currentEmergency: null,
  emergencyLock: false,
  audio: {
    currentSpeech: null,
    speechPriority: "low",
    alertVolumeBeforeDuck: null,
    mixTimer: null,
  },
  raptorCode: "",
  trexCode: "",
  raptorRotors: [],
  trexRotors: [],
  diloRotors: [],
  chimeraRotors: [],
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

function pickRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickWeighted(items, weights = {}) {
  const total = items.reduce((sum, item) => sum + (weights[item] ?? 1), 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= weights[item] ?? 1;
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

function pickUniqueWeighted(items, count, weights = {}) {
  const selected = [];
  const pool = [...items];
  while (pool.length && selected.length < count) {
    const item = pickWeighted(pool, weights);
    selected.push(item);
    pool.splice(pool.indexOf(item), 1);
  }
  return selected;
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
  const variants = [
    ["CHM", "XR", "OMEGA"],
    ["OMEGA", "CHM", "LOCK"],
    ["CHIMERA", "LOCK", "77"],
  ];
  const [a, b, c] = variants[Math.floor(Math.random() * variants.length)];
  const digits = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.chimeraCode = `${a}-${b}-${digits}-${c}`;
  state.chimeraRotors = [randomDigit(2, 6), randomDigit(2, 6), randomDigit(2, 6)];
  state.omegaRotorsSolved = false;
}

function getChimeraContainmentWindow() {
  const profileKey = state.director.profile?.key;
  const base = profileKey === "hybrid" ? 92 : 108;
  return Math.max(68, base - state.chimeraBreakoutCount * 6);
}

function generateDirectorPlan() {
  const profile = pickRandomItem(DIRECTOR_PROFILES);
  const optionalCount = randomDigit(profile.optionalCount[0], profile.optionalCount[1]);
  const optionalEvents = pickUniqueWeighted(profile.optionalEvents, optionalCount, profile.weights);
  const plannedEvents = Array.from(new Set(["raptor", "trex", "omega", ...profile.requiredEvents, ...optionalEvents]));
  const allVariableEvents = ["dilo", "barrier", "herd", "anky", "stego"];
  const skippedEvents = allVariableEvents.filter((eventKey) => !plannedEvents.includes(eventKey));
  return {
    profile,
    plannedEvents,
    skippedEvents,
    eventWeights: profile.weights,
    attackGoals: {
      raptor: randomDigit(profile.attackGoals.raptor[0], profile.attackGoals.raptor[1]),
      trex: randomDigit(profile.attackGoals.trex[0], profile.attackGoals.trex[1]),
      chimera: randomDigit(profile.attackGoals.chimera[0], profile.attackGoals.chimera[1]),
    },
    omegaEarliestAt: randomDigit(profile.omegaWindow[1], profile.omegaWindow[0]),
    omegaForceAt: randomDigit(300, 430),
    nextRandomEventAt: 900 - randomDigit(35, 85),
  };
}

function isEventPlanned(key) {
  return state.director.plannedEvents.includes(key);
}

function getCriticalThreatKey(key) {
  if (key === "omega" || key === "chimera") return "chimera";
  if (key === "raptor" || key === "trex") return key;
  return null;
}

function getThreatCooldownDuration(threatKey) {
  const phase = getDirectorPhase();
  const profileKey = state.director.profile?.key;
  const base = {
    raptor: profileKey === "tactical" ? 58 : 48,
    trex: profileKey === "structural" ? 68 : 78,
    chimera: profileKey === "hybrid" ? 98 : 128,
  }[threatKey] ?? 40;
  const phaseAdjustment = phase >= 4 && threatKey !== "chimera" ? -10 : 0;
  return Math.max(34, base + phaseAdjustment + randomDigit(8, 22));
}

function isThreatOnCooldown(threatKey) {
  return state.countdownSeconds > (state.director.threatCooldownUntil[threatKey] ?? 0);
}

function wasThreatRecent(threatKey, depth = 2) {
  return state.director.recentThreats.slice(-depth).includes(threatKey);
}

function canLaunchCriticalThreat(key) {
  const threatKey = getCriticalThreatKey(key);
  if (!threatKey) return true;
  if (isThreatOnCooldown(threatKey)) return false;
  if (wasThreatRecent(threatKey, threatKey === "chimera" ? 2 : 1)) return false;
  return true;
}

function noteCriticalThreatLaunched(key) {
  const threatKey = getCriticalThreatKey(key);
  if (!threatKey) return;
  state.director.threatCooldownUntil[threatKey] = state.countdownSeconds - getThreatCooldownDuration(threatKey);
}

function initializeEscapeRoutesForPlan() {
  const routeCount = state.director.profile?.key === "tactical" ? 2 : randomDigit(1, 2);
  const routes = pickUniqueWeighted(["helipad", "tunnel", "cargo"], routeCount, {
    helipad: state.director.profile?.key === "hybrid" ? 2 : 1,
    tunnel: state.director.profile?.key === "bio" ? 2 : 1,
    cargo: state.director.profile?.key === "structural" ? 2 : 1,
  });
  routes.forEach((route) => {
    state.escapeRoutes[route].planned = true;
  });
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

function getRotorCurrentValues() {
  return state.cipherHelper.rotors.map((rotor) => rotor.currentValue);
}

function logChimeraSession(stage = "state") {
  if (!CHIMERA_DEBUG) return;
  console.log("CHIMERA SESSION", {
    stage,
    aparicionNumero: state.chimeraBreakoutCount,
    sessionId: state.chimeraSessionId,
    protocoloActivo: state.currentProtocol,
    activeThreat: state.activeThreat,
    omegaActive: state.omegaActive,
    chimeraActive: state.chimeraActive,
    rotorTarget: state.cipherHelper.target,
    rotorValues: getRotorCurrentValues(),
    claveGenerada: state.cipherHelper.buffer,
    expectedCode: state.chimeraCode,
    listenersActivos: rotorContainmentListenerAttached ? 1 : 0,
  });
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
  if (!hasActiveThreats() && !state.gameOver && !state.cinematicStarted) {
    stopContinuousAlert();
    return Promise.resolve(false);
  }
  if (state.continuousAlertActive) {
    return startContinuousAlert(volume);
  }
  return reproducirSonido("alerta", { volume, loop: false });
}

function startContinuousAlert(volume = 0.74) {
  if (!hasActiveThreats() && !state.gameOver && !state.cinematicStarted) {
    stopContinuousAlert();
    return Promise.resolve(false);
  }
  if (hasActiveThreats()) {
    state.alertsSilencedUntil = 0;
  } else if (Date.now() < state.alertsSilencedUntil) {
    return Promise.resolve(false);
  }
  const alertAlreadyAudible = state.continuousAlertActive &&
    audioAlerta.loop &&
    !audioAlerta.paused &&
    !audioAlerta.ended;
  state.continuousAlertActive = true;
  state.alertState = "active";
  return reproducirSonido("alerta", {
    volume,
    loop: true,
    reset: !alertAlreadyAudible,
  });
}

function stopContinuousAlert() {
  state.continuousAlertActive = false;
  state.alertState = "off";
  detenerSonido("alerta");
  audioAlerta.loop = false;
}

function getDerivedActiveThreats() {
  if (state.gameOver || state.escaped) return [];
  const threats = [];
  if (!state.powerOnline) threats.push({ key: "power", label: state.generatorDamaged ? "GENERADOR DAÑADO" : "ENERGIA PRINCIPAL OFFLINE", severity: "critical" });
  if (state.generatorDamaged) threats.push({ key: "generator", label: "GENERADOR DE RESPALDO DAÑADO", severity: "critical" });
  if (state.timelineFlags.raptor && !state.raptorContained) threats.push({ key: "raptor", label: "VELOCIRAPTOR LIBERADO", severity: "critical" });
  if (state.timelineFlags.trex && !state.trexContained) threats.push({ key: "trex", label: "T-REX LIBERADO", severity: "critical" });
  if (state.timelineFlags.dilo && !state.diloNeutralized) threats.push({ key: "dilo", label: "DILOPHOSAURUS ACTIVO", severity: "active" });
  if (state.timelineFlags.barrier && !state.barriersRestored) threats.push({ key: "barrier", label: "BARRERAS COMPROMETIDAS", severity: "active" });
  if (state.timelineFlags.herd && !state.herdCalmed) threats.push({ key: "herd", label: "TRICERATOPS EN PELEA", severity: "active" });
  if (state.timelineFlags.anky && !state.ankyRedirected) threats.push({ key: "anky", label: "ANKYLOSAURUS BLOQUEANDO RUTA", severity: "active" });
  if (state.timelineFlags.stego && !state.stegoAnalyzed) threats.push({ key: "stego", label: "ESTEGOSAURUS ENFERMO", severity: "active" });
  if (state.chimeraActive || (state.omegaReleased && !state.chimeraContained)) threats.push({ key: "chimera", label: "CHIMERASAURUS REX LIBERADO", severity: "omega" });
  return threats;
}

function syncActiveThreatRegistry() {
  const threats = getDerivedActiveThreats();
  state.activeThreats = threats.reduce((registry, threat) => {
    registry[threat.key] = {
      ...threat,
      active: true,
      since: state.activeThreats?.[threat.key]?.since ?? state.countdownSeconds,
    };
    return registry;
  }, {});
  state.unresolvedEvents = { ...state.activeThreats };
  state.currentEmergency = threats.find((threat) => threat.severity === "omega") ||
    threats.find((threat) => threat.severity === "critical") ||
    threats[0] ||
    null;
  state.emergencyLock = Boolean(state.currentEmergency && ["omega", "critical"].includes(state.currentEmergency.severity));
  return threats;
}

function getActiveThreats() {
  return syncActiveThreatRegistry();
}

function hasActiveThreats() {
  return getActiveThreats().length > 0;
}

function isPrimaryThreatKey(key) {
  return ["raptor", "trex", "chimera"].includes(key);
}

function getActivePrimaryThreats() {
  return getActiveThreats().filter((threat) => isPrimaryThreatKey(threat.key));
}

function hasActivePrimaryThreats() {
  return getActivePrimaryThreats().length > 0;
}

function getAlertVolumeForThreats(threats = getActiveThreats()) {
  if (threats.some((threat) => threat.severity === "omega")) return 0.86;
  if (threats.some((threat) => threat.severity === "critical")) return 0.76;
  return 0.64;
}

function detenerAlertaSoloSiNoHayAmenazasActivas() {
  const threats = getActiveThreats();
  if (threats.length) {
    startContinuousAlert(getAlertVolumeForThreats(threats));
    return false;
  }
  stopContinuousAlert();
  restoreAudioMixAfterSpeech();
  return true;
}

function mantenerAlertaActiva() {
  if (!state.bootStarted || state.gameOver || state.escaped) return;
  const threats = getActiveThreats();
  if (!threats.length) {
    detenerAlertaSoloSiNoHayAmenazasActivas();
    if (!state.alertPanelTimer) hideAlertPanel();
    drainSpeechQueue();
    return;
  }
  startContinuousAlert(getAlertVolumeForThreats(threats));
  state.alertState = threats.some((threat) => threat.severity === "omega" || threat.severity === "critical") ? "critical" : "active";
}

function getActiveMajorThreat() {
  if (state.chimeraActive || (state.omegaReleased && !state.chimeraContained)) {
    return {
      key: "chimera",
      label: "CHIMERASAURUS REX",
      protocol: "OMEGA.LOG / CHIMERA.KEY / DNA-MIX.LOG",
      severity: "omega",
    };
  }
  if (state.timelineFlags.trex && !state.trexContained) {
    return {
      key: "trex",
      label: "TYRANNOSAURUS REX",
      protocol: "TREX.KEY",
      severity: "critical",
    };
  }
  if (state.timelineFlags.raptor && !state.raptorContained) {
    return {
      key: "raptor",
      label: "VELOCIRAPTOR",
      protocol: "RAPTOR.KEY",
      severity: "critical",
    };
  }
  return null;
}

function isMinorDirectorEvent(key) {
  return ["generator", "barrier", "dilo", "anky", "herd", "stego", "collapse", "sensors"].includes(key);
}

function getThreatNarrativeTier(key) {
  if (key === "chimera") return "climax";
  if (key === "raptor" || key === "trex") return "principal";
  if (["dilo", "anky", "herd", "stego"].includes(key)) return "secundaria-cinematica";
  return "sistema";
}

function getThreatTierLabel(key) {
  const labels = {
    climax: "CLIMAX OMEGA",
    principal: "AMENAZA PRINCIPAL",
    "secundaria-cinematica": "EVENTO SECUNDARIO CINEMATICO",
    sistema: "INCIDENTE DE SISTEMA",
  };
  return labels[getThreatNarrativeTier(key)] || labels.sistema;
}

function getEmergencyContainmentMessage(key) {
  const messages = {
    sensors: "SENSORES SECUNDARIOS EN CONTENCION TEMPORAL",
    generator: "GENERADOR EN MODO AISLAMIENTO DE EMERGENCIA",
    barrier: "BARRERAS SECUNDARIAS BLOQUEADAS TEMPORALMENTE",
    dilo: "SECTOR DILOPHOSAURUS EN CONTENCION TEMPORAL",
    anky: "CORREDOR ANKYLOSAURUS SELLADO TEMPORALMENTE",
    herd: "SECTOR C / TRICERATOPS EN CONTENCION TEMPORAL",
    stego: "SECTOR HERBIVORO / ESTEGOSAURUS EN OBSERVACION TEMPORAL",
    collapse: "PROTOCOLO DE COLAPSO DIFERIDO POR AMENAZA MAYOR",
  };
  return messages[key] || "SECTOR SECUNDARIO EN CONTENCION TEMPORAL";
}

function rememberDirectorEvent(key) {
  if (!state.director.eventHistory.some((entry) => entry.key === key)) {
    state.director.eventHistory.push({ key, at: state.countdownSeconds });
  }
  const memoryKey = getCriticalThreatKey(key) || key;
  state.director.recentThreats.push(memoryKey);
  state.director.recentThreats = state.director.recentThreats.slice(-6);
  const sectorByEvent = {
    raptor: "R-01",
    trex: "C-07",
    dilo: "E-03",
    barrier: "Este",
    herd: "Sector C",
    anky: "L-05",
    stego: "Herbivoro",
    omega: "OMEGA",
  };
  const sector = sectorByEvent[key];
  if (sector && !state.director.sectorsCollapsed.includes(sector)) {
    state.director.sectorsCollapsed.push(sector);
  }
}

function deferMinorEvent(key) {
  if (state.deferredEvents[key]) return;
  state.deferredEvents[key] = true;
  applyDeterioration({ damage: 1, bio: 1, stability: -1, energy: 0 });
  addLine(`CONTENCION DE EMERGENCIA: ${getEmergencyContainmentMessage(key)}.`, "warning");
  addLine("PUERTAS SECUNDARIAS BLOQUEADAS // PROTOCOLO AUTOMATICO ACTIVADO // EVENTO PENDIENTE.", "warning");
}

function startDirectorEventIfNeeded(key) {
  const canStartManually = isMinorDirectorEvent(key) || ["raptor", "trex"].includes(key);
  if (!canStartManually || state.timelineFlags[key] || state.gameOver || state.escaped) return false;
  if (!isEventPlanned(key)) {
    setCurrentAlert("Ese incidente no pertenece a la lectura operativa de esta sesión.", "warning");
    return false;
  }
  if (!canLaunchCriticalThreat(key)) {
    setCurrentAlert("Lectura crítica en enfriamiento. El Director prioriza otros sectores.", "warning");
    return false;
  }
  const activeMajor = getActiveMajorThreat();
  if (activeMajor) {
    if (isMinorDirectorEvent(key)) deferMinorEvent(key);
    return false;
  }
  if (key === "raptor" && !state.powerOnline) return false;
  if (key === "trex" && !state.powerOnline) return false;
  if (["dilo", "herd", "anky", "stego"].includes(key) && !state.powerOnline) return false;
  state.timelineFlags[key] = true;
  state.deferredEvents[key] = false;
  activateDirectorEvent(key);
  return true;
}

function isEventResolved(key) {
  const resolved = {
    raptor: state.raptorContained,
    trex: state.trexContained,
    dilo: state.diloNeutralized,
    herd: state.herdCalmed,
    anky: state.ankyRedirected,
    stego: state.stegoAnalyzed,
  };
  return Boolean(resolved[key]);
}

function ensureEventVideoForFile(eventKey) {
  if (!threatCinematicConfig[eventKey] || state.gameOver || state.escaped || state.omegaCinematicPlaying) return false;
  if (!isEventPlanned(eventKey)) return false;
  if (isEventResolved(eventKey) || state.eventVideoSeen[eventKey]) return false;
  if (!canLaunchCriticalThreat(eventKey)) return false;
  if (["raptor", "trex", "dilo", "herd", "anky", "stego"].includes(eventKey) && !state.powerOnline) return false;
  if (isMinorDirectorEvent(eventKey) && getActiveMajorThreat()) {
    deferMinorEvent(eventKey);
    return false;
  }
  activateDirectorEvent(eventKey);
  return true;
}

function startDirectorEventForFile(fileName) {
  const eventByFile = {
    "RAPTOR.KEY": "raptor",
    "TREX.KEY": "trex",
    "DILO.LOG": "dilo",
    "TOXIN.KEY": "dilo",
    "TRICERATOPS.LOG": "herd",
    "ANKY.LOG": "anky",
    "ANKY.KEY": "anky",
    "STEGO.LOG": "stego",
  };
  const eventKey = eventByFile[fileName];
  if (!eventKey) return false;
  return startDirectorEventIfNeeded(eventKey) || ensureEventVideoForFile(eventKey);
}

function getPredatorReattackDelay(key) {
  const profileKey = state.director.profile?.key;
  const base = key === "trex" ? 62 : 46;
  const profileDelta = profileKey === "hybrid" ? -4 : profileKey === "tactical" ? 10 : 0;
  return Math.max(36, base + profileDelta + randomDigit(10, 24));
}

function scheduleAdditionalPredatorAttack(key) {
  if (key === "raptor") {
    state.predatorReattackAt.raptor = state.countdownSeconds - getPredatorReattackDelay("raptor");
    state.director.threatCooldownUntil.raptor = Math.min(state.director.threatCooldownUntil.raptor, state.predatorReattackAt.raptor);
    scheduleNextAmbientIncident(6, 14);
    addLine("Sensores R-01 siguen registrando movimiento fuera de patrón. Mantente atento.", "warning");
    return true;
  }
  if (key === "trex") {
    state.predatorReattackAt.trex = state.countdownSeconds - getPredatorReattackDelay("trex");
    state.director.threatCooldownUntil.trex = Math.min(state.director.threatCooldownUntil.trex, state.predatorReattackAt.trex);
    scheduleNextAmbientIncident(8, 16);
    addLine("Lecturas sísmicas residuales continúan bajo el corredor C-07.", "warning");
    return true;
  }
  return false;
}

function processScheduledPredatorAttacks() {
  if (state.gameOver || state.escaped || state.omegaCinematicPlaying || getActiveMajorThreat()) return;
  if (
    state.predatorReattackAt.raptor !== null &&
    state.countdownSeconds <= state.predatorReattackAt.raptor &&
    state.raptorContained &&
    state.raptorAttackCount < state.director.attackGoals.raptor
  ) {
    if (!canLaunchCriticalThreat("raptor")) {
      state.predatorReattackAt.raptor = state.countdownSeconds - randomDigit(12, 22);
      triggerAmbientIncident();
      return;
    }
    state.predatorReattackAt.raptor = null;
    state.raptorContained = false;
    state.raptorCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
    state.raptorRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
    state.eventVideoSeen.raptor = false;
    setCipherTarget("raptor");
    resetAllRotors();
    activateDirectorEvent("raptor");
    return;
  }
  if (
    state.predatorReattackAt.trex !== null &&
    state.countdownSeconds <= state.predatorReattackAt.trex &&
    state.trexContained &&
    state.trexAttackCount < state.director.attackGoals.trex
  ) {
    if (!canLaunchCriticalThreat("trex")) {
      state.predatorReattackAt.trex = state.countdownSeconds - randomDigit(16, 28);
      triggerAmbientIncident();
      return;
    }
    state.predatorReattackAt.trex = null;
    state.trexContained = false;
    state.trexCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
    state.trexRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
    state.eventVideoSeen.trex = false;
    setCipherTarget("trex");
    resetAllRotors();
    activateDirectorEvent("trex");
  }
}

function maintainMajorThreatMode() {
  const major = getActiveMajorThreat();
  if (!major || state.gameOver || state.escaped) {
    detenerAlertaSoloSiNoHayAmenazasActivas();
    return;
  }

  const message = `PRIORIDAD ABSOLUTA: ${major.label}. Protocolo activo: ${major.protocol}.`;
  showAlertPanel(message, major.severity === "omega" ? "critical" : "critical");
  currentAlertText.textContent = message;
  startContinuousAlert(major.severity === "omega" ? 0.86 : 0.72);

  if (major.key === "chimera") {
    if (state.countdownSeconds % 6 === 0) triggerVisualGlitchBurst("severe");
    if (state.countdownSeconds % 10 === 0) reproducirGarrasAleatorio(true);
  } else if (state.countdownSeconds % 12 === 0) {
    triggerVisualGlitchBurst("normal");
  }

  const deferredCount = Object.values(state.deferredEvents).filter(Boolean).length;
  if (deferredCount > 0 && state.countdownSeconds % 24 === 0) {
    applyDeterioration({
      damage: major.key === "chimera" ? 2 : 1,
      bio: 1,
      stability: -1,
      energy: 0,
    });
    currentAlertText.textContent = `${message} ${deferredCount} sector(es) en contencion temporal.`;
  }
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
  const stopped = detenerAlertaSoloSiNoHayAmenazasActivas();
  if (stopped) {
    showAlertPanel(message, "controlled");
  } else {
    const threats = getActiveThreats();
    const severity = threats.some((threat) => threat.severity === "omega" || threat.severity === "critical") ? "critical" : "active";
    showAlertPanel(`AMENAZA ACTIVA: ${threats[0]?.label || "EVENTO PENDIENTE"}. ${message}`, severity);
  }
  state.alertPanelTimer = window.setTimeout(() => {
    if (stopped && !hasActiveThreats()) {
      hideAlertPanel();
    }
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

const AUDIO_PRIORITY_WEIGHT = {
  low: 1,
  medium: 2,
  high: 3,
  critical: 4,
};

function getAudioPriorityWeight(priority = "low") {
  return AUDIO_PRIORITY_WEIGHT[priority] ?? AUDIO_PRIORITY_WEIGHT.low;
}

function hasCriticalAudioBlock() {
  const threats = getActiveThreats();
  return state.omegaCinematicPlaying ||
    state.cinematicStarted ||
    state.emergencyLock ||
    threats.some((threat) => threat.severity === "omega" || threat.severity === "critical");
}

function canStartNarrativeAudio() {
  if (!state.bootStarted || state.trainingActive || state.gameOver || state.escaped) return false;
  if (state.omegaCinematicPlaying || state.cinematicStarted) return false;
  if (state.currentProtocol || state.activeThreat) return false;
  if (isPuzzleActive()) return false;
  if (hasCriticalAudioBlock()) return false;
  return true;
}

function duckAudioForSpeech(priority = "medium") {
  if (state.audio.mixTimer) {
    window.clearTimeout(state.audio.mixTimer);
    state.audio.mixTimer = null;
  }
  if (priority !== "critical" && state.continuousAlertActive && audioAlerta && state.audio.alertVolumeBeforeDuck === null) {
    state.audio.alertVolumeBeforeDuck = audioAlerta.volume;
    audioAlerta.volume = Math.min(audioAlerta.volume, 0.34);
  }
  if (!state.ambientMuted && !state.ambientPaused && audioAmbiente) {
    audioAmbiente.volume = priority === "critical" ? 0.03 : 0.045;
  }
}

function restoreAudioMixAfterSpeech() {
  if (state.audio.mixTimer) {
    window.clearTimeout(state.audio.mixTimer);
  }
  state.audio.mixTimer = window.setTimeout(() => {
    if (state.audio.alertVolumeBeforeDuck !== null && state.continuousAlertActive && audioAlerta) {
      audioAlerta.volume = getAlertVolumeForThreats();
    }
    state.audio.alertVolumeBeforeDuck = null;
    if (audioAmbiente && !state.ambientPaused) {
      audioAmbiente.volume = state.ambientMuted ? 0 : 0.08;
    }
    state.audio.mixTimer = null;
  }, 220);
}

function queueSpeech(item) {
  if (!item?.text) return false;
  const duplicate = state.narrative.queue.some((queued) => queued.text === item.text && queued.id === item.id);
  if (!duplicate) state.narrative.queue.push({ ...item, attempts: item.attempts ?? 0 });
  scheduleSpeechQueueDrain(item.retryDelay ?? 1800);
  return true;
}

function scheduleSpeechQueueDrain(delayMs = 1400) {
  if (state.narrative.retryTimer) window.clearTimeout(state.narrative.retryTimer);
  state.narrative.retryTimer = window.setTimeout(() => {
    state.narrative.retryTimer = null;
    drainSpeechQueue();
  }, delayMs);
}

function drainSpeechQueue() {
  if (state.narrative.isSpeaking || !state.narrative.queue.length) return false;
  if (!canStartNarrativeAudio()) {
    scheduleSpeechQueueDrain(hasCriticalAudioBlock() ? 3200 : 1800);
    return false;
  }
  const item = state.narrative.queue.shift();
  return speak(item.text, item.onend, { ...item.options, queued: true, priority: item.priority ?? "medium" });
}

function speak(text, onend, options = {}) {
  if (!text || !("speechSynthesis" in window)) {
    if (onend) onend();
    return false;
  }
  const priority = options.priority ?? "medium";
  const isNarrative = options.channel === "narrative" || priority === "medium";
  const currentPriority = state.audio.speechPriority ?? "low";
  if (!options.queued && isNarrative && !canStartNarrativeAudio()) {
    return queueSpeech({ text, onend, options, priority, id: options.id });
  }
  if (
    !options.queued &&
    state.narrative.isSpeaking &&
    getAudioPriorityWeight(priority) <= getAudioPriorityWeight(currentPriority)
  ) {
    return queueSpeech({ text, onend, options, priority, id: options.id });
  }
  if (
    state.narrative.isSpeaking &&
    getAudioPriorityWeight(priority) > getAudioPriorityWeight(currentPriority)
  ) {
    if (state.narrative.current?.text && state.narrative.current?.retryOnInterrupt !== false) {
      queueSpeech({
        text: state.narrative.current.text,
        onend: state.narrative.current.onend,
        options: state.narrative.current.options,
        priority: state.narrative.current.priority,
        id: state.narrative.current.id,
        retryDelay: 2600,
      });
    }
    window.speechSynthesis.cancel();
    state.narrative.isSpeaking = false;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options.lang || "es-MX";
  utterance.rate = options.rate ?? 0.92;
  utterance.pitch = options.pitch ?? 0.78;
  utterance.volume = options.volume ?? 0.72;
  utterance.onend = () => {
    state.narrative.isSpeaking = false;
    state.narrative.current = null;
    state.audio.currentSpeech = null;
    state.audio.speechPriority = "low";
    restoreAudioMixAfterSpeech();
    if (onend) onend();
    drainSpeechQueue();
  };
  utterance.onerror = () => {
    state.narrative.isSpeaking = false;
    state.narrative.current = null;
    state.audio.currentSpeech = null;
    state.audio.speechPriority = "low";
    restoreAudioMixAfterSpeech();
    if ((options.attempts ?? 0) < 2 && options.retryOnError !== false) {
      queueSpeech({
        text,
        onend,
        options: { ...options, attempts: (options.attempts ?? 0) + 1 },
        priority,
        id: options.id,
        retryDelay: 2600,
      });
    }
    if (onend) onend();
  };
  if (options.cancel === true || priority === "critical") {
    window.speechSynthesis.cancel();
  }
  state.narrative.isSpeaking = true;
  state.narrative.current = { text, onend, options, priority, id: options.id, retryOnInterrupt: options.retryOnInterrupt };
  state.audio.currentSpeech = utterance;
  state.audio.speechPriority = priority;
  duckAudioForSpeech(priority);
  window.speechSynthesis.speak(utterance);
  return true;
}

function initializeScenario() {
  state.protocolStarted = false;
  state.trainingActive = false;
  state.trainingCompleted = false;
  state.trainingStep = 0;
  state.trainingRotorActive = false;
  state.trainingRotorCurrent = 3;
  state.trainingRotorTarget = 2;
  state.trainingRotorSaved = false;
  state.trainingPowerRestored = false;
  state.ambientMuted = false;
  state.ambientPaused = false;
  state.powerOnline = false;
  state.generatorDamaged = false;
  state.generatorRepaired = false;
  state.raptorContained = false;
  state.trexContained = false;
  state.raptorAttackCount = 0;
  state.trexAttackCount = 0;
  state.predatorReattackAt = {
    raptor: null,
    trex: null,
  };
  state.diloNeutralized = false;
  state.barriersRestored = false;
  state.herdCalmed = false;
  state.ankyRedirected = false;
  state.stegoAnalyzed = false;
  state.doorUnlocked = false;
  state.evacuationRoute = null;
  state.escapeRoutes = {
    main: { planned: true, available: false, lost: false },
    helipad: { planned: false, available: false, lost: false },
    tunnel: { planned: false, available: false, lost: false },
    cargo: { planned: false, available: false, lost: false },
  };
  state.escaped = false;
  state.evacuationAvailable = false;
  state.evacuationAnnounced = false;
  state.cinematicStarted = false;
  state.gameOver = false;
  state.finalOutcome = null;
  state.alertsSilencedUntil = 0;
  state.continuousAlertActive = false;
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
  state.elapsedSeconds = 0;
  state.omegaReleased = false;
  state.omegaActive = false;
  state.omegaCinematicPlaying = false;
  state.omegaVideoSeen = false;
  state.eventVideoSeen = {
    raptor: false,
    trex: false,
    dilo: false,
    herd: false,
    anky: false,
    stego: false,
  };
  state.activeThreatCinematic = null;
  state.currentProtocol = null;
  state.activeThreat = null;
  state.damageInstalacion = 12;
  state.riesgoBiologico = 18;
  state.estabilidadLaboratorio = 88;
  state.energiaSistema = 62;
  state.chimeraContained = false;
  state.chimeraActive = false;
  state.chimeraCode = "";
  state.diloCode = "";
  state.chimeraBreakoutCount = 0;
  state.chimeraSessionId = 0;
  state.chimeraContainmentExpiresAt = null;
  state.omegaRotorsSolved = false;
  state.chimeraFragmentsKnown = {
    omega: false,
    key: false,
    dna: false,
  };
  const directorPlan = generateDirectorPlan();
  state.director = {
    lastEscalationAt: 900,
    lastPressureAt: 900,
    lastMajorEventAt: 900,
    nextRandomEventAt: directorPlan.nextRandomEventAt,
    nextAmbientIncidentAt: 900 - randomDigit(18, 35),
    profile: directorPlan.profile,
    plannedEvents: directorPlan.plannedEvents,
    skippedEvents: directorPlan.skippedEvents,
    eventWeights: directorPlan.eventWeights,
    attackGoals: directorPlan.attackGoals,
    omegaEarliestAt: directorPlan.omegaEarliestAt,
    omegaForceAt: directorPlan.omegaForceAt,
    sectorsCollapsed: [],
    eventHistory: [],
    recentThreats: [],
    threatCooldownUntil: {
      raptor: 900,
      trex: 900,
      chimera: 900,
    },
    cooldown: 0,
    activePuzzle: "none",
  };
  initializeEscapeRoutesForPlan();
  state.guide = {
    objectiveKey: "power",
    lastProgressAt: 900,
    lastHintAt: 900,
    hintTier: 0,
  };
  state.rotorFeedback = {
    rotatedIndex: -1,
    correctIndex: -1,
  };
  state.rotorPointer = {
    active: false,
    index: -1,
    lastY: 0,
    remainder: 0,
    dragged: false,
    suppressClickUntil: 0,
    tapCandidate: false,
  };
  state.ui = {
    suppressTerminalScrollUntil: 0,
    lastViewportY: 0,
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
    stego: false,
    omega: false,
    collapse: false,
    chimeraHint: false,
  };
  state.deferredEvents = {};
  state.narrative = {
    nextAmbientAt: 900 - randomDigit(55, 95),
    lastPlayedAt: 900,
    seen: [],
    isSpeaking: false,
    queue: [],
    current: null,
    retryTimer: null,
  };
  state.activeThreats = {};
  state.unresolvedEvents = {};
  state.alertState = "off";
  state.currentEmergency = null;
  state.emergencyLock = false;
  state.audio = {
    currentSpeech: null,
    speechPriority: "low",
    alertVolumeBeforeDuck: null,
    mixTimer: null,
  };
  state.raptorCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.trexCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.diloCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  generateChimeraCode();
  state.raptorRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  state.trexRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  state.diloRotors = [randomDigit(2, 5), randomDigit(2, 5), randomDigit(2, 5)];
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
    omegaOverlay.className = "omega-overlay hidden";
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
  const chimeraDigits = getChimeraCodeParts().digits || "000";
  const codeByTarget = {
    raptor: state.raptorCode,
    trex: state.trexCode,
    dilo: state.diloCode,
    chimera: chimeraDigits,
  };
  const shiftsByTarget = {
    raptor: state.raptorRotors,
    trex: state.trexRotors,
    dilo: state.diloRotors,
    chimera: state.chimeraRotors,
  };
  const code = codeByTarget[target] || state.raptorCode;
  const shifts = shiftsByTarget[target] || state.raptorRotors;
  return code.split("").map((digit, index) => {
    const letter = encodeRotorLetter(digit, shifts[index]);
    return {
      label: `ROTOR ${["I", "II", "III"][index]}`,
      letter,
      shift: shifts[index],
      baseValue: letterIndex(letter),
      currentValue: letterIndex(letter),
      savedValue: null,
    };
  });
}

function getFiles() {
  const [r1, r2, r3] = state.raptorCode.split("");
  const [t1, t2, t3] = state.trexCode.split("");
  const [d1, d2, d3] = state.diloCode.split("");
  const [rr1, rr2, rr3] = state.raptorRotors;
  const [tr1, tr2, tr3] = state.trexRotors;
  const [dr1, dr2, dr3] = state.diloRotors;
  const [cr1, cr2, cr3] = state.chimeraRotors;
  const chimera = getChimeraCodeParts();
  const [c1, c2, c3] = chimera.digits.split("");

  return {
    "README.TXT": [
      "JURASSIC UNIX CONTROL // PROTOCOLO DE EMERGENCIA",
      "Los protocolos NO se muestran directamente.",
      "Consulte archivos .LOG y .KEY para descubrir códigos.",
      "La terminal contiene información crítica para sobrevivir.",
      "1. Reactiva la energia principal.",
      "2. Repara el generador si vuelve a caer la red.",
      "3. Conten al Velociraptor mediante rotores.",
      "4. Conten al Tyrannosaurus rex mediante rotores.",
      "5. Estabiliza el Sector C tras la pelea de Triceratops.",
      "6. Redirige al Ankylosaurus fuera del corredor logistico.",
      "7. Analiza crisis biologica del Estegosaurus si aparece.",
      "8. Sobrevive a la activacion OMEGA.",
      "9. Sincroniza rotores CHIMERA y contén al híbrido.",
      "10. Abre la salida y evacua antes del colapso total.",
    ],
    "POWER.LOG": [
      "SUBESTACION OESTE // ENERGIA PRINCIPAL",
      "La energia alimenta terminal, rotores, barreras y compuerta norte.",
      "OBJETIVO: restaurar suministro antes de ejecutar contenciones.",
      "CODIGO DE RESTAURACION: RST-POWER-73",
      "COMANDO: restore power RST-POWER-73",
    ],
    "GENERATOR.LOG": [
      "GENERADOR DE RESPALDO // ESTADO DE EMERGENCIA",
      "El generador mantiene barreras y puertas cuando la subestacion falla.",
      "Si permanece dañado, el daño del laboratorio sube con mayor rapidez.",
      "Codigo de reparacion manual: GEN-RESTART-84",
      "Comando: repair generator GEN-RESTART-84",
      "Nota: si el generador cae, la red de contencion volvera a inestabilizarse.",
    ],
    "BARRIER.SYS": [
      "CONTENCION // BARRERAS PARCIALES",
      "Las barreras son puertas y cercos magneticos entre sectores.",
      "Si una barrera falla, los sectores comprometidos aumentan daño y riesgo biologico.",
      "OBJETIVO: restaurar contencion secundaria antes de abrir salida.",
      "CODIGO DE RESTAURACION: BARRIER-RESTORE-31",
      "COMANDO: restore barrier BARRIER-RESTORE-31",
      "Nota: restaura cercos y barreras antes de abrir la compuerta norte.",
    ],
    "ENIGMA.MANUAL": [
      "MANUAL DE DESCIFRADO // SISTEMA DE ROTORES",
      "Cada letra equivale a un numero: A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9",
      "El rotor inicia en el numero de la letra.",
      "Cada giro hacia atras resta 1.",
      "Si el rotor baja de 0, vuelve a 9.",
      "Puedes girar con ATRAS/ADELANTE, tocando el dial, arrastrando verticalmente o usando rueda del mouse.",
      "Cuando un rotor queda correcto se ilumina en verde. Luego pulsa Guardar digito.",
    ],
    "RAPTOR.KEY": [
      "PROTOCOLO ENIGMA R-01 // VELOCIRAPTOR",
      "La barrera secundaria requiere sincronizacion manual de tres seguros.",
      "PASOS: gira cada rotor hacia atras las veces indicadas, guarda cada rotor y pulsa Enviar contención.",
      `ROTOR I: ${encodeRotorLetter(r1, rr1)} = ${letterIndex(encodeRotorLetter(r1, rr1))} // gira ${rr1}`,
      `ROTOR II: ${encodeRotorLetter(r2, rr2)} = ${letterIndex(encodeRotorLetter(r2, rr2))} // gira ${rr2}`,
      `ROTOR III: ${encodeRotorLetter(r3, rr3)} = ${letterIndex(encodeRotorLetter(r3, rr3))} // gira ${rr3}`,
      "El módulo de rotores genera la contención internamente.",
    ],
    "TREX.KEY": [
      "PROTOCOLO ENIGMA C-07 // TYRANNOSAURUS REX",
      "El T-Rex requiere cierre de compuertas pesadas. Usa el mismo sistema de rotores.",
      "PASOS: alinea rotores, guarda cada rotor y pulsa Enviar contención.",
      `ROTOR I: ${encodeRotorLetter(t1, tr1)} = ${letterIndex(encodeRotorLetter(t1, tr1))} // gira ${tr1}`,
      `ROTOR II: ${encodeRotorLetter(t2, tr2)} = ${letterIndex(encodeRotorLetter(t2, tr2))} // gira ${tr2}`,
      `ROTOR III: ${encodeRotorLetter(t3, tr3)} = ${letterIndex(encodeRotorLetter(t3, tr3))} // gira ${tr3}`,
      "El módulo de rotores ejecuta el cierre cuando la secuencia queda sincronizada.",
    ],
    "DILO.LOG": [
      "ACCESO PRINCIPAL // DILOPHOSAURUS",
      "El Dilophosaurus compromete visibilidad y sensores del vestibulo.",
      "El bloqueo rapido fue migrado a protocolo de rotores.",
      "Consulta TOXIN.KEY para entender la sincronizacion de niebla y compuertas.",
      "La contención se ejecuta desde el módulo de rotores.",
      "Evento de riesgo veloz: neutraliza la amenaza antes de que alcance el vestíbulo.",
    ],
    "TOXIN.KEY": [
      "PROTOCOLO TOXIN E-03 // DILOPHOSAURUS",
      "Este protocolo sincroniza compuertas de niebla y seguros magneticos.",
      "PASOS: gira rotores, guarda cada rotor y pulsa Enviar contención.",
      `ROTOR I: ${encodeRotorLetter(d1, dr1)} = ${letterIndex(encodeRotorLetter(d1, dr1))} // gira ${dr1}`,
      `ROTOR II: ${encodeRotorLetter(d2, dr2)} = ${letterIndex(encodeRotorLetter(d2, dr2))} // gira ${dr2}`,
      `ROTOR III: ${encodeRotorLetter(d3, dr3)} = ${letterIndex(encodeRotorLetter(d3, dr3))} // gira ${dr3}`,
      "El módulo de rotores cierra las compuertas al sincronizar la secuencia.",
    ],
    "TRICERATOPS.LOG": [
      "SECTOR C // PELEA DE TRICERATOPS",
      "Dos adultos golpean compuertas laterales y deforman el carril de servicio.",
      "La ruta no queda perdida de inmediato, pero cada impacto sube daño estructural y riesgo operativo.",
      "Pista: el protocolo estable usa balizas TRI y debe ejecutarse con el identificador completo.",
      "Codigo de estabilizacion: TRI-STABLE-41",
      "Comando: stabilize triceratops TRI-STABLE-41",
    ],
    "ANKY.LOG": [
      "CORREDOR L-05 // REDIRECCION DE ANKYLOSAURUS",
      "El corredor L-05 conecta laboratorio y ruta exterior. Debe despejarse antes de evacuar.",
      "La masa del ejemplar esta forzando puertas y sensores de carga.",
      "Ruta de desvio: ANKY-PORT-55",
      "Comando: redirect anky ANKY-PORT-55",
    ],
    "ANKY.KEY": [
      "ALIAS DE LEGADO // CONSULTA ANKY.LOG",
      "Ruta de desvio vigente: ANKY-PORT-55",
      "Comando: redirect anky ANKY-PORT-55",
    ],
    "STEGO.LOG": [
      "SECTOR HERBIVORO // ESTEGOSAURUS ENFERMO",
      "Temperatura irregular, placas dorsales opacas y patron respiratorio anomalo.",
      "Riesgo: contaminacion genetica progresiva si se mezcla con muestras del laboratorio.",
      "No aplicar contencion agresiva. Primero analiza el estado biologico.",
      "Codigo de analisis: STEGO-BIO-28",
      "Comando: analyze stego STEGO-BIO-28",
    ],
    "OMEGA.LOG": [
      "ESTADO OMEGA // ACCESO RESTRINGIDO",
      state.omegaReleased ? "El híbrido no responde a contención estándar." : "Archivo sellado hasta activación de nivel OMEGA.",
      state.omegaReleased ? "La contencion ha fallado mas de una vez durante la crisis." : "Sin datos de ruptura.",
      state.omegaReleased ? "OMEGA no se desactiva con código. La única salida es contener al híbrido y evacuar." : "Esperando ruptura OMEGA.",
      state.omegaReleased ? "PASO SIGUIENTE: consulta CHIMERA.KEY para sincronizar rotores de contención." : "Rotores del híbrido bloqueados.",
    ],
    "CHIMERA.KEY": [
      "PROTOCOLO CHIMERA // CONTENCION DEL HIBRIDO",
      state.omegaReleased ? "El híbrido requiere sincronización manual de tres etapas." : "Archivo sin permisos hasta incidente híbrido.",
      state.omegaReleased ? "ROTORES NECESARIOS: prefijo, bloque numérico y sufijo." : "Rotores del híbrido bloqueados.",
      state.omegaReleased ? "ADVERTENCIA: el híbrido no responde a contención estándar." : "Validacion del híbrido bloqueada.",
      state.omegaReleased ? `ROTOR CHIMERA I: ${encodeRotorLetter(c1, cr1)} = ${letterIndex(encodeRotorLetter(c1, cr1))} // gira ${cr1}` : "Rotor CHIMERA I sellado.",
      state.omegaReleased ? `ROTOR CHIMERA II: ${encodeRotorLetter(c2, cr2)} = ${letterIndex(encodeRotorLetter(c2, cr2))} // gira ${cr2}` : "Rotor CHIMERA II sellado.",
      state.omegaReleased ? `ROTOR CHIMERA III: ${encodeRotorLetter(c3, cr3)} = ${letterIndex(encodeRotorLetter(c3, cr3))} // gira ${cr3}` : "Rotor CHIMERA III sellado.",
      state.omegaReleased ? "Pulsa Enviar contención cuando los tres rotores estén guardados." : "Contención bloqueada.",
    ],
    "DNA-MIX.LOG": [
      "DNA MIX // HIBRIDO EXPERIMENTAL",
      state.omegaReleased ? "Base genética: T-REX / RAPTOR / TRICERATOPS / STEGOSAURUS" : "Registro híbrido clasificado.",
      state.omegaReleased ? "La mezcla genética cambia la respuesta de los rotores en cada ruptura." : "Se requiere activación OMEGA.",
      state.omegaReleased ? "Pista: no escribas claves. Usa el módulo de rotores para sincronizar la contención." : "Sin datos operativos.",
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
      "La puerta principal solo abre cuando no haya amenazas activas y el Chimerasaurus esté contenido temporalmente.",
      state.escapeRoutes.main.lost ? "ESTADO: puerta principal deformada. Usa una ruta alternativa." : "ESTADO: ruta principal recuperable.",
      "Codigo maestro: DOOR-LOCK-42",
      "Comando: unlock door DOOR-LOCK-42",
    ],
    "HELIPAD.SYS": [
      "HELIPUERTO // AZOTEA NORTE",
      state.escapeRoutes.helipad.planned ? "Ruta alternativa registrada por el Director." : "Ruta no priorizada en esta sesión.",
      "Requiere energía auxiliar y comunicación externa.",
      "Comando: activate helipad",
    ],
    "TUNNEL.SYS": [
      "TUNEL DE EMERGENCIA // SUBNIVEL V-02",
      state.escapeRoutes.tunnel.planned ? "Ruta secundaria disponible si ventilación se mantiene limpia." : "Ruta sin lectura operativa esta sesión.",
      "Requiere compuertas y ventilación funcional.",
      "Comando: open tunnel",
    ],
    "CARGO.SYS": [
      "TRANSPORTE DE CARGA // HANGAR L-05",
      state.escapeRoutes.cargo.planned ? "Vehículo interno recuperable para evacuación." : "Hangar no asignado como salida prioritaria.",
      "Requiere combustible, hangar desbloqueado y ruta logística estable.",
      "Comando: start cargo",
    ],
    "FOUNDERS.LOG": [
      "FOUNDERS.LOG // GENETIC SYSTEMS",
      "Fundacion: division privada de bioingenieria aplicada.",
      "Objetivo publico: reconstruccion de especies extintas.",
      "Objetivo interno: control conductual, respuesta a confinamiento y propiedad biologica.",
      "Nota: varios anexos fueron borrados antes de la auditoria.",
    ],
    "OMEGA-ORIGIN.LOG": [
      "OMEGA-ORIGIN.LOG // ACCESO PARCIAL",
      state.omegaReleased ? "OMEGA fue activado tras ruptura de contencion de sujeto compuesto." : "Archivo cifrado. Referencias a sujeto compuesto permanecen ocultas.",
      state.omegaReleased ? "La mezcla genetica incluyo rasgos depredadores y herbivoros para estabilidad artificial." : "Fragmentos visibles: ADN incompatible / contencion no certificada / comite omitido.",
      state.omegaReleased ? "El protocolo prioriza aislamiento de evidencia y evacuacion limitada." : "Consulta completa disponible solo tras activacion OMEGA.",
    ],
    "RAPTOR-TEST.LOG": [
      "RAPTOR-TEST.LOG // CONDUCTA COORDINADA",
      "Los ejemplares R-01 no responden como individuos aislados.",
      "Prueban cercos, recuerdan turnos de mantenimiento y modifican estrategia tras cada fallo.",
      "Recomendacion original: no repetir patrones de apertura frente al grupo.",
    ],
    "TREX-INCIDENT.LOG": [
      "TREX-INCIDENT.LOG // INCIDENTE C-07",
      "Primer ataque registrado durante prueba de compuertas pesadas.",
      "La fuerza bruta no fue el hallazgo principal. El ejemplar repitio el impacto sobre un punto ya debilitado.",
      "El informe publico omitio la palabra aprendizaje.",
    ],
    "HERBIVORE-REPORT.LOG": [
      "HERBIVORE-REPORT.LOG // SECTORES PACIFICOS",
      "Los herbivoros redujeron agresividad durante las primeras semanas.",
      "El confinamiento prolongado altero su respuesta hormonal y su conducta territorial.",
      "El caso Estegosaurus fue reclasificado como anomalia metabolica para evitar cierre del sector.",
    ],
    "CHIMERA-ALPHA.LOG": [
      "CHIMERA-ALPHA.LOG // FRAGMENTO",
      state.omegaReleased ? "El sujeto alfa no fue descubierto por accidente. Fue ensamblado." : "Registro dañado. Se detectan firmas de ADN no compatibles.",
      state.omegaReleased ? "Tres investigadores desaparecieron antes de la activacion OMEGA inicial." : "La entrada completa requiere activacion OMEGA.",
      "Advertencia: no todos los archivos fueron escritos por personal humano.",
    ],
    "EVAC.ROUTES": getEvacuationRouteLines(),
    "CREW.LOG": [
      "BITACORA // 2024-2026",
      "14 FEB 2024 // mantenimiento reporta oscilaciones de energia en subestacion oeste.",
      "09 AGO 2025 // cuidador del paddock R-01 prohíbe entrar solo a la zona de raptores.",
      "18 JUL 2026 // pelea de Triceratops cierra temporalmente Sector C.",
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
    name: "Triceratops",
    image: "Dinosaurios/Creatacico/Triceratops.jpeg",
    status: () => state.herdCalmed ? "SECTOR C ESTABLE" : "PELEA DETECTADA",
    risk: () => state.herdCalmed ? "MEDIO" : "ALTO",
    activity: () => state.herdCalmed ? "COMPUERTAS DESCARGADAS" : "IMPACTO EN COMPUERTAS",
    traits: () => "Herbivoro de gran masa, defensa por carga y presión sobre compuertas.",
    riskLevel: () => "Nivel III: riesgo defensivo y logístico.",
    description: () => state.herdCalmed ? "El Sector C vuelve a ser transitable." : "La pelea de Triceratops compromete compuertas laterales.",
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
    status: () => state.stegoAnalyzed ? "DIAGNOSTICO AISLADO" : "ANOMALIA BIOLOGICA",
    risk: () => state.stegoAnalyzed ? "MEDIO" : "ALTO",
    activity: () => state.stegoAnalyzed ? "MUESTRAS AISLADAS" : "RIESGO DE CONTAMINACION",
    traits: () => "Herbivoro acorazado, alta masa biologica, posible infeccion genetica.",
    riskLevel: () => "Nivel III: crisis biologica progresiva.",
    description: () => state.stegoAnalyzed ? "El diagnostico aisló la anomalia del laboratorio." : "Un ejemplar enfermo puede contaminar muestras del sector herbivoro.",
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
  element.classList.remove("is-active", "is-done", "is-locked", "is-deferred");
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
  if (state.chimeraActive && mode !== "chimera" && mode !== "none") {
    mode = "chimera";
  }
  state.director.activePuzzle = mode;
  if (!cipherConsole) return;
  const shouldShow = ["raptor", "trex", "dilo", "chimera"].includes(mode);
  cipherConsole.classList.toggle("hidden", !shouldShow);
  if (shouldShow) {
    preservePuzzleViewport(1200);
  }
}

function isPuzzleActive() {
  return ["raptor", "trex", "dilo", "chimera"].includes(state.director.activePuzzle) && !cipherConsole?.classList.contains("hidden");
}

function preservePuzzleViewport(durationMs = 700) {
  state.ui.lastViewportY = window.scrollY;
  state.ui.suppressTerminalScrollUntil = Date.now() + durationMs;
}

function restorePuzzleViewport() {
  if (!isPuzzleActive()) return;
  const targetY = state.ui.lastViewportY;
  window.requestAnimationFrame(() => {
    if (Math.abs(window.scrollY - targetY) > 2) {
      window.scrollTo({ top: targetY, behavior: "auto" });
    }
  });
}

function focusTerminalIfAllowed() {
  if (isPuzzleActive() || Date.now() < state.ui.suppressTerminalScrollUntil) return;
  input.focus({ preventScroll: true });
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

function iniciarProtocoloChimerasaurus(reason = "RUPTURA OMEGA DETECTADA") {
  if (state.cipherHelper.target === "chimera") {
    resetAllRotors();
  }
  state.chimeraSessionId += 1;
  state.omegaReleased = true;
  state.omegaActive = true;
  state.currentProtocol = "chimerasaurus";
  state.activeThreat = "chimerasaurus";
  state.chimeraActive = true;
  state.chimeraContained = false;
  state.omegaRotorsSolved = false;
  state.chimeraContainmentExpiresAt = null;
  state.chimeraBreakoutCount += 1;
  state.activeZone = "chimera";
  state.doorUnlocked = false;
  state.omegaVideoSeen = false;
  state.activeThreatCinematic = null;
  state.chimeraCode = "";
  state.chimeraRotors = [];
  prepareNextChimeraCycle();
  markProgress("chimera");
  const escalation = state.chimeraBreakoutCount;
  const profilePressure = state.director.profile?.pressure ?? { bio: 1, damage: 1, stability: 1, energy: 1 };
  applyDeterioration({
    damage: Math.ceil((12 + escalation * 4) * profilePressure.damage),
    bio: Math.ceil((12 + escalation * 4) * profilePressure.bio),
    stability: -Math.ceil((10 + escalation * 4) * profilePressure.stability),
    energy: -Math.ceil((6 + escalation * 2) * profilePressure.energy),
  });
  startContinuousAlert(0.86);
  clonePlay(dinoSounds.chimera, 0.68);
  reproducirGarrasAleatorio(true);
  triggerVisualGlitchBurst("severe");
  setCipherTarget("chimera");
  setPuzzleVisibility("chimera");
  logChimeraSession("inicio");
  addLine(`RUPTURA OMEGA // ${reason}`, "error");
  addLine("NIVEL OMEGA ACTIVADO", "error");
  addLine("CHIMERASAURUS REX LIBERADO", "error");
  addLine("CONTENCION TOTAL FALLIDA", "error");
  addLine("ADN HIBRIDO INESTABLE", "error");
  addLine("OMEGA ES ESTADO CRITICO: no se apaga con clave. Sobrevive, contiene al híbrido y escapa.", "warning");
  addLine("CONTENCION HIBRIDA: revisa OMEGA.LOG, CHIMERA.KEY y DNA-MIX.LOG; los rotores ejecutan la contención.", "warning");
  setCurrentAlert("CHIMERASAURUS REX LIBERADO OTRA VEZ. CONTENCION OMEGA FALLIDA.", "error");
  showContextGuide("chimera", "error");
  triggerThreatEscapeCinematic("chimera");
}

function cerrarProtocoloChimerasaurus() {
  state.chimeraContained = true;
  state.chimeraActive = false;
  state.omegaActive = false;
  if (state.currentProtocol === "chimerasaurus") state.currentProtocol = null;
  if (state.activeThreat === "chimerasaurus") state.activeThreat = null;
  state.omegaRotorsSolved = false;
  state.chimeraContainmentExpiresAt = state.countdownSeconds - getChimeraContainmentWindow();
  if (state.cipherHelper.target === "chimera") {
    resetAllRotors();
  }
  setPuzzleVisibility("none");
  detenerSonido("chimera");
  detenerAlertaSoloSiNoHayAmenazasActivas();
  logChimeraSession("cierre");
}

function triggerChimeraBreakout(reason = "RUPTURA OMEGA DETECTADA") {
  iniciarProtocoloChimerasaurus(reason);
}

function applyDeterioration(delta = {}) {
  state.damageInstalacion = clamp(state.damageInstalacion + (delta.damage ?? 0), 0, 100);
  state.riesgoBiologico = clamp(state.riesgoBiologico + (delta.bio ?? 0), 0, 100);
  state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + (delta.stability ?? 0), 0, 100);
  state.energiaSistema = clamp(state.energiaSistema + (delta.energy ?? 0), 0, 100);
}

function rewardRecovery(level = "standard", label = "Sistema estabilizado") {
  const rewards = {
    small: { damage: -2, bio: -2, stability: 3, energy: 2, time: 0 },
    standard: { damage: -4, bio: -4, stability: 6, energy: 4, time: 6 },
    major: { damage: -7, bio: -7, stability: 9, energy: 6, time: 10 },
    omega: { damage: -12, bio: -14, stability: 14, energy: 8, time: 15 },
  };
  const reward = rewards[level] ?? rewards.standard;
  applyDeterioration({
    damage: reward.damage,
    bio: reward.bio,
    stability: reward.stability,
    energy: reward.energy,
  });
  state.countdownSeconds = clamp(state.countdownSeconds + reward.time, 0, 900);
  state.director.cooldown = Math.max(state.director.cooldown, level === "omega" ? 28 : level === "major" ? 22 : 16);
  addLine(`RECUPERACION: ${label} // daño ${reward.damage}% | riesgo ${reward.bio}% | +${reward.time}s`, "success");
  window.setTimeout(() => {
    maybePlayAmbientNarrative("recovery");
  }, 1400);
}

function applyCommandPenalty(level = "standard", reason = "Error operativo.") {
  const presets = {
    standard: { time: 2, damage: 2, bio: 1, stability: -2, energy: -1 },
    severe: { time: 5, damage: 5, bio: 4, stability: -5, energy: -3 },
    omega: { time: 7, damage: 7, bio: 7, stability: -7, energy: -4 },
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
  mantenerAlertaActiva();
  triggerVisualGlitchBurst(level === "omega" || level === "severe" ? "severe" : "normal");
  maybeTriggerCollapse();
}

function applyPassivePressure() {
  const phase = getDirectorPhase();
  const unresolvedThreats = [
    !state.powerOnline || state.generatorDamaged,
    isEventPlanned("raptor") && !state.raptorContained,
    isEventPlanned("trex") && !state.trexContained,
    isEventPlanned("dilo") && !state.diloNeutralized,
    isEventPlanned("barrier") && !state.barriersRestored,
    isEventPlanned("herd") && !state.herdCalmed,
    isEventPlanned("anky") && !state.ankyRedirected,
    isEventPlanned("stego") && state.timelineFlags.stego && !state.stegoAnalyzed,
    state.omegaReleased && !state.chimeraContained,
  ].filter(Boolean).length;
  const pressure = state.director.profile?.pressure ?? { bio: 1, damage: 1, stability: 1, energy: 1 };
  const baseDamage = phase >= 5 ? 1.25 : phase >= 4 ? 1 : phase >= 3 ? 0.7 : 0.35;
  const baseBio = phase >= 5 ? 1.25 : phase >= 3 ? 0.7 : 0.35;
  applyDeterioration({
    damage: Math.ceil((baseDamage + unresolvedThreats * 0.12) * pressure.damage),
    bio: Math.ceil((baseBio + unresolvedThreats * 0.1) * pressure.bio),
    stability: -Math.ceil((baseDamage + unresolvedThreats * 0.16) * pressure.stability),
    energy: state.powerOnline && phase >= 3 ? -Math.ceil(pressure.energy) : 0,
  });
  if (phase >= 3 && Math.random() < (phase >= 5 ? 0.42 : phase >= 4 ? 0.26 : 0.14)) {
    triggerVisualGlitchBurst(phase >= 5 ? "severe" : "normal");
  }
}

function applySecondaryEventPressure() {
  if (state.gameOver || state.escaped || getActiveMajorThreat()) return;
  if (state.timelineFlags.herd && !state.herdCalmed) {
    applyDeterioration({ damage: 3, bio: 1, stability: -2, energy: 0 });
    currentAlertText.textContent = "Sector C bajo presión: estabiliza Triceratops con TRICERATOPS.LOG.";
  }
  if (state.timelineFlags.anky && !state.ankyRedirected) {
    applyDeterioration({ damage: 3, bio: 1, stability: -3, energy: -1 });
    currentAlertText.textContent = "Corredor L-05 bloqueado: transporte de carga y logística retrasados hasta redirigir Ankylosaurus.";
  }
  if (state.timelineFlags.dilo && !state.diloNeutralized) {
    applyDeterioration({ damage: 2, bio: 4, stability: -2, energy: -1 });
    triggerVisualGlitchBurst("normal");
    currentAlertText.textContent = "Contaminación en acceso principal: neutraliza Dilophosaurus con protocolo TOXIN.";
  }
  if (state.timelineFlags.stego && !state.stegoAnalyzed) {
    applyDeterioration({ damage: 1, bio: 3, stability: -3, energy: 0 });
    if (state.riesgoBiologico >= 70 || state.estabilidadLaboratorio <= 35) {
      showAlertPanel("ALERTA DE CONTAMINACION: anomalía del Estegosaurus afecta estabilidad del laboratorio.", "critical");
    }
  }
}

function applyProfileEventConsequence(key) {
  maybeDamageEscapeRoutes(key);
  const profileKey = state.director.profile?.key;
  if (key === "raptor" && (profileKey === "hybrid" || Math.random() < 0.28)) {
    applyDeterioration({ damage: 2, bio: 2, stability: -2, energy: 0 });
    addLine("R-01 abre una ruta interna no prevista. Sensores de laboratorio B quedan expuestos.", "warning");
  }
  if (key === "trex" && (profileKey === "structural" || Math.random() < 0.32)) {
    state.generatorDamaged = true;
    applyDeterioration({ damage: 5, bio: 1, stability: -5, energy: -8 });
    addLine("Impacto sísmico en C-07: línea energética bajo estrés.", "warning");
  }
  if (key === "dilo" && profileKey === "bio") {
    applyDeterioration({ damage: 1, bio: 4, stability: -2, energy: 0 });
    addLine("Niebla tóxica detectada en filtros del acceso principal.", "warning");
  }
  if (key === "omega" && profileKey === "hybrid") {
    triggerVisualGlitchBurst("severe");
    reproducirGarrasAleatorio(true);
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
  const major = getActiveMajorThreat();
  if (major) {
    objectiveText.textContent = `PRIORIDAD ABSOLUTA: ${major.label}. Ignora ruido secundario y completa ${major.protocol}.`;
    return;
  }
  if (!state.powerOnline) {
    objectiveText.textContent = state.generatorDamaged
      ? "El generador fue dañado. Revisa GENERATOR.LOG y repara la línea de respaldo."
      : "Restaura energía. Consulta POWER.LOG y ejecuta el comando con el código encontrado.";
    return;
  }
  if (state.timelineFlags.raptor && !state.raptorContained) {
    objectiveText.textContent = "Movimiento R-01 confirmado. Consulta ENIGMA.MANUAL y RAPTOR.KEY; alinea rotores y envía contención.";
    return;
  }
  if (state.timelineFlags.trex && !state.trexContained) {
    objectiveText.textContent = "Lecturas sísmicas en C-07. Consulta TREX.KEY; alinea rotores y envía contención.";
    return;
  }
  if (state.timelineFlags.dilo && !state.diloNeutralized) {
    objectiveText.textContent = "Dilophosaurus detectado. Revisa DILO.LOG y TOXIN.KEY; usa rotores y pulsa Enviar contención.";
    return;
  }
  if (state.timelineFlags.barrier && !state.barriersRestored) {
    objectiveText.textContent = "Barreras comprometidas: son puertas/cercos entre sectores. Consulta BARRIER.SYS y restaura contención.";
    return;
  }
  if (state.timelineFlags.herd && !state.herdCalmed) {
    objectiveText.textContent = "ALERTA: pelea de Triceratops detectada en Sector C. Consulta TRICERATOPS.LOG y estabiliza compuertas.";
    return;
  }
  if (state.timelineFlags.anky && !state.ankyRedirected) {
    objectiveText.textContent = "Un Ankylosaurus bloquea la ruta logística. Revisa ANKY.LOG y redirígelo.";
    return;
  }
  if (state.timelineFlags.stego && !state.stegoAnalyzed) {
    objectiveText.textContent = "Estegosaurus enfermo detectado. Analiza el estado biológico con STEGO.LOG.";
    return;
  }
  if (state.omegaReleased && !state.escaped) {
    objectiveText.textContent = state.chimeraContained
      ? !hasMetAttackRequirements()
        ? "Actividad depredadora inestable. Mantente operativo antes de abrir la salida."
        : !hasAnyEscapeRouteAvailable()
        ? "Busca una ruta de evacuación alternativa: helipuerto, túnel o transporte de carga."
        : state.doorUnlocked
        ? `OMEGA sigue inestable, pero hay salida por ${getAvailableEscapeRouteName() || "ruta autorizada"}: ejecuta escape antes de la siguiente ruptura.`
        : "Chimerasaurus contenido temporalmente. Libera una ruta de evacuación antes de que vuelva a romperse."
      : "NIVEL OMEGA ACTIVO. Lee OMEGA.LOG y CHIMERA.KEY, sincroniza rotores y pulsa Enviar contención.";
    return;
  }
  if (!state.omegaReleased) {
    objectiveText.textContent = "Mantente operativo. El Director de Eventos analiza actividad irregular en sectores aleatorios.";
    return;
  }
  if (!state.doorUnlocked) {
    const routeKey = getRouteObjectiveKey();
    const routeFiles = {
      door: "DOOR.SYS",
      helipad: "HELIPAD.SYS",
      tunnel: "TUNNEL.SYS",
      cargo: "CARGO.SYS",
    };
    objectiveText.textContent = `Con todas las amenazas controladas, abre una ruta de evacuación. Revisa ${routeFiles[routeKey] || "DOOR.SYS"}.`;
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

function getElapsedTimeText() {
  return formatCountdown(state.elapsedSeconds);
}

function getAttackRequirementBlockers() {
  const blockers = [];
  if (isEventPlanned("raptor") && state.raptorAttackCount < state.director.attackGoals.raptor) {
    blockers.push("Raptor");
  }
  if (isEventPlanned("trex") && state.trexAttackCount < state.director.attackGoals.trex) {
    blockers.push("T-Rex");
  }
  if (state.chimeraBreakoutCount < state.director.attackGoals.chimera) {
    blockers.push("Chimerasaurus");
  }
  return blockers;
}

function hasMetAttackRequirements() {
  return getAttackRequirementBlockers().length === 0;
}

function hasAnyEscapeRouteAvailable() {
  return Object.values(state.escapeRoutes).some((route) => route.planned && route.available && !route.lost);
}

function getAvailableEscapeRouteName() {
  const labels = {
    main: "puerta principal",
    helipad: "helipuerto",
    tunnel: "túnel de emergencia",
    cargo: "transporte de carga",
  };
  const routeKey = Object.keys(state.escapeRoutes).find((key) => {
    const route = state.escapeRoutes[key];
    return route.planned && route.available && !route.lost;
  });
  return routeKey ? labels[routeKey] : null;
}

function ensureEscapeFallback() {
  const plannedRoutes = Object.entries(state.escapeRoutes).filter(([, route]) => route.planned);
  const usableRoutes = plannedRoutes.filter(([, route]) => !route.lost);
  if (usableRoutes.length > 0) return;
  state.escapeRoutes.tunnel.planned = true;
  state.escapeRoutes.tunnel.lost = false;
  state.escapeRoutes.tunnel.available = false;
  addLine("PROTOCOLO ANTI-SOFTLOCK: túnel de emergencia marcado como recuperable.", "warning");
}

function maybeDamageEscapeRoutes(key) {
  if (state.escaped || state.gameOver) return;
  if (key === "trex" && state.escapeRoutes.main.planned && !state.escapeRoutes.main.available && !state.escapeRoutes.main.lost && Math.random() < 0.28) {
    state.escapeRoutes.main.lost = true;
    addLine("Compuerta principal deformada por impacto. Buscando ruta alternativa.", "warning");
  }
  if (key === "dilo" && state.escapeRoutes.tunnel.planned && !state.escapeRoutes.tunnel.available && Math.random() < 0.24) {
    state.escapeRoutes.tunnel.lost = true;
    addLine("Ventilación del túnel contaminada. Ruta secundaria comprometida.", "warning");
  }
  if (key === "anky" && state.escapeRoutes.cargo.planned && !state.escapeRoutes.cargo.available && Math.random() < 0.24) {
    state.escapeRoutes.cargo.lost = true;
    addLine("Hangar de carga bloqueado por masa biológica. Transporte interno en riesgo.", "warning");
  }
  ensureEscapeFallback();
}

function setNextRandomDirectorWindow(minGap = 22, maxGap = 46) {
  state.director.nextRandomEventAt = state.countdownSeconds - randomDigit(minGap, maxGap);
}

function getRandomDirectorCandidates() {
  if (!state.bootStarted || state.gameOver || state.escaped || !state.powerOnline || getActiveMajorThreat() || state.omegaCinematicPlaying) return [];
  const candidates = [];
  if (isEventPlanned("raptor") && !state.raptorContained && !state.timelineFlags.raptor) candidates.push("raptor");
  if (isEventPlanned("trex") && !state.trexContained && !state.timelineFlags.trex) candidates.push("trex");
  if (isEventPlanned("dilo") && !state.diloNeutralized && !state.timelineFlags.dilo) candidates.push("dilo");
  if (isEventPlanned("barrier") && !state.barriersRestored && !state.timelineFlags.barrier) candidates.push("barrier");
  if (isEventPlanned("herd") && !state.herdCalmed && !state.timelineFlags.herd) candidates.push("herd");
  if (isEventPlanned("anky") && !state.ankyRedirected && !state.timelineFlags.anky) candidates.push("anky");
  if (isEventPlanned("stego") && !state.stegoAnalyzed && !state.timelineFlags.stego) candidates.push("stego");
  if (state.countdownSeconds <= state.director.omegaEarliestAt && !state.omegaReleased && !state.timelineFlags.omega) candidates.push("omega");
  return candidates.filter((key) => canActivateDirectorEvent(key));
}

function maybeActivateRandomDirectorEvent() {
  if (state.countdownSeconds > state.director.nextRandomEventAt || state.director.cooldown > 0) return false;
  const candidates = getRandomDirectorCandidates();
  if (!candidates.length) {
    triggerAmbientIncident();
    setNextRandomDirectorWindow(12, 24);
    return false;
  }
  const key = pickWeighted(candidates, state.director.eventWeights);
  state.timelineFlags[key] = true;
  state.deferredEvents[key] = false;
  activateDirectorEvent(key);
  setNextRandomDirectorWindow(getDirectorPhase() >= 4 ? 14 : 18, getDirectorPhase() >= 4 ? 28 : 38);
  return true;
}

function scheduleNextAmbientIncident(minGap = 14, maxGap = 28) {
  state.director.nextAmbientIncidentAt = state.countdownSeconds - randomDigit(minGap, maxGap);
}

function triggerAmbientIncident() {
  if (!state.bootStarted || state.gameOver || state.escaped || getActiveMajorThreat() || state.omegaCinematicPlaying) return false;
  const incidents = [
    {
      text: "Cámaras del pasillo norte pierden señal durante unos segundos.",
      delta: { damage: 1, bio: 0, stability: -1, energy: 0 },
      glitch: false,
    },
    {
      text: "Puerta secundaria atascada. Servo recuperado por control automático.",
      delta: { damage: 1, bio: 0, stability: -1, energy: -1 },
      glitch: false,
    },
    {
      text: "Lectura biológica menor en ductos de ventilación. Monitoreo activo.",
      delta: { damage: 0, bio: 1, stability: -1, energy: 0 },
      glitch: false,
    },
    {
      text: "Interferencia visual en terminal. Señal estabilizada.",
      delta: { damage: 0, bio: 0, stability: -1, energy: 0 },
      glitch: true,
    },
  ];
  const incident = pickRandomItem(incidents);
  state.director.recentThreats.push("ambient");
  state.director.recentThreats = state.director.recentThreats.slice(-6);
  applyDeterioration(incident.delta);
  addLine(`INCIDENTE MENOR: ${incident.text}`, "warning");
  currentAlertText.textContent = incident.text;
  if (incident.glitch) triggerVisualGlitchBurst("normal");
  if (Math.random() < 0.45) playAlert(0.38);
  scheduleNextAmbientIncident(getDirectorPhase() >= 4 ? 10 : 14, getDirectorPhase() >= 4 ? 20 : 30);
  return true;
}

function maybeTriggerAmbientIncident() {
  if (state.countdownSeconds > state.director.nextAmbientIncidentAt) return false;
  return triggerAmbientIncident();
}

function scheduleNextAmbientNarrative(minGap = 58, maxGap = 112) {
  state.narrative.nextAmbientAt = state.countdownSeconds - randomDigit(minGap, maxGap);
}

function canPlayAmbientNarrative(trigger = "ambient") {
  if (!state.bootStarted || state.trainingActive || state.gameOver || state.escaped) return false;
  if (state.narrative.isSpeaking) return false;
  if (!canStartNarrativeAudio()) return false;
  if (state.evacuationAvailable && trigger === "ambient") return false;
  if (state.countdownSeconds <= 90) return false;
  if (state.damageInstalacion >= 88 || state.riesgoBiologico >= 88) return false;
  const secondsSinceLast = state.narrative.lastPlayedAt - state.countdownSeconds;
  const minimumGap = trigger === "file" ? 32 : trigger === "recovery" ? 38 : 55;
  return secondsSinceLast >= minimumGap;
}

function getNarrativeCandidates(trigger = "ambient", context = {}) {
  const phase = getDirectorPhase();
  return ambientNarrativeBank.filter((entry) => {
    if (state.narrative.seen.includes(entry.id)) return false;
    if (!entry.triggers.includes(trigger)) return false;
    if (entry.minPhase && phase < entry.minPhase) return false;
    if (entry.requiresOmega && !state.omegaReleased) return false;
    if (entry.files && context.fileName && !entry.files.includes(context.fileName)) return false;
    if (entry.theme === "chimera" && !state.omegaReleased && phase < 3 && trigger !== "file") return false;
    return true;
  });
}

function playAmbientNarrative(entry, trigger = "ambient") {
  if (!entry) return false;
  if (state.ambientPaused) return false;
  state.narrative.lastPlayedAt = state.countdownSeconds;
  scheduleNextAmbientNarrative();
  addLine(`TRANSMISION RECUPERADA // ${entry.title}`, "warning");
  addLine(`${entry.source}: ${entry.text}`, "narrative");
  currentAlertText.textContent = `Registro ambiental recuperado: ${entry.title}`;
  showAlertPanel(`REGISTRO RECUPERADO: ${entry.title}`, "active");
  if (trigger === "ambient" && Math.random() < 0.45) triggerVisualGlitchBurst("normal");
  clonePlay(typingSound, 0.06);
  const started = speak(`Registro recuperado. ${entry.text}`, () => {
    state.narrative.isSpeaking = false;
  }, {
    id: entry.id,
    channel: "narrative",
    priority: "medium",
    retryOnInterrupt: true,
    rate: 0.84,
    pitch: 0.62,
    volume: state.ambientMuted ? 0 : 0.58,
  });
  if (started && !state.narrative.seen.includes(entry.id)) {
    state.narrative.seen.push(entry.id);
  }
  window.setTimeout(() => {
    if (state.narrative.current?.id === entry.id && !window.speechSynthesis.speaking) {
      state.narrative.isSpeaking = false;
      state.narrative.current = null;
      state.audio.currentSpeech = null;
      state.audio.speechPriority = "low";
      restoreAudioMixAfterSpeech();
      drainSpeechQueue();
    }
  }, 60000);
  return started;
}

function maybePlayAmbientNarrative(trigger = "ambient", context = {}) {
  if (!canPlayAmbientNarrative(trigger)) return false;
  if (trigger === "ambient" && state.countdownSeconds > state.narrative.nextAmbientAt) return false;
  let candidates = getNarrativeCandidates(trigger, context);
  if (!candidates.length && trigger === "file") {
    candidates = getNarrativeCandidates("ambient", {});
  }
  if (!candidates.length) {
    scheduleNextAmbientNarrative(45, 80);
    return false;
  }
  if (trigger === "ambient" && Math.random() < 0.35) {
    scheduleNextAmbientNarrative(32, 64);
    return false;
  }
  const entry = pickRandomItem(candidates);
  return playAmbientNarrative(entry, trigger);
}

function setCurrentAlert(text, className = "warning") {
  currentAlertText.textContent = text;
  addLine(`ALERTA DE SISTEMA: ${text}`, className);
  const mode = className === "error" ? "critical" : className === "success" ? "controlled" : "active";
  const major = getActiveMajorThreat();
  if (major && mode !== "critical") {
    showAlertPanel(`PRIORIDAD ABSOLUTA: ${major.label}. ${text}`, "critical");
    return;
  }
  if (mode === "controlled" && hasActiveThreats()) {
    const threats = getActiveThreats();
    const severity = threats.some((threat) => threat.severity === "omega" || threat.severity === "critical") ? "critical" : "active";
    showAlertPanel(`AMENAZA ACTIVA: ${threats[0].label}. ${text}`, severity);
    mantenerAlertaActiva();
    return;
  }
  showAlertPanel(text, mode);
  if (mode === "controlled") {
    detenerAlerta(text);
  }
}

function getRouteDefinitions() {
  return {
    main: {
      name: "RUTA PRINCIPAL",
      command: "unlock door DOOR-LOCK-42",
      advantage: "rapida y directa",
      risk: "vulnerable a daño estructural de T-Rex",
      requirements: [
        ["energia", state.powerOnline || state.generatorRepaired],
        ["puerta principal intacta", !state.escapeRoutes.main.lost],
        ["Chimerasaurus contenido temporalmente", state.omegaReleased && state.chimeraContained],
        ["actividad depredadora completada", hasMetAttackRequirements()],
        ["sin amenazas principales activas", !hasActivePrimaryThreats()],
      ],
    },
    helipad: {
      name: "HELIPUERTO",
      command: "activate helipad",
      advantage: "salida mas segura si la compuerta norte falla",
      risk: "requiere comunicacion externa y energia auxiliar",
      requirements: [
        ["ruta asignada por Director", state.escapeRoutes.helipad.planned],
        ["plataforma no destruida", !state.escapeRoutes.helipad.lost],
        ["energia activa", state.powerOnline],
        ["Chimerasaurus contenido temporalmente", state.omegaReleased && state.chimeraContained],
        ["actividad depredadora completada", hasMetAttackRequirements()],
      ],
    },
    tunnel: {
      name: "TUNEL DE EMERGENCIA",
      command: "open tunnel",
      advantage: "discreto y util con superficie comprometida",
      risk: "falla si hay contaminacion o Dilophosaurus activo",
      requirements: [
        ["ruta asignada por Director", state.escapeRoutes.tunnel.planned],
        ["ventilacion utilizable", !state.escapeRoutes.tunnel.lost],
        ["Dilophosaurus neutralizado o sin incidente", !state.timelineFlags.dilo || state.diloNeutralized],
        ["Chimerasaurus contenido temporalmente", state.omegaReleased && state.chimeraContained],
        ["actividad depredadora completada", hasMetAttackRequirements()],
      ],
    },
    cargo: {
      name: "TRANSPORTE DE CARGA",
      command: "start cargo",
      advantage: "resistente y rapido por corredor logistico",
      risk: "depende de que L-05 no este bloqueado",
      requirements: [
        ["ruta asignada por Director", state.escapeRoutes.cargo.planned],
        ["hangar no bloqueado", !state.escapeRoutes.cargo.lost],
        ["Ankylosaurus redirigido o sin incidente", !state.timelineFlags.anky || state.ankyRedirected],
        ["Chimerasaurus contenido temporalmente", state.omegaReleased && state.chimeraContained],
        ["actividad depredadora completada", hasMetAttackRequirements()],
      ],
    },
  };
}

function getRouteStatus(routeKey, definition) {
  const route = state.escapeRoutes[routeKey];
  if (!route?.planned) return "NO ASIGNADA";
  if (route.lost) return "PERDIDA";
  if (route.available) return "DISPONIBLE";
  const missing = definition.requirements.filter(([, ready]) => !ready);
  return missing.length ? "BLOQUEADA" : "LISTA PARA ACTIVAR";
}

function getRouteMissingRequirements(definition) {
  return definition.requirements.filter(([, ready]) => !ready).map(([label]) => label);
}

function getRouteBlockedMessage(routeKey) {
  const definition = getRouteDefinitions()[routeKey];
  if (!definition) return "Ruta no disponible.";
  const missing = getRouteMissingRequirements(definition);
  if (!missing.length) return `${definition.name} lista. Ejecuta ${definition.command}.`;
  return `${definition.name} no disponible: falta ${missing.join(", ")}.`;
}

function getEvacuationRouteLines() {
  const definitions = getRouteDefinitions();
  const lines = ["RUTAS DE EVACUACION // ESTADO OPERATIVO"];
  Object.entries(definitions).forEach(([key, definition]) => {
    const status = getRouteStatus(key, definition);
    const missing = getRouteMissingRequirements(definition);
    lines.push("━━━━━━━━━━━━━━");
    lines.push(definition.name);
    lines.push(`Estado: ${status}`);
    lines.push(`Ventaja: ${definition.advantage}.`);
    lines.push(`Riesgo: ${definition.risk}.`);
    lines.push("Requiere:");
    definition.requirements.forEach(([label, ready]) => lines.push(`- ${label}: ${ready ? "OK" : "PENDIENTE"}`));
    lines.push(`Comando: ${definition.command}`);
    if (missing.length) lines.push(`No funciona porque falta: ${missing.join(", ")}.`);
  });
  return lines;
}

function renderEvacuationRoutesPanel() {
  if (!evacuationRoutesPanel) return;
  const definitions = getRouteDefinitions();
  evacuationRoutesPanel.innerHTML = Object.entries(definitions).map(([key, definition]) => {
    const route = state.escapeRoutes[key];
    const status = getRouteStatus(key, definition);
    const missing = getRouteMissingRequirements(definition);
    const statusClass = route?.available && !route.lost ? "is-open" : route?.lost ? "is-lost" : status === "NO ASIGNADA" ? "is-muted" : "is-blocked";
    return `
      <div class="evac-route ${statusClass}">
        <strong>${definition.name}</strong>
        <span>Estado: ${status}</span>
        <p>Ventaja: ${definition.advantage}. Riesgo: ${definition.risk}.</p>
        <p>Requiere: ${missing.length ? missing.join(", ") : "condiciones completas"}.</p>
        <code>${definition.command}</code>
      </div>
    `;
  }).join("");
}

function getEvacuationBlockers() {
  const blockers = [];
  const energyReady = state.powerOnline || (state.generatorRepaired && !state.generatorDamaged);
  if (!energyReady) blockers.push("Energía");
  if ((isEventPlanned("raptor") && !state.raptorContained) || (isEventPlanned("trex") && !state.trexContained) || state.chimeraActive || state.activeThreat === "chimerasaurus") blockers.push("Amenaza principal activa");
  if (isEventPlanned("barrier") && !state.barriersRestored) blockers.push("Barreras");
  if (!state.omegaReleased || !state.chimeraContained || state.chimeraActive || state.omegaActive) blockers.push("Chimerasaurus");
  if (!hasMetAttackRequirements()) blockers.push("Actividad depredadora pendiente");
  if (!hasAnyEscapeRouteAvailable()) blockers.push("Ruta de escape");
  if (state.gameOver || state.countdownSeconds <= 0 || state.damageInstalacion >= 100 || state.riesgoBiologico >= 100) blockers.push("Colapso");
  return Array.from(new Set(blockers));
}

function verificarEvacuacionDisponible({ announce = false } = {}) {
  const blockers = getEvacuationBlockers();
  const available = blockers.length === 0 && !state.escaped && !state.gameOver;
  state.evacuationAvailable = available;
  if (available && !state.doorUnlocked) {
    state.doorUnlocked = true;
  }
  if (evacuationAction) {
    evacuationAction.classList.toggle("hidden", !available);
    evacuationAction.disabled = !available;
  }
  if (available) {
    if (!state.evacuationAnnounced || announce) {
      state.evacuationAnnounced = true;
      addLine(`EVACUACIÓN DISPONIBLE por ${getAvailableEscapeRouteName() || "ruta autorizada"}.`, "success");
      addLine("Ejecuta: evacuate now", "success");
      currentAlertText.textContent = "EVACUACIÓN DISPONIBLE. Ejecuta evacuate now.";
    }
    return { available, blockers };
  }
  state.evacuationAnnounced = false;
  if (announce) {
    addLine("EVACUACIÓN BLOQUEADA.", "warning");
    addLine("Falta resolver:", "warning");
    blockers.forEach((blocker) => addLine(`- ${blocker}`, "warning"));
  }
  return { available, blockers };
}

function getCurrentObjectiveKey() {
  if (state.omegaReleased && !state.chimeraContained) return "chimera";
  if (!state.powerOnline) return state.generatorDamaged ? "generator" : "power";
  if (state.timelineFlags.raptor && !state.raptorContained) return "raptor";
  if (state.timelineFlags.trex && !state.trexContained) return "trex";
  if (state.timelineFlags.dilo && !state.diloNeutralized) return "dilo";
  if (state.timelineFlags.barrier && !state.barriersRestored) return "barrier";
  if (state.timelineFlags.herd && !state.herdCalmed) return "herd";
  if (state.timelineFlags.anky && !state.ankyRedirected) return "anky";
  if (state.timelineFlags.stego && !state.stegoAnalyzed) return "stego";
  if (!state.doorUnlocked) return getRouteObjectiveKey();
  return "escape";
}

function getRouteObjectiveKey() {
  if (state.escapeRoutes.main.planned && !state.escapeRoutes.main.lost && !state.escapeRoutes.main.available) return "door";
  if (state.escapeRoutes.helipad.planned && !state.escapeRoutes.helipad.lost && !state.escapeRoutes.helipad.available) return "helipad";
  if (state.escapeRoutes.tunnel.planned && !state.escapeRoutes.tunnel.lost && !state.escapeRoutes.tunnel.available) return "tunnel";
  if (state.escapeRoutes.cargo.planned && !state.escapeRoutes.cargo.lost && !state.escapeRoutes.cargo.available) return "cargo";
  return "door";
}

function markProgress(objectiveKey = getCurrentObjectiveKey()) {
  state.guide.objectiveKey = objectiveKey;
  state.guide.lastProgressAt = state.countdownSeconds;
  state.guide.lastHintAt = state.countdownSeconds;
  state.guide.hintTier = 0;
}

function getGuidance(key = getCurrentObjectiveKey()) {
  const chimeraParts = getChimeraCodeParts();
  const guides = {
    power: {
      title: "ENERGIA PRINCIPAL OFFLINE",
      occurred: "La subestacion oeste no alimenta puertas, rotores ni cercos.",
      danger: "Sin energia, los protocolos de contencion no se ejecutan.",
      objective: "Restaurar energia principal.",
      files: "POWER.LOG",
      steps: ["cat POWER.LOG", "lee el codigo de restauracion", "ejecuta restore power [CODIGO]"],
      risk: "ALTO",
    },
    generator: {
      title: "GENERADOR DE RESPALDO DAÑADO",
      occurred: "Un impacto corto la linea de respaldo y la energia volvio a caer.",
      danger: "Los cercos quedan debiles y el daño del laboratorio sube.",
      objective: "Reparar el generador antes de seguir.",
      files: "GENERATOR.LOG",
      steps: ["cat GENERATOR.LOG", "lee el codigo GEN", "ejecuta repair generator [CODIGO]"],
      risk: "CRITICO",
    },
    raptor: {
      title: "VELOCIRAPTOR EN PERIMETRO INTERNO",
      occurred: "La barrera secundaria del paddock R-01 esta comprometida.",
      danger: "El raptor puede entrar al corredor si no sincronizas los seguros.",
      objective: "Contener al Velociraptor con rotores.",
      files: "ENIGMA.MANUAL y RAPTOR.KEY",
      steps: ["cat ENIGMA.MANUAL", "cat RAPTOR.KEY", "gira cada rotor hasta que quede alineado", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "ALTO",
    },
    trex: {
      title: "T-REX EN CORREDOR C-07",
      occurred: "Lectura sismica confirma aproximacion de gran masa.",
      danger: "El impacto puede colapsar puertas y energia.",
      objective: "Cerrar compuertas del corredor con rotores.",
      files: "TREX.KEY",
      steps: ["cat TREX.KEY", "alinea los tres rotores", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "CRITICO",
    },
    dilo: {
      title: "DILOPHOSAURUS EN ACCESO PRINCIPAL",
      occurred: "El acceso E-03 requiere bloqueo manual por toxina y niebla.",
      danger: "Si cruza el vestibulo, sube el daño y se bloquea la ruta.",
      objective: "Cerrar compuertas con protocolo TOXIN.",
      files: "DILO.LOG y TOXIN.KEY",
      steps: ["cat DILO.LOG", "cat TOXIN.KEY", "alinea rotores TOXIN", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "ALTO",
    },
    barrier: {
      title: "BARRERAS SECUNDARIAS COMPROMETIDAS",
      occurred: "Las barreras controlan puertas de contencion entre sectores.",
      danger: "Sectores abiertos aumentan daño, riesgo biologico y fallos de puerta.",
      objective: "Restaurar cercos y seguros magneticos.",
      files: "BARRIER.SYS",
      steps: ["cat BARRIER.SYS", "lee el codigo BARRIER", "ejecuta restore barrier [CODIGO]"],
      risk: "ALTO",
    },
    herd: {
      title: "PELEA DE TRICERATOPS DETECTADA",
      occurred: "Sector C comprometido. Compuertas laterales bajo presión.",
      danger: "Los impactos aumentan daño estructural, riesgo biologico y pueden bloquear Sector C.",
      objective: "Estabiliza el Sector C.",
      files: "TRICERATOPS.LOG",
      steps: ["cat TRICERATOPS.LOG", "lee el protocolo TRI", "ejecuta stabilize triceratops [CODIGO]"],
      risk: "MEDIO",
    },
    anky: {
      title: "ANKYLOSAURUS EN RUTA LOGISTICA",
      occurred: "Corredor L-05 bloqueado por desplazamiento pesado.",
      danger: "La ruta de escape queda bloqueada y la evacuacion no estara disponible.",
      objective: "Redirige al Ankylosaurus fuera del corredor.",
      files: "ANKY.LOG",
      steps: ["cat ANKY.LOG", "lee la ruta de desvio", "ejecuta redirect anky [CODIGO]"],
      risk: "ALTO",
    },
    stego: {
      title: "ESTEGOSAURUS ENFERMO DETECTADO",
      occurred: "Anomalia biologica en Sector Herbivoro.",
      danger: "La infeccion genetica puede contaminar sectores y reducir estabilidad del laboratorio.",
      objective: "Analiza el estado biologico del Estegosaurus.",
      files: "STEGO.LOG",
      steps: ["cat STEGO.LOG", "lee el codigo de analisis", "ejecuta analyze stego [CODIGO]"],
      risk: "BIOLOGICO",
    },
    chimera: {
      title: "NIVEL OMEGA: CHIMERASAURUS REX",
      occurred: "La capsula del hibrido fallo. OMEGA es una crisis del laboratorio, no un sistema que se apaga con clave.",
      danger: "Cada aparicion aumenta daño, riesgo, glitches y agresividad.",
      objective: "Entender la crisis, alinear rotores del híbrido y contenerlo para poder escapar.",
      files: "OMEGA.LOG, CHIMERA.KEY y DNA-MIX.LOG",
      steps: ["cat OMEGA.LOG para entender la crisis", "cat DNA-MIX.LOG para contexto biológico", "cat CHIMERA.KEY para activar rotores", "alinea rotores del híbrido", "pulsa Enviar contención"],
      risk: "OMEGA",
    },
    door: {
      title: "SALIDA NORTE BLOQUEADA",
      occurred: "La compuerta no abre mientras haya amenazas o fallas activas.",
      danger: "Sin salida, el timer puede llevar al colapso.",
      objective: "Abrir puerta de evacuacion.",
      files: "DOOR.SYS",
      steps: ["cat DOOR.SYS", "lee el codigo maestro", "ejecuta unlock door [CODIGO]"],
      risk: "ALTO",
    },
    escape: {
      title: "EVACUACION DISPONIBLE",
      occurred: "La ruta exterior esta abierta.",
      danger: "OMEGA puede volver a romper contencion si tardas demasiado.",
      objective: "Salir del laboratorio.",
      files: "ninguno",
      steps: ["ejecuta evacuate now"],
      risk: "FINAL",
    },
  };
  return guides[key] || guides.power;
}

function showContextGuide(key = getCurrentObjectiveKey(), className = "warning") {
  const guide = getGuidance(key);
  addLine("ALERTA CRITICA", className);
  addLine(guide.title, className);
  addLine(`QUE OCURRIO: ${guide.occurred}`, "warning");
  addLine(`PELIGRO: ${guide.danger}`, "warning");
  addLine(`OBJETIVO: ${guide.objective}`, "success");
  addLine(`BUSCA EN: ${guide.files}`, "success");
  guide.steps.forEach((step, index) => addLine(`${index + 1}. ${step}`, "success"));
  addLine(`RIESGO: ${guide.risk}`, className);
  currentAlertText.textContent = `${guide.title}. Busca en ${guide.files}.`;
}

function maybeShowDynamicHint() {
  if (!state.bootStarted || state.gameOver || state.escaped || state.omegaCinematicPlaying) return;
  const key = getCurrentObjectiveKey();
  if (state.guide.objectiveKey !== key) {
    markProgress(key);
    return;
  }
  const secondsSinceProgress = state.guide.lastProgressAt - state.countdownSeconds;
  const secondsSinceHint = state.guide.lastHintAt - state.countdownSeconds;
  const thresholds = [45, 85, 125];
  if (state.guide.hintTier >= thresholds.length) return;
  if (secondsSinceProgress < thresholds[state.guide.hintTier] || secondsSinceHint < 28) return;

  state.guide.hintTier += 1;
  state.guide.lastHintAt = state.countdownSeconds;
  const guide = getGuidance(key);
  const tier = state.guide.hintTier;
  if (tier === 1) {
    addLine(`PISTA ${tier}: el siguiente dato esta en ${guide.files}.`, "warning");
  } else if (tier === 2) {
    addLine(`PISTA ${tier}: objetivo actual: ${guide.objective}`, "warning");
    addLine(`PISTA ${tier}: primer paso recomendado: ${guide.steps[0]}.`, "warning");
  } else {
    addLine(`PISTA ${tier}: sigue esta secuencia de investigacion: ${guide.steps.slice(0, -1).join(" -> ")}`, "warning");
    addLine(`PISTA ${tier}: los archivos explican el protocolo; la contención la ejecutan los rotores.`, "warning");
  }
}

function updateMissionStates() {
  const major = getActiveMajorThreat();
  setMissionState(missionPower, state.powerOnline ? "COMPLETA" : "ACTIVA", state.powerOnline ? "is-done" : "is-active");
  setMissionState(missionGenerator, state.generatorRepaired ? "COMPLETA" : state.generatorDamaged ? "ACTIVA" : "MONITOREO", state.generatorRepaired ? "is-done" : state.generatorDamaged ? "is-active" : "is-locked");
  setMissionState(missionRaptor, !state.powerOnline ? "BLOQUEADA" : state.raptorContained ? "COMPLETA" : "ACTIVA", !state.powerOnline ? "is-locked" : state.raptorContained ? "is-done" : "is-active");
  setMissionState(missionTrex, !state.powerOnline ? "BLOQUEADA" : state.trexContained ? "COMPLETA" : state.timelineFlags.trex ? "ACTIVA" : "MONITOREO", !state.powerOnline ? "is-locked" : state.trexContained ? "is-done" : state.timelineFlags.trex ? "is-active" : "is-locked");
  setMissionState(missionDilo, !state.powerOnline ? "BLOQUEADA" : state.diloNeutralized ? "COMPLETA" : state.timelineFlags.dilo ? "ACTIVA" : "MONITOREO", !state.powerOnline ? "is-locked" : state.diloNeutralized ? "is-done" : state.timelineFlags.dilo ? "is-active" : "is-locked");
  setMissionState(missionBarrier, !state.powerOnline ? "BLOQUEADA" : state.barriersRestored ? "COMPLETA" : state.timelineFlags.barrier ? "ACTIVA" : "MONITOREO", !state.powerOnline ? "is-locked" : state.barriersRestored ? "is-done" : state.timelineFlags.barrier ? "is-active" : "is-locked");
  setMissionState(missionHerd, !state.powerOnline ? "BLOQUEADA" : state.herdCalmed ? "COMPLETA" : state.timelineFlags.herd ? "ACTIVA" : "MONITOREO", !state.powerOnline ? "is-locked" : state.herdCalmed ? "is-done" : state.timelineFlags.herd ? "is-active" : "is-locked");
  setMissionState(missionAnky, !state.powerOnline ? "BLOQUEADA" : state.ankyRedirected ? "COMPLETA" : state.timelineFlags.anky ? "ACTIVA" : "MONITOREO", !state.powerOnline ? "is-locked" : state.ankyRedirected ? "is-done" : state.timelineFlags.anky ? "is-active" : "is-locked");
  setMissionState(missionChimera, !state.omegaReleased ? "LATENTE" : state.chimeraContained ? "TEMPORAL" : "ACTIVA", !state.omegaReleased ? "is-locked" : state.chimeraContained ? "is-done" : "is-active");
  setMissionState(missionDoor, state.doorUnlocked ? "COMPLETA" : state.evacuationAvailable ? "ACTIVA" : "BLOQUEADA", state.doorUnlocked ? "is-done" : state.evacuationAvailable ? "is-active" : "is-locked");
  setMissionState(missionEscape, state.escaped ? "COMPLETA" : state.evacuationAvailable ? "ACTIVA" : "BLOQUEADA", state.escaped ? "is-done" : state.evacuationAvailable ? "is-active" : "is-locked");

  if (major) {
    const secondary = [
      missionGenerator,
      missionDilo,
      missionBarrier,
      missionHerd,
      missionAnky,
      missionDoor,
      missionEscape,
    ];
    secondary.forEach((mission) => {
      if (!mission.classList.contains("is-done") && !mission.classList.contains("is-active")) {
        setMissionState(mission, "CONTENCION TEMPORAL", "is-deferred");
      }
    });
  }
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
  } else if (state.timelineFlags.dilo && !state.diloNeutralized) {
    labThreatState.textContent = "DILOPHOSAURUS CERCA DEL ACCESO PRINCIPAL";
  } else if (state.timelineFlags.barrier && !state.barriersRestored) {
    labThreatState.textContent = "CONTENCION PARCIALMENTE DESACTIVADA";
  } else if (state.timelineFlags.herd && !state.herdCalmed) {
    labThreatState.textContent = "PELEA DE TRICERATOPS EN SECTOR C";
  } else if (state.timelineFlags.anky && !state.ankyRedirected) {
    labThreatState.textContent = "ANKYLOSAURUS BLOQUEA CORREDOR";
  } else if (state.timelineFlags.stego && !state.stegoAnalyzed) {
    labThreatState.textContent = "ESTEGOSAURUS ENFERMO // RIESGO BIOLOGICO";
  } else if ((state.timelineFlags.raptor && !state.raptorContained) || (state.timelineFlags.trex && !state.trexContained)) {
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
    ["Triceratops", speciesZones.herb.risk(), "Nivel III, impacto en Sector C"],
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
  const evacuation = verificarEvacuacionDisponible();
  for (const button of actionButtons) {
    const command = button.dataset.command;
    let disabled = false;
    if (command === "restore power RST-POWER-73" && state.powerOnline) disabled = true;
    if (command === "repair generator GEN-RESTART-84" && (!state.generatorDamaged || state.generatorRepaired)) disabled = true;
    if (command.startsWith("lock dilo") && state.diloNeutralized) disabled = true;
    if (command === "restore barrier BARRIER-RESTORE-31" && state.barriersRestored) disabled = true;
    if (command === "stabilize triceratops TRI-STABLE-41" && state.herdCalmed) disabled = true;
    if (command === "redirect anky ANKY-PORT-55" && state.ankyRedirected) disabled = true;
    if (command === "analyze stego STEGO-BIO-28" && (!state.timelineFlags.stego || state.stegoAnalyzed)) disabled = true;
    if (command === "unlock door DOOR-LOCK-42" && (!evacuation.available || state.doorUnlocked)) disabled = true;
    if ((command === "escape" || command === "evacuate now") && (!evacuation.available || state.escaped)) disabled = true;
    button.disabled = disabled;
  }
}

function updateHud() {
  mantenerAlertaActiva();
  verificarEvacuacionDisponible();
  powerState.textContent = state.powerOnline ? "ONLINE" : "OFFLINE";
  powerState.style.color = state.powerOnline ? "#9cff57" : "";
  raptorState.textContent = state.raptorContained ? "INACTIVA" : "ACTIVA";
  raptorState.style.color = state.raptorContained ? "#9cff57" : "";
  doorState.textContent = state.doorUnlocked ? "ABIERTA" : "BLOQUEADA";
  doorState.style.color = state.doorUnlocked ? "#9cff57" : "";
  escapeState.textContent = state.escaped ? "COMPLETA" : state.evacuationAvailable ? "DISPONIBLE" : "PENDIENTE";
  escapeState.style.color = state.escaped || state.evacuationAvailable ? "#9cff57" : "";
  const plannedOpenRisk = (isEventPlanned("dilo") && !state.diloNeutralized) || (isEventPlanned("barrier") && !state.barriersRestored);
  threatLevelState.textContent = state.gameOver ? "COLAPSO" : state.omegaReleased && !state.chimeraContained ? "OMEGA" : state.damageInstalacion >= 70 || state.riesgoBiologico >= 70 ? "CRITICO" : state.damageInstalacion >= 40 || plannedOpenRisk ? "ALTO" : state.doorUnlocked ? "CONTROLADO" : "MEDIO";
  countdownState.textContent = formatCountdown(state.countdownSeconds);
  if (omegaCountdown) omegaCountdown.textContent = `TIEMPO CRITICO ${formatCountdown(state.countdownSeconds)}`;
  countdownState.style.color = state.countdownSeconds <= 120 ? "#ff5a4f" : state.countdownSeconds <= 300 ? "#ffd166" : "";
  damageState.textContent = `${Math.round(state.damageInstalacion)}%`;
  if (damageMeterValue) damageMeterValue.textContent = `${Math.round(state.damageInstalacion)}%`;
  if (damageMeterFill) damageMeterFill.style.width = `${Math.round(state.damageInstalacion)}%`;
  if (damageMeter) {
    const damageLevel =
      state.damageInstalacion >= 76 ? "critical" :
      state.damageInstalacion >= 51 ? "high" :
      state.damageInstalacion >= 26 ? "medium" :
      "low";
    damageMeter.dataset.level = damageLevel;
  }
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
  setZoneState(zoneEscapeState, state.escaped ? "COMPLETA" : state.evacuationAvailable ? "DISPONIBLE" : "PENDIENTE", state.escaped || state.evacuationAvailable ? "done" : "pending");

  updateObjective();
  updateMissionStates();
  updateThreatMap();
  renderSpeciesList();
  renderEvacuationRoutesPanel();
  setActiveSpecies(state.activeZone);
  updateActionButtons();
  updateCipherHelper();
  setPuzzleVisibility(state.director.activePuzzle);
  updateAmbientButtons();
}

function scrollToBottom() {
  if (isPuzzleActive() || Date.now() < state.ui.suppressTerminalScrollUntil) return;
  output.scrollTop = output.scrollHeight;
}

function createLine(text = "", className = "") {
  const line = document.createElement("div");
  line.className = `line ${className}`.trim();
  line.textContent = text;
  return line;
}

function addLine(text = "", className = "") {
  const line = createLine(text, className);
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

function addTrainingLine(text = "", className = "") {
  const line = createLine(text, className);
  trainingOutput?.appendChild(line);
  if (trainingOutput) trainingOutput.scrollTop = trainingOutput.scrollHeight;
}

function typeTrainingLine(text, className = "") {
  return new Promise((resolve) => {
    if (!trainingOutput) {
      resolve();
      return;
    }
    const line = document.createElement("div");
    line.className = `line ${className} cursor`.trim();
    trainingOutput.appendChild(line);
    let index = 0;
    const timer = window.setInterval(() => {
      line.textContent = text.slice(0, index + 1);
      index += 1;
      trainingOutput.scrollTop = trainingOutput.scrollHeight;
      if (index >= text.length) {
        window.clearInterval(timer);
        line.classList.remove("cursor");
        resolve();
      }
    }, 12);
  });
}

async function printTrainingLines(lines, className = "") {
  for (const line of lines) await typeTrainingLine(line, className);
}

async function printLines(lines, className = "") {
  for (const line of lines) await typeLine(line, className);
}

function listFilesInTerminal() {
  Object.keys(getFiles()).forEach(addFileLine);
}

async function runBootSequence() {
  if (state.trainingActive || state.bootStarted) return;
  state.trainingActive = true;
  state.trainingStep = 0;
  state.trainingRotorActive = false;
  state.trainingRotorCurrent = 3;
  state.trainingRotorSaved = false;
  state.trainingPowerRestored = false;
  bootOverlay.classList.add("hidden");
  trainingOverlay?.classList.remove("hidden");
  trainingOverlay?.setAttribute("aria-hidden", "false");
  appShell?.classList.add("hidden");
  if (trainingOutput) trainingOutput.innerHTML = "";
  updateTrainingUi();
  await printTrainingLines([
    "SIMULACION DE ENTRENAMIENTO INICIADA.",
    "Entorno seguro: no hay Director, amenazas, daño, riesgo biologico ni temporizador.",
    "FASE 1: escribe help.",
  ], "success");
  trainingInput?.focus();
}

async function startRealScenario() {
  if (state.bootStarted) return;
  state.trainingActive = false;
  state.trainingCompleted = true;
  state.bootStarted = true;
  bootOverlay?.classList.add("hidden");
  bootOverlay?.setAttribute("aria-hidden", "true");
  trainingOverlay?.classList.add("hidden");
  trainingOverlay?.setAttribute("aria-hidden", "true");
  appShell?.classList.remove("hidden");
  setPuzzleVisibility("none");
  startThreatTimer();
  startAmbient();
  for (const message of bootMessages) {
    await typeLine(message, "success");
  }
  await typeLine("Objetivo: estabilizar la instalación o escapar antes del colapso total.", "warning");
  await typeLine("Investiga con ls y cat. Usa status o EVAC.ROUTES para ver rutas y requisitos.", "warning");
  setCurrentAlert("Capacitacion completada. Sistemas reales bajo tu control.", "success");
  showContextGuide("power", "warning");
  speak(narrationLines.briefing, null, { priority: "medium", channel: "narrative", retryOnInterrupt: true });
  updateHud();
  focusTerminalIfAllowed();
}

function updateTrainingUi() {
  const phases = [
    ["FASE 1 / TERMINAL", "Escribe help para ver los comandos basicos."],
    ["FASE 1 / TERMINAL", "Usa ls para listar archivos disponibles."],
    ["FASE 2 / INVESTIGACION", "Lee TRAINING.LOG para extraer el siguiente paso."],
    ["FASE 3 / ROTOR SIMPLE", "Alinea un solo rotor y guarda el digito."],
    ["FASE 4 / MINI PROTOCOLO", "Restaura energia en un entorno controlado."],
    ["COMPLETADO", "Entrenamiento listo. Puedes iniciar la simulacion real."],
  ];
  const [badge, objective] = phases[state.trainingStep] || phases[0];
  if (trainingPhaseBadge) trainingPhaseBadge.textContent = badge;
  if (trainingObjective) trainingObjective.textContent = objective;
  if (trainingSteps) {
    Array.from(trainingSteps.children).forEach((item, index) => {
      item.classList.toggle("is-done", index < state.trainingStep);
      item.classList.toggle("is-active", index === state.trainingStep);
    });
  }
  const rotorEnabled = state.trainingRotorActive && !state.trainingRotorSaved;
  const rotorAligned = state.trainingRotorCurrent === state.trainingRotorTarget;
  trainingRotorPanel?.classList.toggle("is-aligned", rotorAligned);
  if (trainingRotorValue) trainingRotorValue.textContent = String(state.trainingRotorCurrent);
  if (trainingRotorState) {
    trainingRotorState.textContent = !state.trainingRotorActive
      ? "BLOQUEADO"
      : state.trainingRotorSaved
      ? "DIGITO GUARDADO"
      : rotorAligned
      ? "ALINEADO"
      : "ACTIVO";
  }
  if (trainingRotorHint) {
    trainingRotorHint.textContent = !state.trainingRotorActive
      ? "El rotor se activa cuando ejecutes activate training rotor."
      : state.trainingRotorSaved
      ? "Digito guardado. Ahora confirma con restore power."
      : rotorAligned
      ? "Rotor alineado en 2. Pulsa GUARDAR DIGITO."
      : "Gira atras una vez: 3 debe quedar en 2.";
  }
  if (trainingRotorDial) trainingRotorDial.disabled = !rotorEnabled;
  if (trainingRotorTurn) trainingRotorTurn.disabled = !rotorEnabled;
  if (trainingRotorSave) trainingRotorSave.disabled = !state.trainingRotorActive || state.trainingRotorSaved || !rotorAligned;
  trainingCompletePanel?.classList.toggle("hidden", !state.trainingPowerRestored);
}

function advanceTrainingStep(step) {
  if (state.trainingStep < step) state.trainingStep = step;
  updateTrainingUi();
}

function turnTrainingRotor() {
  if (!state.trainingRotorActive || state.trainingRotorSaved) return;
  state.trainingRotorCurrent = (state.trainingRotorCurrent + 9) % 10;
  clonePlay(typingSound, 0.08);
  updateTrainingUi();
}

async function saveTrainingRotor() {
  if (!state.trainingRotorActive || state.trainingRotorSaved) return;
  if (state.trainingRotorCurrent !== state.trainingRotorTarget) {
    await typeTrainingLine("Aun no esta alineado. En entrenamiento no hay penalizacion: gira hasta que marque 2.", "warning");
    return;
  }
  state.trainingRotorSaved = true;
  advanceTrainingStep(4);
  await printTrainingLines([
    "DIGITO GUARDADO: 2",
    "Ya completaste: girar, alinear y guardar.",
    "FASE 4: confirma el mini protocolo con restore power.",
  ], "success");
}

async function completeTrainingPower() {
  if (!state.trainingRotorSaved) {
    await typeTrainingLine("Primero guarda el digito del rotor. No hay penalizacion; vuelve al panel de rotor.", "warning");
    return;
  }
  state.trainingPowerRestored = true;
  advanceTrainingStep(5);
  await printTrainingLines([
    "ENERGIA DE PRACTICA RESTAURADA.",
    "ENTRENAMIENTO COMPLETADO.",
    "Ahora puedes iniciar una emergencia real con amenazas, rutas dinamicas y Director de Eventos.",
  ], "success");
}

function parseCommand(rawCommand) {
  return rawCommand.trim().split(/\s+/).filter(Boolean);
}

function showStatus() {
  return printLines([
    `Perfil de sesión: ${state.director.profile?.label ?? "No asignado"}`,
    `Energia: ${state.powerOnline ? "ONLINE" : "OFFLINE"}`,
    `Generador: ${state.generatorDamaged ? "DAÑADO" : state.generatorRepaired ? "REPARADO" : "ESTABLE"}`,
    `Raptor: ${state.raptorContained ? "CONTENIDO" : state.timelineFlags.raptor ? "ACTIVO" : "SIN CONTACTO"}`,
    `T-Rex: ${state.trexContained ? "CONTENIDO" : state.timelineFlags.trex ? "ACTIVO" : "SIN CONTACTO"}`,
    `Dilophosaurus: ${!isEventPlanned("dilo") ? "SIN LECTURA" : state.diloNeutralized ? "NEUTRALIZADO" : state.timelineFlags.dilo ? "ACTIVO" : "LATENTE"}`,
    `Chimerasaurus: ${state.omegaReleased ? state.chimeraContained ? "CONTENIDO TEMPORAL" : "LIBERADO" : "NO DETECTADO"}`,
    `Barreras: ${!isEventPlanned("barrier") ? "SIN INCIDENTE" : state.barriersRestored ? "RESTAURADAS" : state.timelineFlags.barrier ? "COMPROMETIDAS" : "LATENTE"}`,
    `Triceratops: ${!isEventPlanned("herd") ? "SIN INCIDENTE" : state.herdCalmed ? "ESTABILIZADO" : state.timelineFlags.herd ? "SECTOR C INESTABLE" : "LATENTE"}`,
    `Ankylosaurus: ${!isEventPlanned("anky") ? "SIN INCIDENTE" : state.ankyRedirected ? "REDIRIGIDO" : state.timelineFlags.anky ? "BLOQUEANDO RUTA" : "LATENTE"}`,
    `Estegosaurus: ${!isEventPlanned("stego") ? "SIN INCIDENTE" : state.timelineFlags.stego ? state.stegoAnalyzed ? "ANALIZADO" : "ENFERMO" : "LATENTE"}`,
    `Puerta: ${state.doorUnlocked ? "ABIERTA" : "BLOQUEADA"}`,
    `Ruta principal: ${state.escapeRoutes.main.lost ? "PERDIDA" : state.escapeRoutes.main.available ? "ABIERTA" : "RECUPERABLE"}`,
    `Helipuerto: ${!state.escapeRoutes.helipad.planned ? "NO ASIGNADO" : state.escapeRoutes.helipad.lost ? "PERDIDO" : state.escapeRoutes.helipad.available ? "ABIERTO" : "RECUPERABLE"}`,
    `Túnel: ${!state.escapeRoutes.tunnel.planned ? "NO ASIGNADO" : state.escapeRoutes.tunnel.lost ? "PERDIDO" : state.escapeRoutes.tunnel.available ? "ABIERTO" : "RECUPERABLE"}`,
    `Carga: ${!state.escapeRoutes.cargo.planned ? "NO ASIGNADO" : state.escapeRoutes.cargo.lost ? "PERDIDO" : state.escapeRoutes.cargo.available ? "ABIERTO" : "RECUPERABLE"}`,
    `Evacuacion: ${state.escaped ? "COMPLETADA" : state.evacuationAvailable ? "DISPONIBLE" : "BLOQUEADA"}`,
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
  addLine(`TIEMPO RESISTIDO: ${getElapsedTimeText()}.`, "error");
  if (state.omegaReleased) {
    clonePlay(dinoSounds.chimera, 0.68);
    reproducirGarrasAleatorio(true);
  }
  setCurrentAlert("Ataque masivo no contenido. El laboratorio ha sido comprometido.", "error");
  startFailureCinematic();
  updateHud();
}

async function iniciarEscapeFinal() {
  const evacuation = verificarEvacuacionDisponible({ announce: true });
  if (!evacuation.available) {
    await printLines(getEvacuationRouteLines(), "warning");
    await typeLine("SUGERENCIA: activa una ruta disponible o resuelve los requisitos pendientes marcados arriba.", "warning");
    applyCommandPenalty("standard", "ESCAPE DENEGADO: evacuación bloqueada.");
    return false;
  }
  state.doorUnlocked = true;
  state.escaped = true;
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  stopAmbient();
  detenerAlerta("SITUACION CONTROLADA // Evacuacion completada");
  updateHud();
  speak(narrationLines.escape, null, { priority: "critical", retryOnInterrupt: false });
  await printLines([
    "Iniciando protocolo de escape...",
    "Puertas externas liberadas.",
    "EVACUACION COMPLETADA. Has escapado del laboratorio.",
    `TIEMPO TOTAL: ${getElapsedTimeText()}.`,
  ], "success");
  startEscapeCinematic();
  return true;
}

function startEscapeCinematic() {
  if (state.cinematicStarted || !escapeOverlay || !escapeVideo) return;
  state.cinematicStarted = true;
  state.finalOutcome = "success";
  stopContinuousAlert();
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
  escapeOverlayText.textContent = `Misión completada. Tiempo total: ${getElapsedTimeText()}. Jurassic UNIX Control registra evacuación exitosa.`;
  restartScenarioButton?.classList.remove("hidden");
}

function startFailureCinematic() {
  if (state.cinematicStarted || !escapeOverlay || !escapeVideo) return;
  state.cinematicStarted = true;
  state.finalOutcome = "failure";
  startContinuousAlert(0.9);
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
  escapeOverlayText.textContent = `El laboratorio quedó perdido. Tiempo resistido: ${getElapsedTimeText()}. Reinicia el escenario para intentarlo de nuevo.`;
  restartScenarioButton?.classList.remove("hidden");
}

const threatCinematicConfig = {
  raptor: {
    source: "assets/video/Raptor_Escape.mp4",
    label: "BRECHA R-01",
    title: "VELOCIRAPTOR LIBERADO",
    text: "BARRERA SECUNDARIA FALLIDA // CONTENCION R-01 COMPROMETIDA",
    sound: "raptor",
    volume: 0.68,
    alertVolume: 0.74,
    damage: 5,
    bio: 5,
    stability: -4,
    energy: -2,
    severity: "raptor",
    tier: "principal",
    glitch: "normal",
  },
  trex: {
    source: "assets/video/Rex_Escape.mp4",
    label: "BRECHA C-07",
    title: "T-REX LIBERADO",
    text: "CONTENCION PESADA FALLIDA // PUERTA PRINCIPAL COLAPSADA",
    sound: "trex",
    volume: 0.76,
    alertVolume: 0.82,
    damage: 10,
    bio: 8,
    stability: -8,
    energy: -4,
    severity: "trex",
    tier: "principal",
    glitch: "severe",
  },
  chimera: {
    source: "assets/video/Chimerasaurus Escape.MP4",
    label: "NIVEL OMEGA ACTIVADO",
    title: "CHIMERASAURUS DETECTADO",
    text: "ESTRUCTURA COMPROMETIDA // CONTENCION FALLIDA",
    sound: "chimera",
    volume: 0.78,
    alertVolume: 0.88,
    damage: 0,
    bio: 0,
    stability: 0,
    energy: 0,
    severity: "chimera",
    tier: "climax",
    glitch: "severe",
  },
  dilo: {
    source: "assets/video/Dilo_Attack.mp4",
    label: "ACCESO PRINCIPAL",
    title: "DILOPHOSAURUS EN ACCESO PRINCIPAL",
    text: "RIESGO DE CONTAMINACION Y BLOQUEO DE ENTRADA",
    sound: "dilo",
    volume: 0.66,
    alertVolume: 0.76,
    damage: 4,
    bio: 8,
    stability: -4,
    energy: -1,
    severity: "minor",
    tier: "secundaria-cinematica",
    glitch: "severe",
  },
  herd: {
    source: "assets/video/Triceratops_Peleando.mp4",
    label: "SECTOR C COMPROMETIDO",
    title: "PELEA DE TRICERATOPS DETECTADA",
    text: "COMPUERTAS LATERALES BAJO PRESION",
    sound: "herb",
    volume: 0.62,
    alertVolume: 0.68,
    damage: 6,
    bio: 3,
    stability: -5,
    energy: -1,
    severity: "minor",
    tier: "secundaria-cinematica",
    glitch: "normal",
  },
  anky: {
    source: "assets/video/Anky_Caminando.mp4",
    label: "RUTA LOGISTICA",
    title: "ANKYLOSAURUS EN RUTA LOGISTICA",
    text: "CORREDOR L-05 BLOQUEADO",
    sound: "anky",
    volume: 0.6,
    alertVolume: 0.68,
    damage: 6,
    bio: 2,
    stability: -5,
    energy: -2,
    severity: "minor",
    tier: "secundaria-cinematica",
    glitch: "normal",
  },
  stego: {
    source: "assets/video/Estegosaurus_Enfermo.mp4",
    label: "CRISIS BIOLOGICA",
    title: "ESTEGOSAURUS ENFERMO DETECTADO",
    text: "ANOMALIA BIOLOGICA EN SECTOR HERBIVORO",
    sound: "stego",
    volume: 0.55,
    alertVolume: 0.66,
    damage: 2,
    bio: 7,
    stability: -4,
    energy: -1,
    severity: "minor",
    tier: "secundaria-cinematica",
    glitch: "normal",
  },
};

function reproducirVideoAmenaza(source) {
  if (!omegaVideo || !omegaVideoSource) return Promise.resolve(false);
  omegaVideo.pause();
  omegaVideoSource.src = source;
  omegaVideo.load();
  omegaVideo.currentTime = 0;
  return omegaVideo.play().then(() => true).catch(() => false);
}

function triggerThreatEscapeCinematic(threatKey) {
  const config = threatCinematicConfig[threatKey];
  if (!config || !omegaOverlay || state.omegaCinematicPlaying) return false;
  if (isMinorDirectorEvent(threatKey) && getActiveMajorThreat()) {
    deferMinorEvent(threatKey);
    return false;
  }
  const tier = config.tier || getThreatNarrativeTier(threatKey);
  state.activeThreatCinematic = threatKey;
  state.omegaCinematicPlaying = true;
  if (state.eventVideoSeen && threatKey in state.eventVideoSeen) {
    state.eventVideoSeen[threatKey] = true;
  }
  if (threatKey === "raptor") state.raptorAttackCount += 1;
  if (threatKey === "trex") state.trexAttackCount += 1;
  if (config.damage || config.bio || config.stability || config.energy) {
    applyDeterioration({
      damage: config.damage,
      bio: config.bio,
      stability: config.stability,
      energy: config.energy,
    });
  }
  omegaOverlay.className = `omega-overlay omega-overlay--${config.severity} omega-overlay--tier-${tier}`;
  omegaOverlay.classList.remove("hidden");
  omegaOverlay.setAttribute("aria-hidden", "false");
  omegaOverlayLabel.textContent = `${getThreatTierLabel(threatKey)} // ${config.label}`;
  omegaOverlayTitle.textContent = config.title;
  omegaOverlayText.textContent = config.text;
  startContinuousAlert(config.alertVolume);
  playDinoSound(config.sound, config.volume);
  if (threatKey === "chimera") reproducirGarrasAleatorio(true);
  if (["herd", "anky", "dilo"].includes(threatKey)) triggerVisualGlitchBurst("normal");
  triggerVisualGlitchBurst(config.glitch);
  if (threatKey === "chimera") speak(narrationLines.omega, null, { priority: "critical", retryOnInterrupt: false });
  reproducirVideoAmenaza(config.source).then((played) => {
    if (!played) {
      omegaOverlayText.textContent = `No fue posible reproducir ${config.source}.`;
      cerrarEventoAmenaza();
    }
  });
  updateHud();
  return true;
}

function cerrarEventoAmenaza() {
  const threatKey = state.activeThreatCinematic;
  state.omegaCinematicPlaying = false;
  if (threatKey === "chimera") state.omegaVideoSeen = true;
  state.activeThreatCinematic = null;
  omegaOverlay?.classList.add("hidden");
  omegaOverlay?.classList.remove(
    "omega-overlay--raptor",
    "omega-overlay--trex",
    "omega-overlay--chimera",
    "omega-overlay--minor",
    "omega-overlay--tier-principal",
    "omega-overlay--tier-climax",
    "omega-overlay--tier-secundaria-cinematica"
  );
  omegaOverlay?.setAttribute("aria-hidden", "true");
  if (omegaVideo) {
    omegaVideo.pause();
    omegaVideo.currentTime = 0;
  }
  const messages = {
    raptor: "VELOCIRAPTOR LIBERADO. Protocolo R-01 activo: revisa RAPTOR.KEY y sincroniza rotores.",
    trex: "T-REX LIBERADO. Protocolo C-07 activo: revisa TREX.KEY y cierra contencion pesada.",
    chimera: "CHIMERASAURUS REX HA ROTO LA CAPSULA DE CONTENCION. Regresando a la consola en estado OMEGA.",
    dilo: "EVENTO SECUNDARIO: DILOPHOSAURUS EN ACCESO PRINCIPAL. Protocolo TOXIN activo: revisa DILO.LOG y TOXIN.KEY.",
    herd: "EVENTO SECUNDARIO: PELEA DE TRICERATOPS DETECTADA. Estabiliza el Sector C: cat TRICERATOPS.LOG.",
    anky: "EVENTO SECUNDARIO: ANKYLOSAURUS EN RUTA LOGISTICA. Redirige fuera del corredor: cat ANKY.LOG.",
    stego: "EVENTO SECUNDARIO: ESTEGOSAURUS ENFERMO DETECTADO. Analiza crisis biologica: cat STEGO.LOG.",
  };
  addLine(messages[threatKey] || "BRECHA CINEMATICA FINALIZADA. Regresando a consola.", "warning");
  if (threatKey === "raptor") setCurrentAlert("VELOCIRAPTOR LIBERADO. BARRERA SECUNDARIA FALLIDA.", "error");
  if (threatKey === "trex") setCurrentAlert("T-REX LIBERADO. CONTENCION PESADA FALLIDA.", "error");
  if (threatKey === "chimera") setCurrentAlert("NIVEL OMEGA ACTIVADO. CHIMERASAURUS REX LIBERADO. CAPSULA DE CONTENCION ROTA.", "error");
  if (threatKey === "dilo") setCurrentAlert("EVENTO SECUNDARIO: DILOPHOSAURUS EN ACCESO PRINCIPAL. Mantén protocolo TOXIN hasta neutralizar.", "warning");
  if (threatKey === "herd") setCurrentAlert("EVENTO SECUNDARIO: PELEA DE TRICERATOPS DETECTADA. Estabiliza el Sector C.", "warning");
  if (threatKey === "anky") setCurrentAlert("EVENTO SECUNDARIO: ANKYLOSAURUS EN RUTA LOGISTICA. Transporte de carga retrasado hasta redireccion.", "warning");
  if (threatKey === "stego") setCurrentAlert("EVENTO SECUNDARIO: ESTEGOSAURUS ENFERMO DETECTADO. Riesgo biologico progresivo.", "warning");
  focusTerminalIfAllowed();
}

function activateDirectorEvent(key) {
  rememberDirectorEvent(key);
  noteCriticalThreatLaunched(key);
  applyProfileEventConsequence(key);
  const majorEvents = new Set(["raptor", "trex", "generator", "barrier", "dilo", "anky", "herd", "stego", "omega", "collapse"]);
  if (majorEvents.has(key)) {
    state.director.lastMajorEventAt = state.countdownSeconds;
  }
  switch (key) {
    case "sensors":
      playAlert(0.55);
      setCurrentAlert("Frecuencia acustica no identificada. Sensores alterados en sectores E-03 y R-01.", "warning");
      {
        const objectiveKey = getCurrentObjectiveKey();
        if (["raptor", "trex", "dilo", "anky", "herd", "stego"].includes(objectiveKey) && startDirectorEventIfNeeded(objectiveKey)) break;
        showContextGuide(objectiveKey, "warning");
      }
      break;
    case "raptor":
      startContinuousAlert(0.72);
      playDinoSound("raptor");
      speak(narrationLines.raptor, null, { priority: "critical", retryOnInterrupt: false });
      state.activeZone = "raptor";
      markProgress("raptor");
      setPuzzleVisibility("raptor");
      setCurrentAlert("Movimiento detectado en Sector B. Velociraptor en perímetro interno.", "error");
      showContextGuide("raptor", "error");
      triggerThreatEscapeCinematic("raptor");
      break;
    case "trex":
      startContinuousAlert(0.76);
      playDinoSound("trex", 0.65);
      speak(narrationLines.trex, null, { priority: "critical", retryOnInterrupt: false });
      state.activeZone = "trex";
      markProgress("trex");
      setPuzzleVisibility("trex");
      setCurrentAlert("Huella de gran masa confirmada. Tyrannosaurus rex aproximándose al corredor C-07.", "error");
      showContextGuide("trex", "error");
      triggerThreatEscapeCinematic("trex");
      break;
    case "generator":
      state.generatorDamaged = true;
      state.powerOnline = false;
      applyDeterioration({ damage: 8, bio: 2, stability: -8, energy: -18 });
      playAlert();
      playDinoSound("brachio", 0.55);
      speak(narrationLines.generator, null, { priority: "critical", retryOnInterrupt: false });
      state.activeZone = "power";
      markProgress("generator");
      setPuzzleVisibility("none");
      setCurrentAlert("Generador dañado. Impacto estructural en B-02 y caída de energía de respaldo.", "error");
      showContextGuide("generator", "error");
      break;
    case "barrier":
      applyDeterioration({ damage: 3, bio: 3, stability: -3, energy: -2 });
      playAlert(0.65);
      state.activeZone = "power";
      setCurrentAlert("Sistema de contención parcialmente desactivado. Barreras del sector este sin respuesta.", "error");
      markProgress("barrier");
      showContextGuide("barrier", "error");
      break;
    case "dilo":
      startContinuousAlert(0.76);
      playDinoSound("dilo", 0.6);
      state.activeZone = "dilo";
      markProgress("dilo");
      setCipherTarget("dilo");
      setPuzzleVisibility("dilo");
      setCurrentAlert("EVENTO SECUNDARIO CINEMATICO: DILOPHOSAURUS EN ACCESO PRINCIPAL. Riesgo de contaminación y bloqueo de entrada.", "warning");
      showContextGuide("dilo", "error");
      triggerThreatEscapeCinematic("dilo");
      break;
    case "anky":
      startContinuousAlert(0.68);
      playDinoSound("anky", 0.55);
      speak(narrationLines.anky, null, { priority: "high", retryOnInterrupt: false });
      state.activeZone = "anky";
      setCurrentAlert("EVENTO SECUNDARIO CINEMATICO: ANKYLOSAURUS EN RUTA LOGÍSTICA. Corredor L-05 bloqueado.", "warning");
      markProgress("anky");
      showContextGuide("anky", "warning");
      triggerThreatEscapeCinematic("anky");
      break;
    case "herd":
      startContinuousAlert(0.68);
      playDinoSound("herb", 0.55);
      speak(narrationLines.herd, null, { priority: "high", retryOnInterrupt: false });
      state.activeZone = "herb";
      setCurrentAlert("EVENTO SECUNDARIO CINEMATICO: PELEA DE TRICERATOPS DETECTADA. Sector C comprometido. Compuertas laterales bajo presión.", "warning");
      markProgress("herd");
      showContextGuide("herd", "warning");
      triggerThreatEscapeCinematic("herd");
      break;
    case "stego":
      startContinuousAlert(0.66);
      playDinoSound("stego", 0.55);
      speak(narrationLines.stego, null, { priority: "high", retryOnInterrupt: false });
      state.activeZone = "stego";
      setCurrentAlert("EVENTO SECUNDARIO CINEMATICO: ESTEGOSAURUS ENFERMO DETECTADO. Anomalía biológica en Sector Herbívoro.", "warning");
      markProgress("stego");
      showContextGuide("stego", "warning");
      triggerThreatEscapeCinematic("stego");
      break;
    case "omega":
      triggerChimeraBreakout("CAPSULA DE CONTENCION ROTA");
      break;
    case "collapse":
      applyDeterioration({ damage: 7, bio: 6, stability: -8, energy: -5 });
      playAlert();
      reproducirGarrasAleatorio(true);
      setCurrentAlert("Alerta crítica. Ataque masivo inminente y falla multisectorial.", "error");
      showContextGuide(getCurrentObjectiveKey(), "error");
      break;
  }
}

function canActivateDirectorEvent(key) {
  if (key === "omega") return state.countdownSeconds <= state.director.omegaEarliestAt && canLaunchCriticalThreat(key);
  if (!isEventPlanned(key)) return false;
  if (!canLaunchCriticalThreat(key)) return false;
  if (["raptor", "trex", "dilo", "herd", "anky", "stego"].includes(key) && !state.powerOnline) return false;
  const activeMajor = getActiveMajorThreat();
  if (activeMajor && isMinorDirectorEvent(key)) return false;
  if (key === "sensors") return true;
  const majorEvents = new Set(["raptor", "trex", "generator", "barrier", "dilo", "anky", "herd", "stego", "collapse"]);
  if (!majorEvents.has(key)) return true;
  const gap = state.director.lastMajorEventAt - state.countdownSeconds;
  const requiredGap = getDirectorPhase() <= 2 ? 55 : getDirectorPhase() === 3 ? 45 : 34;
  return gap >= requiredGap;
}

function processTimedThreats() {
  if (!state.bootStarted || state.gameOver || state.escaped) return;

  state.countdownSeconds = Math.max(0, state.countdownSeconds - 1);
  state.elapsedSeconds += 1;
  maintainMajorThreatMode();
  if (state.director.cooldown > 0) {
    state.director.cooldown -= 1;
  }
  processScheduledPredatorAttacks();
  maybeActivateRandomDirectorEvent();
  maybeTriggerAmbientIncident();

  const beats = [
    ["sensors", 820],
    ["omega", state.director.omegaForceAt],
    ["collapse", 120],
  ];
  for (const [key, threshold] of beats) {
    if (state.countdownSeconds <= threshold && !state.timelineFlags[key]) {
      if ((key === "omega" || state.director.cooldown <= 0) && canActivateDirectorEvent(key)) {
        state.timelineFlags[key] = true;
        state.deferredEvents[key] = false;
        activateDirectorEvent(key);
      } else if (getActiveMajorThreat() && isMinorDirectorEvent(key)) {
        deferMinorEvent(key);
      }
    }
  }

  if (!getActiveMajorThreat() && state.director.cooldown <= 0 && state.countdownSeconds % 28 === 0) {
    applyPassivePressure();
  }
  if (!getActiveMajorThreat() && state.countdownSeconds % 18 === 0) {
    applySecondaryEventPressure();
  }
  if (state.countdownSeconds % 5 === 0) {
    maybeShowDynamicHint();
  }
  if (state.countdownSeconds % 7 === 0) {
    maybePlayAmbientNarrative("ambient");
  }

  if (state.omegaReleased && !state.chimeraContained && !state.timelineFlags.chimeraHint && state.countdownSeconds <= 540) {
    state.timelineFlags.chimeraHint = true;
    addLine(`ESTADO OMEGA ACTIVO: no se desactiva con clave. Revisa OMEGA.LOG, CHIMERA.KEY y DNA-MIX.LOG para contener al híbrido.`, "warning");
  }

  if (state.omegaReleased && state.chimeraContained && state.chimeraContainmentExpiresAt !== null && state.countdownSeconds <= state.chimeraContainmentExpiresAt) {
    if (canLaunchCriticalThreat("omega")) {
      triggerChimeraBreakout("LA CONTENCION TEMPORAL FALLÓ");
    } else {
      state.chimeraContainmentExpiresAt = state.countdownSeconds - randomDigit(18, 34);
      triggerAmbientIncident();
    }
  }

  if (state.director.cooldown <= 0 && state.omegaReleased && !state.chimeraContained && state.countdownSeconds % 32 === 0) {
    clonePlay(dinoSounds.chimera, 0.38);
    reproducirGarrasAleatorio(true);
    applyDeterioration({
      damage: 2 + state.chimeraBreakoutCount,
      bio: 1 + state.chimeraBreakoutCount,
      stability: -(1 + state.chimeraBreakoutCount),
      energy: -1,
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
  syncCipherBufferFromRotors();
  const { target, rotors, activeRotorIndex, buffer } = state.cipherHelper;
  const activeRotor = rotors[activeRotorIndex] || { label: "ROTOR I", letter: "A", shift: 1, baseValue: 0, currentValue: 0 };
  const stepsDone = (activeRotor.baseValue - activeRotor.currentValue + 10) % 10;
  const stepsLeft = Math.max(activeRotor.shift - stepsDone, 0);
  const targetLabels = {
    raptor: "RAPTOR",
    trex: "T-REX",
    dilo: "DILOPHOSAURUS",
    chimera: "CHIMERASAURUS",
  };

  cipherConsoleTarget.textContent = `OBJETIVO: ${targetLabels[target] || "RAPTOR"}`;
  cipherConsoleHint.textContent = target === "chimera"
    ? "Rotores CHIMERA: alinea y guarda las tres etapas; Enviar contención ejecuta el cierre internamente."
    : "Alinea y guarda los tres rotores. Enviar contención ejecuta el protocolo sin escribir códigos.";
  cipherEquationDisplay.textContent = `${activeRotor.label}: ${activeRotor.letter} = ${activeRotor.baseValue} | resta ${activeRotor.shift} | valor actual ${activeRotor.currentValue}`;
  cipherExplanation.textContent = stepsLeft > 0
    ? `Llevas ${stepsDone} giros de ${activeRotor.shift}. Sigue girando hacia atras.`
    : "Rotor alineado. Guárdalo para sincronizar el protocolo.";
  cipherConsoleBuffer.textContent = formatCipherBuffer();

  cipherRotorCards.innerHTML = rotors.map((rotor, index) => `
    <div class="cipher-rotor ${index === activeRotorIndex ? "is-active" : ""} ${isRotorAligned(rotor) ? "is-correct" : ""} ${rotor.savedValue !== null ? "is-saved" : ""} ${state.rotorFeedback.rotatedIndex === index ? "is-rotating" : ""}" data-rotor-index="${index}">
      <span>${rotor.label}</span>
      <button type="button" class="cipher-rotor__dial" data-rotor-dial="true" data-rotor-index="${index}" aria-label="Girar ${rotor.label}">
        <div class="cipher-rotor__window">${rotor.currentValue}</div>
      </button>
      <strong>${rotor.letter} = ${rotor.baseValue}</strong>
      <em>${rotor.savedValue !== null ? "GUARDADO" : isRotorAligned(rotor) ? "ALINEADO" : `gira atras ${rotor.shift}`}</em>
      <div class="cipher-rotor__controls">
        <button type="button" class="cipher-rotor__button cipher-rotor__button--primary" data-rotate="-1" data-rotor-index="${index}">ATRAS</button>
        <button type="button" class="cipher-rotor__button" data-rotate="1" data-rotor-index="${index}">ADELANTE</button>
        <button type="button" class="cipher-rotor__button" data-reset-rotor="${index}">RESET</button>
      </div>
    </div>
  `).join("");
}

function isRotorAligned(rotor) {
  return rotor.currentValue === decodeRotorValue(rotor.letter, rotor.shift);
}

function syncCipherBufferFromRotors() {
  const savedValues = [];
  for (const rotor of state.cipherHelper.rotors) {
    if (rotor.savedValue === null || rotor.savedValue === undefined) break;
    savedValues.push(String(rotor.savedValue));
  }
  state.cipherHelper.buffer = savedValues.join("");
  state.omegaRotorsSolved = state.cipherHelper.target === "chimera" && state.cipherHelper.buffer.length === 3;
}

function formatCipherBuffer() {
  const values = state.cipherHelper.rotors.map((rotor) => rotor.savedValue === null || rotor.savedValue === undefined ? "_" : String(rotor.savedValue));
  return values.length ? values.join(" ") : "_ _ _";
}

function clearSavedDigitsFrom(index) {
  state.cipherHelper.rotors.forEach((rotor, rotorIndex) => {
    if (rotorIndex >= index) rotor.savedValue = null;
  });
  syncCipherBufferFromRotors();
}

function resetRotorAt(index) {
  preservePuzzleViewport();
  const rotor = state.cipherHelper.rotors[index];
  if (!rotor) return;
  rotor.currentValue = rotor.baseValue;
  clearSavedDigitsFrom(index);
  state.cipherHelper.activeRotorIndex = index;
  state.rotorFeedback.rotatedIndex = -1;
  state.rotorFeedback.correctIndex = -1;
  clonePlay(typingSound, 0.08);
  debugRotorState("resetRotorAt");
  updateCipherHelper();
}

function resetAllRotors() {
  preservePuzzleViewport();
  state.cipherHelper.rotors.forEach((rotor) => {
    rotor.currentValue = rotor.baseValue;
    rotor.savedValue = null;
  });
  state.cipherHelper.activeRotorIndex = 0;
  state.cipherHelper.buffer = "";
  state.omegaRotorsSolved = false;
  state.rotorFeedback.rotatedIndex = -1;
  state.rotorFeedback.correctIndex = -1;
  stopRotorPointer();
  debugRotorState("resetAllRotors");
  updateCipherHelper();
}

function debugRotorState(context) {
  if (!ROTOR_DEBUG) return;
  console.debug("[rotor]", context, {
    target: state.cipherHelper.target,
    currentValues: state.cipherHelper.rotors.map((rotor) => rotor.currentValue),
    expectedValues: state.cipherHelper.rotors.map((rotor) => decodeRotorValue(rotor.letter, rotor.shift)),
    aligned: state.cipherHelper.rotors.map(isRotorAligned),
    savedValues: state.cipherHelper.rotors.map((rotor) => rotor.savedValue),
    buffer: state.cipherHelper.buffer,
    expectedCode: getExpectedCodeForTarget(state.cipherHelper.target),
  });
}

function getExpectedCodeForTarget(target) {
  if (target === "raptor") return state.raptorCode;
  if (target === "trex") return state.trexCode;
  if (target === "dilo") return state.diloCode;
  if (target === "chimera") return state.chimeraCode;
  return "";
}

function isRotorProtocolReady(target = state.cipherHelper.target) {
  syncCipherBufferFromRotors();
  const expected = target === "chimera" ? getChimeraCodeParts().digits : getExpectedCodeForTarget(target);
  return state.cipherHelper.target === target &&
    state.cipherHelper.buffer === expected &&
    state.cipherHelper.rotors.length === 3 &&
    state.cipherHelper.rotors.every((rotor) => rotor.savedValue !== null && isRotorAligned(rotor));
}

function requireRotorProtocol(target, message = "Alinea y guarda los tres rotores antes de enviar contención.") {
  setCipherTarget(target);
  setPuzzleVisibility(target);
  setCurrentAlert(message, "warning");
}

async function executeRotorContainment(target = state.cipherHelper.target) {
  if (!["raptor", "trex", "dilo", "chimera"].includes(target)) {
    setCurrentAlert("No hay protocolo de contención por rotores activo.", "warning");
    return false;
  }
  if (!state.powerOnline) {
    applyCommandPenalty("severe", "No hay energia suficiente para ejecutar protocolos de contencion.");
    return false;
  }
  if (target === "chimera" && !state.omegaReleased) {
    await typeLine("No existe una amenaza Chimerasaurus activa en este momento.", "warning");
    return false;
  }
  if (target === "chimera" && (
    state.currentProtocol !== "chimerasaurus" ||
    state.activeThreat !== "chimerasaurus" ||
    !state.omegaActive ||
    !state.chimeraActive
  )) {
    logChimeraSession("rechazo-protocolo-inactivo");
    setCurrentAlert("La sesión CHIMERA no está activa. Espera una nueva ruptura para iniciar rotores nuevos.", "warning");
    return false;
  }
  if (target === "raptor" && state.raptorContained) {
    await typeLine("Velociraptor ya está contenido.", "warning");
    return false;
  }
  if (target === "trex" && state.trexContained) {
    await typeLine("T-Rex ya está contenido.", "warning");
    return false;
  }
  if (target === "dilo" && state.diloNeutralized) {
    await typeLine("Dilophosaurus ya está neutralizado.", "warning");
    return false;
  }
  if (target === "chimera" && state.chimeraContained) {
    await typeLine("Chimerasaurus ya está contenido temporalmente.", "warning");
    return false;
  }
  if (!isRotorProtocolReady(target)) {
    if (target === "chimera") logChimeraSession("rechazo-rotores");
    requireRotorProtocol(target, "Contención incompleta. Alinea, guarda los tres rotores y vuelve a enviar.");
    return false;
  }

  if (target === "raptor") {
    state.raptorContained = true;
    if (state.currentProtocol === "raptor") state.currentProtocol = null;
    markProgress(state.raptorAttackCount >= state.director.attackGoals.raptor ? "trex" : "raptor");
    rewardRecovery("standard", "Velociraptor contenido");
    state.riesgoBiologico = clamp(state.riesgoBiologico - 8, 0, 100);
    detenerAlerta("SITUACION CONTROLADA // Velociraptor contenido");
    updateHud();
    detenerSonido("raptor");
    setPuzzleVisibility("none");
    playDinoSound("raptor", 0.35);
    await printLines(["Rotores R-01 sincronizados.", "Cerco secundario reactivado.", "Velociraptor CONTENIDO."], "success");
    if (state.raptorAttackCount < state.director.attackGoals.raptor) {
      scheduleAdditionalPredatorAttack("raptor");
    } else {
      startDirectorEventIfNeeded("trex");
    }
    return true;
  }

  if (target === "trex") {
    state.trexContained = true;
    if (state.currentProtocol === "trex") state.currentProtocol = null;
    markProgress(state.trexAttackCount >= state.director.attackGoals.trex ? "dilo" : "trex");
    rewardRecovery("major", "T-Rex contenido");
    state.riesgoBiologico = clamp(state.riesgoBiologico - 8, 0, 100);
    detenerAlerta("SITUACION CONTROLADA // T-Rex contenido");
    updateHud();
    detenerSonido("trex");
    setPuzzleVisibility("none");
    playDinoSound("trex", 0.35);
    await printLines(["Rotores C-07 sincronizados.", "Compuertas pesadas cerradas.", "Tyrannosaurus rex CONTENIDO."], "success");
    if (state.trexAttackCount < state.director.attackGoals.trex) {
      scheduleAdditionalPredatorAttack("trex");
    } else {
      startDirectorEventIfNeeded("dilo");
    }
    return true;
  }

  if (target === "dilo") {
    state.diloNeutralized = true;
    if (state.currentProtocol === "dilo") state.currentProtocol = null;
    markProgress("barrier");
    rewardRecovery("standard", "Dilophosaurus bloqueado");
    state.riesgoBiologico = clamp(state.riesgoBiologico - 10, 0, 100);
    detenerAlerta("SITUACION CONTROLADA // Dilophosaurus neutralizado");
    detenerSonido("dilo");
    setPuzzleVisibility("none");
    updateHud();
    await printLines(["Rotores TOXIN sincronizados.", "Compuertas de niebla cerradas.", "Amenaza DILO NEUTRALIZADA."], "success");
    startDirectorEventIfNeeded("barrier");
    return true;
  }

  if (target === "chimera") {
    logChimeraSession("envio");
    state.omegaRotorsSolved = true;
    markProgress(state.chimeraBreakoutCount >= state.director.attackGoals.chimera ? "door" : "chimera");
    rewardRecovery("omega", "Chimerasaurus contenido");
    state.riesgoBiologico = clamp(state.riesgoBiologico - 18, 0, 100);
    state.damageInstalacion = clamp(state.damageInstalacion - 10, 0, 100);
    state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 14, 0, 100);
    cerrarProtocoloChimerasaurus();
    detenerAlerta("SITUACION CONTROLADA // Chimerasaurus contenido");
    updateHud();
    await printLines([
      "Rotores CHIMERA sincronizados.",
      "Cerrando campos híbridos del núcleo central...",
      `CHIMERASAURUS REX CONTENIDO // VENTANA TEMPORAL ${getChimeraContainmentWindow()}s`,
    ], "success");
    if (state.chimeraBreakoutCount < state.director.attackGoals.chimera) {
      addLine("OMEGA AUN NO CEDE: las lecturas híbridas siguen inestables.", "warning");
    } else {
      addLine("OMEGA continúa como estado crítico. Aprovecha la ventana de contención del híbrido para evacuar.", "warning");
    }
    return true;
  }

  return false;
}

function resetProtocolAttempt(target, message = "Protocolo reiniciado. Vuelve a alinear rotores y guardar digitos.") {
  setCipherTarget(target);
  setPuzzleVisibility(target);
  updateCipherHelper();
  currentAlertText.textContent = message;
}

function rotateCipherRotor(index, direction = -1, feedback = true) {
  preservePuzzleViewport();
  const rotor = state.cipherHelper.rotors[index];
  if (!rotor) return;
  rotor.currentValue = (rotor.currentValue + direction + 10) % 10;
  clearSavedDigitsFrom(index);
  state.cipherHelper.activeRotorIndex = index;
  state.rotorFeedback.rotatedIndex = index;
  state.rotorFeedback.correctIndex = isRotorAligned(rotor) ? index : -1;
  if (feedback) {
    clonePlay(typingSound, isRotorAligned(rotor) ? 0.2 : 0.1);
    if (isRotorAligned(rotor)) {
      currentAlertText.textContent = `${rotor.label} alineado. Pulsa Guardar digito cuando sea el rotor activo.`;
    }
  }
  debugRotorState("rotateCipherRotor");
  updateCipherHelper();
  restorePuzzleViewport();
  window.setTimeout(() => {
    if (state.rotorFeedback.rotatedIndex === index) {
      state.rotorFeedback.rotatedIndex = -1;
      updateCipherHelper();
      restorePuzzleViewport();
    }
  }, 90);
}

function setCipherTarget(target) {
  if (state.chimeraActive && target !== "chimera") {
    setCurrentAlert("Prioridad OMEGA: Chimerasaurus mantiene el control del módulo de rotores.", "warning");
    return;
  }
  preservePuzzleViewport(900);
  stopRotorPointer();
  state.cipherHelper.target = target;
  if (target === "chimera") {
    if (state.chimeraActive) state.currentProtocol = "chimerasaurus";
  } else {
    state.currentProtocol = isRotorThreatActive(target) ? target : null;
  }
  state.cipherHelper.rotors = getCipherRotorsForTarget(target);
  state.cipherHelper.activeRotorIndex = 0;
  state.cipherHelper.buffer = "";
  state.rotorFeedback.rotatedIndex = -1;
  state.rotorFeedback.correctIndex = -1;
  if (target !== "chimera") state.omegaRotorsSolved = false;
  debugRotorState("setCipherTarget");
  restorePuzzleViewport();
}

function appendCipherResult() {
  syncCipherBufferFromRotors();
  const rotor = state.cipherHelper.rotors[state.cipherHelper.activeRotorIndex];
  if (!rotor) return;
  const expected = decodeRotorValue(rotor.letter, rotor.shift);
  if (rotor.currentValue !== expected) {
    setCurrentAlert("El rotor activo aún no está alineado. Sigue girando antes de guardar el dígito.", "warning");
    return;
  }
  if (state.cipherHelper.buffer.length >= 3) {
    setCurrentAlert("La secuencia ya tiene tres rotores guardados.", "warning");
    return;
  }
  const expectedIndex = state.cipherHelper.buffer.length;
  if (state.cipherHelper.activeRotorIndex !== expectedIndex) {
    state.cipherHelper.activeRotorIndex = expectedIndex;
    setCurrentAlert(`Guarda los rotores en orden. Siguiente rotor: ${expectedIndex + 1}.`, "warning");
    updateCipherHelper();
    return;
  }
  rotor.savedValue = String(rotor.currentValue);
  syncCipherBufferFromRotors();
  markProgress(getCurrentObjectiveKey());
  if (state.cipherHelper.target === "chimera" && state.cipherHelper.buffer.length === 3) {
    state.omegaRotorsSolved = true;
    setCurrentAlert("Rotores CHIMERA alineados. Pulsa Enviar contención para cerrar el campo híbrido.", "warning");
  } else if (state.cipherHelper.buffer.length === 3) {
    setCurrentAlert("Rotores alineados. Pulsa Enviar contención para ejecutar el protocolo.", "warning");
  }
  if (state.cipherHelper.activeRotorIndex < state.cipherHelper.rotors.length - 1) {
    state.cipherHelper.activeRotorIndex += 1;
  }
  debugRotorState("appendCipherResult");
  updateCipherHelper();
}

async function sendRotorContainment() {
  syncCipherBufferFromRotors();
  if (state.cipherHelper.buffer.length < 3) {
    setCurrentAlert("Contención incompleta. Alinea cada rotor y pulsa Guardar digito en orden.", "warning");
    return false;
  }
  return executeRotorContainment(state.cipherHelper.target);
}

function isRotorThreatActive(target) {
  if (target === "raptor") return state.timelineFlags.raptor && !state.raptorContained;
  if (target === "trex") return state.timelineFlags.trex && !state.trexContained;
  if (target === "dilo") return state.timelineFlags.dilo && !state.diloNeutralized;
  if (target === "chimera") return state.chimeraActive && state.omegaActive;
  return false;
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
  focusTerminalIfAllowed();
}

function getPriorityZone() {
  if (state.omegaReleased && !state.chimeraContained) return "chimera";
  if (state.generatorDamaged || !state.powerOnline) return "power";
  if (state.timelineFlags.raptor && !state.raptorContained) return "raptor";
  if (state.timelineFlags.trex && !state.trexContained) return "trex";
  if (state.timelineFlags.dilo && !state.diloNeutralized) return "dilo";
  if (state.timelineFlags.barrier && !state.barriersRestored) return "power";
  if (state.timelineFlags.herd && !state.herdCalmed) return "herb";
  if (state.timelineFlags.anky && !state.ankyRedirected) return "anky";
  if (state.timelineFlags.stego && !state.stegoAnalyzed) return "stego";
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
    herb: "Pelea de Triceratops en curso. Sector C está bajo presión.",
    anky: "Ankylosaurus detectado en perímetro logístico. La ruta de evacuación secundaria está bloqueada.",
    stego: "Estegosaurus enfermo detectado. Riesgo de contaminación genética en sector herbívoro.",
    dock: "Ruta exterior bajo revisión. Compuerta norte y muelle esperando confirmación final.",
  };
  const soundMap = {
    chimera: "chimera",
    raptor: "raptor",
    trex: "trex",
    herb: "herb",
    anky: "anky",
    stego: "stego",
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
    dilo: "cat TOXIN.KEY",
    herb: "stabilize triceratops TRI-STABLE-41",
    anky: "redirect anky ANKY-PORT-55",
    stego: "analyze stego STEGO-BIO-28",
    dock: state.doorUnlocked ? "escape" : "unlock door DOOR-LOCK-42",
  };

  if (zoneKey === "raptor" && !state.raptorContained) {
    setCipherTarget("raptor");
    updateCipherHelper();
    setCurrentAlert("Contención de raptor requiere rotores. Abre RAPTOR.KEY, sincroniza y pulsa Enviar contención.", "warning");
    return;
  }
  if (zoneKey === "trex" && !state.trexContained) {
    setCipherTarget("trex");
    updateCipherHelper();
    setCurrentAlert("Contención de T-Rex requiere rotores. Abre TREX.KEY, sincroniza y pulsa Enviar contención.", "warning");
    return;
  }
  if (zoneKey === "dilo" && !state.diloNeutralized) {
    setCipherTarget("dilo");
    updateCipherHelper();
    setPuzzleVisibility("dilo");
    setCurrentAlert("Dilophosaurus requiere protocolo TOXIN. Abre TOXIN.KEY, sincroniza y pulsa Enviar contención.", "warning");
    return;
  }
  if (zoneKey === "chimera" && !state.chimeraContained) {
    setCurrentAlert("OMEGA no se apaga con código. Consulta CHIMERA.KEY, sincroniza rotores y pulsa Enviar contención.", "error");
    return;
  }
  if (!commandByZone[zoneKey]) {
    await typeLine("La zona activa no requiere confirmación manual en este momento.", "warning");
    return;
  }
  await handleCommand(commandByZone[zoneKey]);
}

async function processTrainingCommand(command, tokens, argsLower, argsUpper) {
  if (!state.trainingActive || state.trainingCompleted) return false;
  if (command === "clear") {
    if (trainingOutput) trainingOutput.innerHTML = "";
    await typeTrainingLine("Pantalla de entrenamiento limpia. Continua con el paso activo.", "success");
    return true;
  }
  if (command === "help") {
    addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
    await printTrainingLines([
      "COMANDOS DISPONIBLES:",
      "- help: muestra esta guia.",
      "- ls: lista archivos disponibles.",
      "- cat ARCHIVO: lee un archivo.",
      "Siguiente: ejecuta ls y luego cat TRAINING.LOG.",
    ], "success");
    advanceTrainingStep(1);
    return true;
  }
  if (command === "ls") {
    addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
    await printTrainingLines(["TRAINING.LOG", "POWER.TRAIN"], "success");
    advanceTrainingStep(2);
    return true;
  }
  if (command === "cat" || command === "open") {
    addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
    const fileName = argsUpper.join(" ");
    const trainingFiles = {
      "TRAINING.LOG": [
        "TRAINING.LOG // INVESTIGACION BASICA",
        "Objetivo: aprender a consultar archivos antes de ejecutar protocolos.",
        "En una emergencia real, los logs explican que ocurrio y que sistema activar.",
        "Siguiente paso seguro: activate training rotor",
      ],
      "POWER.TRAIN": [
        "POWER.TRAIN // MINI PROTOCOLO CONTROLADO",
        "Este archivo no pertenece a la emergencia real.",
        "Cuando el rotor este guardado, confirma con: restore power",
      ],
    };
    if (!trainingFiles[fileName]) {
      await typeTrainingLine("Archivo no encontrado en entrenamiento. Usa ls para ver los disponibles.", "warning");
      return true;
    }
    await printTrainingLines(trainingFiles[fileName], "success");
    if (fileName === "TRAINING.LOG") {
      advanceTrainingStep(3);
    }
    return true;
  }
  if (command === "activate" && argsLower[0] === "training" && argsLower[1] === "rotor") {
    addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
    state.trainingRotorActive = true;
    state.trainingRotorCurrent = 3;
    state.trainingRotorSaved = false;
    advanceTrainingStep(3);
    updateTrainingUi();
    await printTrainingLines([
      "ROTOR SIMPLE ACTIVADO.",
      "Instruccion visual: gira atras una vez para pasar de 3 a 2.",
      "Cuando el rotor marque 2, pulsa GUARDAR DIGITO.",
    ], "success");
    return true;
  }
  if (command === "restore" && argsLower[0] === "power") {
    addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
    await completeTrainingPower();
    return true;
  }
  if (command === "status") {
    addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
    await printTrainingLines([
      "SIMULACION DE ENTRENAMIENTO: SEGURA",
      "Temporizador: inactivo.",
      "Daño, OMEGA, Chimerasaurus y Director: no cargados.",
      "Ruta de practica: se explicara en la emergencia real.",
    ], "success");
    return true;
  }
  if (command === "incidents") {
    addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
    await printTrainingLines([
      "Sin incidentes reales en entrenamiento.",
      "Aqui solo se practican comandos, investigacion, un rotor y restore power.",
    ], "warning");
    return true;
  }
  addTrainingLine(`training@jurassic:~# ${tokens.join(" ")}`, "command");
  await typeTrainingLine("Comando no usado en entrenamiento. No hay penalizacion. Usa help para ver los pasos.", "warning");
  return true;
}

async function handleCommand(rawCommand) {
  const tokens = parseCommand(rawCommand);
  if (!tokens.length) return;

  const command = tokens[0].toLowerCase();
  const argsUpper = tokens.slice(1).map((t) => t.toUpperCase());
  const argsLower = tokens.slice(1).map((t) => t.toLowerCase());

  if (await processTrainingCommand(command, tokens, argsLower, argsUpper)) return;

  addLine(`root@jurassic-unix:~# ${rawCommand}`, "command");

  if (state.gameOver && !["restart", "clear", "help"].includes(command)) {
    addLine("Sistema bloqueado. Reinicia el escenario para volver a intentarlo.", "error");
    return;
  }

  switch (command) {
    case "help":
      await printLines([
        "COMANDOS DISPONIBLES:",
        "- help: muestra esta ayuda.",
        "- ls: lista archivos investigables.",
        "- cat ARCHIVO: lee logs, manuales y claves. Ejemplo: cat POWER.LOG.",
        "- status: muestra estado del laboratorio, amenazas y rutas.",
        "- incidents: resume amenazas activas, objetivo y archivo recomendado.",
        "- missions: lista progreso de misiones.",
        "- hint: da una pista progresiva del objetivo activo.",
        "- evacuate now: ejecuta escape cuando una ruta este disponible.",
        "PROTOCOLOS:",
        "- restore power RST-POWER-73",
        "- repair generator GEN-RESTART-84",
        "- restore barrier BARRIER-RESTORE-31",
        "- stabilize triceratops TRI-STABLE-41",
        "- redirect anky ANKY-PORT-55",
        "- analyze stego STEGO-BIO-28",
        "- unlock door DOOR-LOCK-42 / activate helipad / open tunnel / start cargo",
        "ROTORES: consulta .KEY, gira hasta alinear, pulsa Guardar digito en orden y luego Enviar contención.",
      ], "success");
      return;

    case "ls":
      listFilesInTerminal();
      return;

    case "cat": {
      const fileName = argsUpper.join(" ");
      const files = getFiles();
      if (!files[fileName]) {
        playAlert();
        addLine(`${command}: ${tokens.slice(1).join(" ")}: archivo no encontrado`, "error");
        return;
      }
      startDirectorEventForFile(fileName);
      if (fileName === "RAPTOR.KEY") setCipherTarget("raptor");
      if (fileName === "TREX.KEY") setCipherTarget("trex");
      if (fileName === "TOXIN.KEY") setCipherTarget("dilo");
      if (state.omegaReleased && fileName === "CHIMERA.KEY") setCipherTarget("chimera");
      if (fileName === "RAPTOR.KEY") setPuzzleVisibility("raptor");
      if (fileName === "TREX.KEY") setPuzzleVisibility("trex");
      if (fileName === "TOXIN.KEY") setPuzzleVisibility("dilo");
      if (state.omegaReleased && fileName === "CHIMERA.KEY") setPuzzleVisibility("chimera");
      if (state.omegaReleased && fileName === "OMEGA.LOG") state.chimeraFragmentsKnown.omega = true;
      if (state.omegaReleased && fileName === "CHIMERA.KEY") state.chimeraFragmentsKnown.key = true;
      if (state.omegaReleased && fileName === "DNA-MIX.LOG") state.chimeraFragmentsKnown.dna = true;
      markProgress(getCurrentObjectiveKey());
      updateCipherHelper();
      await printLines(files[fileName]);
      const fileFollowups = {
        "POWER.LOG": "Siguiente paso: restore power RST-POWER-73",
        "GENERATOR.LOG": "Siguiente paso: repair generator GEN-RESTART-84",
        "DILO.LOG": "Siguiente paso: cat TOXIN.KEY",
        "TOXIN.KEY": "Siguiente paso: alinea rotores, guarda cada rotor y pulsa Enviar contención.",
        "BARRIER.SYS": "Siguiente paso: restore barrier BARRIER-RESTORE-31",
        "TRICERATOPS.LOG": "Siguiente paso: stabilize triceratops TRI-STABLE-41",
        "ANKY.LOG": "Siguiente paso: redirect anky ANKY-PORT-55",
        "ANKY.KEY": "Siguiente paso: redirect anky ANKY-PORT-55",
        "STEGO.LOG": "Siguiente paso: analyze stego STEGO-BIO-28",
        "DOOR.SYS": "Siguiente paso: unlock door DOOR-LOCK-42",
        "HELIPAD.SYS": "Siguiente paso: activate helipad",
        "TUNNEL.SYS": "Siguiente paso: open tunnel",
        "CARGO.SYS": "Siguiente paso: start cargo",
      };
      if (fileFollowups[fileName]) {
        await typeLine(fileFollowups[fileName], "success");
      }
      if (state.omegaReleased && (fileName === "OMEGA.LOG" || fileName === "CHIMERA.KEY" || fileName === "DNA-MIX.LOG")) {
        await typeLine("Diagnóstico CHIMERA cargado. Sincroniza rotores y pulsa Enviar contención.", "warning");
      }
      maybePlayAmbientNarrative("file", { fileName });
      return;
    }

    case "status":
      await showStatus();
      await printLines(getEvacuationRouteLines(), "success");
      verificarEvacuacionDisponible({ announce: true });
      return;

    case "incidents":
      {
        const threats = getActiveThreats();
        if (!threats.length) {
          await printLines(["Sin amenazas activas. Revisa objetivo actual, status o EVAC.ROUTES para planear evacuacion."], "success");
          return;
        }
        for (const threat of threats) {
          const guide = getGuidance(threat.key === "power" ? getCurrentObjectiveKey() : threat.key);
          await printLines([
            `INCIDENTE: ${guide.title}`,
            `QUE OCURRIO: ${guide.occurred}`,
            `OBJETIVO: ${guide.objective}`,
            `DONDE BUSCAR: ${guide.files}`,
            `PASOS: ${guide.steps.join(" -> ")}`,
          ], threat.severity === "critical" || threat.severity === "omega" ? "warning" : "success");
        }
      }
      return;

    case "missions":
      await printLines([
        `1. Energia: ${state.powerOnline ? "COMPLETA" : "PENDIENTE"}`,
        `2. Generador: ${state.generatorRepaired ? "COMPLETA" : state.generatorDamaged ? "ACTIVA" : "EN ESPERA"}`,
        `3. Velociraptor: ${state.raptorContained ? "COMPLETA" : state.timelineFlags.raptor ? "ACTIVA" : "LATENTE"}`,
        `4. T-Rex: ${state.trexContained ? "COMPLETA" : state.timelineFlags.trex ? "ACTIVA" : "LATENTE"}`,
        `5. Dilophosaurus: ${!isEventPlanned("dilo") ? "NO PROGRAMADA" : state.diloNeutralized ? "COMPLETA" : state.timelineFlags.dilo ? "ACTIVA" : "LATENTE"}`,
        `6. Barreras: ${!isEventPlanned("barrier") ? "NO PROGRAMADA" : state.barriersRestored ? "COMPLETA" : state.timelineFlags.barrier ? "ACTIVA" : "LATENTE"}`,
        `7. Triceratops: ${!isEventPlanned("herd") ? "NO PROGRAMADA" : state.herdCalmed ? "COMPLETA" : state.timelineFlags.herd ? "ACTIVA" : "LATENTE"}`,
        `8. Ankylosaurus: ${!isEventPlanned("anky") ? "NO PROGRAMADA" : state.ankyRedirected ? "COMPLETA" : state.timelineFlags.anky ? "ACTIVA" : "LATENTE"}`,
        `9. Estegosaurus: ${!isEventPlanned("stego") ? "NO PROGRAMADA" : state.timelineFlags.stego ? state.stegoAnalyzed ? "COMPLETA" : "ACTIVA" : "LATENTE"}`,
        `10. Chimerasaurus: ${state.omegaReleased ? state.chimeraContained ? "COMPLETA" : "ACTIVA" : "LATENTE"}`,
        `11. Puerta: ${state.doorUnlocked ? "COMPLETA" : "BLOQUEADA"}`,
        `12. Evacuacion: ${state.escaped ? "COMPLETA" : "PENDIENTE"}`,
      ], "success");
      return;

    case "hint":
      {
        const key = getCurrentObjectiveKey();
        if (state.guide.objectiveKey !== key) markProgress(key);
        const guide = getGuidance(key);
        state.guide.hintTier = Math.min(state.guide.hintTier + 1, 3);
        state.guide.lastHintAt = state.countdownSeconds;
        if (state.guide.hintTier === 1) {
          await typeLine(`PISTA 1: busca informacion en ${guide.files}.`, "warning");
        } else if (state.guide.hintTier === 2) {
          await typeLine(`PISTA 2: ${guide.objective}`, "warning");
          await typeLine(`PISTA 2: el primer comando de investigacion recomendado es "${guide.steps[0]}".`, "warning");
        } else {
          await typeLine(`PISTA 3: ${guide.steps.slice(0, -1).join(" -> ")}.`, "warning");
          await typeLine("PISTA 3: si el objetivo usa rotores, no escribas código: sincroniza y pulsa Enviar contención.", "warning");
        }
        if (state.omegaReleased && !state.chimeraContained && state.guide.hintTier >= 2) {
          applyCommandPenalty("standard", "Consulta de pista en fase OMEGA.");
          updateHud();
        }
      }
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
        markProgress("raptor");
        rewardRecovery("standard", "energia principal restaurada");
        state.energiaSistema = clamp(state.energiaSistema + 22, 0, 100);
        state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 10, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Energia principal restaurada");
        updateHud();
        setCurrentAlert("Energía principal restaurada.", "success");
        speak(narrationLines.power, null, { priority: "medium", channel: "narrative", retryOnInterrupt: true });
        await printLines(["Restaurando suministro electrico...", "Subestacion oeste en linea.", "Energia principal ONLINE."], "success");
        return;
      }
      if (argsLower[0] === "barrier" && argsUpper.slice(1).join("-") === "BARRIER-RESTORE-31") {
        state.barriersRestored = true;
        markProgress("herd");
        rewardRecovery("standard", "barreras restauradas");
        state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 8, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Barreras restauradas");
        updateHud();
        await printLines(["Reactivando barreras de contención...", "Sincronizando cercos del sector este...", "BARRERAS RESTAURADAS."], "success");
        startDirectorEventIfNeeded("herd");
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
        markProgress("raptor");
        rewardRecovery("major", "generador reparado");
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
      if (argsLower[0] === "dilo") {
        await executeRotorContainment("dilo");
        return;
      }
      break;

    case "contain":
      if (!state.powerOnline) {
        applyCommandPenalty("severe", "No hay energia suficiente para ejecutar protocolos de contencion.");
        return;
      }
      if (argsLower[0] === "raptor") {
        await executeRotorContainment("raptor");
        return;
      }
      if (argsLower[0] === "trex") {
        await executeRotorContainment("trex");
        return;
      }
      if (argsLower[0] === "chimerasaurus") {
        await executeRotorContainment("chimera");
        return;
      }
      break;

    case "stabilize":
      if (argsLower[0] === "triceratops" && argsUpper.slice(1).join("-") === "TRI-STABLE-41") {
        state.herdCalmed = true;
        markProgress("anky");
        rewardRecovery("small", "Sector C estabilizado");
        state.damageInstalacion = clamp(state.damageInstalacion - 6, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Sector C estabilizado");
        updateHud();
        detenerSonido("herb");
        playDinoSound("herb", 0.35);
        await printLines(["Activando balizas TRI...", "Descargando compuertas laterales del Sector C...", "TRICERATOPS ESTABILIZADO."], "success");
        startDirectorEventIfNeeded("anky");
        return;
      }
      break;

    case "analyze":
      if (argsLower[0] === "stego" && argsUpper.slice(1).join("-") === "STEGO-BIO-28") {
        if (!state.timelineFlags.stego) {
          await typeLine("No hay crisis activa de Estegosaurus.", "warning");
          return;
        }
        state.stegoAnalyzed = true;
        markProgress(state.omegaReleased && state.chimeraContained ? "door" : "chimera");
        rewardRecovery("small", "anomalia biologica del Estegosaurus aislada");
        state.riesgoBiologico = clamp(state.riesgoBiologico - 7, 0, 100);
        state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 5, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Estegosaurus analizado");
        updateHud();
        detenerSonido("stego");
        playDinoSound("stego", 0.3);
        await printLines(["Analizando signos vitales...", "Muestras del sector herbívoro aisladas.", "ESTEGOSAURUS: CRISIS BIOLOGICA BAJO OBSERVACION."], "success");
        return;
      }
      break;

    case "redirect":
      if (argsLower[0] === "anky" && argsUpper.slice(1).join("-") === "ANKY-PORT-55") {
        state.ankyRedirected = true;
        markProgress(state.omegaReleased && state.chimeraContained ? "door" : "chimera");
        rewardRecovery("small", "corredor logistico liberado");
        state.damageInstalacion = clamp(state.damageInstalacion - 5, 0, 100);
        detenerAlerta("SITUACION CONTROLADA // Ankylosaurus redirigido");
        updateHud();
        detenerSonido("anky");
        playDinoSound("anky", 0.35);
        await printLines(["Activando balizas de desvio...", "Ankylosaurus alejandose del corredor L-05...", "Corredor logístico liberado."], "success");
        startDirectorEventIfNeeded("stego");
        return;
      }
      break;

    case "unlock":
      if (argsLower[0] === "door" && argsUpper.slice(1).join("-") === "DOOR-LOCK-42") {
        if (state.escapeRoutes.main.lost) {
          applyCommandPenalty("standard", getRouteBlockedMessage("main"));
          return;
        }
        if (!state.omegaReleased || !state.chimeraContained || state.chimeraActive || state.omegaActive || !hasMetAttackRequirements()) {
          applyCommandPenalty("standard", getRouteBlockedMessage("main"));
          return;
        }
        state.doorUnlocked = true;
        state.escapeRoutes.main.available = true;
        state.evacuationRoute = "main";
        markProgress("escape");
        rewardRecovery("small", "ruta de evacuacion abierta");
        detenerAlerta("SITUACION CONTROLADA // Ruta de evacuacion liberada");
        updateHud();
        speak(narrationLines.door, null, { priority: "medium", channel: "narrative", retryOnInterrupt: true });
        await printLines(["Validando acceso de emergencia...", "Sellos magneticos liberados.", "Puerta de evacuacion ABIERTA."], "success");
        return;
      }
      break;

    case "activate":
      if (argsLower[0] === "helipad") {
        if (!state.escapeRoutes.helipad.planned || state.escapeRoutes.helipad.lost) {
          applyCommandPenalty("standard", getRouteBlockedMessage("helipad"));
          return;
        }
        if (!state.powerOnline || !state.omegaReleased || !state.chimeraContained || !hasMetAttackRequirements()) {
          applyCommandPenalty("standard", getRouteBlockedMessage("helipad"));
          return;
        }
        state.escapeRoutes.helipad.available = true;
        state.doorUnlocked = true;
        state.evacuationRoute = "helipad";
        markProgress("escape");
        rewardRecovery("small", "helipuerto activado");
        updateHud();
        await printLines(["Energía auxiliar derivada a azotea.", "Comunicación externa enlazada.", "HELIPUERTO DISPONIBLE."], "success");
        return;
      }
      break;

    case "open":
      if (argsLower[0] === "tunnel") {
        if (!state.escapeRoutes.tunnel.planned || state.escapeRoutes.tunnel.lost) {
          applyCommandPenalty("standard", getRouteBlockedMessage("tunnel"));
          return;
        }
        if ((state.timelineFlags.dilo && !state.diloNeutralized) || !state.omegaReleased || !state.chimeraContained || !hasMetAttackRequirements()) {
          applyCommandPenalty("standard", getRouteBlockedMessage("tunnel"));
          return;
        }
        state.escapeRoutes.tunnel.available = true;
        state.doorUnlocked = true;
        state.evacuationRoute = "tunnel";
        markProgress("escape");
        rewardRecovery("small", "túnel de emergencia abierto");
        updateHud();
        await printLines(["Abriendo compuertas del subnivel V-02...", "Ventilación restablecida.", "TUNEL DE EMERGENCIA DISPONIBLE."], "success");
        return;
      }
      break;

    case "start":
      if (argsLower[0] === "cargo") {
        if (!state.escapeRoutes.cargo.planned || state.escapeRoutes.cargo.lost) {
          applyCommandPenalty("standard", getRouteBlockedMessage("cargo"));
          return;
        }
        if ((state.timelineFlags.anky && !state.ankyRedirected) || !state.omegaReleased || !state.chimeraContained || !hasMetAttackRequirements()) {
          applyCommandPenalty("standard", getRouteBlockedMessage("cargo"));
          return;
        }
        state.escapeRoutes.cargo.available = true;
        state.doorUnlocked = true;
        state.evacuationRoute = "cargo";
        markProgress("escape");
        rewardRecovery("small", "transporte de carga preparado");
        updateHud();
        await printLines(["Combustible interno validado.", "Hangar L-05 desbloqueado.", "TRANSPORTE DE CARGA LISTO PARA EVACUAR."], "success");
        return;
      }
      break;

    case "escape":
      await iniciarEscapeFinal();
      return;

    case "evacuate":
      if (argsLower[0] === "now") {
        await iniciarEscapeFinal();
        return;
      }
      await typeLine("Uso: evacuate now", "warning");
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
  introStatus.textContent = "Protocolo activado. Intro en ejecución. La emergencia real inicia despues de la capacitacion.";
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
skipTrainingBootButton?.addEventListener("click", startRealScenario);
trainingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const rawCommand = trainingInput?.value || "";
  if (trainingInput) trainingInput.value = "";
  const tokens = parseCommand(rawCommand);
  if (!tokens.length) return;
  const command = tokens[0].toLowerCase();
  const argsUpper = tokens.slice(1).map((t) => t.toUpperCase());
  const argsLower = tokens.slice(1).map((t) => t.toLowerCase());
  await processTrainingCommand(command, tokens, argsLower, argsUpper);
  trainingInput?.focus();
});
trainingRotorTurn?.addEventListener("click", turnTrainingRotor);
trainingRotorDial?.addEventListener("click", turnTrainingRotor);
trainingRotorSave?.addEventListener("click", saveTrainingRotor);
skipTrainingButton?.addEventListener("click", startRealScenario);
startRealSimulationButton?.addEventListener("click", startRealScenario);
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
omegaVideo?.addEventListener("ended", cerrarEventoAmenaza);
omegaVideo?.addEventListener("error", () => {
  if (omegaOverlayText) {
    const config = threatCinematicConfig[state.activeThreatCinematic] || threatCinematicConfig.chimera;
    omegaOverlayText.textContent = `No fue posible reproducir ${config.source}.`;
  }
  cerrarEventoAmenaza();
});
resumeSession.addEventListener("click", hideFocusLock);
restartScenarioButton.addEventListener("click", restartScenario);
toggleAmbientMuteButton.addEventListener("click", toggleAmbientMute);
toggleAmbientPauseButton.addEventListener("click", toggleAmbientPause);
scanSectorButton.addEventListener("click", scanSector);
identifySpeciesButton.addEventListener("click", identifySpecies);
confirmContainmentButton.addEventListener("click", confirmContainmentFromActiveZone);
silenceAlertButton.addEventListener("click", () => {
  if (hasActiveThreats()) {
    mantenerAlertaActiva();
    showAlertPanel("No se puede silenciar la alerta mientras existan amenazas activas.", "critical");
    currentAlertText.textContent = "Alerta sonora obligatoria: amenaza activa.";
    addLine("ALERTA DE SISTEMA: No se puede silenciar la alerta mientras existan amenazas activas.", "warning");
    return;
  }
  setAlertSilence();
  stopContinuousAlert();
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
  focusTerminalIfAllowed();
});

actionButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    if (!state.bootStarted) return;
    await handleCommand(button.dataset.command);
    focusTerminalIfAllowed();
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const rawCommand = input.value;
  input.value = "";
  if (!state.bootStarted) return;
  await handleCommand(rawCommand);
  focusTerminalIfAllowed();
});
focusCipherRaptorButton.addEventListener("click", () => {
  setCipherTarget("raptor");
  updateCipherHelper();
});
focusCipherTrexButton.addEventListener("click", () => {
  setCipherTarget("trex");
  updateCipherHelper();
});
focusCipherDiloButton.addEventListener("click", () => {
  setCipherTarget("dilo");
  updateCipherHelper();
});
focusCipherChimeraButton.addEventListener("click", () => {
  if (!state.omegaReleased) {
    setCurrentAlert("OMEGA todavía no está activo. Investiga otros protocolos primero.", "warning");
    return;
  }
  setCipherTarget("chimera");
  updateCipherHelper();
});
focusCipherAppendButton.addEventListener("click", appendCipherResult);
if (!rotorContainmentListenerAttached) {
  focusCipherSendButton.addEventListener("click", async () => {
    await sendRotorContainment();
    input.value = "";
  });
  rotorContainmentListenerAttached = true;
}

cipherRotorCards.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.closest(".cipher-rotor__dial") || target.closest("[data-rotate]") || target.closest("[data-reset-rotor]")) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const rotorButton = target.closest("[data-rotor-index]");
  if (rotorButton instanceof HTMLElement) {
    preservePuzzleViewport();
    state.cipherHelper.activeRotorIndex = Number(rotorButton.dataset.rotorIndex);
    updateCipherHelper();
    restorePuzzleViewport();
  }
});

cipherRotorCards.addEventListener("pointerdown", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const rotateButton = target.closest("[data-rotate]");
  if (rotateButton instanceof HTMLElement) {
    event.preventDefault();
    event.stopPropagation();
    const index = Number(rotateButton.dataset.rotorIndex);
    const direction = Number(rotateButton.dataset.rotate) || -1;
    rotateCipherRotor(index, direction);
    return;
  }

  const resetButton = target.closest("[data-reset-rotor]");
  if (resetButton instanceof HTMLElement) {
    event.preventDefault();
    event.stopPropagation();
    const index = Number(resetButton.dataset.resetRotor);
    resetRotorAt(index);
    restorePuzzleViewport();
    return;
  }

  const dial = target.closest(".cipher-rotor__dial");
  if (!(dial instanceof HTMLElement)) return;
  event.preventDefault();
  event.stopPropagation();
  preservePuzzleViewport();
  const index = Number(dial.dataset.rotorIndex);
  state.rotorPointer.active = true;
  state.rotorPointer.index = index;
  state.rotorPointer.lastY = event.clientY;
  state.rotorPointer.remainder = 0;
  state.rotorPointer.dragged = false;
  state.rotorPointer.tapCandidate = true;
  dial.setPointerCapture?.(event.pointerId);
});

cipherRotorCards.addEventListener("pointermove", (event) => {
  if (!state.rotorPointer.active) return;
  event.preventDefault();
  const deltaY = event.clientY - state.rotorPointer.lastY;
  state.rotorPointer.lastY = event.clientY;
  state.rotorPointer.remainder += deltaY;
  if (Math.abs(state.rotorPointer.remainder) > 3) {
    state.rotorPointer.tapCandidate = false;
  }
  const threshold = 8;
  while (Math.abs(state.rotorPointer.remainder) >= threshold) {
    const direction = state.rotorPointer.remainder > 0 ? -1 : 1;
    rotateCipherRotor(state.rotorPointer.index, direction, true);
    state.rotorPointer.dragged = true;
    state.rotorPointer.remainder += state.rotorPointer.remainder > 0 ? -threshold : threshold;
  }
});

function stopRotorPointer() {
  if (state.rotorPointer.active && state.rotorPointer.tapCandidate && !state.rotorPointer.dragged) {
    rotateCipherRotor(state.rotorPointer.index, -1, true);
  }
  if (state.rotorPointer.dragged) {
    state.rotorPointer.suppressClickUntil = Date.now() + 80;
  }
  state.rotorPointer.active = false;
  state.rotorPointer.index = -1;
  state.rotorPointer.remainder = 0;
  state.rotorPointer.dragged = false;
  state.rotorPointer.tapCandidate = false;
  restorePuzzleViewport();
}

cipherRotorCards.addEventListener("pointerup", stopRotorPointer);
cipherRotorCards.addEventListener("pointercancel", stopRotorPointer);
cipherRotorCards.addEventListener("wheel", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const dial = target.closest(".cipher-rotor__dial");
  if (!(dial instanceof HTMLElement)) return;
  event.preventDefault();
  const index = Number(dial.dataset.rotorIndex);
  rotateCipherRotor(index, event.deltaY > 0 ? -1 : 1);
}, { passive: false });

document.addEventListener("visibilitychange", () => {
  if (document.hidden) focusLockIfNeeded();
});
window.addEventListener("blur", focusLockIfNeeded);

initializeScenario();
updateHud();
