import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

const translations = {
  // Accessibility
  "a11y.skip": { fr: "Aller au contenu principal", en: "Skip to main content" },
  "a11y.menuOpen": { fr: "Ouvrir le menu", en: "Open menu" },
  "a11y.menuClose": { fr: "Fermer le menu", en: "Close menu" },
  "a11y.heroImg": {
    fr: "Étudiants jouant au sport dans un parc de Montréal",
    en: "Students playing sports in a Montreal park",
  },

  // Nav
  "nav.sports": { fr: "Sports", en: "Sports" },
  "nav.how": { fr: "Comment ça marche", en: "How it works" },
  "nav.parks": { fr: "Parcs", en: "Parks" },
  "nav.demo": { fr: "Voir la démo", en: "Try the demo" },

  // Hero
  "hero.eyebrow": {
    fr: "Montréal · Sport étudiant",
    en: "Montreal · Student sports",
  },
  "hero.badge": {
    fr: "3e au 54H Start-Up",
    en: "3rd at 54H Start-Up",
  },
  "hero.title": {
    fr: "Trouve ta gang.\nJoue cette semaine.",
    en: "Find your crew.\nPlay this week.",
  },
  "hero.subtitle": {
    fr: "Rallyo matche les étudiants de Montréal pour jouer au soccer, basketball et tennis — selon ton niveau, tes disponibilités et ton parc.",
    en: "Rallyo matches Montreal students to play soccer, basketball and tennis — based on your skill level, schedule and local park.",
  },
  "hero.cta.demo": { fr: "Essayer la démo", en: "Try the demo" },
  "hero.cta.code": { fr: "Voir le code", en: "View the code" },
  "hero.cta.explore": {
    fr: "Explorer les 6 parcs",
    en: "Explore the 6 parks",
  },
  "hero.caption.label": {
    fr: "Jeu de données démo",
    en: "Demo dataset",
  },
  "hero.caption.value": {
    fr: "18 étudiants · 6 parcs · 3 sports",
    en: "18 students · 6 parks · 3 sports",
  },

  // Facts
  "fact.students.value": { fr: "18", en: "18" },
  "fact.students.label": {
    fr: "étudiants dans la démo",
    en: "students in the demo",
  },
  "fact.parks.value": { fr: "6", en: "6" },
  "fact.parks.label": { fr: "parcs à Montréal", en: "parks in Montreal" },
  "fact.sports.value": { fr: "3", en: "3" },
  "fact.sports.label": {
    fr: "sports : soccer, basket, tennis",
    en: "sports: soccer, basketball, tennis",
  },
  "fact.competition.value": { fr: "3e", en: "3rd" },
  "fact.competition.label": {
    fr: "au 54H Start-Up",
    en: "at 54H Start-Up",
  },

  // How it works
  "how.eyebrow": { fr: "En 3 étapes", en: "In 3 steps" },
  "how.title": { fr: "Comment ça marche", en: "How it works" },
  "how.subtitle": {
    fr: "Zéro groupe WhatsApp mort. Tu indiques ton créneau, Rallyo assemble un groupe équilibré près de ton parc.",
    en: "Zero dead group chats. Share your schedule and Rallyo puts together a balanced pod near your park.",
  },
  "how.step1.title": { fr: "Crée ton profil", en: "Create your profile" },
  "how.step1.desc": {
    fr: "Choisis ton sport, ton niveau et tes disponibilités.",
    en: "Pick your sport, skill level and availability.",
  },
  "how.step2.title": { fr: "On te matche", en: "Get matched" },
  "how.step2.desc": {
    fr: "L'algorithme te place dans un pod près de chez toi, avec des joueurs de ton niveau.",
    en: "The algorithm puts you in a pod near you, with players at your level.",
  },
  "how.step3.title": {
    fr: "Tu joues, chaque semaine",
    en: "Play every week",
  },
  "how.step3.desc": {
    fr: "Retrouve ton pod au parc. Pas besoin d'organiser quoi que ce soit.",
    en: "Meet your pod at the park. No organizing needed.",
  },

  // Sports
  "sports.eyebrow": { fr: "Disciplines actives", en: "Active sports" },
  "sports.title": { fr: "Les sports", en: "The sports" },
  "sports.subtitle": {
    fr: "Répartition réelle des 18 étudiants du jeu de données démo sur Montréal.",
    en: "Actual breakdown of the 18 students in the Montreal demo dataset.",
  },
  "sports.soccer.desc": {
    fr: "Le sport le plus populaire sur Rallyo. Matchs 5 contre 5 dans les parcs de Montréal.",
    en: "The most popular sport on Rallyo. 5-a-side matches in Montreal parks.",
  },
  "sports.soccer.format": { fr: "5 contre 5 · Gazon & synth.", en: "5-a-side · Turf & grass" },
  "sports.basketball.desc": {
    fr: "Demi-terrains, pick-up games, tous les niveaux.",
    en: "Half-courts, pick-up games, all skill levels.",
  },
  "sports.basketball.format": { fr: "3v3 / 5v5 · Demi-terrains", en: "3v3 / 5v5 · Half-courts" },
  "sports.tennis.desc": {
    fr: "Simple ou double, réserve ton créneau avec un partenaire de ton niveau.",
    en: "Singles or doubles, book a slot with a partner at your level.",
  },
  "sports.tennis.format": { fr: "Simple & double · Courts ext.", en: "Singles & doubles · Outdoor" },
  "sports.players": { fr: "joueurs dans la démo", en: "players in the demo" },
  "sports.filterCta": { fr: "Filtrer les parcs", en: "Filter parks" },

  // Parks & Partners Explorer
  "parks.eyebrow": {
    fr: "Terrains & partenaires à Montréal",
    en: "Courts & partners in Montreal",
  },
  "parks.title": { fr: "Les parcs", en: "The parks" },
  "parks.subtitle": {
    fr: "6 parcs de Montréal intégrés dans la démo. Filtre par sport, quartier, créneau ou niveau pour repérer ton terrain.",
    en: "6 Montreal parks integrated in the demo. Filter by sport, neighbourhood, schedule or skill level to spot your court.",
  },
  "parks.filter.sport": { fr: "Sport", en: "Sport" },
  "parks.filter.allSports": { fr: "Tous", en: "All" },
  "parks.filter.neighbourhood": { fr: "Quartier", en: "Neighbourhood" },
  "parks.filter.allNeighbourhoods": {
    fr: "Tous les quartiers",
    en: "All neighbourhoods",
  },
  "parks.filter.availability": { fr: "Disponibilité", en: "Availability" },
  "parks.filter.allSlots": { fr: "Tous créneaux", en: "Any time" },
  "parks.filter.level": { fr: "Niveau", en: "Skill level" },
  "parks.filter.allLevels": { fr: "Tous niveaux", en: "All levels" },
  "parks.slot.evenings": { fr: "Soirs (sem.)", en: "Weeknights" },
  "parks.slot.weekends": { fr: "Week-end", en: "Weekends" },
  "parks.level.beginner": { fr: "Débutant", en: "Beginner" },
  "parks.level.intermediate": { fr: "Intermédiaire", en: "Intermediate" },
  "parks.level.competitive": { fr: "Compétitif", en: "Competitive" },
  "parks.results.single": { fr: "1 parc affiché", en: "1 park shown" },
  "parks.results.plural": { fr: "parcs affichés", en: "parks shown" },
  "parks.results.of": { fr: "sur 6", en: "of 6" },
  "parks.reset": { fr: "Réinitialiser", en: "Reset filters" },
  "parks.empty.title": {
    fr: "Aucun parc ne correspond à cette combinaison.",
    en: "No park matches this combination.",
  },
  "parks.empty.desc": {
    fr: "Essaie d'élargir le quartier, le créneau ou le niveau pour voir les 6 parcs disponibles.",
    en: "Try broadening the neighbourhood, time slot or level to view the 6 available parks.",
  },
  "parks.card.availability": { fr: "Créneaux", en: "Availability" },
  "parks.card.levels": { fr: "Niveaux", en: "Levels" },
  "parks.card.metro": { fr: "Métro", en: "Metro" },
  "parks.card.cta": { fr: "Rejoindre un pod", en: "Join a pod" },
  "parks.pool.label": {
    fr: "Partenaires dans la démo",
    en: "Demo partner pool",
  },

  // Why
  "why.eyebrow": { fr: "Conçu pour jouer plus", en: "Built to play more" },
  "why.title": { fr: "Pourquoi Rallyo", en: "Why Rallyo" },
  "why.1.title": {
    fr: "Pas besoin de connaître 10 personnes",
    en: "No need to know 10 people",
  },
  "why.1.desc": {
    fr: "Tu t'inscris seul, Rallyo te trouve un groupe. Plus besoin de spammer tes contacts pour remplir un terrain.",
    en: "Sign up solo, Rallyo finds you a group. No more spamming your contacts to fill a court.",
  },
  "why.2.title": { fr: "Niveau homogène", en: "Fair matchups" },
  "why.2.desc": {
    fr: "L'algorithme matche par niveau. Fini les parties déséquilibrées où tu touches pas le ballon.",
    en: "The algorithm matches by skill level. No more lopsided games where you barely touch the ball.",
  },
  "why.3.title": {
    fr: "Gratuit pour les étudiants",
    en: "Free for students",
  },
  "why.3.desc": {
    fr: "Rallyo est un projet étudiant. Pas d'abonnement, pas de frais cachés.",
    en: "Rallyo is a student project. No subscription, no hidden fees.",
  },

  // CTA
  "cta.eyebrow": {
    fr: "6 parcs · 18 étudiants · Gratuit",
    en: "6 parks · 18 students · Free",
  },
  "cta.title": {
    fr: "Prêt à jouer cette semaine ?",
    en: "Ready to play this week?",
  },
  "cta.subtitle": {
    fr: "Teste le matching sur la démo interactive ou explore le code source du MVP 54H Start-Up.",
    en: "Try the matching flow in the interactive demo or browse the 54H Start-Up MVP source code.",
  },
  "cta.button": { fr: "Essayer la démo", en: "Try the demo" },
  "cta.secondary": { fr: "Voir le code", en: "View the code" },

  // Footer
  "footer.tagline": {
    fr: "Projet étudiant — HEC Montréal",
    en: "Student project — HEC Montréal",
  },
  "footer.demo": { fr: "Démo", en: "Demo" },
  "footer.made": { fr: "Fait à Montréal", en: "Made in Montreal" },
  "footer.stats": {
    fr: "6 parcs · 18 étudiants · Montréal",
    en: "6 parks · 18 students · Montreal",
  },
} as const;

export type TranslationKey = keyof typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TranslationKey): string => translations[key]?.[lang] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
