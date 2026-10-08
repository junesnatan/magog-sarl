export const SITE_CONFIG = {
  companyName: "MAGOG SARL",
  tagline: "Ingénierie Hydraulique & Génie Civil Construction",
  country: "Bénin",
  city: "Cotonou & Abomey-Calavi, République du Bénin",
  phones: [
    { display: "+229 01 95 95 26 14", raw: "+2290195952614", label: "Direction Technique & Devis" },
    { display: "+229 01 41 85 72 26", raw: "+2290141857226", label: "Service Travaux & Chantiers" },
    { display: "+229 01 52 11 50 11", raw: "+2290152115011", label: "Urgences & Relations Clients" },
  ],
  whatsappNumber: "2290195952614",
  email: "contact@magogsarl.bj",
  address: "Lot 412, Quartier Agla / Haie Vive, Cotonou, Bénin",
  hours: "Lundi au Vendredi : 07h30 - 18h30 | Samedi : 08h00 - 14h00",
  emergencyAvailability: "Permanence chantiers 24h/24 - 7j/7"
};

// Hydraulique Spécialités avec images locales haute définition garanties
export const HYDRAULIQUE_SERVICES = [
  {
    id: "aep-chateaux",
    title: "Châteaux d'Eau & Réservoirs en Béton Armé",
    subtitle: "Stockage & Distribution Gravitaire",
    description: "Étude structurale, ferraillage, coffrage glissant et coulage de réservoirs surélevés de 50 à 2 000 m³. Épreuves d'étanchéité à l'eau et raccordement au réseau de refoulement.",
    specs: [
      "Calculs hydrostatiques et dynamiques aux Eurocodes 2",
      "Hauteurs sous cuve de 10 à 35 mètres",
      "Revêtement d'étanchéité alimentaire certifié",
      "Équipements de tuyauterie inox et vannes papillon motorisées"
    ],
    image: "/images/chateau_eau.jpg",
    metric: "Capacité jusqu'à 2 000 m³"
  },
  {
    id: "forages-profonds",
    title: "Forages Grande Profondeur & Débit Industriel",
    subtitle: "Captage des Nappes Souterraines",
    description: "Sondages géophysiques, diagraphies électriques et forages jusqu'à 350 mètres au Rotary et Marteau Fond de Trou (MFT). Équipement en tubage plein et crépines inox.",
    specs: [
      "Forages de reconnaissance et d'exploitation",
      "Débit d'exploitation testé jusqu'à 180 m³/h",
      "Massif filtrant en gravier de quartz calibré",
      "Essais de pompage par paliers et analyses bactériologiques"
    ],
    image: "/images/forage_profond.jpg",
    metric: "Profondeur jusqu'à 350 m"
  },
  {
    id: "pompage-solaire",
    title: "Stations de Pompage Solaire Photovoltaïque",
    subtitle: "Autonomie Énergétique Durable",
    description: "Dimensionnement et installation de générateurs solaires couplés à des variateurs de fréquence pour l'alimentation en eau des localités rurales et exploitations agricoles.",
    specs: [
      "Modules photovoltaïques monocristallins haute performance",
      "Pompes immergées inox multicellulaires",
      "Onduleurs solaires avec protections foudre et surtensions",
      "Télémétrie GSM pour suivi du débit et du niveau de nappe"
    ],
    image: "/images/pompage_solaire.jpg",
    metric: "100% Autonome & Zéro Carbone"
  },
  {
    id: "reseaux-aep",
    title: "Réseaux d'Adduction et Bornes-Fontaines (AEP)",
    subtitle: "Transport & Desserte des Populations",
    description: "Pose de canalisations d'adduction en PEHD et fonte ductile, terrassement, calage, pose de ventouses et vidanges, essais de mise en pression continue.",
    specs: [
      "Canalisations PEHD DN 63 à DN 400 PN 16",
      "Bornes-fontaines et branchements particuliers",
      "Chambres de vannes bétonnées sécurisées",
      "Désinfection et stérilisation du réseau avant mise en eau"
    ],
    image: "/images/conduite_aep.jpg",
    metric: "Plus de 150 km posés au Bénin"
  },
  {
    id: "barrages-retenues",
    title: "Aménagements Hydro-Agricoles & Barrages",
    subtitle: "Maîtrise de l'Eau & Irrigation",
    description: "Digues en terre compactée, déversoirs de crue en béton armé, ouvrages de vidange de fond et canaux d'irrigation pour la valorisation agricole et pastorale.",
    specs: [
      "Études hydrologiques de bassin versant",
      "Digues avec noyau étanche en argile compactée",
      "Périmètres irrigués avec prises d'eau régulées",
      "Protection des berges par enrochement et gabions"
    ],
    image: "/images/chateau_eau.jpg",
    metric: "Retenues jusqu'à 800 000 m³"
  }
];

