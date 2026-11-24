import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

const translations = {
  // Nav
  "nav.sports": { fr: "Sports", en: "Sports" },
  "nav.how": { fr: "Comment ça marche", en: "How it works" },
  "nav.parks": { fr: "Parcs", en: "Parks" },
  "nav.demo": { fr: "Voir la démo", en: "Try the demo" },

  // Hero
  "hero.title": { fr: "Trouve ta gang.\nJoue cette semaine.", en: "Find your crew.\nPlay this week." },
  "hero.subtitle": {
    fr: "Rallyo matche les étudiants de Montréal pour jouer au soccer, basketball et tennis — selon ton niveau, tes disponibilités et ton parc.",
    en: "Rallyo matches Montreal students to play soccer, basketball and tennis — based on your skill level, schedule and local park.",
  },
  "hero.cta.demo": { fr: "Essayer la démo", en: "Try the demo" },
  "hero.cta.code": { fr: "Voir le code", en: "View the code" },

  // Facts
  "fact.sports": { fr: "3 sports", en: "3 sports" },
  "fact.parks": { fr: "6 parcs à Montréal", en: "6 parks in Montreal" },
  "fact.competition": { fr: "3e au 54H Start-Up", en: "3rd at 54H Start-Up" },

  // How it works
  "how.title": { fr: "Comment ça marche", en: "How it works" },
  "how.step1.title": { fr: "Crée ton profil", en: "Create your profile" },
  "how.step1.desc": { fr: "Choisis ton sport, ton niveau et tes disponibilités.", en: "Pick your sport, skill level and availability." },
  "how.step2.title": { fr: "On te matche", en: "Get matched" },
  "how.step2.desc": { fr: "L'algorithme te place dans un pod près de chez toi, avec des joueurs de ton niveau.", en: "The algorithm puts you in a pod near you, with players at your level." },
  "how.step3.title": { fr: "Tu joues, chaque semaine", en: "Play every week" },
  "how.step3.desc": { fr: "Retrouve ton pod au parc. Pas besoin d'organiser quoi que ce soit.", en: "Meet your pod at the park. No organizing needed." },

  // Sports
  "sports.title": { fr: "Les sports", en: "The sports" },
  "sports.soccer.desc": { fr: "Le sport le plus populaire sur Rallyo. Matchs 5 contre 5 dans les parcs de Montréal.", en: "The most popular sport on Rallyo. 5-a-side matches in Montreal parks." },
  "sports.basketball.desc": { fr: "Demi-terrains, pick-up games, tous les niveaux.", en: "Half-courts, pick-up games, all skill levels." },
  "sports.tennis.desc": { fr: "Simple ou double, réserve ton créneau avec un partenaire de ton niveau.", en: "Singles or doubles, book a slot with a partner at your level." },
  "sports.players": { fr: "joueurs dans la démo", en: "players in the demo" },

  // Parks
  "parks.title": { fr: "Les parcs", en: "The parks" },
  "parks.subtitle": { fr: "6 parcs de Montréal, intégrés dans la démo.", en: "6 Montreal parks, integrated in the demo." },

  // Why
  "why.title": { fr: "Pourquoi Rallyo", en: "Why Rallyo" },
  "why.1.title": { fr: "Pas besoin de connaître 10 personnes", en: "No need to know 10 people" },
  "why.1.desc": {
    fr: "Tu t'inscris seul, Rallyo te trouve un groupe. Plus besoin de spammer tes contacts pour remplir un terrain.",
    en: "Sign up solo, Rallyo finds you a group. No more spamming your contacts to fill a court.",
  },
  "why.2.title": { fr: "Niveau homogène", en: "Fair matchups" },
  "why.2.desc": {
    fr: "L'algorithme matche par niveau. Fini les parties déséquilibrées où tu touches pas le ballon.",
    en: "The algorithm matches by skill level. No more lopsided games where you barely touch the ball.",
  },
  "why.3.title": { fr: "Gratuit pour les étudiants", en: "Free for students" },
  "why.3.desc": {
    fr: "Rallyo est un projet étudiant. Pas d'abonnement, pas de frais cachés.",
    en: "Rallyo is a student project. No subscription, no hidden fees.",
  },

  // CTA
  "cta.title": { fr: "Prêt à jouer cette semaine ?", en: "Ready to play this week?" },
  "cta.button": { fr: "Essayer la démo", en: "Try the demo" },

  // Footer
  "footer.tagline": { fr: "Projet étudiant — HEC Montréal", en: "Student project — HEC Montréal" },
  "footer.demo": { fr: "Démo", en: "Demo" },
  "footer.made": { fr: "Fait à Montréal", en: "Made in Montreal" },
} as const;

type Key = keyof typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: Key) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = (key: Key): string => translations[key]?.[lang] ?? key;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
