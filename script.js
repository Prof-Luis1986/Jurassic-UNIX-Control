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
const alphaState = byId("alphaState");
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
const missionGrypho = byId("missionGrypho");
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
const threatGrypho = byId("threatGrypho");
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
const focusCipherAppendButton = byId("focusCipherAppend");
const focusCipherSendButton = byId("focusCipherSend");
const evacuationAction = byId("evacuationAction");

const toggleAmbientMuteButton = byId("toggleAmbientMute");
const toggleAmbientPauseButton = byId("toggleAmbientPause");
const toggleNarrativeMuteButton = byId("toggleNarrativeMute");
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
const CHIMERA_DEBUG = false;
const SESSION_DURATION = 30 * 60;
const MINIMUM_SESSION_SECONDS = SESSION_DURATION;
const SAFE_AUDIO = Object.freeze({ ambient: 0.04, alert: 0.14, intro: 0.22, creature: 0.24, clone: 0.18, narrative: 0.24, speechAlert: 0.36 });
const ROTOR_PROTOCOLS = Object.freeze({
  power: { label: "ENERGIA PRINCIPAL", next: "raptor" },
  generator: { label: "GENERADOR DE RESPALDO", next: "raptor" },
  barrier: { label: "BARRERAS SECUNDARIAS", next: "herd" },
  herd: { label: "SECTOR C / TRICERATOPS", next: "anky" },
  anky: { label: "DESVIO ANKYLOSAURUS", next: "stego" },
  stego: { label: "AISLAMIENTO ESTEGOSAURUS", next: "chimera" },
  compi: { label: "SUBESTACION / COMPIS", next: "raptor" },
});
const DEFAULT_ATTACK_GOALS = {
  raptor: 3,
  trex: 3,
  grypho: 2,
  chimera: 5,
};

const DIRECTOR_PROFILES = [
  {
    key: "bio",
    label: "Caos biologico",
    requiredEvents: ["dilo", "stego", "compi"],
    optionalEvents: ["barrier", "herd", "anky"],
    optionalCount: [1, 2],
    weights: { dilo: 4, stego: 4, compi: 3, barrier: 2, herd: 1, anky: 1, raptor: 2, trex: 1, grypho: 3, omega: 2 },
    attackGoals: { raptor: [2, 3], trex: [2, 3], grypho: [1, 2], chimera: [4, 5] },
    omegaWindow: [610, 520],
    pressure: { bio: 1.35, damage: 0.9, stability: 1.1, energy: 0.9 },
  },
  {
    key: "structural",
    label: "Destruccion estructural",
    requiredEvents: ["barrier", "herd", "compi"],
    optionalEvents: ["anky", "dilo", "stego"],
    optionalCount: [1, 2],
    weights: { trex: 4, herd: 4, anky: 3, barrier: 3, compi: 3, raptor: 1, dilo: 1, stego: 1, grypho: 2, omega: 2 },
    attackGoals: { raptor: [2, 3], trex: [3, 4], grypho: [1, 2], chimera: [4, 5] },
    omegaWindow: [620, 500],
    pressure: { bio: 0.85, damage: 1.35, stability: 1.3, energy: 1.1 },
  },
  {
    key: "hybrid",
    label: "Crisis hibrida",
    requiredEvents: ["dilo", "compi"],
    optionalEvents: ["stego", "barrier", "herd", "anky"],
    optionalCount: [1, 3],
    weights: { omega: 5, grypho: 5, raptor: 3, compi: 3, trex: 2, dilo: 2, stego: 2, barrier: 1, herd: 1, anky: 1 },
    attackGoals: { raptor: [3, 4], trex: [2, 3], grypho: [2, 3], chimera: [4, 5] },
    omegaWindow: [700, 590],
    pressure: { bio: 1.2, damage: 1.1, stability: 1.25, energy: 1 },
  },
  {
    key: "tactical",
    label: "Supervivencia tactica",
    requiredEvents: ["compi"],
    optionalEvents: ["dilo", "barrier", "herd", "anky", "stego"],
    optionalCount: [3, 4],
    weights: { raptor: 2, trex: 2, grypho: 3, compi: 3, dilo: 2, barrier: 2, herd: 2, anky: 2, stego: 2, omega: 2 },
    attackGoals: { raptor: [3, 4], trex: [3, 4], grypho: [2, 3], chimera: [4, 5] },
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
  grypho: "Amenaza Alfa detectada. Gryphovenator no avanza; calcula. Cámaras y sensores quedan bajo lectura no confiable.",
  herd: "Pelea de Triceratops detectada en Sector C. Compuertas laterales bajo presión.",
  anky: "Ankylosaurus bloqueando el corredor logístico L cero cinco.",
  stego: "Estegosaurus enfermo detectado. Anomalía biológica en Sector Herbívoro.",
  compi: "Falla de energia detectada. Compis mordiendo cableado en subestacion.",
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
    id: "grypho-01",
    theme: "grypho",
    title: "ALPHA-HYBRID.LOG // PRIMER EXITO",
    source: "IA CENTRAL / ARCHIVO ALFA",
    minPhase: 2,
    triggers: ["ambient", "file", "recovery"],
    files: ["GRYPHO.LOG", "ALPHA-HYBRID.LOG", "PREDATOR.TEST", "ALPHA-CONTAINMENT.LOG"],
    text: "Gryphovenator fue el primer hibrido estable: Suchomimus para alcance, Velociraptor para aprendizaje, ave del terror para persecucion silenciosa.",
  },
  {
    id: "grypho-02",
    theme: "grypho",
    title: "PREDATOR.TEST // EVASION",
    source: "ANALISIS CONDUCTUAL",
    minPhase: 3,
    triggers: ["ambient", "file"],
    files: ["PREDATOR.TEST", "ALPHA-CONTAINMENT.LOG", "OMEGA-PROTOTYPE.LOG"],
    text: "El sujeto ALFA no rompio las camaras. Espero a que dependieramos de ellas y despues camino por los puntos ciegos.",
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
  {
    id: "security-thermal-01",
    theme: "security",
    title: "SECURITY.LOG // LECTURA TERMICA",
    source: "SEGURIDAD PERIMETRAL",
    minPhase: 1,
    triggers: ["ambient"],
    text: "Camara cuatro desconectada. La lectura termica no coincide con ninguna especie autorizada.",
  },
  {
    id: "quimera-017",
    theme: "chimera",
    title: "GS-017.LOG // APRENDIZAJE",
    source: "ARCHIVO RESTRINGIDO",
    minPhase: 3,
    triggers: ["ambient", "file"],
    files: ["OMEGA.LOG", "DNA-MIX.LOG"],
    text: "El expediente GS cero diecisiete registra patrones de apertura de compuertas memorizados por el especimen. El acceso fue revocado.",
  },
  {
    id: "morgan-01",
    theme: "personnel",
    title: "MORGAN.LOG // BITACORA PERSONAL",
    source: "DR. MORGAN / AUDIO TRANSCRITO",
    minPhase: 2,
    triggers: ["ambient"],
    text: "El organismo no responde a los sedantes como esperabamos. Sigue reaccionando a nuestra presencia.",
  },
  {
    id: "terminal-01",
    theme: "ai",
    title: "JURASSIC UNIX // MENSAJE RESIDUAL",
    source: "TERMINAL CENTRAL",
    minPhase: 1,
    triggers: ["ambient"],
    text: "No todos los errores pueden corregirse reiniciando el sistema.",
  },
];

const state = {
  gameState: "intro",
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
  narrativeMuted: false,
  powerOnline: false,
  generatorDamaged: false,
  generatorRepaired: false,
  raptorContained: false,
  trexContained: false,
  gryphoContained: false,
  gryphoActive: false,
  gryphoCode: "",
  gryphoRotors: [],
  gryphoRotorLockUntil: 0,
  evacuationOverride: {
    target: null,
    codes: {},
    rotors: {},
    solved: {},
  },
  raptorAttackCount: 0,
  trexAttackCount: 0,
  gryphoStalkCount: 0,
  gryphoReappearAt: null,
  gryphoSabotageUntil: null,
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
  escapeWindowActive: false,
  currentEscapeRoute: null,
  escapeOpportunity: {
    count: 0,
    required: 2,
    activeId: null,
    activeType: null,
    deadlineAt: null,
    schedule: [
      { id: "early", threshold: 480, triggered: false },
      { id: "final", threshold: 180, triggered: false },
    ],
    failedRoutes: [],
    usedRoutes: [],
    lastResortUsed: false,
  },
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
  finalExitReady: false,
  alertsSilencedUntil: 0,
  continuousAlertActive: false,
  lastAlertSoundAt: 0,
  currentDinoSound: null,
  alertPanelTimer: null,
  glitchBurstTimer: null,
  activeZone: "raptor",
  attempts: 0,
  countdownSeconds: SESSION_DURATION,
  elapsedSeconds: 0,
  omegaReleased: false,
  omegaActive: false,
  omegaCinematicPlaying: false,
  omegaVideoSeen: false,
  threatCinematicFallbackTimer: null,
  eventVideoSeen: {
    raptor: false,
    trex: false,
    grypho: false,
    dilo: false,
    herd: false,
    anky: false,
    stego: false,
    compi: false,
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
    lastEscalationAt: SESSION_DURATION,
    lastPressureAt: SESSION_DURATION,
    lastMajorEventAt: SESSION_DURATION,
    nextRandomEventAt: SESSION_DURATION - 60,
    nextAmbientIncidentAt: SESSION_DURATION - 90,
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
      raptor: SESSION_DURATION,
      trex: SESSION_DURATION,
      grypho: SESSION_DURATION,
      chimera: SESSION_DURATION,
    },
    cooldown: 0,
    activePuzzle: "none",
  },
  guide: {
    objectiveKey: "power",
    lastProgressAt: SESSION_DURATION,
    lastHintAt: SESSION_DURATION,
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
    grypho: false,
    dilo: false,
    barrier: false,
    herd: false,
    anky: false,
    stego: false,
    compi: false,
    omega: false,
    collapse: false,
    chimeraHint: false,
  },
  deferredEvents: {},
  narrative: {
    nextAmbientAt: SESSION_DURATION - 120,
    lastPlayedAt: SESSION_DURATION,
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
  rotorProtocols: {},
  rotorSystem: {
    protocoloActivo: null,
    rotores: [],
    savedDigits: "",
    expectedCode: "",
    generatedCode: "",
    alignedRotors: [],
    listeners: {
      send: 0,
      cards: 0,
    },
    estadoActual: "idle",
    sessionId: 0,
  },
  protocoloActivo: null,
  savedDigits: "",
  rotorValues: [],
  expectedCode: "",
  generatedCode: "",
  cipherHelper: {
    target: "raptor",
    letter: "A",
    shift: 1,
    rotors: [],
    activeRotorIndex: 0,
    buffer: "",
  },
};

function setGameState(nextState, reason = "sin motivo") {
  if (state.gameState === nextState) return false;
  const oldState = state.gameState;
  state.gameState = nextState;
  console.log("STATE CHANGE", oldState, "→", nextState, reason);
  return true;
}

function isGameplayActive() {
  return state.gameState === "playing";
}

function blockIntroDuringGameplay(reason) {
  if (!isGameplayActive()) return false;
  console.warn(`Bloqueado regreso a intro durante gameplay: ${reason}`);
  return true;
}

function getSafeGameplayFocusTarget() {
  if (isPuzzleActive()) {
    const activeRotorDial = cipherConsole?.querySelector(".cipher-rotor.is-active .cipher-rotor__dial");
    if (activeRotorDial instanceof HTMLElement) return activeRotorDial;
    if (focusCipherAppendButton instanceof HTMLElement) return focusCipherAppendButton;
  }
  if (input instanceof HTMLElement) return input;
  return document.body;
}

function focusSafeGameplayElement() {
  if (!isGameplayActive()) return;
  window.requestAnimationFrame(() => {
    const target = getSafeGameplayFocusTarget();
    target?.focus?.({ preventScroll: true });
  });
}

function logOverlayAction(action, overlay) {
  console.log("OVERLAY", {
    action,
    overlayId: overlay?.id || null,
    gameState: state.gameState,
    activeElement: document.activeElement?.id || document.activeElement?.tagName,
  });
}

function isStartupOverlay(overlay) {
  return overlay === introOverlay || overlay === bootOverlay || overlay === trainingOverlay;
}

function hideOverlaySafely(overlay) {
  if (!overlay) return false;
  logOverlayAction("hide", overlay);
  const activeElement = document.activeElement;
  if (activeElement instanceof HTMLElement && overlay.contains(activeElement)) {
    activeElement.blur();
  }
  overlay.inert = true;
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
  if (isGameplayActive()) focusSafeGameplayElement();
  return true;
}

function showOverlaySafely(overlay, { requiresInteraction = false, focusElement = null } = {}) {
  if (!overlay) return false;
  if (isGameplayActive() && isStartupOverlay(overlay)) {
    logOverlayAction("blocked-show", overlay);
    console.warn(`Bloqueado overlay inicial durante gameplay: ${overlay.id}`);
    focusSafeGameplayElement();
    return false;
  }
  logOverlayAction("show", overlay);
  overlay.classList.remove("hidden");
  overlay.inert = false;
  overlay.setAttribute("aria-hidden", "false");
  if (!isGameplayActive() || requiresInteraction) {
    const target = focusElement || overlay.querySelector("button, input, [tabindex]:not([tabindex='-1'])");
    if (target instanceof HTMLElement) {
      window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
    }
  }
  return true;
}

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
  // Every established dinosaur event participates in every session. Profiles
  // still control the order and pressure, but no species is silently omitted.
  const plannedEvents = ["raptor", "trex", "grypho", "omega", "dilo", "barrier", "herd", "anky", "stego", "compi"];
  const allVariableEvents = ["dilo", "barrier", "herd", "anky", "stego", "compi"];
  return {
    profile,
    plannedEvents,
    skippedEvents: [],
    eventWeights: profile.weights,
    attackGoals: {
      raptor: randomDigit(profile.attackGoals.raptor[0], profile.attackGoals.raptor[1]),
      trex: randomDigit(profile.attackGoals.trex[0], profile.attackGoals.trex[1]),
      grypho: randomDigit(profile.attackGoals.grypho[0], profile.attackGoals.grypho[1]),
      chimera: randomDigit(profile.attackGoals.chimera[0], profile.attackGoals.chimera[1]),
    },
    omegaEarliestAt: randomDigit(profile.omegaWindow[1] * 2, profile.omegaWindow[0] * 2),
    omegaForceAt: randomDigit(600, 860),
    nextRandomEventAt: SESSION_DURATION - randomDigit(55, 85),
  };
}

function isEventPlanned(key) {
  return state.director.plannedEvents.includes(key);
}

function getCriticalThreatKey(key) {
  if (key === "omega" || key === "chimera") return "chimera";
  if (key === "grypho") return "grypho";
  if (key === "raptor" || key === "trex") return key;
  return null;
}