// Génie Civil Spécialités avec images locales garanties
export const GENIECIVIL_SERVICES = [
  {
    id: "batiments-complexes",
    title: "Bâtiments R+N & Complexes Tertiaires",
    subtitle: "Gros Œuvre & Second Œuvre Structuré",
    description: "Conception, calculs de structures et réalisation complète d'immeubles de bureaux, centres commerciaux, complexes scolaires et résidences de standing.",
    specs: [
      "Notes de calcul conformes Eurocodes et règles BAEL 91",
      "Bétons de structure dosés à 350 kg/m³ et bétons autoplaçants",
      "Poteaux, poutres, dalles pleines et planchers précontraints",
      "Suivi rigoureux des contrôles de décoffrage et étayage"
    ],
    image: "/images/batiment_chantier.jpg",
    metric: "Bâtiments jusqu'à R+6"
  },
  {
    id: "fondations-speciales",
    title: "Fondations Spéciales & Inclusions Rigides",
    subtitle: "Stabilité sur Sols Difficiles",
    description: "Réalisation de fondations profondes par pieux forés, puits marocains, radiers généraux nervurés et substitution de sol pour sols compressibles ou lagunaires.",
    specs: [
      "Essais pressiométriques et pénétromètres dynamiques",
      "Pieux forés tubés de diamètre 600 à 1 200 mm",
      "Radiers en béton armé forte épaisseur avec étanchéité",
      "Contrôle d'intégrité par impédance acoustique"
    ],
    image: "/images/batiment_chantier.jpg",
    metric: "Profondeur d'ancrage jusqu'à 30 m"
  },
  {
    id: "assainissement-dalots",
    title: "Dalots Cadres & Assainissement Pluvial",
    subtitle: "Protection Contre les Inondations",
    description: "Construction de collecteurs pluviaux rectangulaires et trapézoïdaux en béton armé, dalots simples et multiples pour le drainage urbain et le franchissement routier.",
    specs: [
      "Dalots cadres 2x2m, 3x2m et double 4x3m",
      "Collecteurs primaires et caniveaux latéraux pavés",
      "Bassins de rétention et régulateurs de débit",
      "Ouvrages de transition et têtes d'aqueduc"
    ],
    image: "/images/dalot_assainissement.jpg",
    metric: "Capacité d'évacuation 85 m³/s"
  },
  {
    id: "voirie-amenagement",
    title: "Voirie & Aménagements Urbains (VRD)",
    subtitle: "Infrastructures de Transport & Dessertes",
    description: "Travaux de terrassement, confection de couches de base et de fondation en graveleux latéritique, pose de pavés autobloquants et bordures en béton extrudé.",
    specs: [
      "Chaussées pavées pour trafic lourd et voiries résidentielles",
      "Fourreaux techniques multitubulaires enterrés",
      "Réseaux d'éclairage public et signalisation routière",
      "Aménagement de trottoirs et rampes d'accès PMR"
    ],
    image: "/images/voirie_pavage.jpg",
    metric: "Conformité stricte aux cahiers des charges"
  },
  {
    id: "laboratoire-controle",
    title: "Contrôle Technique & Essais Géotechniques",
    subtitle: "Rigueur Scientifique & Normes",
    description: "Prélèvements d'échantillons sur site, confection d'éprouvettes cylindriques, essais de compression à 7, 14 et 28 jours, essais Proctor et perméabilité.",
    specs: [
      "Écrasement d'éprouvettes béton selon NF EN 12390-3",
      "Essais à la plaque et compacité au densitomètre",
      "Agrément officiel et traçabilité de chaque gâchée",
      "Rapports de validation certifiés pour les maîtres d'œuvre"
    ],
    image: "/images/batiment_chantier.jpg",
    metric: "Épreuves normées 100% conformes"
  }
];

