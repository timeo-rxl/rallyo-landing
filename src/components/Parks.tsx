import { useMemo, useState } from "react";
import { useI18n, type TranslationKey } from "../i18n";
import {
  FIELDS,
  LINKS,
  NEIGHBOURHOODS,
  SPORT_PLAYER_COUNT,
  TOTAL_DEMO_PLAYERS,
  type AvailabilitySlot,
  type SkillLevel,
  type Sport,
} from "../data";
import {
  IconArrowUpRight,
  IconBasketball,
  IconClock,
  IconMapPin,
  IconSignal,
  IconSoccer,
  IconTennis,
} from "./Icons";

interface ParksProps {
  selectedSport: Sport | "all";
  onSelectSport: (sport: Sport | "all") => void;
}

const sportMeta: Record<Sport, { label: string; icon: typeof IconSoccer }> = {
  soccer: { label: "Soccer", icon: IconSoccer },
  basketball: { label: "Basketball", icon: IconBasketball },
  tennis: { label: "Tennis", icon: IconTennis },
};

const slotKeys: Record<AvailabilitySlot, TranslationKey> = {
  evenings: "parks.slot.evenings",
  weekends: "parks.slot.weekends",
};

const levelKeys: Record<SkillLevel, TranslationKey> = {
  beginner: "parks.level.beginner",
  intermediate: "parks.level.intermediate",
  competitive: "parks.level.competitive",
};

const ALL_SPORTS: Sport[] = ["soccer", "basketball", "tennis"];
const ALL_SLOTS: AvailabilitySlot[] = ["evenings", "weekends"];
const ALL_LEVELS: SkillLevel[] = ["beginner", "intermediate", "competitive"];