function getThreatCooldownDuration(threatKey) {
  const phase = getDirectorPhase();
  const profileKey = state.director.profile?.key;
  const base = {
    raptor: profileKey === "tactical" ? 58 : 48,
    trex: profileKey === "structural" ? 68 : 78,
    grypho: profileKey === "hybrid" ? 52 : 64,
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
  if (wasThreatRecent(threatKey, threatKey === "chimera" || threatKey === "grypho" ? 2 : 1)) return false;
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

function createEscapeOpportunitySchedule() {
  return [
    { id: "early", threshold: randomDigit(720, 960), triggered: false },
    { id: "final", threshold: randomDigit(180, 360), triggered: false },
  ];
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
  const rotors = state.rotorSystem?.rotores?.length ? state.rotorSystem.rotores : state.cipherHelper.rotors;
  return rotors.map((rotor) => rotor.currentValue);
}

function logChimeraSession(stage = "state") {
  if (!CHIMERA_DEBUG) return;
  console.log("CHIMERA SESSION", {
    stage,
    aparicionNumero: state.chimeraBreakoutCount,
    sessionId: state.chimeraSessionId,
    protocoloActivo: state.currentProtocol,
    rotorSystemActivo: state.rotorSystem.protocoloActivo,
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
  sound.volume = Math.min(volume, SAFE_AUDIO.clone);
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
    nombre === "ambiente" ? SAFE_AUDIO.ambient :
    nombre === "intro" ? SAFE_AUDIO.intro :
    nombre === "alerta" ? SAFE_AUDIO.alert :
    SAFE_AUDIO.creature;

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
  audio.volume = Math.min(overrides.volume ?? defaultVolume, defaultVolume);
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
  return reproducirSonido("alerta", { volume: Math.min(volume, SAFE_AUDIO.alert), loop: false });
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
  state.continuousAlertActive = true;
  state.alertState = "active";
  if (Date.now() - state.lastAlertSoundAt < 12000) return Promise.resolve(false);
  state.lastAlertSoundAt = Date.now();
  return reproducirSonido("alerta", {
    volume: Math.min(volume, SAFE_AUDIO.alert),
    loop: false,
    reset: true,
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
  if (!state.powerOnline) threats.push({ key: "power", label: state.generatorDamaged ? "GENERADOR DAÑADO" : state.timelineFlags.compi ? "CABLEADO MORDIDO POR COMPIS" : "ENERGIA PRINCIPAL OFFLINE", severity: "critical" });
  if (state.generatorDamaged) threats.push({ key: "generator", label: "GENERADOR DE RESPALDO DAÑADO", severity: "critical" });
  if (state.timelineFlags.raptor && !state.raptorContained) threats.push({ key: "raptor", label: "VELOCIRAPTOR LIBERADO", severity: "critical" });
  if (state.timelineFlags.trex && !state.trexContained) threats.push({ key: "trex", label: "T-REX LIBERADO", severity: "critical" });
  if (state.gryphoActive && !state.gryphoContained) threats.push({ key: "grypho", label: "GRYPHOVENATOR ALFA EN ACECHO", severity: "alpha" });
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
  return ["raptor", "trex", "grypho", "chimera"].includes(key);
}

function getActivePrimaryThreats() {
  return getActiveThreats().filter((threat) => isPrimaryThreatKey(threat.key));
}

function hasActivePrimaryThreats() {
  return getActivePrimaryThreats().length > 0;
}

function getAlertVolumeForThreats(threats = getActiveThreats()) {
  if (threats.some((threat) => threat.severity === "omega")) return 0.86;
  if (threats.some((threat) => threat.severity === "alpha")) return 0.8;
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
  if (state.gryphoActive && !state.gryphoContained) {
    return {
      key: "grypho",
      label: "GRYPHOVENATOR ALFA",
      protocol: "GRYPHO.LOG / ALPHA-HYBRID.LOG / PREDATOR.TEST",
      severity: "alpha",
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
  return ["generator", "barrier", "dilo", "anky", "herd", "stego", "compi", "collapse", "sensors"].includes(key);
}

function getThreatNarrativeTier(key) {
  if (key === "chimera") return "climax";
  if (key === "grypho") return "alfa";
  if (key === "raptor" || key === "trex") return "principal";
  if (["dilo", "anky", "herd", "stego"].includes(key)) return "secundaria-cinematica";
  if (key === "compi") return "sistema";
  return "sistema";
}

function getThreatTierLabel(key) {
  const labels = {
    climax: "CLIMAX OMEGA",
    alfa: "AMENAZA ALFA",
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
    compi: "COMPIS AISLADOS EN SUBESTACION TEMPORALMENTE",
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
    grypho: "ALFA",
    dilo: "E-03",
    barrier: "Este",
    herd: "Sector C",
    anky: "L-05",
    stego: "Herbivoro",
    compi: "Subestacion",
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
  const canStartManually = isMinorDirectorEvent(key) || ["raptor", "trex", "grypho"].includes(key);
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
  if (key === "grypho" && !state.powerOnline) return false;
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
    grypho: state.gryphoContained,
    dilo: state.diloNeutralized,
    herd: state.herdCalmed,
    anky: state.ankyRedirected,
    stego: state.stegoAnalyzed,
    compi: state.timelineFlags.compi && state.powerOnline,
  };
  return Boolean(resolved[key]);
}

function ensureEventVideoForFile(eventKey) {
  if (!threatCinematicConfig[eventKey] || state.gameOver || state.escaped || state.omegaCinematicPlaying) return false;
  if (!isEventPlanned(eventKey)) return false;
  if (isEventResolved(eventKey) || state.eventVideoSeen[eventKey]) return false;
  if (!canLaunchCriticalThreat(eventKey)) return false;
  if (["raptor", "trex", "grypho", "dilo", "herd", "anky", "stego"].includes(eventKey) && !state.powerOnline) return false;
  if (getActiveMajorThreat()) return false;
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
    "GRYPHO.LOG": "grypho",
    "ALPHA-HYBRID.LOG": "grypho",
    "PREDATOR.TEST": "grypho",
    "ALPHA-CONTAINMENT.LOG": "grypho",
    "OMEGA-PROTOTYPE.LOG": "grypho",
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

function scheduleGryphoReappearance() {
  state.gryphoReappearAt = state.countdownSeconds - randomDigit(44, 78);
  state.director.threatCooldownUntil.grypho = Math.min(state.director.threatCooldownUntil.grypho, state.gryphoReappearAt);
  addLine("ALFA no abandona el sector: sensores registran rutas falsas y silencio térmico.", "warning");
  return true;
}

function triggerGryphoTacticalEffects(stage = "stalk") {
  const sectors = ["R-01", "C-07", "L-05", "Subnivel V-02", "Pasillo Norte", "Mantenimiento Este"];
  const fakeSector = pickRandomItem(sectors);
  const realSector = pickRandomItem(sectors.filter((sector) => sector !== fakeSector));
  state.gryphoSabotageUntil = state.countdownSeconds - randomDigit(36, 58);
  applyDeterioration({ damage: 2, bio: 3, stability: -4, energy: -3 });
  triggerVisualGlitchBurst(stage === "cinematic" ? "severe" : "normal");
  clonePlay(dinoSounds.garras, 0.42);
  setCurrentAlert(`ALFA: camaras apagadas en ${fakeSector}. Lectura real probable: ${realSector}.`, "error");
  addLine("ALFA // CAMARAS APAGADAS: imagen perdida en tres nodos consecutivos.", "error");
  addLine(`ALFA // FALSAS LECTURAS: firma termica duplicada en ${fakeSector}.`, "warning");
  addLine(`ALFA // MOVIMIENTO ENTRE SECTORES: paso silencioso confirmado hacia ${realSector}.`, "warning");
  addLine("ALFA // RUTA SABOTEADA: corredores secundarios bloqueados por puertas manipuladas.", "warning");
}

function processGryphoStalk() {
  if (!state.gryphoActive || state.gryphoContained || state.gameOver || state.escaped || state.omegaCinematicPlaying) return;
  if (state.countdownSeconds % 9 === 0) triggerVisualGlitchBurst("normal");
  if (state.countdownSeconds % 13 === 0) clonePlay(dinoSounds.garras, 0.36);
  if (state.countdownSeconds % 17 === 0) {
    const phrases = [
      "ALFA: pasos lejanos detectados; origen imposible de triangular.",
      "ALFA: sensor de movimiento devuelve dos ubicaciones incompatibles.",
      "ALFA: camara recuperada sin imagen, solo marcas de garra en la carcasa.",
      "ALFA: corredor bloqueado desde dentro; no hay lectura de masa suficiente.",
    ];
    currentAlertText.textContent = pickRandomItem(phrases);
    applyDeterioration({ damage: 1, bio: 1, stability: -1, energy: -1 });
  }
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
    return;
  }
  if (
    state.gryphoReappearAt !== null &&
    state.countdownSeconds <= state.gryphoReappearAt &&
    state.gryphoContained &&
    state.gryphoStalkCount < state.director.attackGoals.grypho
  ) {
    if (!canLaunchCriticalThreat("grypho")) {
      state.gryphoReappearAt = state.countdownSeconds - randomDigit(18, 30);
      triggerAmbientIncident();
      return;
    }
    state.gryphoReappearAt = null;
    state.gryphoContained = false;
    state.gryphoActive = true;
    state.eventVideoSeen.grypho = false;
    activateDirectorEvent("grypho");
  }
}

function maintainMajorThreatMode() {
  const major = getActiveMajorThreat();
  if (!major || state.gameOver || state.escaped) {
    detenerAlertaSoloSiNoHayAmenazasActivas();
    return;
  }

  const message = major.key === "grypho"
    ? `AMENAZA ALFA: ${major.label}. Protocolo activo: ${major.protocol}. Sensores no confiables.`
    : `PRIORIDAD ABSOLUTA: ${major.label}. Protocolo activo: ${major.protocol}.`;
  showAlertPanel(message, major.severity === "omega" ? "critical" : "critical");
  currentAlertText.textContent = message;
  startContinuousAlert(major.severity === "omega" ? 0.86 : 0.72);

  if (major.key === "chimera") {
    if (state.countdownSeconds % 6 === 0) triggerVisualGlitchBurst("severe");
    if (state.countdownSeconds % 10 === 0) reproducirGarrasAleatorio(true);
  } else if (major.key === "grypho") {
    processGryphoStalk();
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
  if (state.escapeWindowActive && state.currentEscapeRoute && mode !== "off") {
    const secondsLeft = Math.max(0, state.countdownSeconds - (state.escapeOpportunity.deadlineAt ?? state.countdownSeconds));
    showEscapeOpportunityOverlay(state.currentEscapeRoute, secondsLeft, getEscapeOpportunityMessage(state.currentEscapeRoute, state.escapeOpportunity.activeType));
    return;
  }
  if (state.alertPanelTimer) {
    window.clearTimeout(state.alertPanelTimer);
    state.alertPanelTimer = null;
  }
  systemAlertPanel.classList.remove("hidden", "system-alert--active", "system-alert--critical", "system-alert--controlled", "system-alert--off", "system-alert--escape");
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
  systemAlertPanel.classList.remove("system-alert--active", "system-alert--critical", "system-alert--controlled", "system-alert--escape");
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
  if (toggleNarrativeMuteButton) {
    toggleNarrativeMuteButton.textContent = state.narrativeMuted ? "Activar relatos" : "Silenciar relatos";
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

function toggleNarrativeMute() {
  state.narrativeMuted = !state.narrativeMuted;
  if (state.narrativeMuted) {
    state.narrative.queue = state.narrative.queue.filter((item) => item.options?.channel !== "ambient-narrative");
    if (state.narrative.current?.options?.channel === "ambient-narrative") {
      window.speechSynthesis?.cancel();
      state.narrative.isSpeaking = false;
      state.narrative.current = null;
      state.audio.currentSpeech = null;
      state.audio.speechPriority = "low";
      restoreAudioMixAfterSpeech();
    }
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
  const safeSpeechVolume = priority === "critical" ? SAFE_AUDIO.speechAlert : priority === "high" ? 0.3 : SAFE_AUDIO.narrative;
  utterance.volume = Math.min(options.volume ?? safeSpeechVolume, safeSpeechVolume);
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
  setGameState("intro", "initializeScenario");
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
  state.narrativeMuted = false;
  state.powerOnline = false;
  state.generatorDamaged = false;
  state.generatorRepaired = false;
  state.raptorContained = false;
  state.trexContained = false;
  state.gryphoContained = false;
  state.gryphoActive = false;
  state.gryphoCode = "";
  state.gryphoRotors = [];
  state.gryphoRotorLockUntil = 0;
  state.evacuationOverride = {
    target: null,
    codes: {},
    rotors: {},
    solved: {},
  };
  state.raptorAttackCount = 0;
  state.trexAttackCount = 0;
  state.gryphoStalkCount = 0;
  state.gryphoReappearAt = null;
  state.gryphoSabotageUntil = null;
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
  state.escapeWindowActive = false;
  state.currentEscapeRoute = null;
  state.escapeOpportunity = {
    count: 0,
    required: 2,
    activeId: null,
    activeType: null,
    deadlineAt: null,
    schedule: createEscapeOpportunitySchedule(),
    failedRoutes: [],
    usedRoutes: [],
    lastResortUsed: false,
  };
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
  state.finalExitReady = false;
  state.alertsSilencedUntil = 0;
  state.continuousAlertActive = false;
  state.lastAlertSoundAt = 0;
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
  state.countdownSeconds = SESSION_DURATION;
  state.elapsedSeconds = 0;
  state.omegaReleased = false;
  state.omegaActive = false;
  state.omegaCinematicPlaying = false;
  state.omegaVideoSeen = false;
  if (state.threatCinematicFallbackTimer) {
    window.clearTimeout(state.threatCinematicFallbackTimer);
    state.threatCinematicFallbackTimer = null;
  }
  state.eventVideoSeen = {
    raptor: false,
    trex: false,
    grypho: false,
    dilo: false,
    herd: false,
    anky: false,
    stego: false,
    compi: false,
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
    lastEscalationAt: SESSION_DURATION,
    lastPressureAt: SESSION_DURATION,
    lastMajorEventAt: SESSION_DURATION,
    nextRandomEventAt: directorPlan.nextRandomEventAt,
    nextAmbientIncidentAt: SESSION_DURATION - randomDigit(35, 70),
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
      raptor: SESSION_DURATION,
      trex: SESSION_DURATION,
      grypho: SESSION_DURATION,
      chimera: SESSION_DURATION,
    },
    cooldown: 0,
    activePuzzle: "none",
  };
  initializeEscapeRoutesForPlan();
  state.guide = {
    objectiveKey: "power",
    lastProgressAt: SESSION_DURATION,
    lastHintAt: SESSION_DURATION,
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
    grypho: false,
    dilo: false,
    barrier: false,
    herd: false,
    anky: false,
    stego: false,
    compi: false,
    omega: false,
    collapse: false,
    chimeraHint: false,
  };
  state.deferredEvents = {};
  state.narrative = {
    nextAmbientAt: SESSION_DURATION - randomDigit(110, 190),
    lastPlayedAt: SESSION_DURATION,
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
  state.gryphoCode = `${randomDigit()}${randomDigit()}${randomDigit()}`;
  state.rotorProtocols = Object.fromEntries(Object.keys(ROTOR_PROTOCOLS).map((key) => [key, {
    code: `${randomDigit()}${randomDigit()}${randomDigit()}`,
    shifts: [randomDigit(2, 6), randomDigit(2, 6), randomDigit(2, 6)],
  }]));
  state.evacuationOverride.codes = {
    main: `${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}`,
    helipad: `${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}`,
    tunnel: `${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}`,
    cargo: `${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}`,
  };
  generateChimeraCode();
  state.raptorRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  state.trexRotors = [randomDigit(1, 4), randomDigit(1, 4), randomDigit(1, 4)];
  state.diloRotors = [randomDigit(2, 5), randomDigit(2, 5), randomDigit(2, 5)];
  state.gryphoRotors = [randomDigit(3, 7), randomDigit(3, 7), randomDigit(3, 7)];
  state.evacuationOverride.rotors = {
    main: [randomDigit(3, 6), randomDigit(2, 6), randomDigit(3, 7), randomDigit(2, 5)],
    helipad: [randomDigit(4, 7), randomDigit(3, 7), randomDigit(4, 8), randomDigit(3, 6)],
    tunnel: [randomDigit(2, 5), randomDigit(4, 8), randomDigit(3, 6), randomDigit(4, 7)],
    cargo: [randomDigit(3, 7), randomDigit(3, 6), randomDigit(4, 8), randomDigit(2, 6)],
  };
  state.evacuationOverride.solved = {
    main: false,
    helipad: false,
    tunnel: false,
    cargo: false,
  };
  state.rotorSystem = {
    protocoloActivo: null,
    rotores: [],
    savedDigits: "",
    expectedCode: "",
    generatedCode: "",
    alignedRotors: [],
    listeners: {
      send: rotorContainmentListenerAttached ? 1 : 0,
      cards: 6,
    },
    estadoActual: "idle",
    sessionId: 0,
  };
  syncLegacyRotorState();
  setCipherTarget("raptor");
  stopAmbient();
  hideAlertPanel();
  if (introOverlay) introOverlay.inert = false;
  if (bootOverlay) bootOverlay.inert = true;
  if (trainingOverlay) trainingOverlay.inert = true;
  if (escapeOverlay) {
    escapeOverlay.className = "escape-overlay";
    hideOverlaySafely(escapeOverlay);
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
    omegaOverlay.className = "omega-overlay";
    hideOverlaySafely(omegaOverlay);
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
  const routeKey = getRouteKeyFromCipherTarget(target);
  const rotorProtocol = state.rotorProtocols?.[target];
  const codeByTarget = {
    raptor: state.raptorCode,
    trex: state.trexCode,
    grypho: state.gryphoCode,
    dilo: state.diloCode,
    chimera: chimeraDigits,
  };
  const shiftsByTarget = {
    raptor: state.raptorRotors,
    trex: state.trexRotors,
    grypho: state.gryphoRotors,
    dilo: state.diloRotors,
    chimera: state.chimeraRotors,
  };
  const code = (routeKey ? state.evacuationOverride.codes[routeKey] : rotorProtocol?.code) || codeByTarget[target] || state.raptorCode;
  const shifts = (routeKey ? state.evacuationOverride.rotors[routeKey] : rotorProtocol?.shifts) || shiftsByTarget[target] || state.raptorRotors;
  return code.split("").map((digit, index) => {
    const letter = encodeRotorLetter(digit, shifts[index]);
    return {
      label: `ROTOR ${["I", "II", "III", "IV"][index]}`,
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
  const [g1, g2, g3] = state.gryphoCode.split("");
  const [d1, d2, d3] = state.diloCode.split("");
  const [rr1, rr2, rr3] = state.raptorRotors;
  const [tr1, tr2, tr3] = state.trexRotors;
  const [gr1, gr2, gr3] = state.gryphoRotors;
  const [dr1, dr2, dr3] = state.diloRotors;
  const [cr1, cr2, cr3] = state.chimeraRotors;
  const routeRotorLines = (routeKey) => {
    const routeNames = { main: "PUERTA NORTE", helipad: "HELIPUERTO", tunnel: "TUNEL", cargo: "TRANSPORTE" };
    const code = state.evacuationOverride.codes[routeKey] || "0000";
    const shifts = state.evacuationOverride.rotors[routeKey] || [1, 1, 1, 1];
    return code.split("").map((digit, index) => {
      const letter = encodeRotorLetter(digit, shifts[index]);
      return `ROTOR ${routeNames[routeKey]} ${["I", "II", "III", "IV"][index]}: ${letter} = ${letterIndex(letter)} // resta ${shifts[index]}`;
    });
  };
  const rotorProtocolLines = (key) => {
    const protocol = state.rotorProtocols[key];
    if (!protocol) return [];
    return protocol.code.split("").map((digit, index) => {
      const shift = protocol.shifts[index];
      const letter = encodeRotorLetter(digit, shift);
      return `ROTOR ${["I", "II", "III"][index]}: ${letter} = ${letterIndex(letter)} // resta ${shift}`;
    });
  };
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
      "5. Neutraliza Gryphovenator ALFA sin activar OMEGA.",
      "6. Estabiliza el Sector C tras la pelea de Triceratops.",
      "7. Redirige al Ankylosaurus fuera del corredor logistico.",
      "8. Analiza crisis biologica del Estegosaurus si aparece.",
      "9. Sobrevive a la activacion OMEGA.",
      "10. Sincroniza rotores CHIMERA y contén al híbrido.",
      "11. Abre la salida y evacua antes del colapso total.",
    ],
    "POWER.LOG": [
      "SUBESTACION OESTE // ENERGIA PRINCIPAL",
      "La energia alimenta terminal, rotores, barreras y compuerta norte.",
      "OBJETIVO: restaurar suministro antes de ejecutar contenciones.",
      "La restauración usa tres rotores de emergencia.",
      ...rotorProtocolLines(state.timelineFlags.compi ? "compi" : "power"),
      "Alinea, guarda cada rotor y pulsa Enviar contención.",
    ],
    "GENERATOR.LOG": [
      "GENERADOR DE RESPALDO // ESTADO DE EMERGENCIA",
      "El generador mantiene barreras y puertas cuando la subestacion falla.",
      "Si permanece dañado, el daño del laboratorio sube con mayor rapidez.",
      "La reparación usa tres rotores de emergencia.",
      ...rotorProtocolLines("generator"),
      "Alinea, guarda cada rotor y pulsa Enviar contención.",
      "Nota: si el generador cae, la red de contencion volvera a inestabilizarse.",
    ],
    "BARRIER.SYS": [
      "CONTENCION // BARRERAS PARCIALES",
      "Las barreras son puertas y cercos magneticos entre sectores.",
      "Si una barrera falla, los sectores comprometidos aumentan daño y riesgo biologico.",
      "OBJETIVO: restaurar contencion secundaria antes de abrir salida.",
      "La restauración usa tres rotores de emergencia.",
      ...rotorProtocolLines("barrier"),
      "Alinea, guarda cada rotor y pulsa Enviar contención.",
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
    "GRYPHO.LOG": [
      "GRYPHO.LOG // AMENAZA ALFA",
      "Sujeto: Gryphovenator.",
      "Composicion: Suchomimus / Velociraptor / ave del terror.",
      "Clasificacion: ALFA. No es OMEGA.",
      "Conducta: caza silenciosa, lectura tactica, manipulacion de rutas y sensores.",
      "No busca destruir todo; busca que el operador dude de cada lectura.",
      "Protocolo recomendado: aislar señuelos termicos, bloquear corredores variables y cargar ALPHA-CONTAINMENT.LOG.",
      "Contencion: sincronizacion por rotores ALFA; no escribir claves manuales.",
    ],
    "ALPHA-HYBRID.LOG": [
      "ALPHA-HYBRID.LOG // PRIMER HIBRIDO EXITOSO",
      "Gryphovenator demostro que la mezcla genetica podia obedecer una arquitectura depredadora estable.",
      "Suchomimus aporto alcance y tolerancia acuatica.",
      "Velociraptor aporto aprendizaje, memoria de rutas y respuesta a patrones humanos.",
      "Ave del terror aporto persecucion vertical, golpe de pico y silencio en trayectos cortos.",
      "Resultado: cazador perfecto, tactico y dominante.",
      "Nota directiva: ALFA demuestra exito cientifico; OMEGA estudiara escala y supremacia.",
    ],
    "PREDATOR.TEST": [
      "PREDATOR.TEST // EVALUACION DE CAZA",
      "Prueba 07: el sujeto apago dos camaras sin dañar el cableado principal.",
      "Prueba 11: genero lecturas falsas en tres sensores termicos usando movimiento alternado entre sectores.",
      "Prueba 14: bloqueo un corredor y reaparecio detras del equipo de seguimiento.",
      "Conclusion: no responde como Raptor ni como T-Rex. No persigue siempre; infiltra, espera y corta rutas.",
      "Medida operativa: no confiar en una sola lectura. Confirmar con ALPHA-HYBRID.LOG y cargar ALPHA-CONTAINMENT.LOG.",
    ],
    "ALPHA-CONTAINMENT.LOG": [
      "ALPHA-CONTAINMENT.LOG // PROTOCOLO DE CONTENCION ALFA",
      "El Gryphovenator altera sensores durante la sincronizacion; usa redundancia optica y guarda rotores en orden.",
      "PASOS: alinea cada rotor ALFA, guarda cada etapa y pulsa Enviar contención.",
      "Diferencia: los rotores ALFA usan resta mas amplia y toleran menos improvisacion que R-01 o C-07.",
      `ROTOR ALFA I: ${encodeRotorLetter(g1, gr1)} = ${letterIndex(encodeRotorLetter(g1, gr1))} // resta ${gr1}`,
      `ROTOR ALFA II: ${encodeRotorLetter(g2, gr2)} = ${letterIndex(encodeRotorLetter(g2, gr2))} // resta ${gr2}`,
      `ROTOR ALFA III: ${encodeRotorLetter(g3, gr3)} = ${letterIndex(encodeRotorLetter(g3, gr3))} // resta ${gr3}`,
      "Validacion interna: no escribas el codigo. El modulo de rotores construye la contencion ALFA.",
      "Advertencia: OMEGA permanece separado. Este protocolo no libera ni contiene Chimerasaurus.",
    ],
    "OMEGA-PROTOTYPE.LOG": [
      "OMEGA-PROTOTYPE.LOG // PRECURSOR",
      "Gryphovenator fue la base conceptual del proyecto Chimerasaurus.",
      "ALFA probo inteligencia depredadora y control parcial.",
      "Chimerasaurus probo la perdida total de control.",
      "Diferencia critica: Gryphovenator sabotea y caza; Chimerasaurus colapsa la instalacion.",
      "Advertencia: no activar OMEGA por contacto ALFA. Mantener protocolos separados.",
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
      "El protocolo TRI usa tres rotores de balizas.",
      ...rotorProtocolLines("herd"),
      "Alinea, guarda cada rotor y pulsa Enviar contención.",
    ],
    "ANKY.LOG": [
      "CORREDOR L-05 // REDIRECCION DE ANKYLOSAURUS",
      "El corredor L-05 conecta laboratorio y ruta exterior. Debe despejarse antes de evacuar.",
      "La masa del ejemplar esta forzando puertas y sensores de carga.",
      "El desvío usa tres rotores de balizas logísticas.",
      ...rotorProtocolLines("anky"),
      "Alinea, guarda cada rotor y pulsa Enviar contención.",
    ],
    "ANKY.KEY": [
      "ALIAS DE LEGADO // CONSULTA ANKY.LOG",
      "Consulta ANKY.LOG para cargar los rotores de desvío.",
    ],
    "STEGO.LOG": [
      "SECTOR HERBIVORO // ESTEGOSAURUS ENFERMO",
      "Temperatura irregular, placas dorsales opacas y patron respiratorio anomalo.",
      "Riesgo: contaminacion genetica progresiva si se mezcla con muestras del laboratorio.",
      "No aplicar contención agresiva. El aislamiento usa tres rotores.",
      ...rotorProtocolLines("stego"),
      "Alinea, guarda cada rotor y pulsa Enviar contención.",
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
      "OVERRIDE MANUAL // PUERTA DE EVACUACION LAB-B",
      "La puerta principal ya no responde a desbloqueo administrativo.",
      "Forzar salida requiere cuatro rotores: potencia de sello, bisagra magnetica, presión hidráulica y cierre posterior.",
      state.escapeRoutes.main.lost ? "ESTADO: puerta principal deformada. Usa una ruta alternativa." : "ESTADO: ruta principal recuperable.",
      "COMANDO DE CARGA: unlock door DOOR-LOCK-42",
      ...routeRotorLines("main"),
      state.omegaReleased ? "OMEGA altera el margen: no tardes despues de sincronizar." : "Advertencia: el override no abre una salida segura si hay amenaza principal activa.",
    ],
    "HELIPAD.SYS": [
      "OVERRIDE MANUAL // HELIPUERTO // AZOTEA NORTE",
      state.escapeRoutes.helipad.planned ? "Ruta alternativa registrada por el Director." : "Ruta no priorizada en esta sesión.",
      "Los cuatro rotores controlan energia de plataforma, autorización aérea, estabilización y balizas de aterrizaje.",
      "Visual esperado: viento, luces rojas y radio fallando.",
      "COMANDO DE CARGA: activate helipad",
      ...routeRotorLines("helipad"),
    ],
    "TUNNEL.SYS": [
      "OVERRIDE MANUAL // TUNEL DE EMERGENCIA // SUBNIVEL V-02",
      state.escapeRoutes.tunnel.planned ? "Ruta secundaria disponible si ventilación se mantiene limpia." : "Ruta sin lectura operativa esta sesión.",
      "Los cuatro rotores controlan presión, ventilación, compuertas y drenaje de emergencia.",
      "Visual esperado: vapor, oscuridad y alarmas mecánicas.",
      "COMANDO DE CARGA: open tunnel",
      ...routeRotorLines("tunnel"),
    ],
    "CARGO.SYS": [
      "OVERRIDE MANUAL // TRANSPORTE DE CARGA // HANGAR L-05",
      state.escapeRoutes.cargo.planned ? "Vehículo interno recuperable para evacuación." : "Hangar no asignado como salida prioritaria.",
      "Los cuatro rotores controlan encendido manual, liberación magnética, combustible y tracción de emergencia.",
      "Visual esperado: motores, chispas y energía inestable.",
      "COMANDO DE CARGA: start cargo",
      ...routeRotorLines("cargo"),
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
  grypho: {
    sector: "SECTOR ALFA // RUTAS VARIABLES",
    name: "Gryphovenator",
    image: "Dinosaurios/Creatacico/Velociraptor.jpeg",
    status: () => state.gryphoActive && !state.gryphoContained ? "ACECHO ACTIVO" : state.gryphoContained ? "NEUTRALIZADO" : "SIN CONTACTO",
    risk: () => state.gryphoActive && !state.gryphoContained ? "ALFA" : "EXTREMO",
    activity: () => state.gryphoActive && !state.gryphoContained ? "SENSORES MANIPULADOS" : "LECTURA INTERMITENTE",
    traits: () => "Hibrido Suchomimus / Velociraptor / ave del terror; tactico, silencioso y evasivo.",
    riskLevel: () => "Nivel ALFA: depredador avanzado, superior a Raptor y T-Rex en inteligencia situacional.",
    description: () => state.gryphoActive && !state.gryphoContained
      ? "No destruye el laboratorio: apaga camaras, crea lecturas falsas, bloquea corredores y reaparece entre sectores."
      : "Primer hibrido exitoso y precursor conceptual del proyecto OMEGA.",
    incidents: () => [
      "ALPHA-07 // Camaras apagadas sin daño fisico al cableado.",
      "PREDATOR-11 // Tres lecturas termicas falsas durante persecucion silenciosa.",
      "OMEGA-PROTOTYPE // Base conceptual del Chimerasaurus.",
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
  if (state.countdownSeconds <= 720 || state.damageInstalacion >= 55) return 4;
  if (state.countdownSeconds <= 1080 || state.damageInstalacion >= 40) return 3;
  if (state.countdownSeconds <= 1440 || state.riesgoBiologico >= 38) return 2;
  return 1;
}

function setPuzzleVisibility(mode) {
  if (state.chimeraActive && mode !== "chimera" && mode !== "none") {
    mode = "chimera";
  }
  state.director.activePuzzle = mode;
  if (!cipherConsole) return;
  const shouldShow = ["raptor", "trex", "grypho", "dilo", "chimera", ...Object.keys(ROTOR_PROTOCOLS), "evac-main", "evac-helipad", "evac-tunnel", "evac-cargo"].includes(mode);
  cipherConsole.classList.toggle("hidden", !shouldShow);
  if (shouldShow) {
    preservePuzzleViewport(1200);
  }
}

function isPuzzleActive() {
  return ["raptor", "trex", "grypho", "dilo", "chimera", ...Object.keys(ROTOR_PROTOCOLS), "evac-main", "evac-helipad", "evac-tunnel", "evac-cargo"].includes(state.director.activePuzzle) && !cipherConsole?.classList.contains("hidden");
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
  state.countdownSeconds = clamp(state.countdownSeconds + reward.time, 0, SESSION_DURATION);
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
    isEventPlanned("grypho") && state.gryphoActive && !state.gryphoContained,
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
  if (key === "grypho") {
    applyDeterioration({ damage: 1, bio: 3, stability: -4, energy: -2 });
    addLine("ALFA altera rutas sin colapso estructural: el laboratorio sigue en pie, pero las lecturas no son confiables.", "warning");
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
  if (state.finalExitReady) {
    objectiveText.textContent = "30:00 COMPLETADOS. Ruta final cargada: sincroniza los 4 rotores del túnel para concluir.";
    return;
  }
  if (state.escapeWindowActive && state.currentEscapeRoute) {
    const secondsLeft = Math.max(0, state.countdownSeconds - (state.escapeOpportunity.deadlineAt ?? state.countdownSeconds));
    objectiveText.textContent = `OPORTUNIDAD DE ESCAPE: ${getEscapeRouteName(state.currentEscapeRoute)}. Tiempo disponible ${formatCountdown(secondsLeft)}. Sincroniza y guarda cuatro rotores para escapar.`;
    return;
  }
  const major = getActiveMajorThreat();
  if (major) {
    objectiveText.textContent = `PRIORIDAD ABSOLUTA: ${major.label}. Ignora ruido secundario y completa ${major.protocol}.`;
    return;
  }
  if (!state.powerOnline) {
    if (state.timelineFlags.compi) {
      objectiveText.textContent = "SIGUIENTE PASO: abre POWER.LOG. Aísla a los Compis con los 3 rotores de subestación.";
      return;
    }
    objectiveText.textContent = state.generatorDamaged
      ? "SIGUIENTE PASO: abre GENERATOR.LOG. Después alinea los 3 rotores y pulsa Confirmar protocolo."
      : "SIGUIENTE PASO: pulsa VER ARCHIVOS, abre POWER.LOG y alinea los 3 rotores.";
    return;
  }
  if (state.timelineFlags.raptor && !state.raptorContained) {
    objectiveText.textContent = "SIGUIENTE PASO: abre RAPTOR.KEY. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.timelineFlags.trex && !state.trexContained) {
    objectiveText.textContent = "SIGUIENTE PASO: abre TREX.KEY. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.gryphoActive && !state.gryphoContained) {
    objectiveText.textContent = "SIGUIENTE PASO: abre ALPHA-CONTAINMENT.LOG. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.timelineFlags.dilo && !state.diloNeutralized) {
    objectiveText.textContent = "SIGUIENTE PASO: abre TOXIN.KEY. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.timelineFlags.barrier && !state.barriersRestored) {
    objectiveText.textContent = "SIGUIENTE PASO: abre BARRIER.SYS. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.timelineFlags.herd && !state.herdCalmed) {
    objectiveText.textContent = "SIGUIENTE PASO: abre TRICERATOPS.LOG. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.timelineFlags.anky && !state.ankyRedirected) {
    objectiveText.textContent = "SIGUIENTE PASO: abre ANKY.LOG. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.timelineFlags.stego && !state.stegoAnalyzed) {
    objectiveText.textContent = "SIGUIENTE PASO: abre STEGO.LOG. Gira, guarda los 3 rotores y confirma el protocolo.";
    return;
  }
  if (state.omegaReleased && !state.escaped) {
    objectiveText.textContent = state.chimeraContained
      ? !canAttemptEvacuationOverride()
        ? "Amenaza principal activa. Contén el peligro actual antes de forzar la salida."
        : !hasAnyEscapeRouteAvailable()
        ? "Fuerza una ruta con override manual de cuatro rotores: DOOR.SYS, HELIPAD.SYS, TUNNEL.SYS o CARGO.SYS."
        : state.doorUnlocked
        ? `OMEGA sigue inestable, pero hay salida por ${getAvailableEscapeRouteName() || "ruta autorizada"}: ejecuta escape antes de la siguiente ruptura.`
        : "Chimerasaurus contenido temporalmente. Fuerza un override de evacuación antes de que vuelva a romperse."
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
    objectiveText.textContent = `Con amenazas controladas, fuerza una evacuación imposible. Revisa ${routeFiles[routeKey] || "DOOR.SYS"} y sincroniza 4 rotores.`;
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
  if (isEventPlanned("grypho") && state.gryphoStalkCount < state.director.attackGoals.grypho) {
    blockers.push("Gryphovenator ALFA");
  }
  if (state.chimeraBreakoutCount < state.director.attackGoals.chimera) {
    blockers.push("Chimerasaurus");
  }
  return blockers;
}

function hasMetAttackRequirements() {
  return getAttackRequirementBlockers().length === 0;
}

function canAttemptEvacuationOverride() {
  return (state.escapeWindowActive || state.omegaReleased || state.countdownSeconds <= 480) &&
    !state.chimeraActive &&
    !state.omegaActive &&
    !state.omegaCinematicPlaying &&
    !state.gameOver;
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

function getEscapeRouteName(routeKey) {
  return {
    main: "Puerta principal",
    helipad: "Helipuerto",
    tunnel: "Túnel de emergencia",
    cargo: "Transporte de carga",
  }[routeKey] || "Ruta de escape";
}

function getEscapeOpportunityMessage(routeKey, type = "window") {
  if (type === "override") return "PUERTA PRINCIPAL PUEDE SER FORZADA MANUALMENTE.";
  if (type === "helipad") return "SEÑAL DE HELIPUERTO RESTABLECIDA.";
  if (type === "tunnel") return "RUTA SUBTERRÁNEA DISPONIBLE.";
  if (type === "last-resort") return "PROTOCOLO DE ESCAPE DE ÚLTIMO RECURSO ACTIVO.";
  if (routeKey === "helipad") return "SEÑAL DE HELIPUERTO RESTABLECIDA.";
  if (routeKey === "tunnel") return "RUTA SUBTERRÁNEA DISPONIBLE.";
  if (routeKey === "main") return "PUERTA PRINCIPAL PUEDE SER FORZADA MANUALMENTE.";
  return "RUTA DE ESCAPE DISPONIBLE POR TIEMPO LIMITADO.";
}

function getForcibleEscapeRoutes() {
  return Object.keys(state.escapeRoutes).filter((routeKey) => {
    const route = state.escapeRoutes[routeKey];
    return route?.planned && !route.lost && !route.available;
  });
}

function canCreateEscapeOpportunityNow() {
  return state.bootStarted &&
    !state.gameOver &&
    !state.escaped &&
    !state.omegaCinematicPlaying &&
    !state.cinematicStarted &&
    !state.rotorSystem.protocoloActivo &&
    !state.currentProtocol &&
    !state.chimeraActive &&
    !state.omegaActive &&
    (state.chimeraContained || state.countdownSeconds <= 480 || state.escapeOpportunity.count < state.escapeOpportunity.required);
}

function chooseEscapeRoute(preferredRoute = null) {
  if (preferredRoute && state.escapeRoutes[preferredRoute] && !state.escapeRoutes[preferredRoute].lost) return preferredRoute;
  const candidates = getForcibleEscapeRoutes().filter((routeKey) => !state.escapeOpportunity.usedRoutes.includes(routeKey));
  if (candidates.length) return pickRandomItem(candidates);
  const fallback = getForcibleEscapeRoutes();
  if (fallback.length) return pickRandomItem(fallback);
  return "tunnel";
}

function showEscapeOpportunityOverlay(routeKey, secondsAvailable, message) {
  if (!systemAlertPanel) return;
  systemAlertPanel.className = "system-alert system-alert--critical system-alert--escape";
  systemAlertState.textContent = "OPORTUNIDAD DE ESCAPE";
  systemAlertMessage.textContent = `Ruta: ${getEscapeRouteName(routeKey)} // Tiempo disponible: ${formatCountdown(secondsAvailable)} // Acción: guarda 4 rotores para escapar.`;
  currentAlertText.textContent = message;
}

function crearOportunidadEscape(tipoRuta = null) {
  if (!state.bootStarted || state.gameOver || state.escaped) return false;
  if (state.omegaCinematicPlaying || state.cinematicStarted) return false;
  if (state.rotorSystem.protocoloActivo || state.currentProtocol || state.chimeraActive || state.omegaActive) return false;
  if (state.escapeWindowActive && state.currentEscapeRoute) return true;

  const routeKey = chooseEscapeRoute(tipoRuta);
  const route = state.escapeRoutes[routeKey] || state.escapeRoutes.tunnel;
  route.planned = true;
  route.lost = false;
  route.available = false;

  state.escapeWindowActive = true;
  state.currentEscapeRoute = routeKey;
  state.escapeOpportunity.count += 1;
  state.escapeOpportunity.activeId = state.escapeOpportunity.activeId || `escape-${state.escapeOpportunity.count}`;
  state.escapeOpportunity.activeType = tipoRuta || routeKey;
  state.escapeOpportunity.deadlineAt = Math.max(0, state.countdownSeconds - (tipoRuta === "last-resort" ? 90 : 70));
  if (!state.escapeOpportunity.usedRoutes.includes(routeKey)) state.escapeOpportunity.usedRoutes.push(routeKey);

  const secondsAvailable = state.countdownSeconds - state.escapeOpportunity.deadlineAt;
  const message = getEscapeOpportunityMessage(routeKey, tipoRuta);
  addLine("⚠ OPORTUNIDAD DE ESCAPE", "error");
  addLine(message, "warning");
  addLine(`Ruta: ${getEscapeRouteName(routeKey)}. Tiempo disponible: ${formatCountdown(secondsAvailable)}.`, "success");
  addLine("Acción: sincroniza y guarda los 4 rotores de evacuación. El escape se ejecutará al guardar el cuarto.", "success");
  showEscapeOpportunityOverlay(routeKey, secondsAvailable, message);
  markProgress(routeKey === "main" ? "door" : routeKey);
  activarOverrideEvacuacion(routeKey);
  updateHud();
  return true;
}

function activarOverrideEvacuacion(ruta) {
  return loadEvacuationOverride(ruta, { forceOpportunity: true });
}

function forzarRutaAlternativa() {
  if (state.escaped || state.gameOver) return false;
  const previousRoute = state.currentEscapeRoute;
  if (previousRoute && !state.escapeOpportunity.failedRoutes.includes(previousRoute)) {
    state.escapeOpportunity.failedRoutes.push(previousRoute);
  }
  state.escapeWindowActive = false;
  state.currentEscapeRoute = null;
  state.escapeOpportunity.activeId = null;
  state.escapeOpportunity.deadlineAt = null;
  const nextRoute = chooseEscapeRoute();
  if (!state.escapeRoutes[nextRoute]) return activarEscapeUltimoRecurso();
  addLine("VENTANA DE EVACUACIÓN CERRADA. Director buscando ruta alternativa...", "warning");
  applyDeterioration({ damage: 3, bio: 1, stability: -3, energy: -2 });
  return crearOportunidadEscape(nextRoute);
}

function activarEscapeUltimoRecurso() {
  if (state.escapeOpportunity.lastResortUsed || state.escaped || state.gameOver) return false;
  state.escapeOpportunity.lastResortUsed = true;
  state.escapeRoutes.tunnel = { planned: true, available: false, lost: false };
  return crearOportunidadEscape("last-resort");
}

function processEscapeOpportunities() {
  if (!state.bootStarted || state.gameOver || state.escaped) return;
  if (state.omegaCinematicPlaying || state.cinematicStarted) return;

  if (!state.escapeWindowActive && !hasAnyEscapeRouteAvailable() && state.chimeraContained && canCreateEscapeOpportunityNow()) {
    crearOportunidadEscape();
    return;
  }

  for (const windowConfig of state.escapeOpportunity.schedule) {
    if (!windowConfig.triggered && state.countdownSeconds <= windowConfig.threshold) {
      state.escapeOpportunity.activeId = windowConfig.id;
      if (crearOportunidadEscape(windowConfig.id === "early" ? null : chooseEscapeRoute())) {
        windowConfig.triggered = true;
      }
      break;
    }
  }

  if (state.escapeWindowActive && state.currentEscapeRoute) {
    const route = state.escapeRoutes[state.currentEscapeRoute];
    if (route?.available) {
      state.escapeWindowActive = false;
      state.escapeOpportunity.activeId = null;
      state.escapeOpportunity.deadlineAt = null;
      verificarOportunidadEscape({ announce: true });
    } else if (state.escapeOpportunity.deadlineAt !== null && state.countdownSeconds <= state.escapeOpportunity.deadlineAt) {
      forzarRutaAlternativa();
    }
  }

  const allRoutesClosed = Object.values(state.escapeRoutes).every((route) => !route.available && (route.lost || !route.planned));
  if ((allRoutesClosed || state.countdownSeconds <= 75) && !hasAnyEscapeRouteAvailable() && !state.escapeWindowActive) {
    activarEscapeUltimoRecurso();
  }
}

async function resolverEvacuacion() {
  return iniciarEscapeFinal();
}

function getRouteKeyFromCipherTarget(target) {
  if (!target?.startsWith("evac-")) return null;
  return target.replace("evac-", "");
}

function getCipherTargetForRoute(routeKey) {
  return `evac-${routeKey}`;
}

function getDominantOverrideThreat() {
  if (state.omegaReleased) return "omega";
  if (state.gryphoActive || state.gryphoContained) return "grypho";
  if (state.timelineFlags.trex) return "trex";
  if (state.timelineFlags.raptor) return "raptor";
  return "standard";
}

function getRouteVisualCue(routeKey) {
  const cues = {
    main: "Sellos magneticos forzados. Luces blancas fallan contra humo de pasillo.",
    helipad: "Viento en azotea, luces rojas girando y radio cortada.",
    tunnel: "Vapor bajo presión, oscuridad intermitente y alarmas mecánicas.",
    cargo: "Motores tosiendo, chispas en rieles y energía inestable.",
  };
  return cues[routeKey] || cues.main;
}

function getOverrideThreatPattern() {
  const threat = getDominantOverrideThreat();
  const patterns = {
    raptor: "Patron RAPTOR: ventanas cortas, giro rapido y confirmacion inmediata.",
    trex: "Patron T-REX: sellos pesados, giro lento y presión estructural alta.",
    grypho: "Patron ALFA: lecturas falsas; confirma el rotor visual, no el primer sensor.",
    omega: "Patron OMEGA: colapso activo; cuatro rotores bajo margen extremo.",
    standard: "Patron ESTANDAR: sincronizacion manual completa.",
  };
  return patterns[threat] || patterns.standard;
}

function canLoadEvacuationOverride(routeKey, { forceOpportunity = false } = {}) {
  const definition = getRouteDefinitions()[routeKey];
  if (!definition) return { ok: false, message: "Override de evacuacion inexistente." };
  const route = state.escapeRoutes[routeKey];
  if (!route?.planned) return { ok: false, message: getRouteBlockedMessage(routeKey) };
  if (route.lost) return { ok: false, message: getRouteBlockedMessage(routeKey) };
  if (state.gameOver || state.escaped) return { ok: false, message: "Escenario terminado." };
  if (state.omegaCinematicPlaying || state.cinematicStarted) return { ok: false, message: "EVACUACIÓN BLOQUEADA: video crítico en curso." };
  if (state.rotorSystem.protocoloActivo && state.rotorSystem.protocoloActivo !== getCipherTargetForRoute(routeKey)) {
    return { ok: false, message: "EVACUACIÓN BLOQUEADA: protocolo de rotor activo. Termina o reinicia el módulo actual." };
  }
  if (forceOpportunity || state.escapeWindowActive || route.available) return { ok: true, message: `${definition.name}: ventana de oportunidad activa.` };
  const missing = getRouteMissingRequirements(definition);
  if (missing.length) return { ok: false, message: `${definition.name} no puede forzarse todavia: ${missing.join(", ")}.` };
  return { ok: true, message: `${definition.name}: override manual listo.` };
}

function loadEvacuationOverride(routeKey, options = {}) {
  const availability = canLoadEvacuationOverride(routeKey, options);
  if (!availability.ok) {
    addLine("EVACUACIÓN BLOQUEADA:", "warning");
    addLine(`- ${availability.message}`, "warning");
    addLine("Director buscando ruta alternativa...", "warning");
    applyCommandPenalty("standard", availability.message);
    return false;
  }
  const target = getCipherTargetForRoute(routeKey);
  state.evacuationOverride.target = routeKey;
  setCipherTarget(target);
  setPuzzleVisibility(target);
  startContinuousAlert(getDominantOverrideThreat() === "omega" ? 0.9 : 0.76);
  triggerVisualGlitchBurst(getDominantOverrideThreat() === "omega" ? "severe" : "normal");
  setCurrentAlert(`OVERRIDE MANUAL ${getRouteDefinitions()[routeKey].name} cargado. Sincroniza cuatro rotores.`, getDominantOverrideThreat() === "omega" ? "error" : "warning");
  addLine(`OVERRIDE EVAC // ${getRouteDefinitions()[routeKey].name}`, "warning");
  addLine(getRouteVisualCue(routeKey), "warning");
  addLine(getOverrideThreatPattern(), getDominantOverrideThreat() === "omega" ? "error" : "warning");
  return true;
}

async function completeEvacuationOverride(routeKey) {
  const route = state.escapeRoutes[routeKey];
  if (!route) return false;
  route.available = true;
  state.evacuationOverride.solved[routeKey] = true;
  state.doorUnlocked = true;
  state.evacuationRoute = routeKey;
  state.escapeWindowActive = false;
  state.currentEscapeRoute = null;
  state.escapeOpportunity.activeId = null;
  state.escapeOpportunity.deadlineAt = null;
  state.evacuationOverride.target = null;
  if (state.currentProtocol === getCipherTargetForRoute(routeKey)) state.currentProtocol = null;
  markProgress("escape");
  rewardRecovery(getDominantOverrideThreat() === "omega" ? "major" : "small", `${getRouteDefinitions()[routeKey].name} forzada por override`);
  detenerAlerta("SITUACION CONTROLADA // Override de evacuacion sincronizado");
  resetAllRotors();
  clearRotorProtocolSnapshot();
  setPuzzleVisibility("none");
  updateHud();
  const labels = {
    main: ["Rotores de sello sincronizados.", "Bisagra magnetica forzada.", "PUERTA NORTE ABIERTA POR OVERRIDE."],
    helipad: ["Energia de plataforma estabilizada.", "Autorizacion aerea forzada.", "HELIPUERTO DISPONIBLE BAJO VIENTO EXTREMO."],
    tunnel: ["Presion igualada.", "Ventilacion forzada.", "TUNEL DE EMERGENCIA ABIERTO ENTRE VAPOR."],
    cargo: ["Encendido manual activo.", "Liberacion magnetica completada.", "TRANSPORTE DE CARGA LISTO CON ENERGIA INESTABLE."],
  };
  await printLines(labels[routeKey] || labels.main, "success");
  addLine("Escape automático activado por override.", "success");
  return iniciarEscapeFinal();
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

function armGuaranteedFinalExit() {
  if (state.finalExitReady || state.escaped || state.gameOver) return false;
  state.finalExitReady = true;
  state.escapeRoutes.tunnel = { planned: true, available: false, lost: false };
  state.escapeWindowActive = true;
  state.currentEscapeRoute = "tunnel";
  state.escapeOpportunity.deadlineAt = null;
  state.doorUnlocked = false;
  clearRotorProtocolSnapshot();
  addLine("30:00 COMPLETADOS // RUTA FINAL GARANTIZADA ACTIVADA.", "success");
  addLine("Túnel de emergencia asegurado. Sincroniza sus 4 rotores para concluir la sesión.", "success");
  setCurrentAlert("RUTA FINAL GARANTIZADA: sincroniza los 4 rotores del túnel.", "success");
  loadEvacuationOverride("tunnel", { forceOpportunity: true });
  updateHud();
  return true;
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
  if (isEventPlanned("grypho") && !state.gryphoContained && !state.timelineFlags.grypho) candidates.push("grypho");
  if (isEventPlanned("dilo") && !state.diloNeutralized && !state.timelineFlags.dilo) candidates.push("dilo");
  if (isEventPlanned("barrier") && !state.barriersRestored && !state.timelineFlags.barrier) candidates.push("barrier");
  if (isEventPlanned("herd") && !state.herdCalmed && !state.timelineFlags.herd) candidates.push("herd");
  if (isEventPlanned("anky") && !state.ankyRedirected && !state.timelineFlags.anky) candidates.push("anky");
  if (isEventPlanned("stego") && !state.stegoAnalyzed && !state.timelineFlags.stego) candidates.push("stego");
  if (isEventPlanned("compi") && !state.timelineFlags.compi) candidates.push("compi");
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
  setNextRandomDirectorWindow(getDirectorPhase() >= 4 ? 12 : 16, getDirectorPhase() >= 4 ? 24 : 32);
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
  if (state.narrativeMuted) return false;
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
  if (state.ambientPaused || state.narrativeMuted) return false;
  state.narrative.lastPlayedAt = state.countdownSeconds;
  scheduleNextAmbientNarrative();
  addLine(`TRANSMISION RECUPERADA // ${entry.title}`, "warning");
  addLine(`${entry.source}: ${entry.text}`, "narrative");
  clonePlay(typingSound, 0.06);
  const started = speak(`Registro recuperado. ${entry.text}`, () => {
    state.narrative.isSpeaking = false;
  }, {
    id: entry.id,
    channel: "ambient-narrative",
    priority: "medium",
    retryOnInterrupt: true,
    rate: 0.84,
    pitch: 0.62,
    volume: SAFE_AUDIO.narrative,
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
        ["ventana de escape activa o ruta ya sincronizada", state.escapeWindowActive || state.escapeRoutes.main.available],
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
        ["energia activa o balizas forzables", state.powerOnline || state.escapeWindowActive],
        ["ventana de escape activa o ruta ya sincronizada", state.escapeWindowActive || state.escapeRoutes.helipad.available],
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
        ["presion forzable durante ventana limitada", state.escapeWindowActive || state.escapeRoutes.tunnel.available],
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
        ["traccion forzable durante ventana limitada", state.escapeWindowActive || state.escapeRoutes.cargo.available],
      ],
    },
  };
}

function getRouteStatus(routeKey, definition) {
  const route = state.escapeRoutes[routeKey];
  if (!route?.planned) return "NO ASIGNADA";
  if (route.lost) return "PERDIDA";
  if (route.available) return "OVERRIDE SINCRONIZADO";
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
  if (!missing.length) return `${definition.name} lista para override manual. Carga ${definition.command} y sincroniza cuatro rotores.`;
  return `${definition.name} no disponible: falta ${missing.join(", ")}.`;
}

function getEvacuationRouteLines() {
  const definitions = getRouteDefinitions();
  const lines = ["OVERRIDES MANUALES DE EVACUACION // ESTADO OPERATIVO"];
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
    lines.push(`Carga override: ${definition.command}`);
    lines.push("Ejecucion final: sincroniza y guarda 4 rotores. El escape se ejecuta automaticamente.");
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
    const overrideState = state.evacuationOverride.solved[key] ? "OVERRIDE SINCRONIZADO" : missing.length ? "OVERRIDE BLOQUEADO" : "OVERRIDE LISTO";
    return `
      <div class="evac-route ${statusClass}">
        <strong>${definition.name}</strong>
        <span>Estado: ${overrideState}</span>
        <p>Ventaja: ${definition.advantage}. Riesgo: ${definition.risk}.</p>
        <p>Requiere: ${missing.length ? missing.join(", ") : "sincronización manual de cuatro rotores"}.</p>
        <code>${definition.command} → 4 rotores</code>
      </div>
    `;
  }).join("");
}

function getEvacuationBlockers() {
  const blockers = [];
  if (state.elapsedSeconds < MINIMUM_SESSION_SECONDS) {
    blockers.push(`Sesión mínima: faltan ${formatCountdown(MINIMUM_SESSION_SECONDS - state.elapsedSeconds)}`);
    return blockers;
  }
  if (state.omegaCinematicPlaying || state.cinematicStarted) blockers.push("video crítico en curso");
  if (state.rotorSystem.protocoloActivo || state.currentProtocol) blockers.push("protocolo de rotor activo");
  if (!hasAnyEscapeRouteAvailable()) blockers.push("Ruta de escape");
  if (state.gameOver || state.damageInstalacion >= 100 || state.riesgoBiologico >= 100) blockers.push("Colapso");
  return Array.from(new Set(blockers));
}

function verificarOportunidadEscape({ announce = false } = {}) {
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
      addLine(`EVACUACIÓN FORZADA por ${getAvailableEscapeRouteName() || "ruta autorizada"}.`, "success");
      addLine("Escape automático activado por override.", "success");
      currentAlertText.textContent = "OVERRIDE DE EVACUACIÓN SINCRONIZADO. Escape automático activado.";
    }
    return { available, blockers };
  }
  state.evacuationAnnounced = false;
  if (announce) {
    addLine("EVACUACIÓN BLOQUEADA.", "warning");
    addLine("Falta resolver:", "warning");
    blockers.forEach((blocker) => addLine(`- ${blocker}`, "warning"));
    if (state.escapeWindowActive) addLine("Director buscando ruta alternativa si esta ventana falla...", "warning");
  }
  return { available, blockers };
}

function verificarEvacuacionDisponible(options = {}) {
  return verificarOportunidadEscape(options);
}

function getCurrentObjectiveKey() {
  if (state.omegaReleased && !state.chimeraContained) return "chimera";
  if (state.timelineFlags.compi && !state.powerOnline) return "compi";
  if (!state.powerOnline) return state.generatorDamaged ? "generator" : "power";
  if (state.timelineFlags.raptor && !state.raptorContained) return "raptor";
  if (state.timelineFlags.trex && !state.trexContained) return "trex";
  if (state.gryphoActive && !state.gryphoContained) return "grypho";
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
    compi: {
      title: "COMPIS EN LA SUBESTACION",
      occurred: "Los Compis mordieron el cableado y cortaron la energía principal.",
      danger: "Sin electricidad no se pueden ejecutar los demás protocolos de contención.",
      objective: "Aislar a los Compis y restaurar la subestación con rotores.",
      files: "POWER.LOG",
      steps: ["cat POWER.LOG", "alinea los rotores de subestación", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "CRITICO",
    },
    power: {
      title: "ENERGIA PRINCIPAL OFFLINE",
      occurred: "La subestacion oeste no alimenta puertas, rotores ni cercos.",
      danger: "Sin energia, los protocolos de contencion no se ejecutan.",
      objective: "Restaurar energia principal.",
      files: "POWER.LOG",
      steps: ["cat POWER.LOG", "alinea los tres rotores", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "ALTO",
    },
    generator: {
      title: "GENERADOR DE RESPALDO DAÑADO",
      occurred: "Un impacto corto la linea de respaldo y la energia volvio a caer.",
      danger: "Los cercos quedan debiles y el daño del laboratorio sube.",
      objective: "Reparar el generador antes de seguir.",
      files: "GENERATOR.LOG",
      steps: ["cat GENERATOR.LOG", "alinea los tres rotores", "guarda cada rotor", "pulsa Enviar contención"],
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
    grypho: {
      title: "AMENAZA ALFA: GRYPHOVENATOR",
      occurred: "El primer hibrido exitoso entro en fase de caza. Las camaras y sensores ya no son confiables.",
      danger: "No colapsa el laboratorio como OMEGA; manipula el entorno, bloquea rutas, reaparece y fuerza decisiones bajo paranoia.",
      objective: "Sincronizar rotores ALFA y neutralizar el acecho sin activar Chimerasaurus.",
      files: "GRYPHO.LOG, ALPHA-HYBRID.LOG, PREDATOR.TEST y ALPHA-CONTAINMENT.LOG",
      steps: ["cat GRYPHO.LOG", "cat ALPHA-HYBRID.LOG", "cat PREDATOR.TEST", "cat ALPHA-CONTAINMENT.LOG", "alinea rotores ALFA", "pulsa Enviar contención"],
      risk: "ALFA",
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
      steps: ["cat BARRIER.SYS", "alinea los tres rotores", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "ALTO",
    },
    herd: {
      title: "PELEA DE TRICERATOPS DETECTADA",
      occurred: "Sector C comprometido. Compuertas laterales bajo presión.",
      danger: "Los impactos aumentan daño estructural, riesgo biologico y pueden bloquear Sector C.",
      objective: "Estabiliza el Sector C.",
      files: "TRICERATOPS.LOG",
      steps: ["cat TRICERATOPS.LOG", "alinea los tres rotores", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "MEDIO",
    },
    anky: {
      title: "ANKYLOSAURUS EN RUTA LOGISTICA",
      occurred: "Corredor L-05 bloqueado por desplazamiento pesado.",
      danger: "La ruta de escape queda bloqueada y la evacuacion no estara disponible.",
      objective: "Redirige al Ankylosaurus fuera del corredor.",
      files: "ANKY.LOG",
      steps: ["cat ANKY.LOG", "alinea los tres rotores", "guarda cada rotor", "pulsa Enviar contención"],
      risk: "ALTO",
    },
    stego: {
      title: "ESTEGOSAURUS ENFERMO DETECTADO",
      occurred: "Anomalia biologica en Sector Herbivoro.",
      danger: "La infeccion genetica puede contaminar sectores y reducir estabilidad del laboratorio.",
      objective: "Analiza el estado biologico del Estegosaurus.",
      files: "STEGO.LOG",
      steps: ["cat STEGO.LOG", "alinea los tres rotores", "guarda cada rotor", "pulsa Enviar contención"],
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
      title: "OVERRIDE MANUAL: PUERTA NORTE",
      occurred: "La compuerta ya no acepta desbloqueo normal. Solo queda forzar sellos y bisagras por rotores.",
      danger: "El override puede quedar a medio ciclo si aparece otra ruptura.",
      objective: "Cargar DOOR.SYS, sincronizar cuatro rotores y forzar salida.",
      files: "DOOR.SYS",
      steps: ["cat DOOR.SYS", "ejecuta unlock door DOOR-LOCK-42 para cargar override", "sincroniza y guarda cuatro rotores"],
      risk: "ALTO",
    },
    helipad: {
      title: "OVERRIDE MANUAL: HELIPUERTO",
      occurred: "La azotea no tiene autorización aérea estable.",
      danger: "Viento, radio fallando y luces rojas reducen margen de evacuacion.",
      objective: "Forzar plataforma con cuatro rotores.",
      files: "HELIPAD.SYS",
      steps: ["cat HELIPAD.SYS", "ejecuta activate helipad", "sincroniza y guarda cuatro rotores"],
      risk: "ALTO",
    },
    tunnel: {
      title: "OVERRIDE MANUAL: TUNEL",
      occurred: "El subnivel requiere presion, ventilacion y compuertas en ciclo manual.",
      danger: "Vapor y oscuridad pueden bloquear la lectura del sistema.",
      objective: "Forzar tunel con cuatro rotores.",
      files: "TUNNEL.SYS",
      steps: ["cat TUNNEL.SYS", "ejecuta open tunnel", "sincroniza y guarda cuatro rotores"],
      risk: "ALTO",
    },
    cargo: {
      title: "OVERRIDE MANUAL: TRANSPORTE",
      occurred: "El transporte de carga requiere encendido y liberacion magnetica manual.",
      danger: "Motores y energia inestable pueden cerrar el hangar si tardas.",
      objective: "Forzar transporte con cuatro rotores.",
      files: "CARGO.SYS",
      steps: ["cat CARGO.SYS", "ejecuta start cargo", "sincroniza y guarda cuatro rotores"],
      risk: "ALTO",
    },
    escape: {
      title: "OVERRIDE SINCRONIZADO",
      occurred: "La ruta exterior fue forzada manualmente.",
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
  addLine(`OBJETIVO ACTUAL: ${guide.title}`, className);
  addLine(`1. ${guide.steps[0]}`, "success");
  addLine(`2. ${guide.steps[1] || "alinea y guarda el rotor activo"}`, "success");
  addLine(`3. ${guide.steps.at(-1)}`, "success");
  currentAlertText.textContent = `SIGUIENTE PASO: ${guide.steps[0]}`;
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
  setMissionState(missionGrypho, !state.powerOnline ? "BLOQUEADA" : state.gryphoContained ? "COMPLETA" : state.gryphoActive ? "ALFA" : "MONITOREO", !state.powerOnline ? "is-locked" : state.gryphoContained ? "is-done" : state.gryphoActive ? "is-active" : "is-locked");
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
  threatGrypho?.classList.toggle("is-contained", !state.gryphoActive || state.gryphoContained);
  threatDilo.classList.toggle("is-contained", state.diloNeutralized);

  if (state.omegaReleased) {
    labThreatState.textContent = state.chimeraContained
      ? "CHIMERASAURUS CONTENIDO TEMPORALMENTE // OMEGA INESTABLE"
      : "CHIMERASAURUS REX LIBERADO // NIVEL OMEGA";
  } else if (state.generatorDamaged) {
    labThreatState.textContent = "GENERADOR DAÑADO // RIESGO ESTRUCTURAL";
  } else if (!state.powerOnline && state.timelineFlags.compi) {
    labThreatState.textContent = "COMPIS EN CABLEADO // ENERGIA INTERRUMPIDA";
  } else if (state.gryphoActive && !state.gryphoContained) {
    labThreatState.textContent = "AMENAZA ALFA // CAMARAS Y SENSORES NO CONFIABLES";
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
    ["Gryphovenator", speciesZones.grypho.risk(), "Nivel ALFA, hibrido tactico"],
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
    if (command === "unlock door DOOR-LOCK-42" && state.escapeRoutes.main.available) disabled = true;
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
  if (alphaState) {
    alphaState.textContent = state.gryphoActive && !state.gryphoContained ? "ALFA ACTIVA" : state.gryphoContained ? "NEUTRALIZADA" : "LATENTE";
    alphaState.style.color = state.gryphoActive && !state.gryphoContained ? "#ffb347" : state.gryphoContained ? "#9cff57" : "";
  }
  doorState.textContent = state.doorUnlocked ? "OVERRIDE" : "BLOQUEADA";
  doorState.style.color = state.doorUnlocked ? "#9cff57" : "";
  escapeState.textContent = state.escaped ? "COMPLETA" : state.evacuationAvailable ? "FORZADA" : "PENDIENTE";
  escapeState.style.color = state.escaped || state.evacuationAvailable ? "#9cff57" : "";
  const plannedOpenRisk = (isEventPlanned("dilo") && !state.diloNeutralized) || (isEventPlanned("barrier") && !state.barriersRestored);
  threatLevelState.textContent = state.gameOver ? "COLAPSO" : state.omegaReleased && !state.chimeraContained ? "OMEGA" : state.gryphoActive && !state.gryphoContained ? "ALFA" : state.damageInstalacion >= 70 || state.riesgoBiologico >= 70 ? "CRITICO" : state.damageInstalacion >= 40 || plannedOpenRisk ? "ALTO" : state.doorUnlocked ? "CONTROLADO" : "MEDIO";
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
  setZoneState(zoneDoorState, state.doorUnlocked ? "OVERRIDE" : "BLOQUEADA", state.doorUnlocked ? "open" : "locked");
  setZoneState(zoneEscapeState, state.escaped ? "COMPLETA" : state.evacuationAvailable ? "FORZADA" : "PENDIENTE", state.escaped || state.evacuationAvailable ? "done" : "pending");

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
  if (blockIntroDuringGameplay("runBootSequence")) return;
  if (state.trainingActive || state.bootStarted) return;
  setGameState("tutorial", "runBootSequence");
  state.trainingActive = true;
  state.trainingStep = 0;
  state.trainingRotorActive = false;
  state.trainingRotorCurrent = 3;
  state.trainingRotorSaved = false;
  state.trainingPowerRestored = false;
  hideOverlaySafely(bootOverlay);
  showOverlaySafely(trainingOverlay, { requiresInteraction: true, focusElement: trainingInput });
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
  if (isGameplayActive()) {
    console.warn("Bloqueado startRealScenario duplicado durante gameplay.");
    focusSafeGameplayElement();
    return;
  }
  if (state.bootStarted) return;
  setGameState("playing", "startRealScenario");
  state.trainingActive = false;
  state.trainingCompleted = true;
  state.bootStarted = true;
  introVideo?.pause();
  audioIntro?.pause();
  if (audioIntro) audioIntro.currentTime = 0;
  hideOverlaySafely(introOverlay);
  hideOverlaySafely(bootOverlay);
  hideOverlaySafely(trainingOverlay);
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

// Novice players frequently use Spanish verbs, omit accents, or write a file
// name with spaces. Treat those as the same intentional actions instead of
// charging a penalty for a spelling/UI mismatch.
function normalizeCommandInput(rawCommand) {
  const normalized = rawCommand.trim().toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ");
  const aliases = {
    ayuda: "help", archivos: "ls", "ver archivos": "ls", estado: "status",
    incidentes: "incidents", misiones: "missions", pista: "hint", limpiar: "clear",
    reiniciar: "restart", "evacuar ahora": "evacuate now", "evacuar ya": "evacuate now", salir: "evacuate now",
  };
  if (aliases[normalized]) return aliases[normalized];
  const words = normalized.split(" ");
  const verbAliases = {
    restaurar: "restore", reparar: "repair", contener: "contain", neutralizar: "neutralize",
    bloquear: "lock", estabilizar: "stabilize", redirigir: "redirect", analizar: "analyze",
    activar: "activate", abrir: "open",
  };
  if (verbAliases[words[0]]) words[0] = verbAliases[words[0]];
  if (words[0] === "cat") {
    const fileAliases = {
      "power log": "POWER.LOG", "energia log": "POWER.LOG", "generator log": "GENERATOR.LOG",
      "raptor key": "RAPTOR.KEY", "trex key": "TREX.KEY", "t rex key": "TREX.KEY",
      "dilo log": "DILO.LOG", "toxin key": "TOXIN.KEY", "triceratops log": "TRICERATOPS.LOG",
      "anky log": "ANKY.LOG", "anky key": "ANKY.KEY", "stego log": "STEGO.LOG",
      "chimera key": "CHIMERA.KEY", "omega log": "OMEGA.LOG", "door sys": "DOOR.SYS", rutas: "EVAC.ROUTES",
    };
    const requestedFile = words.slice(1).join(" ").replace(/[._-]/g, " ");
    if (fileAliases[requestedFile]) return `cat ${fileAliases[requestedFile]}`;
  }
  return words.join(" ");
}

function showStatus() {
  return printLines([
    `Perfil de sesión: ${state.director.profile?.label ?? "No asignado"}`,
    `Energia: ${state.powerOnline ? "ONLINE" : "OFFLINE"}`,
    `Generador: ${state.generatorDamaged ? "DAÑADO" : state.generatorRepaired ? "REPARADO" : "ESTABLE"}`,
    `Raptor: ${state.raptorContained ? "CONTENIDO" : state.timelineFlags.raptor ? "ACTIVO" : "SIN CONTACTO"}`,
    `T-Rex: ${state.trexContained ? "CONTENIDO" : state.timelineFlags.trex ? "ACTIVO" : "SIN CONTACTO"}`,
    `Gryphovenator ALFA: ${state.gryphoContained ? "NEUTRALIZADO" : state.gryphoActive ? "ACECHANDO / SENSORES NO CONFIABLES" : "LATENTE"}`,
    `Dilophosaurus: ${!isEventPlanned("dilo") ? "SIN LECTURA" : state.diloNeutralized ? "NEUTRALIZADO" : state.timelineFlags.dilo ? "ACTIVO" : "LATENTE"}`,
    `Chimerasaurus: ${state.omegaReleased ? state.chimeraContained ? "CONTENIDO TEMPORAL" : "LIBERADO" : "NO DETECTADO"}`,
    `Barreras: ${!isEventPlanned("barrier") ? "SIN INCIDENTE" : state.barriersRestored ? "RESTAURADAS" : state.timelineFlags.barrier ? "COMPROMETIDAS" : "LATENTE"}`,
    `Triceratops: ${!isEventPlanned("herd") ? "SIN INCIDENTE" : state.herdCalmed ? "ESTABILIZADO" : state.timelineFlags.herd ? "SECTOR C INESTABLE" : "LATENTE"}`,
    `Ankylosaurus: ${!isEventPlanned("anky") ? "SIN INCIDENTE" : state.ankyRedirected ? "REDIRIGIDO" : state.timelineFlags.anky ? "BLOQUEANDO RUTA" : "LATENTE"}`,
    `Estegosaurus: ${!isEventPlanned("stego") ? "SIN INCIDENTE" : state.timelineFlags.stego ? state.stegoAnalyzed ? "ANALIZADO" : "ENFERMO" : "LATENTE"}`,
    `Puerta: ${state.doorUnlocked ? "OVERRIDE SINCRONIZADO" : "BLOQUEADA"}`,
    `Ruta principal: ${state.escapeRoutes.main.lost ? "PERDIDA" : state.escapeRoutes.main.available ? "FORZADA" : "RECUPERABLE"}`,
    `Helipuerto: ${!state.escapeRoutes.helipad.planned ? "NO ASIGNADO" : state.escapeRoutes.helipad.lost ? "PERDIDO" : state.escapeRoutes.helipad.available ? "ABIERTO" : "RECUPERABLE"}`,
    `Túnel: ${!state.escapeRoutes.tunnel.planned ? "NO ASIGNADO" : state.escapeRoutes.tunnel.lost ? "PERDIDO" : state.escapeRoutes.tunnel.available ? "ABIERTO" : "RECUPERABLE"}`,
    `Carga: ${!state.escapeRoutes.cargo.planned ? "NO ASIGNADO" : state.escapeRoutes.cargo.lost ? "PERDIDO" : state.escapeRoutes.cargo.available ? "ABIERTO" : "RECUPERABLE"}`,
    `Evacuacion: ${state.escaped ? "COMPLETADA" : state.evacuationAvailable ? "OVERRIDE LISTO" : "BLOQUEADA"}`,
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

async function guardarTiempoEvacuacion() {
  const payload = {
    outcome: "success",
    elapsedSeconds: state.elapsedSeconds,
    elapsedText: getElapsedTimeText(),
    remainingSeconds: state.countdownSeconds,
    route: state.evacuationRoute,
    escapeOpportunities: state.escapeOpportunity.count,
    createdAt: new Date().toISOString(),
  };
  try {
    if (window.firebase?.database) {
      await window.firebase.database().ref("jurassicUnixControl/evacuations").push(payload);
      return "firebase";
    }
    if (window.firebase?.firestore) {
      await window.firebase.firestore().collection("jurassicUnixControlEvacuations").add(payload);
      return "firebase";
    }
    window.localStorage?.setItem("jurassicUnixControl:lastEvacuation", JSON.stringify(payload));
    console.info("Firebase no configurado; tiempo de evacuacion guardado localmente.", payload);
    return "local";
  } catch (error) {
    console.error("No fue posible guardar tiempo de evacuacion.", error);
    return "error";
  }
}

async function iniciarEscapeFinal() {
  if (state.elapsedSeconds < MINIMUM_SESSION_SECONDS) {
    const remaining = MINIMUM_SESSION_SECONDS - state.elapsedSeconds;
    await typeLine(`La evacuación final se habilita al completar los 30:00. Mantente en la instalación ${formatCountdown(remaining)} más.`, "warning");
    return false;
  }
  const evacuation = verificarEvacuacionDisponible({ announce: true });
  if (!evacuation.available) {
    if (!hasAnyEscapeRouteAvailable() && canCreateEscapeOpportunityNow()) {
      const created = crearOportunidadEscape();
      if (created) {
        await printLines([
          "EVACUACION AUN NO EJECUTABLE.",
          "El Director abrió una oportunidad de escape en vez de penalizar el intento.",
          "Sincroniza y guarda los 4 rotores cargados. El escape se ejecuta al guardar el cuarto.",
        ], "warning");
        return false;
      }
    }
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
  guardarTiempoEvacuacion();
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
  showOverlaySafely(escapeOverlay);
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
  setGameState("victory", "ESCAPE.MP4 ended");
  escapeOverlayTitle.textContent = "LOGRASTE ESCAPAR";
  escapeOverlayText.textContent = `Misión completada. Tiempo total: ${getElapsedTimeText()}. Jurassic UNIX Control registra evacuación exitosa.`;
  restartScenarioButton?.classList.remove("hidden");
  restartScenarioButton?.focus({ preventScroll: true });
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
  showOverlaySafely(escapeOverlay);
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
  setGameState("defeat", "Falla.mp4 ended");
  escapeOverlayTitle.textContent = "MISION FALLIDA";
  escapeOverlayText.textContent = `El laboratorio quedó perdido. Tiempo resistido: ${getElapsedTimeText()}. Reinicia el escenario para intentarlo de nuevo.`;
  restartScenarioButton?.classList.remove("hidden");
  restartScenarioButton?.focus({ preventScroll: true });
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
  grypho: {
    source: "assets/video/Gryphovenator.mp4",
    label: "AMENAZA ALFA",
    title: "GRYPHOVENATOR EN CAZA",
    text: "DEPREDADOR ALFA ACTIVO // PROTOCOLO ALFA REQUIERE ROTORES",
    sound: "raptor",
    volume: 0.58,
    alertVolume: 0.8,
    damage: 2,
    bio: 5,
    stability: -6,
    energy: -4,
    severity: "grypho",
    tier: "alfa",
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
  compi: {
    source: "assets/video/Compi.mp4",
    label: "FALLA DE ENERGIA",
    title: "COMPIS EN EL CABLEADO",
    text: "CABLES MORDIDOS EN SUBESTACION // ENERGIA PRINCIPAL INTERRUMPIDA",
    sound: "herb",
    volume: 0.5,
    alertVolume: 0.74,
    damage: 4,
    bio: 3,
    stability: -5,
    energy: -24,
    severity: "minor",
    tier: "secundaria-cinematica",
    glitch: "severe",
  },
};

function reproducirVideoAmenaza(source) {
  if (!omegaVideo || !omegaVideoSource) return Promise.resolve(false);
  omegaVideo.pause();
  omegaVideoSource.src = source;
  omegaVideoSource.type = source.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
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
  if (threatKey === "grypho") state.gryphoStalkCount += 1;
  if (config.damage || config.bio || config.stability || config.energy) {
    applyDeterioration({
      damage: config.damage,
      bio: config.bio,
      stability: config.stability,
      energy: config.energy,
    });
  }
  omegaOverlay.className = `omega-overlay omega-overlay--${config.severity} omega-overlay--tier-${tier}`;
  showOverlaySafely(omegaOverlay);
  omegaOverlayLabel.textContent = `${getThreatTierLabel(threatKey)} // ${config.label}`;
  omegaOverlayTitle.textContent = config.title;
  omegaOverlayText.textContent = config.text;
  startContinuousAlert(config.alertVolume);
  playDinoSound(config.sound, config.volume);
  if (threatKey === "grypho") triggerGryphoTacticalEffects("cinematic");
  if (threatKey === "chimera") reproducirGarrasAleatorio(true);
  if (["herd", "anky", "dilo"].includes(threatKey)) triggerVisualGlitchBurst("normal");
  triggerVisualGlitchBurst(config.glitch);
  if (threatKey === "chimera") speak(narrationLines.omega, null, { priority: "critical", retryOnInterrupt: false });
  reproducirVideoAmenaza(config.source).then((played) => {
    if (!played) {
      omegaOverlayText.textContent = `No fue posible reproducir ${config.source}.`;
      cerrarEventoAmenaza();
      return;
    }
    if (state.threatCinematicFallbackTimer) window.clearTimeout(state.threatCinematicFallbackTimer);
    const videoDuration = Number.isFinite(omegaVideo?.duration) ? omegaVideo.duration : 6;
    const fallbackDelay = Math.max(4500, Math.ceil(videoDuration * 1000) + 1200);
    state.threatCinematicFallbackTimer = window.setTimeout(() => {
      if (state.activeThreatCinematic === threatKey) cerrarEventoAmenaza();
    }, fallbackDelay);
  });
  updateHud();
  return true;
}

function cerrarEventoAmenaza() {
  const threatKey = state.activeThreatCinematic;
  if (state.threatCinematicFallbackTimer) {
    window.clearTimeout(state.threatCinematicFallbackTimer);
    state.threatCinematicFallbackTimer = null;
  }
  state.omegaCinematicPlaying = false;
  if (threatKey === "chimera") state.omegaVideoSeen = true;
  state.activeThreatCinematic = null;
  hideOverlaySafely(omegaOverlay);
  omegaOverlay?.classList.remove(
    "omega-overlay--raptor",
    "omega-overlay--trex",
    "omega-overlay--grypho",
    "omega-overlay--chimera",
    "omega-overlay--minor",
    "omega-overlay--tier-principal",
    "omega-overlay--tier-alfa",
    "omega-overlay--tier-climax",
    "omega-overlay--tier-secundaria-cinematica",
    "omega-overlay--tier-sistema"
  );
  if (omegaVideo) {
    omegaVideo.pause();
    omegaVideo.currentTime = 0;
  }
  const messages = {
    raptor: "VELOCIRAPTOR LIBERADO. Protocolo R-01 activo: revisa RAPTOR.KEY y sincroniza rotores.",
    trex: "T-REX LIBERADO. Protocolo C-07 activo: revisa TREX.KEY y cierra contencion pesada.",
    grypho: "AMENAZA ALFA: GRYPHOVENATOR EN CAZA. Revisa ALPHA-CONTAINMENT.LOG y sincroniza rotores.",
    chimera: "CHIMERASAURUS REX HA ROTO LA CAPSULA DE CONTENCION. Regresando a la consola en estado OMEGA.",
    dilo: "EVENTO SECUNDARIO: DILOPHOSAURUS EN ACCESO PRINCIPAL. Protocolo TOXIN activo: revisa DILO.LOG y TOXIN.KEY.",
    herd: "EVENTO SECUNDARIO: PELEA DE TRICERATOPS DETECTADA. Abre TRICERATOPS.LOG y sincroniza rotores.",
    anky: "EVENTO SECUNDARIO: ANKYLOSAURUS EN RUTA LOGISTICA. Abre ANKY.LOG y sincroniza rotores.",
    stego: "EVENTO SECUNDARIO: ESTEGOSAURUS ENFERMO DETECTADO. Abre STEGO.LOG y sincroniza rotores.",
    compi: "EVENTO DE ENERGIA: COMPIS MORDIERON CABLEADO. Abre POWER.LOG y sincroniza rotores de subestación.",
  };
  addLine(messages[threatKey] || "BRECHA CINEMATICA FINALIZADA. Regresando a consola.", "warning");
  if (threatKey === "raptor") setCurrentAlert("VELOCIRAPTOR LIBERADO. BARRERA SECUNDARIA FALLIDA.", "error");
  if (threatKey === "trex") setCurrentAlert("T-REX LIBERADO. CONTENCION PESADA FALLIDA.", "error");
  if (threatKey === "grypho") setCurrentAlert("AMENAZA ALFA: Gryphovenator acecha entre sectores. Protocolo ALFA activo en rotores.", "error");
  if (threatKey === "chimera") setCurrentAlert("NIVEL OMEGA ACTIVADO. CHIMERASAURUS REX LIBERADO. CAPSULA DE CONTENCION ROTA.", "error");
  if (threatKey === "dilo") setCurrentAlert("EVENTO SECUNDARIO: DILOPHOSAURUS EN ACCESO PRINCIPAL. Mantén protocolo TOXIN hasta neutralizar.", "warning");
  if (threatKey === "herd") setCurrentAlert("EVENTO SECUNDARIO: PELEA DE TRICERATOPS DETECTADA. Estabiliza el Sector C.", "warning");
  if (threatKey === "anky") setCurrentAlert("EVENTO SECUNDARIO: ANKYLOSAURUS EN RUTA LOGISTICA. Transporte de carga retrasado hasta redireccion.", "warning");
  if (threatKey === "stego") setCurrentAlert("EVENTO SECUNDARIO: ESTEGOSAURUS ENFERMO DETECTADO. Riesgo biologico progresivo.", "warning");
  if (threatKey === "compi") {
    setCurrentAlert(
      state.powerOnline ? "Energia principal restaurada tras incidente de compis." : "FALLA DE ENERGIA: compis mordieron cableado. Restaura energia principal.",
      state.powerOnline ? "success" : "error"
    );
  }
  if (state.gameState !== "playing" && !state.escaped && !state.gameOver) {
    setGameState("playing", `video de amenaza finalizado: ${threatKey || "desconocido"}`);
  }
  focusTerminalIfAllowed();
}

function activateDirectorEvent(key) {
  rememberDirectorEvent(key);
  noteCriticalThreatLaunched(key);
  applyProfileEventConsequence(key);
  const majorEvents = new Set(["raptor", "trex", "grypho", "generator", "barrier", "dilo", "anky", "herd", "stego", "compi", "omega", "collapse"]);
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
      setCipherTarget("raptor");
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
      setCipherTarget("trex");
      setPuzzleVisibility("trex");
      setCurrentAlert("Huella de gran masa confirmada. Tyrannosaurus rex aproximándose al corredor C-07.", "error");
      showContextGuide("trex", "error");
      triggerThreatEscapeCinematic("trex");
      break;
    case "grypho":
      startContinuousAlert(0.8);
      playDinoSound("raptor", 0.48);
      clonePlay(dinoSounds.garras, 0.44);
      speak(narrationLines.grypho, null, { priority: "critical", retryOnInterrupt: false });
      state.gryphoActive = true;
      state.gryphoContained = false;
      state.activeZone = "grypho";
      state.currentProtocol = "grypho";
      state.activeThreat = "grypho";
      markProgress("grypho");
      setCipherTarget("grypho");
      setPuzzleVisibility("grypho");
      setCurrentAlert("GRYPHOVENATOR DETECTADO. DEPREDADOR ALFA ACTIVO. PROTOCOLO ALFA cargado en rotores.", "error");
      showContextGuide("grypho", "error");
      triggerThreatEscapeCinematic("grypho");
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
      setCipherTarget("generator");
      setPuzzleVisibility("generator");
      setCurrentAlert("Generador dañado. Impacto estructural en B-02 y caída de energía de respaldo.", "error");
      showContextGuide("generator", "error");
      break;
    case "barrier":
      applyDeterioration({ damage: 3, bio: 3, stability: -3, energy: -2 });
      playAlert(0.65);
      state.activeZone = "power";
      setCurrentAlert("Sistema de contención parcialmente desactivado. Barreras del sector este sin respuesta.", "error");
      markProgress("barrier");
      setCipherTarget("barrier");
      setPuzzleVisibility("barrier");
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
      setCipherTarget("anky");
      setPuzzleVisibility("anky");
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
      setCipherTarget("herd");
      setPuzzleVisibility("herd");
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
      setCipherTarget("stego");
      setPuzzleVisibility("stego");
      showContextGuide("stego", "warning");
      triggerThreatEscapeCinematic("stego");
      break;
    case "compi":
      state.powerOnline = false;
      state.generatorDamaged = false;
      state.activeZone = "power";
      markProgress("power");
      setCipherTarget("compi");
      setPuzzleVisibility("compi");
      setCurrentAlert("FALLA DE ENERGIA: compis mordieron cableado en subestacion. Restaura energia principal.", "error");
      showContextGuide("power", "error");
      speak(narrationLines.compi, null, { priority: "critical", retryOnInterrupt: false });
      triggerThreatEscapeCinematic("compi");
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
  if (key === "omega") return !getActiveMajorThreat() && state.countdownSeconds <= state.director.omegaEarliestAt && canLaunchCriticalThreat(key);
  if (key === "sensors") return !getActiveMajorThreat();
  if (key === "collapse") return !getActiveMajorThreat();
  if (key === "compi") return state.powerOnline && !getActiveMajorThreat() && isEventPlanned(key) && canLaunchCriticalThreat(key);
  if (!isEventPlanned(key)) return false;
  if (!canLaunchCriticalThreat(key)) return false;
  if (["raptor", "trex", "grypho", "dilo", "herd", "anky", "stego"].includes(key) && !state.powerOnline) return false;
  const activeMajor = getActiveMajorThreat();
  if (activeMajor && key !== "omega") return false;
  if (activeMajor && isMinorDirectorEvent(key)) return false;
  const majorEvents = new Set(["raptor", "trex", "grypho", "generator", "barrier", "dilo", "anky", "herd", "stego", "compi", "collapse"]);
  if (!majorEvents.has(key)) return true;
  const gap = state.director.lastMajorEventAt - state.countdownSeconds;
  const requiredGap = getDirectorPhase() <= 2 ? 55 : getDirectorPhase() === 3 ? 45 : 34;
  return gap >= requiredGap;
}

function processTimedThreats() {
  if (!state.bootStarted || state.gameOver || state.escaped) return;
  // Las cinemáticas bloquean la consola: el reloj no debe penalizar al jugador mientras no puede actuar.
  if (state.omegaCinematicPlaying) return;

  state.countdownSeconds = Math.max(0, state.countdownSeconds - 1);
  state.elapsedSeconds += 1;
  maintainMajorThreatMode();
  if (state.director.cooldown > 0) {
    state.director.cooldown -= 1;
  }
  processScheduledPredatorAttacks();
  processEscapeOpportunities();
  maybeActivateRandomDirectorEvent();
  maybeTriggerAmbientIncident();

  const beats = [
    ["sensors", 1720],
    ["compi", 1660],
    ["grypho", 1440],
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

  if (maybeTriggerCollapse()) return;
  if (state.elapsedSeconds >= MINIMUM_SESSION_SECONDS) {
    armGuaranteedFinalExit();
    return;
  }
  updateHud();
}

function startThreatTimer() {
  if (state.timerId) return;
  state.timerId = window.setInterval(processTimedThreats, 1000);
}

function restartScenario() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  setGameState("intro", "restartScenario manual");
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
    grypho: "GRYPHOVENATOR ALFA",
    dilo: "DILOPHOSAURUS",
    chimera: "CHIMERASAURUS",
    power: "ENERGIA PRINCIPAL",
    generator: "GENERADOR",
    barrier: "BARRERAS",
    herd: "TRICERATOPS",
    anky: "ANKYLOSAURUS",
    stego: "ESTEGOSAURUS",
    compi: "COMPIS / SUBESTACION",
    "evac-main": "OVERRIDE PUERTA NORTE",
    "evac-helipad": "OVERRIDE HELIPUERTO",
    "evac-tunnel": "OVERRIDE TUNEL",
    "evac-cargo": "OVERRIDE TRANSPORTE",
  };

  cipherConsoleTarget.textContent = `OBJETIVO: ${targetLabels[target] || "RAPTOR"}`;
  cipherConsoleHint.textContent = getRouteKeyFromCipherTarget(target)
    ? `OVERRIDE DE EVACUACION: cuatro rotores. ${getRouteVisualCue(getRouteKeyFromCipherTarget(target))}`
    : target === "chimera"
    ? "Rotores CHIMERA: alinea y guarda las tres etapas; Enviar contención ejecuta el cierre internamente."
    : target === "grypho"
    ? "PROTOCOLO ALFA: el Gryphovenator interfiere sensores. Alinea, guarda en orden y envía contención sin escribir claves."
    : "Paso 1: gira el rotor activo hacia atrás. Paso 2: guárdalo. Repite hasta completar los tres.";
  cipherEquationDisplay.textContent = `${activeRotor.label}: gira atrás ${activeRotor.shift} vez/veces`;
  cipherExplanation.textContent = stepsLeft > 0
    ? `Llevas ${stepsDone} giros de ${activeRotor.shift}. Sigue girando hacia atras.`
    : "Rotor alineado. Guárdalo para sincronizar el protocolo.";
  cipherConsoleBuffer.textContent = formatCipherBuffer();

  cipherRotorCards.innerHTML = rotors.map((rotor, index) => `
    <div class="cipher-rotor ${index === activeRotorIndex ? "is-active" : ""} ${isRotorAligned(rotor) ? "is-correct" : ""} ${rotor.savedValue !== null ? "is-saved" : ""} ${state.rotorFeedback.rotatedIndex === index ? "is-rotating" : ""}" data-rotor-index="${index}">
      <span>ROTOR ${index + 1}</span>
      <button type="button" class="cipher-rotor__dial" data-rotor-dial="true" data-rotor-index="${index}" aria-label="Girar ${rotor.label}">
        <div class="cipher-rotor__window">${rotor.currentValue}</div>
      </button>
      <strong>INICIO ${rotor.baseValue}</strong>
      <em>${rotor.savedValue !== null ? "LISTO" : isRotorAligned(rotor) ? "LISTO" : `−${rotor.shift}`}</em>
      <div class="cipher-rotor__controls">
        <button type="button" class="cipher-rotor__button cipher-rotor__button--primary" data-rotate="-1" data-rotor-index="${index}" aria-label="Girar atrás rotor ${index + 1}" title="Girar atrás">−</button>
        <button type="button" class="cipher-rotor__button" data-rotate="1" data-rotor-index="${index}" aria-label="Girar adelante rotor ${index + 1}" title="Girar adelante">+</button>
        <button type="button" class="cipher-rotor__button" data-reset-rotor="${index}" aria-label="Reiniciar rotor ${index + 1}" title="Reiniciar">↺</button>
      </div>
    </div>
  `).join("");
}

function isRotorAligned(rotor) {
  return rotor.currentValue === decodeRotorValue(rotor.letter, rotor.shift);
}

function syncCipherBufferFromRotors() {
  const rotors = state.rotorSystem.rotores.length ? state.rotorSystem.rotores : state.cipherHelper.rotors;
  const savedValues = [];
  for (const rotor of rotors) {
    if (rotor.savedValue === null || rotor.savedValue === undefined) break;
    savedValues.push(String(rotor.savedValue));
  }
  state.rotorSystem.savedDigits = savedValues.join("");
  state.rotorSystem.generatedCode = state.rotorSystem.savedDigits;
  state.rotorSystem.alignedRotors = rotors.map(isRotorAligned);
  state.rotorSystem.estadoActual = state.rotorSystem.savedDigits.length
    ? state.rotorSystem.savedDigits.length === rotors.length && state.rotorSystem.alignedRotors.every(Boolean)
      ? "ready"
      : "saving"
    : "loaded";
  state.cipherHelper.rotors = rotors;
  state.cipherHelper.buffer = state.rotorSystem.generatedCode;
  state.omegaRotorsSolved = state.cipherHelper.target === "chimera" && state.cipherHelper.buffer.length === 3;
  syncRotorProtocolSnapshot();
}

function getExpectedDigitsForTarget(target = state.cipherHelper.target) {
  return target === "chimera" ? getChimeraCodeParts().digits : getExpectedCodeForTarget(target);
}

function syncRotorProtocolSnapshot() {
  const rotors = state.rotorSystem.rotores.length ? state.rotorSystem.rotores : state.cipherHelper.rotors;
  if (!state.rotorSystem.protocoloActivo && getExpectedDigitsForTarget(state.cipherHelper.target)) {
    state.rotorSystem.protocoloActivo = state.cipherHelper.target;
  }
  state.rotorSystem.expectedCode = getExpectedDigitsForTarget(state.rotorSystem.protocoloActivo || state.cipherHelper.target);
  state.rotorSystem.rotores = rotors;
  state.rotorSystem.alignedRotors = rotors.map(isRotorAligned);
  syncLegacyRotorState();
}

function clearRotorProtocolSnapshot() {
  state.rotorSystem.protocoloActivo = null;
  state.rotorSystem.rotores = [];
  state.rotorSystem.savedDigits = "";
  state.rotorSystem.generatedCode = "";
  state.rotorSystem.expectedCode = "";
  state.rotorSystem.alignedRotors = [];
  state.rotorSystem.estadoActual = "idle";
  state.cipherHelper.target = "none";
  state.cipherHelper.rotors = [];
  state.cipherHelper.buffer = "";
  state.cipherHelper.activeRotorIndex = 0;
  syncLegacyRotorState();
}

function syncLegacyRotorState() {
  state.protocoloActivo = state.rotorSystem.protocoloActivo;
  state.savedDigits = state.rotorSystem.savedDigits;
  state.generatedCode = state.rotorSystem.generatedCode;
  state.expectedCode = state.rotorSystem.expectedCode;
  state.rotorValues = state.rotorSystem.rotores.map((rotor) => rotor.currentValue);
}

function logRotorSystem(context = "state") {
  if (!ROTOR_DEBUG) return;
  syncLegacyRotorState();
  console.log("ROTOR SYSTEM", {
    context,
    protocoloActivo: state.rotorSystem.protocoloActivo,
    rotorValues: state.rotorValues,
    savedDigits: state.rotorSystem.savedDigits,
    generatedCode: state.rotorSystem.generatedCode,
    expectedCode: state.rotorSystem.expectedCode,
    alignedRotors: state.rotorSystem.alignedRotors,
    listeners: state.rotorSystem.listeners,
    estadoActual: state.rotorSystem.estadoActual,
    sessionId: state.rotorSystem.sessionId,
  });
}

function logTrexSubmitDebug(context = "submit") {
  if (!ROTOR_DEBUG) return;
  if (state.cipherHelper.target !== "trex" && state.protocoloActivo !== "trex" && state.currentProtocol !== "trex") return;
  syncCipherBufferFromRotors();
  console.log("TREX SUBMIT DEBUG", {
    context,
    protocoloActivo: state.protocoloActivo,
    currentProtocol: state.currentProtocol,
    activeThreat: state.activeThreat,
    rotorTarget: state.cipherHelper.target,
    savedDigits: state.savedDigits,
    generatedCode: state.generatedCode,
    expectedCode: state.expectedCode,
    rotorValues: state.rotorValues,
  });
}

function formatCipherBuffer() {
  const values = state.cipherHelper.rotors.map((rotor) => rotor.savedValue === null || rotor.savedValue === undefined ? "_" : String(rotor.savedValue));
  return values.length ? values.join(" ") : "_ _ _";
}

function clearSavedDigitsFrom(index) {
  const rotors = state.rotorSystem.rotores.length ? state.rotorSystem.rotores : state.cipherHelper.rotors;
  rotors.forEach((rotor, rotorIndex) => {
    if (rotorIndex >= index) rotor.savedValue = null;
  });
  state.rotorSystem.rotores = rotors;
  state.cipherHelper.rotors = rotors;
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
  const rotors = state.rotorSystem.rotores.length ? state.rotorSystem.rotores : state.cipherHelper.rotors;
  rotors.forEach((rotor) => {
    rotor.currentValue = rotor.baseValue;
    rotor.savedValue = null;
  });
  state.rotorSystem.rotores = rotors;
  state.cipherHelper.activeRotorIndex = 0;
  state.cipherHelper.buffer = "";
  state.rotorSystem.savedDigits = "";
  state.rotorSystem.generatedCode = "";
  state.rotorSystem.alignedRotors = rotors.map(isRotorAligned);
  state.rotorSystem.estadoActual = "loaded";
  state.omegaRotorsSolved = false;
  state.rotorFeedback.rotatedIndex = -1;
  state.rotorFeedback.correctIndex = -1;
  syncRotorProtocolSnapshot();
  stopRotorPointer();
  logRotorSystem("resetAllRotors");
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
  if (target === "grypho") return state.gryphoCode;
  if (target === "dilo") return state.diloCode;
  if (target === "chimera") return state.chimeraCode;
  if (state.rotorProtocols?.[target]) return state.rotorProtocols[target].code;
  const routeKey = getRouteKeyFromCipherTarget(target);
  if (routeKey) return state.evacuationOverride.codes[routeKey];
  return "";
}

function isRotorProtocolReady(target = state.cipherHelper.target) {
  syncCipherBufferFromRotors();
  const expected = getExpectedDigitsForTarget(target);
  return state.cipherHelper.target === target &&
    state.cipherHelper.buffer === expected &&
    state.cipherHelper.rotors.length === expected.length &&
    state.cipherHelper.rotors.every((rotor) => rotor.savedValue !== null && isRotorAligned(rotor));
}

function getRotorCompletionState(target = state.cipherHelper.target) {
  syncCipherBufferFromRotors();
  const rotors = state.cipherHelper.rotors;
  const expected = getExpectedDigitsForTarget(target);
  const expectedLength = expected.length || rotors.length;
  const savedCount = rotors.filter((rotor) => rotor.savedValue !== null && rotor.savedValue !== undefined).length;
  const aligned = rotors.map(isRotorAligned);
  const complete = state.cipherHelper.target === target &&
    rotors.length > 0 &&
    savedCount === rotors.length &&
    state.cipherHelper.buffer.length === rotors.length &&
    aligned.every(Boolean);
  return {
    target,
    expected,
    expectedLength,
    savedCount,
    rotorCount: rotors.length,
    buffer: state.cipherHelper.buffer,
    aligned,
    complete,
  };
}

function isSavedRotorSetComplete(target = state.cipherHelper.target) {
  return getRotorCompletionState(target).complete;
}

function canAcceptAlignedRotorSet(target = state.cipherHelper.target) {
  return (["raptor", "trex", "dilo", "grypho", "chimera"].includes(target) || Boolean(ROTOR_PROTOCOLS[target]) || Boolean(getRouteKeyFromCipherTarget(target))) &&
    isSavedRotorSetComplete(target);
}

function showRotorIncompleteAlert(target, routeKey = null) {
  const completion = getRotorCompletionState(target);
  logRotorSystem(`rechazo-incompleto:${target}`);
  if (ROTOR_DEBUG) console.warn("ROTOR INCOMPLETE DEBUG", completion);
  const label = routeKey ? "Override" : ROTOR_PROTOCOLS[target]?.label || (target === "dilo" ? "Dilophosaurus" : target === "raptor" ? "Raptor" : target === "trex" ? "T-Rex" : target === "grypho" ? "ALFA" : target === "chimera" ? "Chimerasaurus" : "Protocolo");
  setCurrentAlert(`${label}: rotores incompletos (${completion.savedCount}/${completion.rotorCount} guardados, alineados ${completion.aligned.filter(Boolean).length}/${completion.rotorCount}). Revisa el rotor activo y pulsa Guardar digito antes de enviar.`, "warning");
}

function logAlphaSubmitDebug(context = "submit") {
  if (!ROTOR_DEBUG) return;
  if (state.cipherHelper.target !== "grypho" && state.protocoloActivo !== "grypho" && state.currentProtocol !== "grypho") return;
  syncCipherBufferFromRotors();
  console.log("ALPHA SUBMIT DEBUG", {
    context,
    protocoloActivo: state.protocoloActivo,
    currentProtocol: state.currentProtocol,
    activeThreat: state.activeThreat,
    rotorTarget: state.cipherHelper.target,
    savedDigits: state.savedDigits,
    generatedCode: state.generatedCode,
    expectedCode: state.expectedCode,
    rotorValues: state.rotorValues,
    aligned: state.cipherHelper.rotors.map(isRotorAligned),
  });
}

function requireRotorProtocol(target, message = "Alinea y guarda los tres rotores antes de enviar contención.") {
  setCipherTarget(target);
  setPuzzleVisibility(target);
  setCurrentAlert(message, "warning");
}

async function executeRotorContainment(target = state.cipherHelper.target) {
  const routeKey = getRouteKeyFromCipherTarget(target);
  if (target === "trex") logTrexSubmitDebug("execute");
  if (target === "grypho") logAlphaSubmitDebug("execute");
  if (!["raptor", "trex", "grypho", "dilo", "chimera"].includes(target) && !ROTOR_PROTOCOLS[target] && !routeKey) {
    setCurrentAlert("No hay protocolo de contención por rotores activo.", "warning");
    return false;
  }
  if (!state.powerOnline && !["power", "generator", "compi"].includes(target)) {
    applyCommandPenalty("severe", "No hay energia suficiente para ejecutar protocolos de contencion.");
    return false;
  }
  if (target === "chimera" && !state.omegaReleased) {
    await typeLine("No existe una amenaza Chimerasaurus activa en este momento.", "warning");
    return false;
  }
  if (target === "grypho" && (!state.gryphoActive || state.gryphoContained)) {
    await typeLine("No existe una amenaza Gryphovenator ALFA activa en este momento.", "warning");
    return false;
  }
  if (target === "grypho" && state.currentProtocol !== "grypho") {
    logAlphaSubmitDebug("rechazo-protocolo-inactivo");
    setCurrentAlert("PROTOCOLO ALFA no está activo. Espera detección confirmada o revisa ALPHA-CONTAINMENT.LOG.", "warning");
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
  if (target === "trex" && (state.protocoloActivo !== "trex" || state.cipherHelper.target !== "trex")) {
    logTrexSubmitDebug("rechazo-protocolo-incorrecto");
    setCurrentAlert("Código T-Rex incorrecto. Revisa TREX.KEY y vuelve a sincronizar rotores.", "warning");
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
  const rotorProtocolReady = isRotorProtocolReady(target);
  const alignedRotorSetComplete = canAcceptAlignedRotorSet(target);
  if (!rotorProtocolReady && !alignedRotorSetComplete) {
    if (target === "trex") {
      logTrexSubmitDebug("rechazo-codigo");
      setCurrentAlert("Código T-Rex incorrecto. Revisa TREX.KEY y vuelve a sincronizar rotores.", "warning");
      return false;
    }
    if (target === "chimera") logChimeraSession("rechazo-rotores");
    if (target === "grypho") {
      logAlphaSubmitDebug("rechazo-rotores");
      state.gryphoRotorLockUntil = Date.now() + 1800;
      triggerVisualGlitchBurst("normal");
      clonePlay(dinoSounds.garras, 0.32);
      setCurrentAlert("Código ALFA incompleto. Revisa ALPHA-CONTAINMENT.LOG y vuelve a sincronizar rotores.", "warning");
      return false;
    }
    showRotorIncompleteAlert(target, routeKey);
    return false;
  }
  if (alignedRotorSetComplete && !rotorProtocolReady) {
    logRotorSystem(`aceptado-por-rotores-alineados:${target}`);
    if (target === "grypho") logAlphaSubmitDebug("aceptado-por-rotores-alineados");
    if (target === "trex") logTrexSubmitDebug("aceptado-por-rotores-alineados");
    if (target === "chimera") logChimeraSession("aceptado-por-rotores-alineados");
  }

  if (routeKey) {
    return completeEvacuationOverride(routeKey);
  }

  if (ROTOR_PROTOCOLS[target]) {
    return completeRotorProtocol(target);
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
    clearRotorProtocolSnapshot();
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
    clearRotorProtocolSnapshot();
    playDinoSound("trex", 0.35);
    await printLines(["Rotores C-07 sincronizados.", "Compuertas pesadas cerradas.", "Tyrannosaurus rex CONTENIDO."], "success");
    if (state.trexAttackCount < state.director.attackGoals.trex) {
      scheduleAdditionalPredatorAttack("trex");
    } else {
      startDirectorEventIfNeeded("dilo");
    }
    return true;
  }

  if (target === "grypho") {
    state.gryphoContained = true;
    state.gryphoActive = false;
    state.gryphoSabotageUntil = null;
    state.gryphoRotorLockUntil = 0;
    if (state.currentProtocol === "grypho") state.currentProtocol = null;
    if (state.activeThreat === "grypho") state.activeThreat = null;
    if (state.protocoloActivo === "grypho") clearRotorProtocolSnapshot();
    markProgress(state.gryphoStalkCount >= state.director.attackGoals.grypho ? "dilo" : "grypho");
    rewardRecovery("major", "Gryphovenator ALFA neutralizado");
    state.riesgoBiologico = clamp(state.riesgoBiologico - 10, 0, 100);
    state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 8, 0, 100);
    detenerAlerta("SITUACION CONTROLADA // Gryphovenator ALFA neutralizado");
    setPuzzleVisibility("none");
    clearRotorProtocolSnapshot();
    updateHud();
    await printLines([
      "Rotores ALFA sincronizados.",
      "Señuelos termicos desplegados.",
      "Corredores variables sellados.",
      "Camaras restauradas por redundancia optica.",
      "GRYPHOVENATOR ALFA NEUTRALIZADO. OMEGA NO ACTIVADO.",
    ], "success");
    if (state.gryphoStalkCount < state.director.attackGoals.grypho) {
      scheduleGryphoReappearance();
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
    clearRotorProtocolSnapshot();
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
    clearRotorProtocolSnapshot();
    updateHud();
    await printLines([
      "Rotores CHIMERA sincronizados.",
      "Cerrando campos híbridos del núcleo central...",
      `CHIMERASAURUS REX CONTENIDO // VENTANA TEMPORAL ${getChimeraContainmentWindow()}s`,
    ], "success");
    if (!hasAnyEscapeRouteAvailable() && canCreateEscapeOpportunityNow()) {
      addLine("OMEGA sigue inestable, pero hay una oportunidad limitada. Salgan ahora.", "warning");
      crearOportunidadEscape();
    } else if (state.chimeraBreakoutCount < state.director.attackGoals.chimera) {
      addLine("OMEGA AUN NO CEDE: las lecturas híbridas siguen inestables.", "warning");
    } else {
      addLine("OMEGA continúa como estado crítico. Aprovecha la ventana de contención del híbrido para evacuar.", "warning");
    }
    return true;
  }

  return false;
}

async function completeRotorProtocol(target) {
  const protocol = ROTOR_PROTOCOLS[target];
  if (!protocol || !isRotorThreatActive(target)) {
    await typeLine("Este protocolo ya no requiere intervención.", "warning");
    return false;
  }
  const outcomes = {
    power: ["Subestación oeste restablecida.", "ENERGIA PRINCIPAL ONLINE."],
    generator: ["Línea de respaldo sincronizada.", "GENERADOR ONLINE."],
    barrier: ["Cercos magnéticos sincronizados.", "BARRERAS RESTAURADAS."],
    herd: ["Balizas del Sector C sincronizadas.", "TRICERATOPS ESTABILIZADO."],
    anky: ["Balizas logísticas sincronizadas.", "CORREDOR L-05 LIBERADO."],
    stego: ["Aislamiento biológico sincronizado.", "CRISIS DE ESTEGOSAURUS CONTENIDA."],
    compi: ["Cortacircuitos de la subestación sincronizados.", "COMPIS AISLADOS; ENERGIA RESTAURADA."],
  };
  if (target === "power" || target === "compi") {
    state.powerOnline = true;
    state.generatorDamaged = false;
    if (target === "compi") state.timelineFlags.compi = false;
    state.energiaSistema = clamp(state.energiaSistema + 22, 0, 100);
    state.estabilidadLaboratorio = clamp(state.estabilidadLaboratorio + 10, 0, 100);
  } else if (target === "generator") {
    state.generatorDamaged = false;
    state.generatorRepaired = true;
    state.powerOnline = true;
    state.energiaSistema = clamp(state.energiaSistema + 18, 0, 100);
  } else if (target === "barrier") {
    state.barriersRestored = true;
  } else if (target === "herd") {
    state.herdCalmed = true;
    state.damageInstalacion = clamp(state.damageInstalacion - 6, 0, 100);
  } else if (target === "anky") {
    state.ankyRedirected = true;
    state.damageInstalacion = clamp(state.damageInstalacion - 5, 0, 100);
  } else if (target === "stego") {
    state.stegoAnalyzed = true;
    state.riesgoBiologico = clamp(state.riesgoBiologico - 7, 0, 100);
  }
  rewardRecovery(target === "generator" ? "major" : "standard", `${protocol.label.toLowerCase()} resuelto por rotores`);
  markProgress(protocol.next);
  state.currentProtocol = null;
  clearRotorProtocolSnapshot();
  setPuzzleVisibility("none");
  detenerAlerta(`SITUACION CONTROLADA // ${protocol.label}`);
  updateHud();
  await printLines([`ROTORES ${protocol.label} SINCRONIZADOS.`, ...outcomes[target]], "success");
  if (target === "barrier") startDirectorEventIfNeeded("herd");
  if (target === "herd") startDirectorEventIfNeeded("anky");
  if (target === "anky") startDirectorEventIfNeeded("stego");
  return true;
}

function resetProtocolAttempt(target, message = "Protocolo reiniciado. Vuelve a alinear rotores y guardar digitos.") {
  setCipherTarget(target);
  setPuzzleVisibility(target);
  updateCipherHelper();
  currentAlertText.textContent = message;
}

function rotateCipherRotor(index, direction = -1, feedback = true) {
  preservePuzzleViewport();
  if (state.cipherHelper.target === "grypho" && Date.now() < state.gryphoRotorLockUntil) {
    currentAlertText.textContent = "Interferencia ALFA: rotor bloqueado por telemetria falsa. Espera un instante.";
    triggerVisualGlitchBurst("normal");
    return;
  }
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
  state.rotorSystem.sessionId += 1;
  state.rotorSystem.protocoloActivo = target;
  state.rotorSystem.savedDigits = "";
  state.rotorSystem.generatedCode = "";
  state.rotorSystem.expectedCode = getExpectedDigitsForTarget(target);
  state.rotorSystem.alignedRotors = [];
  state.rotorSystem.estadoActual = "loaded";
  state.cipherHelper.target = target;
  if (target === "chimera") {
    if (state.chimeraActive) state.currentProtocol = "chimerasaurus";
  } else if (getRouteKeyFromCipherTarget(target)) {
    state.currentProtocol = target;
  } else {
    state.currentProtocol = isRotorThreatActive(target) ? target : null;
  }
  state.rotorSystem.rotores = getCipherRotorsForTarget(target);
  state.cipherHelper.rotors = state.rotorSystem.rotores;
  state.cipherHelper.activeRotorIndex = 0;
  state.cipherHelper.buffer = "";
  state.rotorFeedback.rotatedIndex = -1;
  state.rotorFeedback.correctIndex = -1;
  if (target !== "chimera") state.omegaRotorsSolved = false;
  syncRotorProtocolSnapshot();
  logRotorSystem(`load:${target}`);
  if (target === "trex") logTrexSubmitDebug("load");
  debugRotorState("setCipherTarget");
  restorePuzzleViewport();
}

async function appendCipherResult() {
  syncCipherBufferFromRotors();
  const rotor = state.cipherHelper.rotors[state.cipherHelper.activeRotorIndex];
  if (!rotor) return;
  const expected = decodeRotorValue(rotor.letter, rotor.shift);
  if (rotor.currentValue !== expected) {
    setCurrentAlert("El rotor activo aún no está alineado. Sigue girando antes de guardar el dígito.", "warning");
    return;
  }
  const requiredLength = state.cipherHelper.rotors.length || 3;
  if (state.cipherHelper.buffer.length >= requiredLength) {
    setCurrentAlert(`La secuencia ya tiene ${requiredLength} rotores guardados.`, "warning");
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
  } else if (state.cipherHelper.target === "grypho" && state.cipherHelper.buffer.length === 3) {
    setCurrentAlert("Rotores ALFA sincronizados. Pulsa Enviar contención antes de que Gryphovenator cambie sector.", "warning");
  } else if (getRouteKeyFromCipherTarget(state.cipherHelper.target) && state.cipherHelper.buffer.length === state.cipherHelper.rotors.length) {
    setCurrentAlert("Cuatro rotores de override sincronizados. Escape automático en curso.", "warning");
  } else if (state.cipherHelper.buffer.length === 3) {
    setCurrentAlert("Rotores alineados. Pulsa Enviar contención para ejecutar el protocolo.", "warning");
  }
  if (state.cipherHelper.activeRotorIndex < state.cipherHelper.rotors.length - 1) {
    state.cipherHelper.activeRotorIndex += 1;
  } else if (state.cipherHelper.buffer.length === state.cipherHelper.rotors.length) {
    state.cipherHelper.activeRotorIndex = state.cipherHelper.rotors.length - 1;
  }
  debugRotorState("appendCipherResult");
  logRotorSystem(`save:${state.rotorSystem.protocoloActivo || state.cipherHelper.target}`);
  updateCipherHelper();
  if (getRouteKeyFromCipherTarget(state.cipherHelper.target) && state.cipherHelper.buffer.length === state.cipherHelper.rotors.length) {
    await sendRotorContainment();
  }
}

async function sendRotorContainment() {
  syncCipherBufferFromRotors();
  const submitTarget = state.protocoloActivo || state.cipherHelper.target;
  if (submitTarget === "trex" || state.cipherHelper.target === "trex") logTrexSubmitDebug("button");
  if (submitTarget === "grypho" || state.cipherHelper.target === "grypho") logAlphaSubmitDebug("button");
  if (submitTarget !== state.cipherHelper.target) {
    setCurrentAlert("El módulo de rotores no coincide con el protocolo activo. Recarga el archivo .KEY del objetivo actual.", "warning");
    return false;
  }
  const requiredLength = state.cipherHelper.rotors.length || 3;
  if (state.cipherHelper.buffer.length < requiredLength) {
    showRotorIncompleteAlert(submitTarget, getRouteKeyFromCipherTarget(submitTarget));
    return false;
  }
  return executeRotorContainment(submitTarget);
}

function isRotorThreatActive(target) {
  if (target === "raptor") return state.timelineFlags.raptor && !state.raptorContained;
  if (target === "trex") return state.timelineFlags.trex && !state.trexContained;
  if (target === "grypho") return state.gryphoActive && !state.gryphoContained;
  if (target === "dilo") return state.timelineFlags.dilo && !state.diloNeutralized;
  if (target === "chimera") return state.chimeraActive && state.omegaActive;
  if (target === "power") return !state.powerOnline && !state.timelineFlags.compi;
  if (target === "generator") return state.generatorDamaged;
  if (target === "barrier") return state.timelineFlags.barrier && !state.barriersRestored;
  if (target === "herd") return state.timelineFlags.herd && !state.herdCalmed;
  if (target === "anky") return state.timelineFlags.anky && !state.ankyRedirected;
  if (target === "stego") return state.timelineFlags.stego && !state.stegoAnalyzed;
  if (target === "compi") return state.timelineFlags.compi && !state.powerOnline;
  return false;
}

function focusLockIfNeeded() {
  if (!state.bootStarted || state.escaped || state.gameOver) return;
  showOverlaySafely(focusLock, { requiresInteraction: true, focusElement: resumeSession });
  playAlert(0.45);
}

function hideFocusLock() {
  hideOverlaySafely(focusLock);
  focusTerminalIfAllowed();
}

function getPriorityZone() {
  if (state.omegaReleased && !state.chimeraContained) return "chimera";
  if (state.generatorDamaged || !state.powerOnline) return "power";
  if (state.timelineFlags.raptor && !state.raptorContained) return "raptor";
  if (state.timelineFlags.trex && !state.trexContained) return "trex";
  if (state.gryphoActive && !state.gryphoContained) return "grypho";
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
  showOverlaySafely(mapModal, { requiresInteraction: true, focusElement: closeMapButton });
  const messages = {
    chimera: "Lectura OMEGA detectada. El Chimerasaurus Rex avanza entre sectores comprometidos.",
    power: !state.barriersRestored && state.diloNeutralized
      ? "Sistema de contención parcialmente desactivado. Barreras del sector este sin respuesta."
      : "Escaneo de infraestructura: generador y red eléctrica muestran pérdida de estabilidad.",
    raptor: "Movimiento detectado en Sector B. Patrón de caza rápida asociado a Velociraptor.",
    trex: "Lectura sísmica elevada. Masa biológica extrema acercándose al corredor C-07.",
    grypho: "ALFA no aparece donde los sensores dicen. Cámaras apagadas, lecturas falsas y corredores manipulados.",
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
    grypho: "raptor",
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
  if (["raptor", "trex", "grypho", "herb", "anky", "brachio", "dilo", "stego"].includes(zoneKey)) {
    playDinoSound(zoneKey === "trex" ? "trex" : zoneKey === "herb" ? "herb" : zoneKey === "grypho" ? "raptor" : zoneKey, 0.5);
  }
  if (zoneKey === "grypho") clonePlay(dinoSounds.garras, 0.36);
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
    power: state.generatorDamaged ? "cat GENERATOR.LOG" : (!state.barriersRestored && state.diloNeutralized ? "cat BARRIER.SYS" : "cat POWER.LOG"),
    grypho: "cat ALPHA-CONTAINMENT.LOG",
    dilo: "cat TOXIN.KEY",
    herb: "cat TRICERATOPS.LOG",
    anky: "cat ANKY.LOG",
    stego: "cat STEGO.LOG",
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
  if (zoneKey === "grypho" && !state.gryphoContained) {
    setCipherTarget("grypho");
    updateCipherHelper();
    setPuzzleVisibility("grypho");
    setCurrentAlert("PROTOCOLO ALFA requiere rotores. Abre ALPHA-CONTAINMENT.LOG, sincroniza y pulsa Enviar contención.", "warning");
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
  const normalizedCommand = normalizeCommandInput(rawCommand);
  const tokens = parseCommand(normalizedCommand);
  if (!tokens.length) return;

  const command = tokens[0].toLowerCase();
  const argsUpper = tokens.slice(1).map((t) => t.toUpperCase());
  const argsLower = tokens.slice(1).map((t) => t.toLowerCase());

  if (await processTrainingCommand(command, tokens, argsLower, argsUpper)) return;

  addLine(`root@jurassic-unix:~# ${rawCommand}`, "command");
  if (normalizedCommand !== rawCommand.trim()) addLine(`Interpretado como: ${normalizedCommand}`, "success");

  if (state.gameOver && !["restart", "clear", "help"].includes(command)) {
    addLine("Sistema bloqueado. Reinicia el escenario para volver a intentarlo.", "error");
    return;
  }

  const legacyRotorTargets = {
    "restore power": state.timelineFlags.compi ? "compi" : "power",
    "repair generator": "generator",
    "restore barrier": "barrier",
    "stabilize triceratops": "herd",
    "redirect anky": "anky",
    "analyze stego": "stego",
  };
  const legacyRotorTarget = legacyRotorTargets[`${command} ${argsLower.slice(0, 1).join("")}`];
  if (legacyRotorTarget && ROTOR_PROTOCOLS[legacyRotorTarget]) {
    requireRotorProtocol(legacyRotorTarget, "Este obstáculo se resuelve con rotores. Alinea, guarda y pulsa Enviar contención.");
    await typeLine("La clave manual solo identifica el protocolo; la resolución se realiza en el módulo de rotores.", "warning");
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
        "- evacuate now: solo funciona después de 30:00 y tras sincronizar la ruta final.",
        "PROTOCOLO DE JUEGO:",
        "1. Lee el OBJETIVO ACTUAL o pulsa Solicitar pista.",
        "2. Abre el archivo indicado con cat ARCHIVO.",
        "3. El módulo de rotores aparecerá automáticamente.",
        "4. Gira hacia atrás, guarda cada rotor en orden y pulsa Confirmar protocolo.",
        "5. A los 30:00, sincroniza los 4 rotores del túnel final para concluir.",
      ], "success");
      return;

    case "ls":
      listFilesInTerminal();
      return;

    case "cat": {
      const fileName = argsUpper.join(" ");
      const files = getFiles();
      if (!fileName) {
        await typeLine("Indica un archivo. Usa ls o el botón VER ARCHIVOS para elegir uno.", "warning");
        return;
      }
      if (!files[fileName]) {
        playAlert();
        addLine(`${command}: ${tokens.slice(1).join(" ")}: archivo no encontrado`, "error");
        return;
      }
      startDirectorEventForFile(fileName);
      if (fileName === "RAPTOR.KEY") setCipherTarget("raptor");
      if (fileName === "TREX.KEY") setCipherTarget("trex");
      if (fileName === "ALPHA-CONTAINMENT.LOG") setCipherTarget("grypho");
      if (fileName === "TOXIN.KEY") setCipherTarget("dilo");
      if (fileName === "POWER.LOG") setCipherTarget(state.timelineFlags.compi ? "compi" : "power");
      if (fileName === "GENERATOR.LOG") setCipherTarget("generator");
      if (fileName === "BARRIER.SYS") setCipherTarget("barrier");
      if (fileName === "TRICERATOPS.LOG") setCipherTarget("herd");
      if (fileName === "ANKY.LOG" || fileName === "ANKY.KEY") setCipherTarget("anky");
      if (fileName === "STEGO.LOG") setCipherTarget("stego");
      if (state.omegaReleased && fileName === "CHIMERA.KEY") setCipherTarget("chimera");
      if (fileName === "RAPTOR.KEY") setPuzzleVisibility("raptor");
      if (fileName === "TREX.KEY") setPuzzleVisibility("trex");
      if (fileName === "ALPHA-CONTAINMENT.LOG") setPuzzleVisibility("grypho");
      if (fileName === "TOXIN.KEY") setPuzzleVisibility("dilo");
      if (fileName === "POWER.LOG") setPuzzleVisibility(state.timelineFlags.compi ? "compi" : "power");
      if (fileName === "GENERATOR.LOG") setPuzzleVisibility("generator");
      if (fileName === "BARRIER.SYS") setPuzzleVisibility("barrier");
      if (fileName === "TRICERATOPS.LOG") setPuzzleVisibility("herd");
      if (fileName === "ANKY.LOG" || fileName === "ANKY.KEY") setPuzzleVisibility("anky");
      if (fileName === "STEGO.LOG") setPuzzleVisibility("stego");
      if (state.omegaReleased && fileName === "CHIMERA.KEY") setPuzzleVisibility("chimera");
      if (state.omegaReleased && fileName === "OMEGA.LOG") state.chimeraFragmentsKnown.omega = true;
      if (state.omegaReleased && fileName === "CHIMERA.KEY") state.chimeraFragmentsKnown.key = true;
      if (state.omegaReleased && fileName === "DNA-MIX.LOG") state.chimeraFragmentsKnown.dna = true;
      markProgress(getCurrentObjectiveKey());
      updateCipherHelper();
      await printLines(files[fileName]);
      const fileFollowups = {
        "POWER.LOG": "Siguiente paso: alinea los rotores de subestación, guarda cada dígito y pulsa Enviar contención.",
        "GENERATOR.LOG": "Siguiente paso: alinea los rotores del generador, guarda cada dígito y pulsa Enviar contención.",
        "DILO.LOG": "Siguiente paso: cat TOXIN.KEY",
        "TOXIN.KEY": "Siguiente paso: alinea rotores, guarda cada rotor y pulsa Enviar contención.",
        "GRYPHO.LOG": "Siguiente paso: cat ALPHA-HYBRID.LOG, cat PREDATOR.TEST y cat ALPHA-CONTAINMENT.LOG.",
        "ALPHA-HYBRID.LOG": "Siguiente paso: cat PREDATOR.TEST y cat ALPHA-CONTAINMENT.LOG.",
        "PREDATOR.TEST": "Siguiente paso: cat ALPHA-CONTAINMENT.LOG.",
        "ALPHA-CONTAINMENT.LOG": "Siguiente paso: alinea rotores ALFA, guarda cada rotor y pulsa Enviar contención.",
        "OMEGA-PROTOTYPE.LOG": "Nota: este archivo explica que ALFA no activa OMEGA.",
        "BARRIER.SYS": "Siguiente paso: alinea los rotores de barreras y pulsa Enviar contención.",
        "TRICERATOPS.LOG": "Siguiente paso: alinea los rotores TRI y pulsa Enviar contención.",
        "ANKY.LOG": "Siguiente paso: alinea los rotores de desvío y pulsa Enviar contención.",
        "ANKY.KEY": "Siguiente paso: alinea los rotores de desvío y pulsa Enviar contención.",
        "STEGO.LOG": "Siguiente paso: alinea los rotores de aislamiento y pulsa Enviar contención.",
        "DOOR.SYS": "Siguiente paso: unlock door DOOR-LOCK-42 para cargar override de 4 rotores.",
        "HELIPAD.SYS": "Siguiente paso: activate helipad para cargar override de 4 rotores.",
        "TUNNEL.SYS": "Siguiente paso: open tunnel para cargar override de 4 rotores.",
        "CARGO.SYS": "Siguiente paso: start cargo para cargar override de 4 rotores.",
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
        `5. Gryphovenator ALFA: ${state.gryphoContained ? "COMPLETA" : state.gryphoActive ? "ACTIVA" : "LATENTE"}`,
        `6. Dilophosaurus: ${!isEventPlanned("dilo") ? "NO PROGRAMADA" : state.diloNeutralized ? "COMPLETA" : state.timelineFlags.dilo ? "ACTIVA" : "LATENTE"}`,
        `7. Barreras: ${!isEventPlanned("barrier") ? "NO PROGRAMADA" : state.barriersRestored ? "COMPLETA" : state.timelineFlags.barrier ? "ACTIVA" : "LATENTE"}`,
        `8. Triceratops: ${!isEventPlanned("herd") ? "NO PROGRAMADA" : state.herdCalmed ? "COMPLETA" : state.timelineFlags.herd ? "ACTIVA" : "LATENTE"}`,
        `9. Ankylosaurus: ${!isEventPlanned("anky") ? "NO PROGRAMADA" : state.ankyRedirected ? "COMPLETA" : state.timelineFlags.anky ? "ACTIVA" : "LATENTE"}`,
        `10. Estegosaurus: ${!isEventPlanned("stego") ? "NO PROGRAMADA" : state.timelineFlags.stego ? state.stegoAnalyzed ? "COMPLETA" : "ACTIVA" : "LATENTE"}`,
        `11. Chimerasaurus: ${state.omegaReleased ? state.chimeraContained ? "COMPLETA" : "ACTIVA" : "LATENTE"}`,
        `12. Puerta: ${state.doorUnlocked ? "COMPLETA" : "BLOQUEADA"}`,
        `13. Evacuacion: ${state.escaped ? "COMPLETA" : "PENDIENTE"}`,
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
      if (argsLower[0] === "grypho") {
        await executeRotorContainment("grypho");
        return;
      }
      if (argsLower[0] === "chimerasaurus") {
        await executeRotorContainment("chimera");
        return;
      }
      break;

    case "neutralize":
      if (argsLower[0] === "grypho" && argsUpper.slice(1).join("-") === "ALPHA-SEAL-19") {
        requireRotorProtocol("grypho", "PROTOCOLO ALFA requiere rotores. No se acepta neutralizacion por clave manual.");
        await typeLine("ALFA-SEAL-19 solo autoriza el módulo; la contención real se ejecuta con rotores y Enviar contención.", "warning");
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
        loadEvacuationOverride("main");
        return;
      }
      break;

    case "activate":
      if (argsLower[0] === "helipad") {
        loadEvacuationOverride("helipad");
        return;
      }
      break;

    case "open":
      if (argsLower[0] === "tunnel") {
        loadEvacuationOverride("tunnel");
        return;
      }
      break;

    case "start":
      if (argsLower[0] === "cargo") {
        loadEvacuationOverride("cargo");
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

  await typeLine(`No reconozco "${rawCommand}". No hay penalización: usa help, status, incidents o hint.`, "warning");
  showContextGuide(getCurrentObjectiveKey(), "warning");
}

function revealBootOverlay() {
  if (blockIntroDuringGameplay("revealBootOverlay")) return;
  if (state.introFinished) return;
  if (state.gameState !== "intro") return;
  state.introFinished = true;
  introVideo.pause();
  audioIntro.pause();
  hideOverlaySafely(introOverlay);
  showOverlaySafely(bootOverlay, { requiresInteraction: true, focusElement: startSystemButton });
  setGameState("tutorial", "intro finalizada");
}

function finalizarIntroSiListo() {
  if (blockIntroDuringGameplay("INTRO_AUDIO.MP3 ended")) return;
  if (state.gameState !== "intro") return;
  if (!state.introStarted || state.introFinished) return;
  revealBootOverlay();
}

function iniciarProtocolo() {
  if (blockIntroDuringGameplay("iniciarProtocolo")) return;
  if (state.gameState !== "intro") return;
  if (state.protocolStarted) return;
  state.protocolStarted = true;
  state.introStarted = true;
  startIntroButton.disabled = true;
  startIntroButton.textContent = "PROTOCOLO EN CURSO...";
  introStatus.textContent = "Protocolo activado. Intro en ejecución. La emergencia real inicia despues de la capacitacion.";
  introVideo.loop = true;
  introVideo.currentTime = 0;
  introVideo.play().catch(() => {
    if (isGameplayActive()) {
      addLine("AVISO: video de intro reportó error fuera de intro. Gameplay continúa.", "warning");
      return;
    }
    introStatus.textContent = "No fue posible reproducir el video de apertura. El sistema continuará con audio.";
  });
  reproducirSonido("intro", { volume: 0.6 }).then((played) => {
    if (!played) {
      console.warn("INTRO_AUDIO.MP3 no pudo reproducirse correctamente.");
      if (isGameplayActive()) {
        addLine("AVISO: INTRO_AUDIO.MP3 no pudo reproducirse fuera de intro. Gameplay continúa.", "warning");
        return;
      }
      introStatus.textContent = "INTRO_AUDIO.MP3 no pudo reproducirse. Puedes continuar con OMITIR INTRO sin romper la sesión.";
    }
  });
}

startIntroButton.addEventListener("click", iniciarProtocolo);
skipIntroButton.addEventListener("click", () => {
  if (blockIntroDuringGameplay("skipIntroButton")) return;
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
  if (isGameplayActive()) {
    addLine("AVISO: INTRO_AUDIO.MP3 reportó error fuera de intro. Gameplay continúa.", "warning");
    return;
  }
  introStatus.textContent = "Error en INTRO_AUDIO.MP3. Usa OMITIR INTRO para continuar manualmente.";
});
escapeVideo?.addEventListener("ended", () => {
  if (state.finalOutcome === "failure") {
    finishFailureCinematic();
    return;
  }
  if (state.finalOutcome !== "success") {
    if (isGameplayActive()) addLine("AVISO: video final terminó sin resultado final. Gameplay continúa.", "warning");
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
  if (state.finalOutcome !== "success") {
    if (isGameplayActive()) addLine("AVISO: error en video final sin resultado final. Gameplay continúa.", "warning");
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
toggleNarrativeMuteButton.addEventListener("click", toggleNarrativeMute);
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

openMapButton.addEventListener("click", () => showOverlaySafely(mapModal, { requiresInteraction: true, focusElement: closeMapButton }));
closeMapButton.addEventListener("click", () => hideOverlaySafely(mapModal));
mapBackdrop.addEventListener("click", () => hideOverlaySafely(mapModal));

speciesMarkers.forEach((marker) => {
  marker.addEventListener("click", () => {
    setActiveSpecies(marker.dataset.zone);
    if (["raptor", "trex", "grypho", "anky", "brachio", "dilo", "stego", "chimera"].includes(marker.dataset.zone)) {
      playDinoSound(marker.dataset.zone === "trex" ? "trex" : marker.dataset.zone === "grypho" ? "raptor" : marker.dataset.zone, 0.3);
      if (marker.dataset.zone === "grypho") {
        clonePlay(dinoSounds.garras, 0.28);
      }
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
focusCipherAppendButton.addEventListener("click", appendCipherResult);
if (!rotorContainmentListenerAttached) {
  focusCipherSendButton.addEventListener("click", async () => {
    await sendRotorContainment();
    input.value = "";
  });
  rotorContainmentListenerAttached = true;
  state.rotorSystem.listeners.send = 1;
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
state.rotorSystem.listeners.cards = 6;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) focusLockIfNeeded();
});
window.addEventListener("blur", focusLockIfNeeded);

initializeScenario();
updateHud();