export const HOTSPOTS_DATA = [
  {
    id: "aep",
    title: "Château d'Eau & Réseau AEP",
    category: "Ingénierie Hydraulique",
    top: "22%",
    left: "72%",
    description: "Conception et coulage de réservoirs surélevés en béton armé (100 à 1 500 m³), calculs hydrodynamiques et réseaux de distribution gravitaire.",
    metric: "1 200 m³ de capacité moyenne",
    icon: "Droplets"
  },
  {
    id: "forage",
    title: "Forages Grande Profondeur",
    category: "Hydraulique Souterraine",
    top: "65%",
    left: "30%",
    description: "Sondages géophysiques, forages Rotary & MFT jusqu'à 350 m de profondeur, tubage inox/PVC alimentaire et essais de pompage longue durée.",
    metric: "Débit testé: 45 m³/h",
    icon: "Activity"
  },
  {
    id: "batiment",
    title: "Structures Béton Armé R+5",
    category: "Génie Civil & BTP",
    top: "38%",
    left: "48%",
    description: "Dimensionnement aux Eurocodes et règles BAEL, fondations profondes sur pieux, poutres précontraintes et structures antisismiques.",
    metric: "Précision millimétrique",
    icon: "Building2"
  },
  {
    id: "assainissement",
    title: "Caniveaux & Ouvrages Pluviaux",
    category: "Voirie & Assainissement",
    top: "80%",
    left: "68%",
    description: "Collecteurs bétonnés, dalots de franchissement, bassins de rétention et régulation des eaux pluviales en zone inondable.",
    metric: "> 35 km aménagés",
    icon: "ShieldCheck"
  },
  {
    id: "energie",
    title: "Station de Pompage Solaire",
    category: "Énergies & Automatismes",
    top: "18%",
    left: "24%",
    description: "Alimentation photovoltaïque hybride avec variateurs de fréquence, télémétrie GSM et automatisation des vannes de refoulement.",
    metric: "Zéro émission CO2",
    icon: "Sun"
  }
];

export const COVERFLOW_PROJECTS = [
  {
    id: 1,
    title: "Adduction d'Eau Potable Multisites (AEP)",
    category: "Hydraulique Urbaine",
    location: "Abomey-Calavi & Allada, Bénin",
    image: "/images/chateau_eau.jpg",
    badge: "Ouvrage Stratégique",
    specs: "Château d'eau 500 m³, 42 km de conduites PEHD, 18 bornes-fontaines",
    client: "Direction Générale de l'Eau / Partenaires techniques",
    description: "Projet d'alimentation continue en eau potable pour plus de 65 000 habitants avec traitement UV et télégestion automatisée."
  },
  {
    id: 2,
    title: "Complexe Administratif & Siège R+4",
    category: "Génie Civil & BTP",
    location: "Cotonou Littoral, Bénin",
    image: "/images/batiment_chantier.jpg",
    badge: "Construction Haute Performance",
    specs: "Surface bâtie 4 800 m², fondations spéciales sur inclusions rigides, isolation thermique",
    client: "Groupe Industriel Privé",
    description: "Édification clé en main d'un immeuble d'affaires moderne avec double façade ventilée, verrière bioclimatique et conformité ERP."
  },
  {
    id: 3,
    title: "Station de Pompage Solaire Agricole",
    category: "Hydraulique Rurale",
    location: "Borgou / Parakou, Bénin",
    image: "/images/pompage_solaire.jpg",
    badge: "Énergie Renouvelable",
    specs: "Générateur 25 kWc, pompe immergée 45 m³/h, réseau gravitaire 18 km",
    client: "Coopération Internationale & Mairies",
    description: "Ouvrage de pompage autonome permettant l'approvisionnement permanent des populations et des périmètres maraîchers."
  },
  {
    id: 4,
    title: "Dalot Cadre Double 4x3m & Assainissement",
    category: "Travaux Publics & VRD",
    location: "Porto-Novo / Sèmè-Kpodji, Bénin",
    image: "/images/dalot_assainissement.jpg",
    badge: "Génie Civil Lourd",
    specs: "Béton C35/45, capacité d'évacuation 68 m³/s, chaussée renforcée pour trafic lourd",
    client: "Programme de Modernisation Urbaine",
    description: "Construction d'un franchissement hydraulique majeur évitant les inondations récurrentes sur un axe logistique prioritaire."
  },
  {
    id: 5,
    title: "Champs de Forages Industriels Profonds",
    category: "Hydraulique Industrielle",
    location: "Zone Économique Spéciale (GDIZ), Bénin",
    image: "/images/forage_profond.jpg",
    badge: "Zone Industrielle",
    specs: "4 forages à 180 m de profondeur, débit cumulé de 160 m³/h, unité de déferrisation",
    client: "Consortium Agro-industriel",
    description: "Fourniture sécurisée en eau déminéralisée pour les processus de transformation industrielle selon les normes sanitaires strictes."
  }
];

