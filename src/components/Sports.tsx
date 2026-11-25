import { useI18n, type TranslationKey } from "../i18n";
import {
  SPORT_PLAYER_COUNT,
  TOTAL_DEMO_PLAYERS,
  type Sport,
} from "../data";
import {
  IconArrowRight,
  IconBasketball,
  IconSoccer,
  IconTennis,
} from "./Icons";

interface SportsProps {
  onSelectSport: (sport: Sport) => void;
}

const sports: {
  key: Sport;
  label: string;
  image: string;
  descKey: TranslationKey;
  formatKey: TranslationKey;
  icon: typeof IconSoccer;
  accentBar: string;
}[] = [
  {
    key: "soccer",
    label: "Soccer",
    image: "/images/sport-soccer.jpg",
    descKey: "sports.soccer.desc",
    formatKey: "sports.soccer.format",
    icon: IconSoccer,
    accentBar: "bg-court",
  },
  {
    key: "basketball",
    label: "Basketball",
    image: "/images/sport-basketball.jpg",
    descKey: "sports.basketball.desc",
    formatKey: "sports.basketball.format",
    icon: IconBasketball,
    accentBar: "bg-clay",
  },
  {
    key: "tennis",
    label: "Tennis",
    image: "/images/sport-tennis.jpg",
    descKey: "sports.tennis.desc",
    formatKey: "sports.tennis.format",
    icon: IconTennis,
    accentBar: "bg-court",
  },
];

export default function Sports({ onSelectSport }: SportsProps) {
  const { t } = useI18n();

  return (
    <section id="sports" className="py-20 md:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-clay">
              {t("sports.eyebrow")}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              {t("sports.title")}
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-muted leading-relaxed">
            {t("sports.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {sports.map(
            ({ key, label, image, descKey, formatKey, icon: Icon, accentBar }) => {
              const count = SPORT_PLAYER_COUNT[key];
              const pct = Math.round((count / TOTAL_DEMO_PLAYERS) * 100);

              return (
                <article
                  key={key}
                  className="group bg-surface border border-line hover:border-court/45 rounded-2xl overflow-hidden flex flex-col transition-colors"
                >
                  <div className="aspect-[3/2] overflow-hidden bg-subtle">
                    <img
                      src={image}
                      alt={label}
                      width={1264}
                      height={848}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover motion-safe:group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 text-ink">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-subtle text-court">
                          <Icon className="w-4 h-4" />
                        </span>
                        <h3 className="font-display text-xl font-bold tracking-tight">
                          {label}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-semibold text-ink">
                        {count}/{TOTAL_DEMO_PLAYERS}
                      </span>
                    </div>

                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-clay font-medium">
                      {t(formatKey)}
                    </p>

                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {t(descKey)}
                    </p>

                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between text-xs font-semibold text-ink">
                        <span>
                          {count} {t("sports.players")}
                        </span>
                        <span className="font-mono text-muted">{pct}%</span>
                      </div>
                      <div
                        className="mt-2 h-1.5 w-full rounded-full bg-subtle overflow-hidden"
                        aria-hidden="true"
                      >
                        <div
                          className={`h-full rounded-full ${accentBar}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectSport(key)}
                        className="mt-5 w-full inline-flex items-center justify-between px-4 py-2.5 rounded-btn border border-line bg-canvas hover:bg-court-soft hover:border-court/40 text-sm font-semibold text-ink hover:text-court transition-colors cursor-pointer"
                      >
                        <span>
                          {t("sports.filterCta")} · {label}
                        </span>
                        <IconArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
