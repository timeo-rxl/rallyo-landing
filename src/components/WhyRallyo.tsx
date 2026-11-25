import { useI18n, type TranslationKey } from "../i18n";
import { IconUsers, IconStar, IconCheck } from "./Icons";

const reasons: {
  icon: typeof IconUsers;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  accent: string;
  iconBg: string;
}[] = [
  {
    icon: IconUsers,
    titleKey: "why.1.title",
    descKey: "why.1.desc",
    accent: "border-t-court",
    iconBg: "bg-court-soft text-court",
  },
  {
    icon: IconStar,
    titleKey: "why.2.title",
    descKey: "why.2.desc",
    accent: "border-t-clay",
    iconBg: "bg-clay-soft text-clay-hover",
  },
  {
    icon: IconCheck,
    titleKey: "why.3.title",
    descKey: "why.3.desc",
    accent: "border-t-court",
    iconBg: "bg-court-soft text-court",
  },
];

export default function WhyRallyo() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-clay">
            {t("why.eyebrow")}
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            {t("why.title")}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, titleKey, descKey, accent, iconBg }) => (
            <div
              key={titleKey}
              className={`bg-surface border border-line border-t-2 ${accent} rounded-2xl p-6 sm:p-7`}
            >
              <div
                className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${iconBg}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink tracking-tight">
                {t(titleKey)}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-muted leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
