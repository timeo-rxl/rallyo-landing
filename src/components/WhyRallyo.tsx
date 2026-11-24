import { useI18n } from "../i18n";
import { IconUsers, IconStar, IconCheck } from "./Icons";

const reasons = [
  { icon: IconUsers, titleKey: "why.1.title", descKey: "why.1.desc" },
  { icon: IconStar, titleKey: "why.2.title", descKey: "why.2.desc" },
  { icon: IconCheck, titleKey: "why.3.title", descKey: "why.3.desc" },
] as const;

export default function WhyRallyo() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy text-center">
          {t("why.title")}
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-14">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={i} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy">{t(reason.titleKey as any)}</h3>
                <p className="mt-2 text-ink/65 leading-relaxed">{t(reason.descKey as any)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
