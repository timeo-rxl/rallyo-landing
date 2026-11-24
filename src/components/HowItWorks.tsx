import { useI18n } from "../i18n";
import { IconProfile, IconMatch, IconPlay } from "./Icons";

const steps = [
  { icon: IconProfile, titleKey: "how.step1.title", descKey: "how.step1.desc" },
  { icon: IconMatch, titleKey: "how.step2.title", descKey: "how.step2.desc" },
  { icon: IconPlay, titleKey: "how.step3.title", descKey: "how.step3.desc" },
] as const;

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy text-center">
          {t("how.title")}
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy/5 text-navy mb-5">
                  <span className="text-xl font-bold mr-1">{i + 1}</span>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy">{t(step.titleKey as any)}</h3>
                <p className="mt-2 text-ink/65 leading-relaxed">{t(step.descKey as any)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