export default function Parks({ selectedSport, onSelectSport }: ParksProps) {
  const { t } = useI18n();
  const [neighbourhood, setNeighbourhood] = useState<string>("all");
  const [slot, setSlot] = useState<AvailabilitySlot | "all">("all");
  const [level, setLevel] = useState<SkillLevel | "all">("all");

  const sportParkCounts = useMemo(
    () => ({
      soccer: FIELDS.filter((f) => f.sports.includes("soccer")).length,
      basketball: FIELDS.filter((f) => f.sports.includes("basketball")).length,
      tennis: FIELDS.filter((f) => f.sports.includes("tennis")).length,
    }),
    []
  );

  const filteredFields = useMemo(
    () =>
      FIELDS.filter((field) => {
        if (selectedSport !== "all" && !field.sports.includes(selectedSport)) {
          return false;
        }
        if (neighbourhood !== "all" && field.neighbourhood !== neighbourhood) {
          return false;
        }
        if (slot !== "all" && !field.availability.includes(slot)) {
          return false;
        }
        if (level !== "all" && !field.levels.includes(level)) {
          return false;
        }
        return true;
      }),
    [selectedSport, neighbourhood, slot, level]
  );

  const hasActiveFilters =
    selectedSport !== "all" ||
    neighbourhood !== "all" ||
    slot !== "all" ||
    level !== "all";

  const resetFilters = () => {
    onSelectSport("all");
    setNeighbourhood("all");
    setSlot("all");
    setLevel("all");
  };

  const resultsText =
    filteredFields.length === 1
      ? `${t("parks.results.single")} ${t("parks.results.of")}`
      : `${filteredFields.length} ${t("parks.results.plural")} ${t("parks.results.of")}`;

  return (
    <section
      id="parks"
      className="py-20 md:py-24 bg-subtle/75 border-y border-line"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header + Demo partner pool summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-clay">
              {t("parks.eyebrow")}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              {t("parks.title")}
            </h2>
            <p className="mt-3 text-base text-muted leading-relaxed">
              {t("parks.subtitle")}
            </p>
          </div>

          <div className="bg-surface border border-line rounded-xl px-4 py-3.5 sm:px-5 self-start lg:self-end w-full lg:w-auto">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                {t("parks.pool.label")}
              </span>
              <span className="font-mono text-xs font-semibold text-court">
                {TOTAL_DEMO_PLAYERS} total
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {ALL_SPORTS.map((sport) => {
                const { label, icon: Icon } = sportMeta[sport];
                const isSelected = selectedSport === sport;
                return (
                  <button
                    key={sport}
                    type="button"
                    onClick={() =>
                      onSelectSport(isSelected ? "all" : sport)
                    }
                    aria-pressed={isSelected}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold border transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-court text-white border-court"
                        : "bg-canvas text-ink border-line hover:border-court/50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{label}</span>
                    <span
                      className={`font-mono ${
                        isSelected ? "text-white/90" : "text-clay"
                      }`}
                    >
                      {SPORT_PLAYER_COUNT[sport]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick filters bar */}
        <div className="mt-8 bg-surface border border-line rounded-2xl p-4 sm:p-6">
          {/* Sport quick chips */}
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              {t("parks.filter.sport")}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onSelectSport("all")}
                aria-pressed={selectedSport === "all"}
                className={`min-h-[40px] px-3.5 py-2 rounded-btn text-sm font-semibold border transition-colors cursor-pointer ${
                  selectedSport === "all"
                    ? "bg-court text-white border-court"
                    : "bg-canvas text-ink border-line hover:border-court/50"
                }`}
              >
                {t("parks.filter.allSports")} ({FIELDS.length})
              </button>
              {ALL_SPORTS.map((sport) => {
                const { label, icon: Icon } = sportMeta[sport];
                const active = selectedSport === sport;
                return (
                  <button
                    key={sport}
                    type="button"
                    onClick={() => onSelectSport(sport)}
                    aria-pressed={active}
                    className={`min-h-[40px] inline-flex items-center gap-2 px-3.5 py-2 rounded-btn text-sm font-semibold border transition-colors cursor-pointer ${
                      active
                        ? "bg-court text-white border-court"
                        : "bg-canvas text-ink border-line hover:border-court/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>
                      {label} ({sportParkCounts[sport]})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary filters: neighbourhood, availability, skill level */}
          <div className="mt-5 pt-5 border-t border-line grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Neighbourhood select */}
            <div className="md:col-span-4 lg:col-span-3">
              <label
                htmlFor="filter-neighbourhood"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-muted"
              >
                {t("parks.filter.neighbourhood")}
              </label>
              <select
                id="filter-neighbourhood"
                value={neighbourhood}
                onChange={(e) => setNeighbourhood(e.target.value)}
                className="mt-2 w-full min-h-[40px] rounded-btn border border-line bg-canvas px-3 py-2 text-sm font-medium text-ink hover:border-court/50 transition-colors cursor-pointer"
              >
                <option value="all">{t("parks.filter.allNeighbourhoods")}</option>
                {NEIGHBOURHOODS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability chips */}
            <div className="md:col-span-4 lg:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                {t("parks.filter.availability")}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSlot("all")}
                  aria-pressed={slot === "all"}
                  className={`min-h-[38px] px-3 py-1.5 rounded-btn text-xs font-semibold border transition-colors cursor-pointer ${
                    slot === "all"
                      ? "bg-ink text-white border-ink"
                      : "bg-canvas text-ink border-line hover:border-ink/40"
                  }`}
                >
                  {t("parks.filter.allSlots")}
                </button>
                {ALL_SLOTS.map((s) => {
                  const active = slot === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      aria-pressed={active}
                      className={`min-h-[38px] px-3 py-1.5 rounded-btn text-xs font-semibold border transition-colors cursor-pointer ${
                        active
                          ? "bg-ink text-white border-ink"
                          : "bg-canvas text-ink border-line hover:border-ink/40"
                      }`}
                    >
                      {t(slotKeys[s])}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Level chips */}
            <div className="md:col-span-4 lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                {t("parks.filter.level")}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setLevel("all")}
                  aria-pressed={level === "all"}
                  className={`min-h-[38px] px-3 py-1.5 rounded-btn text-xs font-semibold border transition-colors cursor-pointer ${
                    level === "all"
                      ? "bg-clay text-white border-clay"
                      : "bg-canvas text-ink border-line hover:border-clay/50"
                  }`}
                >
                  {t("parks.filter.allLevels")}
                </button>
                {ALL_LEVELS.map((lv) => {
                  const active = level === lv;
                  return (
                    <button
                      key={lv}
                      type="button"
                      onClick={() => setLevel(lv)}
                      aria-pressed={active}
                      className={`min-h-[38px] px-3 py-1.5 rounded-btn text-xs font-semibold border transition-colors cursor-pointer ${
                        active
                          ? "bg-clay text-white border-clay"
                          : "bg-canvas text-ink border-line hover:border-clay/50"
                      }`}
                    >
                      {t(levelKeys[lv])}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live status + reset */}
          <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3 text-sm">
            <p role="status" aria-live="polite" className="font-medium text-ink">
              {resultsText}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-semibold text-clay hover:text-clay-hover underline underline-offset-4 cursor-pointer"
              >
                {t("parks.reset")}
              </button>
            )}
          </div>
        </div>

        {/* Filtered park cards or empty state */}
        {filteredFields.length === 0 ? (
          <div className="mt-8 bg-surface border border-line rounded-2xl p-8 sm:p-10 text-center">
            <p className="font-display text-xl font-bold text-ink">
              {t("parks.empty.title")}
            </p>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">
              {t("parks.empty.desc")}
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center justify-center bg-court hover:bg-court-hover text-white text-sm font-semibold px-5 py-2.5 rounded-btn transition-colors cursor-pointer"
            >
              {t("parks.reset")}
            </button>
          </div>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFields.map((field) => (
              <article
                key={field.id}
                className="bg-surface border border-line hover:border-court/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-colors"
              >
                <div>
                  {/* Neighbourhood + Metro */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono font-semibold uppercase tracking-wider text-clay">
                      {field.neighbourhood}
                    </span>
                    <span className="text-muted font-medium">
                      {t("parks.card.metro")} {field.transit}
                    </span>
                  </div>

                  {/* Park name */}
                  <h3 className="mt-2 font-display text-xl font-bold text-ink tracking-tight flex items-center gap-2">
                    <IconMapPin className="w-4 h-4 text-court flex-shrink-0" />
                    <span>{field.name}</span>
                  </h3>

                  {/* Sport tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {field.sports.map((sport) => {
                      const { label, icon: Icon } = sportMeta[sport];
                      const highlighted = selectedSport === sport;
                      return (
                        <span
                          key={sport}
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                            highlighted
                              ? "bg-court text-white border-court"
                              : "bg-court-soft text-court border-court/15"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{label}</span>
                        </span>
                      );
                    })}
                  </div>

                  {/* Availability + Skill levels */}
                  <dl className="mt-5 pt-4 border-t border-line space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <dt className="inline-flex items-center gap-1.5 text-muted font-medium flex-shrink-0">
                        <IconClock className="w-4 h-4 text-ink/70" />
                        <span>{t("parks.card.availability")}:</span>
                      </dt>
                      <dd className="text-ink font-medium">
                        {field.availability
                          .map((s) => t(slotKeys[s]))
                          .join(" · ")}
                      </dd>
                    </div>
                    <div className="flex items-start gap-2">
                      <dt className="inline-flex items-center gap-1.5 text-muted font-medium flex-shrink-0">
                        <IconSignal className="w-4 h-4 text-ink/70" />
                        <span>{t("parks.card.levels")}:</span>
                      </dt>
                      <dd className="text-ink font-medium">
                        {field.levels.map((lv) => t(levelKeys[lv])).join(" · ")}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Action link */}
                <div className="mt-5 pt-3.5 border-t border-line">
                  <a
                    href={LINKS.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-court hover:text-court-hover transition-colors cursor-pointer"
                  >
                    <span>{t("parks.card.cta")}</span>
                    <IconArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
