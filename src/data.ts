export const LINKS = {
  demo: "https://rallyo-montreal.lovable.app",
  github: "https://github.com/timeo-rxl/rallyo-nexus-mvp",
  linkedin: "https://www.linkedin.com/in/tim%C3%A9o-rouxel",
} as const;

export type Sport = "soccer" | "basketball" | "tennis";
export type AvailabilitySlot = "evenings" | "weekends";
export type SkillLevel = "beginner" | "intermediate" | "competitive";

export interface Field {
  id: string;
  name: string;
  neighbourhood: string;
  sports: Sport[];
  availability: AvailabilitySlot[];
  levels: SkillLevel[];
  transit: string;
}

/** Real data from the Rallyo repo — 6 parks, exact names & neighbourhoods */
export const FIELDS: Field[] = [
  {
    id: "lafontaine",
    name: "Parc La Fontaine",
    neighbourhood: "Plateau-Mont-Royal",
    sports: ["tennis", "soccer"],
    availability: ["evenings", "weekends"],
    levels: ["beginner", "intermediate", "competitive"],
    transit: "Sherbrooke",
  },
  {
    id: "jeannemance",
    name: "Parc Jeanne-Mance",
    neighbourhood: "Plateau-Mont-Royal",
    sports: ["tennis", "soccer", "basketball"],
    availability: ["evenings", "weekends"],
    levels: ["beginner", "intermediate", "competitive"],
    transit: "Place-des-Arts",
  },
  {
    id: "jarry",
    name: "Parc Jarry",
    neighbourhood: "Villeray",
    sports: ["tennis", "soccer"],
    availability: ["evenings", "weekends"],
    levels: ["intermediate", "competitive"],
    transit: "De Castelnau",
  },
  {
    id: "maisonneuve",
    name: "Parc Maisonneuve",
    neighbourhood: "Rosemont",
    sports: ["soccer", "tennis"],
    availability: ["weekends", "evenings"],
    levels: ["beginner", "intermediate"],
    transit: "Pie-IX",
  },
  {
    id: "angrignon",
    name: "Parc Angrignon",
    neighbourhood: "Verdun",
    sports: ["soccer", "basketball"],
    availability: ["weekends"],
    levels: ["beginner", "intermediate"],
    transit: "Angrignon",
  },
  {
    id: "ahuntsic",
    name: "Parc Ahuntsic",
    neighbourhood: "Ahuntsic",
    sports: ["soccer", "basketball"],
    availability: ["evenings", "weekends"],
    levels: ["beginner", "intermediate", "competitive"],
    transit: "Henri-Bourassa",
  },
];

/** Player counts per sport from the 18-student demo dataset */
export const SPORT_PLAYER_COUNT: Record<Sport, number> = {
  soccer: 8,
  basketball: 5,
  tennis: 5,
};

export const TOTAL_DEMO_PLAYERS =
  SPORT_PLAYER_COUNT.soccer +
  SPORT_PLAYER_COUNT.basketball +
  SPORT_PLAYER_COUNT.tennis;

export const NEIGHBOURHOODS = Array.from(
  new Set(FIELDS.map((field) => field.neighbourhood))
);
