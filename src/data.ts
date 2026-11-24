export const LINKS = {
  demo: "https://rallyo-montreal.lovable.app",
  github: "https://github.com/timeo-rxl/rallyo-nexus-mvp",
  linkedin: "https://www.linkedin.com/in/tim%C3%A9o-rouxel",
} as const;

export type Sport = "soccer" | "basketball" | "tennis";

export interface Field {
  id: string;
  name: string;
  neighbourhood: string;
  sports: Sport[];
}

/** Real data from the Rallyo repo — 6 parks, exact names */
export const FIELDS: Field[] = [
  { id: "lafontaine", name: "Parc La Fontaine", neighbourhood: "Plateau-Mont-Royal", sports: ["tennis", "soccer"] },
  { id: "jeannemance", name: "Parc Jeanne-Mance", neighbourhood: "Plateau-Mont-Royal", sports: ["tennis", "soccer", "basketball"] },
  { id: "jarry", name: "Parc Jarry", neighbourhood: "Villeray", sports: ["tennis", "soccer"] },
  { id: "maisonneuve", name: "Parc Maisonneuve", neighbourhood: "Rosemont", sports: ["soccer", "tennis"] },
  { id: "angrignon", name: "Parc Angrignon", neighbourhood: "Verdun", sports: ["soccer", "basketball"] },
  { id: "ahuntsic", name: "Parc Ahuntsic", neighbourhood: "Ahuntsic", sports: ["soccer", "basketball"] },
];

/** Player counts per sport from the 18-student demo dataset */
export const SPORT_PLAYER_COUNT: Record<Sport, number> = {
  soccer: 8,
  basketball: 5,
  tennis: 5,
};
