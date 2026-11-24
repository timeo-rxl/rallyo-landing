import { useI18n } from "../i18n";
import { SPORT_PLAYER_COUNT, type Sport } from "../data";

const sports: { key: Sport; image: string; descKey: string }[] = [
  { key: "soccer", image: "/images/sport-soccer.jpg", descKey: "sports.soccer.desc" },
  { key: "basketball", image: "/images/sport-basketball.jpg", descKey: "sports.basketball.desc" },
  { key: "tennis", image: "/images/sport-tennis.jpg", descKey: "sports.tennis.desc" },
];

const labels: Record<Sport, string> = {
  soccer: "Soccer",
  basketball: "Basketball",
  tennis: "Tennis",
};

export default function Sports() {
  const { t } = useI18n();

  return (
    <section id="sports" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy text-center">
          {t("sports.title")}
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {sports.map(({ key, image, descKey }) => (
            <div key={key} className="rounded-2xl overflow-hidden bg-cream shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={image}
                  alt={labels[key]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-navy">{labels[key]}</h3>
                <p className="mt-2 text-ink/65 text-sm leading-relaxed">{t(descKey as any)}</p>
                <p className="mt-3 text-sm font-semibold text-accent">
                  {SPORT_PLAYER_COUNT[key]} {t("sports.players")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