export const ARC_PORTFOLIO_ITEMS = [
  {
    id: "arc-1",
    step: "01",
    title: "Étude Topographique & Géotechnique",
    subtitle: "Reconnaissance de sol",
    category: "Diagnostic Préalable",
    image: "/images/batiment_chantier.jpg",
    desc: "Levés tachéométriques GPS différentiel, essais pressiométriques et modélisation 3D du terrain."
  },
  {
    id: "arc-2",
    step: "02",
    title: "Calcul de Structures & Plans Béton",
    subtitle: "Conception DAO/BIM",
    category: "Bureau d'Études",
    image: "/images/batiment_chantier.jpg",
    desc: "Modélisation éléments finis, ferraillage conforme aux normes parasismiques et métrés exhaustifs."
  },
  {
    id: "arc-3",
    step: "03",
    title: "Château d'Eau & Coulage Massif",
    subtitle: "Béton haute résistance",
    category: "Hydraulique Ouvrage",
    image: "/images/chateau_eau.jpg",
    desc: "Coulage glissant en continu, contrôle de résistance à l'écrasement et étanchéité certifiée."
  },
  {
    id: "arc-4",
    step: "04",
    title: "Forage Rotary & Tubage Inox",
    subtitle: "Exploration des nappes",
    category: "Hydraulique Souterraine",
    image: "/images/forage_profond.jpg",
    desc: "Percement géologique au tricône, diagraphie de puits et pose de crépines à fentes continues."
  },
  {
    id: "arc-5",
    step: "05",
    title: "Réseaux Pluviaux & Voirie Pavée",
    subtitle: "Assainissement pérenne",
    category: "Infrastructures VRD",
    image: "/images/dalot_assainissement.jpg",
    desc: "Pose de canalisations gros diamètre, dalots préfabriqués et raccordement aux exutoires naturels."
  },
  {
    id: "arc-6",
    step: "06",
    title: "Pose de Réseau AEP & Mise en Eau",
    subtitle: "Mise en service certifiée",
    category: "Clé en Main",
    image: "/images/conduite_aep.jpg",
    desc: "Épreuves hydrauliques en pression, DOE complet et formation des exploitants locaux."
  }
];

export const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Diagnostic & Topographie",
    desc: "Sondages hydrologiques, forages d'essais, études géotechniques de sol et levés topographiques haute précision."
  },
  {
    number: "02",
    title: "Conception & Modélisation",
    desc: "Calculs de structures (Béton armé, charpente métallique), dimensionnement hydraulique (Epanet, EPANET 2) et plans d'exécution."
  },
  {
    number: "03",
    title: "Exécution & Conduite de Chantier",
    desc: "Déploiement d'engins spécialisés, respect scrupuleux des normes de sécurité QHSE et contrôle continu des matériaux."
  },
  {
    number: "04",
    title: "Réception & Maintenance",
    desc: "Essais sous pression, tests de charge, réception définitive avec DOE (Dossier des Ouvrages Exécutés) et garantie décennale."
  }
];

export const STATS_LIST = [
  { value: "120+", label: "Chantiers livrés au Bénin", sublabel: "Ouvrages sans réserve" },
  { value: "15+", label: "Années d'expertise technique", sublabel: "Ingénieurs seniors" },
  { value: "99.4%", label: "Conformité aux épreuves", sublabel: "Normes QHSE & NF" },
  { value: "24h/48h", label: "Réactivité d'étude de dossier", sublabel: "Disponibilité continue" }
];

export const FAQ_LIST = [
  {
    q: "Quelles sont les zones d'intervention de MAGOG SARL au Bénin ?",
    a: "MAGOG SARL intervient sur l'ensemble du territoire béninois : Cotonou, Porto-Novo, Abomey-Calavi, Ouidah, Bohicon, Parakou, Natitingou, Djougou, Kandi, ainsi que dans les pays de la sous-région pour des missions spécifiques."
  },
  {
    q: "Comment obtenir un devis pour un forage ou un projet de génie civil ?",
    a: "Vous pouvez nous joindre directement par téléphone aux numéros +229 01 95 95 26 14, 01 41 85 72 26 ou 01 52 11 50 11, par WhatsApp ou via le formulaire sur la page Contact. Une pré-étude est établie sous 24 à 48 heures."
  },
  {
    q: "Quelles normes appliquez-vous pour les calculs de structures et les réseaux d'eau ?",
    a: "Nous dimensionnons nos ouvrages selon les normes Eurocodes (EC2 pour le béton armé, EC7 pour la géotechnique, EC8 pour le parasismique) et les règles françaises BAEL 91 modifiées 99, ainsi que les recommandations de la Direction Générale de l'Eau pour les réseaux hydrauliques."
  },
  {
    q: "Prenez-vous en charge la totalité d'un projet clé en main ?",
    a: "Oui, de l'étude préliminaire de faisabilité (levé topographique, étude de sol) jusqu'à la modélisation, l'approvisionnement des matériaux certifiés, la conduite des travaux, et la réception finale avec remise du Dossier des Ouvrages Exécutés (DOE)."
  }
];
