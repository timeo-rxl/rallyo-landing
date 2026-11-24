import { useI18n } from "../i18n";
import { FIELDS } from "../data";
import { IconMapPin } from "./Icons";

const sportLabel: Record<string, string> = {
  soccer: "Soccer",
  basketball: "Basketball",
  tennis: "Tennis",
};

export default function Parks() {
  const { t } = useI18n();

  return (
    <section id="parks" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy text-center">
          {t("parks.title")}
        </h2>
        <p className="mt-3 text-center text-ink/60">{t("parks.subtitle")}</p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FIELDS.map((field) => (
            <div
              key={field.id}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-ink/5"
            >
              <div className="flex items-start gap-3">
                <IconMapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-bold text-navy">{field.name}</h3>
                  <p className="text-sm text-ink/50 mt-0.5">{field.neighbourhood}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {field.sports.map((sport) => (
                  <span
                    key={sport}
                    className="text-xs font-medium bg-navy/5 text-navy px-2.5 py-1 rounded-full"
                  >
                    {sportLabel[sport]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
